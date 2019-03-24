import {
  _getDefaultFormData,
  _validateAllAnswers
} from "../components/formMethods";
import { question_set_1 } from "./mockQA";

describe("Dynamic Form Methods: Regular Mode", () => {
  let initialFormData, initialValidation;
  beforeEach(() => {
    initialFormData = {
      clinic_attended: "",
      first_name: "",
      known_as: "",
      email: "",
      age: "18-24",
      ethnicity: "Hispanic/Latino",
      violations: []
    };

    initialValidation = {
      clinic_attended_is_valid: true,
      first_name_is_valid: false,
      known_as_is_valid: true,
      email_is_valid: false,
      age_is_valid: true,
      ethnicity_is_valid: true,
      violations_is_valid: true
    };
  });

  it("creates default form data", () => {
    expect(_getDefaultFormData(question_set_1)).toEqual(initialFormData);
  });

  it("Validates: On initial form, field errors are set to false and disabled state is true", () => {
    expect(_validateAllAnswers(initialFormData, question_set_1, 0)).toEqual({
      fields_is_valid: initialValidation
    });
  });

  it("Validates: On input change, field errors are changed appropriately ", () => {
    initialFormData.clinic_attended = "testing"; // optional
    expect(_validateAllAnswers(initialFormData, question_set_1, 0)).toEqual({
      fields_is_valid: initialValidation
    });
  });

  it("Validates: On input change, field errors are changed appropriately ", () => {
    initialFormData.first_name = "Frank"; // required
    initialValidation.first_name_is_valid = true;
    expect(_validateAllAnswers(initialFormData, question_set_1, 0)).toEqual({
      fields_is_valid: initialValidation
    });
  });

  it("Validates: On input change of all required fields, no errors and submit button is ok", () => {
    initialFormData.first_name = "Frank"; // required
    initialFormData.first_name = "Frank"; // required
    initialValidation.first_name_is_valid = true;
    expect(_validateAllAnswers(initialFormData, question_set_1, 0)).toEqual({
      fields_is_valid: initialValidation
    });
  });
});
