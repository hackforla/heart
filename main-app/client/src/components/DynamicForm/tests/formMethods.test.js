import {
  _getDefaultFormData,
  _validateAllAnswers
} from "../components/formMethods";
import { question_set_1 } from "./mockQA";
import { ValidationType } from "../components/types";

describe("Dynamic Form Methods", () => {
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
      clinic_attended: ValidationType.VALID,
      first_name: ValidationType.INVALID,
      known_as: ValidationType.VALID,
      email: ValidationType.INVALID,
      age: ValidationType.VALID,
      ethnicity: ValidationType.VALID,
      violations: ValidationType.VALID
    };
  });

  it("creates default form data", () => {
    expect(_getDefaultFormData(question_set_1)).toEqual(initialFormData);
  });

  it("Validates: On initial form, field errors are set to false and disabled state is true", () => {
    expect(_validateAllAnswers(initialFormData, question_set_1, 0)).toEqual({
      field_has_errors: initialValidation,
      disabled: false
    });
  });

  it("Validates: On input change, field errors are changed appropriately ", () => {
    initialFormData.clinic_attended = "testing"; // optional
    expect(_validateAllAnswers(initialFormData, question_set_1, 0)).toEqual({
      field_has_errors: initialValidation,
      disabled: false
    });
  });
  it("Validates: On input change, field errors are changed appropriately ", () => {
    initialFormData.first_name = "Frank"; // required
    initialValidation.first_name = ValidationType.VALID;
    expect(_validateAllAnswers(initialFormData, question_set_1, 0)).toEqual({
      field_has_errors: initialValidation,
      disabled: false
    });
  });
});
