import React from "react";
import Select from "react-select";

const dropdown = (
  { field_name, input_type, options, placeholder, isMulti, customStyles },
  onFormChange,
  form_data,
  editable
) => {
  // map to React-Select option format
  const mappedOptions = options.map(({ text, value }) => ({
    label: text,
    value: value ? value : text
  }));
  const value = form_data[field_name];
  // React-Select wants {label, value} for value prop
  // have to find corresponding label for the chosen value to render properly
  let option = mappedOptions.find(el => el.value === value);
  let label = option ? option.label : "";
  let isMultiValues = [];
  if (isMulti) {
    value.forEach(elem => {
      isMultiValues.push({ label: elem, value: elem });
    });
  }
  const changeHandler = target => {
    let value = !target ? "" : target.value;
    if (isMulti) {
      value = target.map(elem => {
        return elem.value;
      });
    }
    const currentTarget = {
      value,
      name: field_name,
      type: input_type
    };
    return onFormChange({ currentTarget });
  };

  const changeHandlerForMulti = (e, valueToBeDeleted) => {
    e.preventDefault();
    for (var i = 0; i < isMultiValues.length; i++) {
      if (isMultiValues[i].value === valueToBeDeleted) {
        isMultiValues.splice(i, 1);
      }
    }
    return changeHandler(isMultiValues);
  };
  return (
    <>
      {isMulti && (
        <div className="dropdown--multiple-container">
          {isMultiValues.map((value, idx) => {
            return (
              <div key={idx} className="dropdown--multiple-value-container">
                <div className="dropdown--multiple-labels">{value.label}</div>
                {
                  !editable 
                  ? <div className="dropdown--disabled" /> 
                  : (
                    <button
                    onClick={e => changeHandlerForMulti(e, value.label)}
                    className="dropdown--multiple-btn"
                  >
                    X
                  </button>
                  )
                }
              </div>
            );
          })}
        </div>
      )}
      <Select
        styles={customStyles}
        placeholder={placeholder}
        escapeClearsValue={true}
        isClearable={true}
        isSearchable={true}
        name={field_name}
        options={mappedOptions}
        value={isMulti ? isMultiValues : { label, value }}
        classNamePrefix="react-dropdown"
        isMulti={isMulti}
        isDisabled={!editable}
        onChange={target => changeHandler(target)}
      />
    </>
  );
};

export default dropdown;
