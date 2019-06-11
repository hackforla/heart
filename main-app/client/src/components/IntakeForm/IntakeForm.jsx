import * as React from 'react';
import IntakeFormQA from './IntakeForm.data';
import { DynamicFormContainer } from 'components/DynamicForm';
import './IntakeForm.scss';

class IntakeForm extends React.Component {
  render() {
    return (
      <div className="intake-form-container">
        <section className="intake-form">
          <h1 className="intake-form-title">Intake Form</h1>
          <DynamicFormContainer 
            questions={IntakeFormQA}
            editable={true}
          />
        </section>
      </div>
    )
  }
}

export default IntakeForm;