import React from "react";

const RadioComponent = (
  { answer, field_name, index, onFormChange, form_data, editable },
) => {
  const value = form_data[field_name];
  return (
    <div key={'radio-answer_' + field_name + '_' + index} className="radio-container">
      <label className="form-answer" htmlFor={field_name + '_' + index}>
        {answer.text}
        <input
          type="radio"
          name={field_name}
          id={field_name + '_' + index}
          value={answer.value}
          disabled={!editable}
          checked={value === answer.value}
          onChange={({ currentTarget }) => onFormChange({ currentTarget })}
        />
        <span className="radio-checkmark" />
      </label>
    </div>
  );
}

export { RadioComponent };

// maps over options to create Radio Components
export default (
  { field_name, options },
  onFormChange,
  form_data,
  editable,
) => options.map(
  (answer, index) => (
    <RadioComponent
      key={field_name + '_' + index}
      answer={answer}
      field_name={field_name}
      index={index}
      onFormChange={onFormChange}
      form_data={form_data}
      editable={editable}
    />
  ),
);
