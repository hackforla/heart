import React from "react";

export default (
  { field_name, minlength, maxlength },
  onFormChange,
  form_data,
) => (
  <textarea
    type="text"
    name={field_name}
    value={form_data[field_name]}
    className="form-text-area"
    minLength={minlength}
    maxLength={maxlength}
    onChange={
      ({ currentTarget }) => onFormChange(
        { currentTarget, min: minlength, max: maxlength }
      )
    }
  />
);