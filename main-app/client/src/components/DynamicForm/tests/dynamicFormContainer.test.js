import React from "react";
import DynamicFormContainer from "../components/DynamicFormContainer";
import { mount } from "enzyme";
import { question_set_1 } from "./mockQA";
import { SubmitBtnState } from "../utilities/types";

let initialData = {
  first_name: "Los Angeles Name"
}
let initialDataValidation = {
  first_name_is_valid: true
}

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
  let df_formData, df_initialValidation;
  let renderedComponent;
  beforeEach(() => {
    df_formData = { ...formData };
    df_initialValidation = { ...validation };
    renderedComponent = mount(
      <DynamicFormContainer questions={question_set_1} editableMode={true} />
    );
  });
  it("initialize form_data state on mount", () => {
    expect(renderedComponent.state("form_data")).toEqual(df_formData);
  });
  it("initialize fields_is_valid state on mount", () => {
    expect(renderedComponent.state("fields_is_valid")).toEqual(
      df_initialValidation
    );
  });
  it("initialize questions state on mount", () => {
    expect(renderedComponent.state("questions")).toEqual(question_set_1);
  });
  it("initialize with editable mode", () => {
    expect(renderedComponent.state("editableMode")).toEqual(true);
  });
});

describe("initialize Dynamic Form component with exiting initialData", () => {
  let df_formData, df_initialData, df_initialValidation ;
  let renderedComponent;
  beforeEach(() => {
    df_formData = { ...formData };
    df_initialData = { ...initialData };
    df_initialValidation = { ...validation };
    renderedComponent = mount(
      <DynamicFormContainer 
        questions={question_set_1} 
        initialData={df_initialData} 
      />
    );
  });
  it("initialize form_data if there is initialData", () => {
    expect(renderedComponent.props().initialData).toEqual(df_initialData);
  });
  it("initialize form_data if there is initialData", () => {
    expect(renderedComponent.state("form_data")).toEqual({...df_formData, ...df_initialData});
  });
  it("initialize form_data validation if there is initialData", () => {
    expect(renderedComponent.state("fields_is_valid")).toEqual({...df_initialValidation, ...initialDataValidation });
  });
});

describe("saves form state to local storage", () => {
  
})