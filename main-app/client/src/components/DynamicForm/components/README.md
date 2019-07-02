# DynamicFormContainer Options
### REQUIRED
 * `questions` {array} Array of Question / Answer data object
 * `onSubmit` {func} onSubmit wrapper callback for handling submit behavior
 * `editable` {bool} editable controls whether form is editable or non-editable

### OPTIONAL
 * `onDelete` {func} onDelete wrapper callback for handling deletion behavior
 * `onCancel` {func} onCancel wrapper callback for handling cancel behavior
 * `editable` {bool} editable controls whether form is editable or non-editable
 * `editableMode` {bool} editable controls whether form has edit mode

###  UNSTABLE / UNTESTED
 * `initialData` {object} initialData CAUTION: very delicate - must match expected shape EXACTLY. Provide initial form_data.
 * `Purpose` {string} Dynamic Form collection purpose name (for form data persistence)
 * `hiddenData` {object} hiddenData values for 'hidden' input types -> { field_name: value }
 * `persistence` {bool} persistence controls storing form data in LS onFormChange
 * `onValidate` {func} onValidate callback for whole form validation
 * `onInputChange` {func} onInputChange observation-only handler with args (field_name, value, form_data)
 * `customComponents` {func} customComponents custom input_type components (merged with defaults, precedence to custom components)

# Question/Answer Array Options
### Category Type
Categories will be rendered as a section in the form, with an optional Category name.
 * [Optional] `category_name` {string} Category name
 * [Optional] `category_contents` {array} Array of Question/Answer type or Row type

### Row Type
Rows will render it's nested contents as a single span
* [Optional] `row` {array} Array of Question/Answer types

### Question/Answer Type
Question/Answer objects are the basic building blocks
 * [Optional] `text` {string} Question text that is rendered
 * [Required] `input_type` {string} Input Type (see below)
 * [Required] `field_name` {string} Name of field to be saved
 * [Optional] `placeholder` {string} Placeholder answer
 * [Optional] `subtext` {string} Subtext rendered under the question text
 * [Optional] `optional` {bool} Validation boolean. If true, validaiton is skipped for the question. 
 * [Optional/Required] `options` {array} Array of Option Types. Required for dropdown, checkbox, and radio Input Types

### Input Type Options
Choose one: 
- text
- textarea
- dropdown
- checkbox
- radio
- date
- email
- password

### Option Type
 * [Required] `text` {string} Answer text that's rendered.
 * [Optional] `value` {string} Answer text that get's saved. If not provided, `text` is used for both text and value. 


# Quick Start
### 1 - Create your QA dataset
```
const IntakeFormQA = [
    {
        text: "Status",
        input_type: "dropdown",
        field_name: "status",
        placeholder: "Change Case Status To",
        optional: true,
        options: [
            { text: 'New Case' },
            { text: 'Obligation Form Completed' },
            { text: 'Waiting For Background Check' },
            { text: 'Attorney Review' },
            { text: 'Sent to Court' },
            { text: 'Received From Court' },
            { text: 'Sent to Participant' },
            { text: 'Closed' },
        ]
    },
    {
        text: "Background Check",
        input_type: "checkbox",
        field_name: "databases_checked",
        optional: true,
        options: [
            { text: 'CCHRS', value: 'CCHRS' },
            { text: 'W&W', value: 'W&W' },
            { text: 'DMV', value: 'DMV' },
            { text: 'TCIS', value: 'TCIS' },
        ]
    }
]
```

### 2 - Import DynamicFormContainer and pass in the questions and onSubmit function
```
import IntakeFormQA from './IntakeForm.data';
import { DynamicFormContainer } from 'components/DynamicForm';

class IntakeForm extends React.Component {
  render() {
    return (
      <div className="intake-form-container">
        <section className="intake-form">
          <h1 className="intake-form-title">Intake Form</h1>
          <DynamicFormContainer 
            questions={IntakeFormQA}
            onSubmit={this.onSubmit}
            editable={true}
          />
        </section>
      </div>
    )
  }
}
```
### 3 - For custom styling, wrap DynamicFormContainer in a className
```
.intake-form {
    // dynamic form styling changes
    .form-QA {
        // styles the entire form question/answer (QA) block
    }
    .form-question {
        // styles the form question of the QA block
    }
    .form-subtext {
        // styles the subtext of a question
    }
    .form-btn {
        // styles the submit button
    }
    .form-btn--disabled {
        // styles the disabled submit button
    }
    .form-answer {
        // styles the form answer text
    }
    .form-input {
        // styles the input box
    }
    .form-date {
        // styles the date input box
    }
    .form-text-area {
        // styles the textarea input box
    }
    .form-QA--category {
        // styles the category section
    }
    .form-QA--category--header {
        // styles the category header text
    }
    .form-QA--row {
        // styles the row block
    }

}
```
# Rendered Examples
### Category Example
![category img](https://i.ibb.co/6ZHptsD/Screen-Shot-2019-06-10-at-5-06-06-PM.png)
### Row Example
![row img](https://i.ibb.co/H7D2RYj/Screen-Shot-2019-06-10-at-5-04-59-PM.png)