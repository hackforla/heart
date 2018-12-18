import React from "react";
import questionComponents from "./QuestionComponents";

const dynamicFormMaker = (
  questions,
  form_data,
  onFormChange,
  customComponents,
) => questions.map(
  (question) => {
    const {
      text,
      subtext,
      input_type,
      field_name,
      style_name
    } = question;

    const components = customComponents
      ? { ...questionComponents, ...customComponents }
      : questionComponents;
  
    if (input_type === "hidden") return null;

    const QuestionComponent = ["email", "url", "text", "date"].includes(input_type)
      ? components.text
      : components[input_type];

    return (
      <div key={"question_" + field_name} className={`form-QA ${style_name}`}>
        <label className="form-question">
          {text}
        </label>
        {subtext ? <div className="form-subtext">{subtext}</div> : null}
        {QuestionComponent(question, onFormChange, form_data)}
      </div>
    );
  },
);

export {
  dynamicFormMaker,
  questionComponents,
};
