import { isFieldValid } from "./validation";
import { SubmitBtnState } from "./types";

export function _isFormValid(fields_is_valid) {
  for (let field_name in fields_is_valid) {
    if (fields_is_valid[field_name] === false) {
      return false;
    }
  }
  return true;
}

export function _determineSubmitBtnState(fields_is_valid) {
  return _isFormValid(fields_is_valid)
    ? SubmitBtnState.ENABLED
    : SubmitBtnState.DISABLED;
}

export function _validateAllAnswers(form_data, questions, onValidate) {
  const validateField = onValidate || isFieldValid;
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
            onValidate
          );
        }
        if (category_contents) {
          nestedValidationResults = _validateAllAnswers(
            form_data,
            category_contents,
            onValidate
          );
        }
        let mergedFieldErrors = {
          ...result.fields_is_valid,
          ...nestedValidationResults.fields_is_valid
        };
        result.fields_is_valid = mergedFieldErrors;
        return result;
      }

      const field_is_valid = optional
        ? true
        : validateField(input_type, form_data[field_name], min, max);

      let { fields_is_valid } = result;
      fields_is_valid[`${field_name}_is_valid`] = field_is_valid;
      return result;
    },
    { fields_is_valid: {} }
  );
}

export const _isMultiAnswer = input_type => {
  // add other multiple answer types here
  return ["checkbox", "dropdown-multi"].includes(input_type);
};

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

export const _toggleValueInArray = (array, value, maxChoices) => {
  const clone = array.slice(0);
  const index = clone.indexOf(value);

  console.log({ array, value });

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
    return false;
  });
};