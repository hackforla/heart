import React from 'react';

const CheckboxComponent = (
  {
    answer,
    field_name,
    index,
    onFormChange,
    form_data,
    minlength,
    maxlength,
    editable
  },
) => {
  const value = form_data[field_name];
  return (
    <div key={'checkbox-answer_' + field_name + '_' + index} className="checkbox-container">
      <label className="form-checkbox-answer" htmlFor={field_name + '_' + index}>
        {answer.text || answer}
        <input
          type="checkbox"
          name={field_name}
          value={answer.value || answer}
          id={field_name + '_' + index}
          checked={value.indexOf(answer.value || answer) !== -1} // is answer in answers array
          disabled={!editable}
          onChange={
            ({ currentTarget }) => onFormChange(
              { currentTarget, min: minlength, max: maxlength },
            )
          }
        />
        <span className="checkmark" />
      </label>
    </div>
  );
}

export { CheckboxComponent };

// maps over options array creating Checkbox components
export default (
  { field_name, options, minlength, maxlength },
  onFormChange,
  form_data,
  editable,
) => options.map(
  (answer, index) => (
    <CheckboxComponent
      key={field_name + '_' + index}
      answer={answer}
      field_name={field_name}
      index={index}
      onFormChange={onFormChange}
      form_data={form_data}
      minlength={minlength}
      maxlength={maxlength}
      editable={editable}
    />
  ),
);
