import React from "react";
import PropTypes from "prop-types";
import { isEqual } from "lodash";

import { dynamicFormMaker } from "./DynamicFormMaker";
import { isFieldInvalid, isEmpty } from "./utilities";
// TODO: update DF repo new changes as of 11/6/18
/**
 * @prop {array} questions array of Question data objects for rendering
 * @prop {string} purpose Dynamic Form collection name (for form data persistence)
 * @prop {array} questions array of Dynamic Question objects
 * 
 * -- OPTIONAL --
 * @prop {object} initialData CAUTION: very delicate - must match expected shape EXACTLY. Provide initial form_data. 
 * @prop {object} hiddenData values for 'hidden' input types -> { field_name: value }
 * @prop {bool} persistence controls storing form data in LS onFormChange
 * @prop {func} onSubmit wrapper callback for handling submit behavior
 * @prop {func} onValidate callback for field level control of 'disabled' flag. expects boolean return
 * @prop {func} onInputChange observation-only handler with args (field_name, value, form_data)
 * @prop {func} customComponents custom input_type components (merged with defaults, precedence to custom components)
 */
class DynamicFormContainer extends React.Component {
  state = {
    form_data: {}, // { field_name: user response(s) }
    questions: [], // detailed in prop types
    disabled: true, // overall DF Container submit control
    field_errors: {}, // individual field errors
  }

  componentDidMount() {
    const { initialData, purpose, questions } = this.props;
    const state = { questions };

    const persistence = window.localStorage.getItem(purpose);
    if (persistence) {
      const persisted_state = this._getStateFromPersistence(state, persistence, initialData);
      return this.setState(persisted_state);
    }
    
    // get initial default values
    state.form_data = this._getDefaultFormData(questions);
    // merge with initialData if available
    if (initialData) state.form_data = { ...state.form_data, ...initialData };

    // validate all answers (defaults and any provided by initialData)
    // uses onValidate() or isFieldInvalid() on each question / form_data field value
    const { disabled, field_errors } = this._validateAllAnswers(state.form_data, questions);
    state.disabled = disabled;
    state.field_errors = field_errors;

    return this.setState(state);
  }

  componentDidUpdate(prevProps) {
    // when the form_data is updated from onFormChange
    const { form_data, field_errors, disabled } = this.state;
    // or it receives new questions (for multi-question sets)
    const { purpose, persistence, questions } = this.props;

    // persistence in LS
    if (persistence) {
      const persistedData = JSON.stringify({ form_data, field_errors, disabled });
      localStorage.setItem(purpose, persistedData);
    }

    // update form_data when a new question set is introduced
    // handles cases where multiple question sets may be introduced by
    // the DF Wrapper managing the DF Container
    if (!isEqual(questions, prevProps.questions)) { // only update if question set changes, performance of deep equal?
      const new_form_data = this._handleNewQuestions(questions, form_data);
      this.setState({ form_data: new_form_data, questions });
    }

    // field_errors: { field_name: boolean } -> true: should disable, false: valid
    const should_disable = Object.values(field_errors).some(disabled => disabled === true);
    if (this.state.disabled !== should_disable) { // only update if the two values differ
      this.setState({ disabled: should_disable });
    }
  }


  _getStateFromPersistence = (base_state, persistence, initialData) => {
    const persisted_data  = JSON.parse(persistence); // { disabled, field_errors, form_data }
    const state = { ...base_state, ...persisted_data };
    if (initialData) state.form_data = { ...state.form_data, ...initialData };

    return state;
  }

  /**
   * Purpose: validates every answer in form_data
   * 
   * iterates over Question set
   * calls the external onValidate() handler or default isFieldInvalid()
   *   use Question and form_data values to validate and update field_errors{}
   * returns
   *  'disabled' boolean (overall control of DF Container submit)
   *  'field_errors' object for individual field error tracking
   * 
   */
  _validateAllAnswers(form_data, questions) {
    const { onValidate } = this.props;
    const validateField = onValidate || isFieldInvalid;

    return questions.reduce(
      (result, question) => {
        const { input_type, field_name, min, max } = question;

        const field_error = validateField(input_type, form_data[field_name], min, max);
        result.field_errors[field_name] = field_error;
        if (result.disabled !== field_error) result.disabled = field_error;

        return result;
      },
      { disabled: true, field_errors: {} },
    ); 
  }

  /**
   * Purpose: maintains state.form_data fields required for the current question set
   * 
   * merges any existing responses from the previous question set if the same
   * fields exist in the new question set
   * 
   * destroys any existing responses whose fields are not part of the new question set
   */
  _handleNewQuestions = (questions, form_data) => {
    const current_fields = Object.keys(form_data);
    const new_fields = questions.map(question => question.field_name);

    const overlapping_fields = current_fields.filter(
      field_name => new_fields.includes(field_name),
    );

    const new_questions_form_data = this._getDefaultFormData(questions);

    const overlapping_form_data = overlapping_fields.reduce(
      (overlapping_data, field_name) => {
        overlapping_data[field_name] = form_data[field_name];
        return overlapping_data;
      },
      {},
    );

    return { ...new_questions_form_data, ...overlapping_form_data };
  }

  /**
   * Iterates over the form_data and checks for empty answers
   * used to control the 'disabled' flag
   */
  _hasEmptyAnswers = (form_data) => {
    return Object.keys(form_data)
      .some(field_name => {
        const value = form_data[field_name];
        /*
          if non-numeric returns if value is empty
          - if value is empty (true) then the loop breaks -> disabled true
          if numeric value returns false to continue looping
          - any numeric value is consideed non-empty
        */
        return typeof value !== 'number' && isEmpty(value);
      });
  }

  _isMultiAnswer = (input_type) => {
    // add other multiple answer types here
    return [
      'checkbox',
      'checkbox_2_column',
      'skill_setter',
    ].includes(input_type)
  }

  /**
   * maps 'questions' to provide 'form_data' field defaults
   * 
   * - handles single and multi-answer defaults
   * - injects 'hiddenData' values
   */
  _getDefaultFormData = (questions) => questions.reduce(
    (
      form_data,
      { field_name, input_type, options, },
    ) => {
      // creates an array for multiple answers
      if (this._isMultiAnswer(input_type)) form_data[field_name] = [];

      else if (input_type === 'dropdown') {
        const first_option = options[0];
        // options can be a single value or an object of text / value
        // to support difference between user text and stored value
        const value = first_option.value || first_option;
        form_data[field_name] = value;
      }
      
      else form_data[field_name] = '';

      // insert hidden field values from hiddenData
      // passed as hiddenData and / or queryString prop of <DynamicForm>
      if (input_type === 'hidden') {
        const { hiddenData } = this.props;
        if (!hiddenData || !hiddenData[field_name]) {
          console.error(`Missing hiddenData for: ${field_name}`);
          return form_data;
        }

        const hiddenValue = hiddenData[field_name];
        form_data[field_name] = hiddenValue;
      }
      return form_data;
    },
    {},
  );

  /**
   * toggles values in multi-answer arrays
   * - limits based on maxChoices if defined
   */
  _toggleValueInArray = (array, value, maxChoices) => {
    const clone = array.slice(0);
    const index = clone.indexOf(value);

    if (index !== -1) clone.splice(index, 1);
    else {
      // limit max selected choices if defined
      if (maxChoices) array.length < maxChoices && clone.push(value);
      // if undefined behave normally
      else clone.push(value);
    }

    return clone;
  }

  /**
   * updates 'form_data' in state
   * - calls onValidate(input_type, value, minlength, maxlength)
   *   - true: invalid field -> disable submit
   *   - false: valid field
   * - calls onInputChange(field_name, value, form_data)
   *   - observation only
   * - toggles or sets response value for 'question'
   */
  _handleInputChange = ({ currentTarget, min, max }) => {
    const { name, value, type } = currentTarget;

    const form_data = { ...this.state.form_data };
    const field_errors = { ...this.state.field_errors };

    const { onInputChange, onValidate } = this.props;

    // provides observational window into form data
    // no control over behavior at this time
    onInputChange && onInputChange(name, value, form_data);

    form_data[name] = type === 'checkbox'
      ? this._toggleValueInArray(form_data[name], value, max)
      : form_data[name] = value;
    
    const validateField = onValidate || isFieldInvalid;
    field_errors[name] = validateField(type, form_data[name], min, max);

    this.setState({ form_data, field_errors });
  }

  /**
   * calls DynamicFormMaker()
   * - creates form Question components for each 'question'
   */
  renderInputs = () => dynamicFormMaker(
    this.state.questions,
    this.state.form_data,
    this._handleInputChange,
    this.props.customComponents,
  );

  /**
   * renders Submit button
   * - controlled by 'disabled' flag in state
   * - if disabled -> grey, click disabled, and 'Incomplete'
   * - if not disabled -> green, click enabled, and 'Submit'
   */
  renderSubmit = () => {
    const { form_data, disabled } = this.state;
    const { onSubmit } = this.props;

    return (
      <React.Fragment>
        <hr className="form-hline" />
        <input
          className={disabled ? "form-btn--disabled" : "form-btn"}
          type="submit"
          value={disabled ? "Incomplete" : "Submit"}
          disabled={disabled}
          onClick={
            (e) => {
              e.preventDefault();
              onSubmit(form_data);
            }
          }
        />
      </React.Fragment>
    );
  };

  render() {
    return (
      <form>
        {this.renderInputs()}
        {this.renderSubmit()}
      </form>
    );
  }
};

const questionShape = {
  id: PropTypes.string, // mongo oID of Dynamic Question
  text: PropTypes.string, // user facing text
  subtext: PropTypes.oneOfType([ // user facing extra info
    PropTypes.string, // text
    PropTypes.element, // <a> link
  ]),
  input_type: PropTypes.string, // html input type
  field_name: PropTypes.string, // form field name
  options: PropTypes.arrayOf( // selection options
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
      // { text, value } option for different user facing text and stored value
      PropTypes.shape({ 
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      }),
    ]),
  ),
  minlength: PropTypes.number, // min length or number of choices
  maxlength: PropTypes.number, // max length or number of choices
};

DynamicFormContainer.propTypes = {
  purpose: PropTypes.string, // used for labeling persisted form data
  questions: PropTypes.arrayOf(PropTypes.shape(questionShape)),
  customComponents: PropTypes.func, // custom input_type components
  hiddenData: PropTypes.object, // values for hidden fields
  initialData: PropTypes.object, // initial form_data - USE SPARINGLY, very delicate
  persistence: PropTypes.bool, // enable LS form data persistence
  onSubmit: PropTypes.func, // optional handler for form submission
  onValidate: PropTypes.func, // optional handler for field validation
  onInputChange: PropTypes.func, // optional observation-only handler for viewing form data on change
};

export default DynamicFormContainer;
