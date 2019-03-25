import React from "react";
import DynamicFormContainer from "../components/DynamicFormContainer";
import { mount } from "enzyme";
import { question_set_1 } from "./mockQA";
import { SubmitBtnState } from "../utilities/types";

let formData = {
  clinic_attended: "",
  first_name: "",
  known_as: "",
  email: "",
  age: "18-24",
  ethnicity: "Hispanic/Latino",
  violations: [],
  location: []
};

let validation = {
  clinic_attended_is_valid: true,
  first_name_is_valid: false, // required
  known_as_is_valid: true,
  email_is_valid: false, // required
  age_is_valid: true,
  ethnicity_is_valid: true,
  violations_is_valid: true,
  location_is_valid: false // required
};

describe("initialize Dynamic Form component", () => {
  let initialFormData, initialValidation;
  let renderedComponent;
  beforeEach(() => {
    initialFormData = { ...formData };
    initialValidation = { ...validation };
    renderedComponent = mount(
      <DynamicFormContainer questions={question_set_1} />
    );
  });
  it("initialize form_data state on mount", () => {
    expect(renderedComponent.state("form_data")).toEqual(initialFormData);
  });
  it("initialize fields_is_valid state on mount", () => {
    expect(renderedComponent.state("fields_is_valid")).toEqual(
      initialValidation
    );
  });
  it("initialize questions state on mount", () => {
    expect(renderedComponent.state("questions")).toEqual(question_set_1);
  });
});
