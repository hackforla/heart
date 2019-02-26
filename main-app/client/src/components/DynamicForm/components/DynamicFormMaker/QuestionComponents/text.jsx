import React from "react";
// TODO: support 'date' type. confirm the format the date input returns
// matches what is expected on the backend
export default (
  { input_type, field_name, minlength, maxlength, placeholder },
  onFormChange,
  form_data,
  editable
) => (
  <input 
    type={input_type}
    name={field_name}
    value={form_data[field_name]}
    className={input_type === "date" ? "form-date" : "form-input"}
    minLength={minlength}
    maxLength={maxlength}
    placeholder={placeholder}
    disabled={!editable}
    onChange={
      ({ currentTarget }) => onFormChange(
        { currentTarget, min: minlength, max: maxlength }
      )
    }
  />
);
