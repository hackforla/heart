import { isFieldInvalid, isEmpty } from "./utilities";
import { ValidationType } from "./types";

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
export function _validateAllAnswers(
  form_data,
  questions,
  recursionIdx,
  onValidate
) {
  const validateField = onValidate || isFieldInvalid;
  let currIdx = recursionIdx ? recursionIdx : 0;
  return questions.reduce(
    (result, question) => {
      const { input_type, field_name, min, max, optional } = question;

      if (field_name === undefined) {
        // no field name (can be category or row)
        // pass nested questions into _getDefaultFormData
        let { category_contents, row } = question;
        let nestedValidationResults = {};
        if (row) {
          nestedValidationResults = _validateAllAnswers(
            form_data,
            row,
            currIdx + 1,
            onValidate
          );
        }
        if (category_contents) {
          nestedValidationResults = _validateAllAnswers(
            form_data,
            category_contents,
            currIdx + 1,
            onValidate
          );
        }
        let mergedFieldErrors = {
          ...result.field_has_errors,
          ...nestedValidationResults.field_has_errors
        };
        result.field_has_errors = mergedFieldErrors;
        return result;
      }

      const field_error = optional
        ? ValidationType.VALID
        : validateField(input_type, form_data[field_name], min, max, optional);

      let { field_has_errors, disabled } = result;
      field_has_errors[field_name] = field_error;
      if (disabled !== field_error) {
        disabled = field_error;
      }
      return result;
    },
    { field_has_errors: {}, disabled: false }
  );
}

/**
 * Iterates over the form_data and checks for empty answers
 * used to control the 'disabled' flag
 */
export const _hasEmptyAnswers = form_data => {
  return Object.keys(form_data).some(field_name => {
    console.log(form_data);
    const value = form_data[field_name];

    // if form_data is optional, return false
    // and continue looping
    if (form_data.optional) {
      return false;
    }
    /*
          if non-numeric returns if value is empty
          - if value is empty (true) then the loop breaks -> disabled true
          if numeric value returns false to continue looping
          - any numeric value is consideed non-empty
        */
    return typeof value !== "number" && isEmpty(value);
  });
};

export const _isMultiAnswer = input_type => {
  // add other multiple answer types here
  return ["checkbox", "dropdown-multi"].includes(input_type);
};

/**
 * maps 'questions' to provide 'form_data' field defaults
 *
 * - handles single and multi-answer defaults
 * - injects 'hiddenData' values
 */

export const _getDefaultFormData = questions => {
  return questions.reduce(
    (form_data, { field_name, input_type, options }, idx) => {
      if (field_name === undefined) {
        // no field name is category or row.
        // pass nested questions into _getDefaultFormData
        let { category_contents, row } = questions[idx];
        if (row) {
          return { ...form_data, ..._getDefaultFormData(row) };
        }
        if (category_contents) {
          return {
            ...form_data,
            ..._getDefaultFormData(category_contents)
          };
        }
      }

      // creates an array for multiple answers
      if (_isMultiAnswer(input_type)) form_data[field_name] = [];
      else if (input_type === "dropdown") {
        const first_option = options[0];
        // options can be a single value or an object of text / value
        // to support difference between user text and stored value
        const value = first_option.value || first_option.text || first_option;
        form_data[field_name] = value;
      } else form_data[field_name] = "";

      // insert hidden field values from hiddenData
      // passed as hiddenData and / or queryString prop of <DynamicForm>
      if (input_type === "hidden") {
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
    {}
  );
};

/**
 * Purpose: maintains state.form_data fields required for the current question set
 *
 * merges any existing responses from the previous question set if the same
 * fields exist in the new question set
 *
 * destroys any existing responses whose fields are not part of the new question set
 */
export const _handleNewQuestions = (questions, form_data) => {
  const current_fields = Object.keys(form_data);
  const new_fields = questions.map(question => question.field_name);

  const overlapping_fields = current_fields.filter(field_name =>
    new_fields.includes(field_name)
  );

  const new_questions_form_data = _getDefaultFormData(questions);

  const overlapping_form_data = overlapping_fields.reduce(
    (overlapping_data, field_name) => {
      overlapping_data[field_name] = form_data[field_name];
      return overlapping_data;
    },
    {}
  );

  return { ...new_questions_form_data, ...overlapping_form_data };
};

/**
 * toggles values in multi-answer arrays
 * - limits based on maxChoices if defined
 */
export const _toggleValueInArray = (array, value, maxChoices) => {
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
};

export const _searchForDataBy = (field_type, name, questions) => {
  return questions.some(item => {
    if (item.row || item.category_contents) {
      return _searchForDataBy(
        field_type,
        name,
        item.row || item.category_contents
      );
    }
    if (item[field_type] === name) {
      return item;
    }
  });
};

export const _getStateFromPersistence = (
  base_state,
  persistence,
  initialData
) => {
  const persisted_data = JSON.parse(persistence); // { disabled, field_has_errors, form_data }
  const state = { ...base_state, ...persisted_data };
  if (initialData) state.form_data = { ...state.form_data, ...initialData };

  return state;
};
