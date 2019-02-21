import React from "react";

import { CheckboxComponent } from "./checkbox";

export default (
  { field_name, options, minlength, maxlength },
  onFormChange,
  form_data,
) => {
  // TODO: refactor to map over options directly
  const firstHalf = [];
  const secondHalf = [];
  for (var i = 0; i < (options).length; i++) {
    if (i < (options).length / 2) {
      firstHalf.push(options[i]);
    } else {
      secondHalf.push(options[i]);
    }
  }
  
  return (
    <div className="checkbox-2-column-container">
      <div className="checkbox-column-1">
        {
          firstHalf.map(
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
              />
            ),
          )
        }
      </div>
      <div className="checkbox-column-2">
        {
          secondHalf.map(
            (answer, index) => (
              <CheckboxComponent
                key={field_name + '_' + (index + firstHalf.length)}
                answer={answer}
                field_name={field_name}
                index={(index + firstHalf.length)}
                onFormChange={onFormChange}
                form_data={form_data}
                minlength={minlength}
                maxlength={maxlength}
              />
            ),
          )
        }
      </div>
    </div>
  )
}