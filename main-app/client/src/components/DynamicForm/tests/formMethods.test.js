import {
  _getDefaultFormData,
  _validateAllAnswers
} from "../components/formMethods";
import { question_set_1 } from "./mockQA";
import { ValidationType } from "../components/types";

const initialFormData = {
  clinic_attended: "",
  first_name: "",
  known_as: "",
  email: "",
  age: "18-24",
  ethnicity: "Hispanic/Latino",
  violations: []
};

const initialValidation = {
  clinic_attended: ValidationType.OPTIONAL,
  first_name: ValidationType.REQUIRED,
  known_as: ValidationType.OPTIONAL,
  email: ValidationType.REQUIRED,
  age: ValidationType.OPTIONAL,
  ethnicity: ValidationType.OPTIONAL,
  violations: ValidationType.OPTIONAL
};

it("creates default form data", () => {
  expect(_getDefaultFormData(question_set_1)).toEqual(initialFormData);
});

it("Validates: On initial form, field errors are set to false and disabled state is true", () => {
  expect(_validateAllAnswers(initialFormData, question_set_1, 0)).toEqual({
    field_errors: initialValidation,
    disabled: false
  });
});
