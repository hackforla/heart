import React from "react";
import questionComponents from "./QuestionComponents";

const dynamicFormMaker = (
  questions,
  form_data,
  onFormChange,
  customComponents,
) => questions.map(
  (question) => {
    return questionParser(question, form_data, onFormChange, customComponents)
  },
);

const questionParser = (object, form_data, onFormChange, customComponents) => {
  let {
    category_contents,
    category_name,
    row,
  } = object;

  if (object.category_contents && object.category_contents.length > 0) {
    return categoryMaker(category_contents, form_data, onFormChange, category_name);
  }

  if (object.row && object.row.length > 0) {
    return rowMaker(row, form_data, onFormChange, category_name);
  }
      
  return questionMaker(object, form_data, onFormChange, customComponents)
}

const categoryMaker = (category_contents, form_data, onFormChange, category_name, customComponents) => {
  return (
    <div className="form-QA--category">
      <div className="form-QA--category-header">{category_name}</div>
      {
        category_contents.map((question, idx) => {
          return questionParser(question, form_data, onFormChange, customComponents)
        })
      }
    </div>
  )
}

const rowMaker = (
  row,
  form_data,
  onFormChange,
  customComponents,
) => {
  return (
    <div className="form-QA--row">
      {
        row.map((question, idx) => {
          return questionMaker(question, form_data, onFormChange, customComponents)
        })
      }
    </div>
  )
}
const questionMaker = (
  question,
  form_data,
  onFormChange,
  customComponents,
) => {
  const {
    text,
    subtext,
    input_type,
    field_name,
    style_name,
    row,
  } = question;

  if (row) { return rowMaker(row, form_data, onFormChange, customComponents) }

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
}

export {
  dynamicFormMaker,
  questionComponents,
};
