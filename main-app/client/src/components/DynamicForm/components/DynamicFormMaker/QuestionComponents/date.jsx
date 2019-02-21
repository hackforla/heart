import React from "react";

export default (
  { input_type, field_name, minlength, maxlength },
  onFormChange,
  form_data,
) => (
  <input 
    type={input_type}
    name={field_name}
    value={form_data[field_name]}
    className="form-date"
    onChange={
      ({ currentTarget }) => onFormChange(
        { currentTarget, min: minlength, max: maxlength }
      )
    }
  />
);
