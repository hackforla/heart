import {
  _getDefaultFormData,
  _validateAllAnswers,
  _determineSubmitBtnState
} from "../components/formMethods";
import { question_set_1 } from "./mockQA";
import { SubmitBtnState } from "../components/types";

describe("Dynamic Form Validation", () => {
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
      first_name_is_valid: false, // required
      known_as_is_valid: true,
      email_is_valid: false, // required
      age_is_valid: true,
      ethnicity_is_valid: true,
      violations_is_valid: true
    };
  });

  it("creates default form data", () => {
    expect(_getDefaultFormData(question_set_1)).toEqual(initialFormData);
  });

  it("Initial State", () => {
    expect(_validateAllAnswers(initialFormData, question_set_1)).toEqual({
      fields_is_valid: initialValidation
    });
  });

  it("Optional input change", () => {
    initialFormData.clinic_attended = "testing"; // optional
    expect(_validateAllAnswers(initialFormData, question_set_1)).toEqual({
      fields_is_valid: initialValidation
    });
  });

  it("Required input change", () => {
    initialFormData.first_name = "Frank"; // required
    initialValidation.first_name_is_valid = true;
    expect(_validateAllAnswers(initialFormData, question_set_1)).toEqual({
      fields_is_valid: initialValidation
    });
    expect(_determineSubmitBtnState(initialValidation)).toEqual(
      SubmitBtnState.DISABLED
    );
  });

  it("Incorrect input change of all required fields", () => {
    initialFormData.first_name = "Frank"; // required
    initialFormData.email_is_valid = "not_valid_email"; // required
    initialValidation.first_name_is_valid = true;
    expect(_validateAllAnswers(initialFormData, question_set_1)).toEqual({
      fields_is_valid: initialValidation
    });
    expect(_determineSubmitBtnState(initialValidation)).toEqual(
      SubmitBtnState.DISABLED
    );
  });

  it("Correct input change of all required fields", () => {
    initialFormData.first_name = "Frank"; // required
    initialFormData.email = "test@gmail.com"; // required

    initialValidation.first_name_is_valid = true;
    initialValidation.email_is_valid = true;

    expect(_validateAllAnswers(initialFormData, question_set_1)).toEqual({
      fields_is_valid: initialValidation
    });
    expect(_determineSubmitBtnState(initialValidation)).toEqual(
      SubmitBtnState.ENABLED
    );
  });
});
