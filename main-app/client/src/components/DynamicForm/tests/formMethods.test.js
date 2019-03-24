import { _getDefaultFormData } from "../components/formMethods";
import { question_set_1 } from "./mockQA";

it("creates default form data", () => {
  expect(_getDefaultFormData(question_set_1)).toEqual({
    clinic_attended: "",
    first_name: "",
    known_as: "",
    email: "",
    age: "18-24",
    ethnicity: "Hispanic/Latino",
    violations: []
  });
});
