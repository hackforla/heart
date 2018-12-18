import React from "react";
import Select from "react-select";

const dropdown = (
  { field_name, input_type, options },
  onFormChange,
  form_data,
) => {
  // map to React-Select option format
  const mappedOptions = options.map(({ text, value }) => ({ label: text, value }));
  const value = form_data[field_name];
  // React-Select wants {label, value} for value prop
  // have to find corresponding label for the chosen value to render properly
  const option = mappedOptions.find(el => el.value === value);
  const label = option ? option.label : '';
  return (
    <Select
      escapeClearsValue={true}
      isClearable={true}
      isSearchable={true}
      name={field_name}
      options={mappedOptions}
      value={{ label, value }}
      onChange={
        (target) => {
          // React-Select handles event targets internally
          // shape currentTarget from their format
          let value;
          if (!target || Array.isArray(target)) value = '';
          else value = target.value;
          const currentTarget = {
            value,
            name: field_name,
            type: input_type,
          };

          return onFormChange({ currentTarget })
        }
      }
    />
  );
};

export default dropdown;