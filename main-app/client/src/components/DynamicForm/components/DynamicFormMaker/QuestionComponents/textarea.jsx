import React from "react";

export default (
  { field_name, minlength, maxlength, placeholder },
  onFormChange,
  form_data,
  editable,
) => (
  <textarea
    type="text"
    name={field_name}
    value={form_data[field_name]}
    className="form-text-area"
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