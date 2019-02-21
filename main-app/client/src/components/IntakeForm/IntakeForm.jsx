import * as React from 'react';
import IntakeFormQA from './IntakeForm.data';
import DynamicFormContainer from './../DynamicForm/components/DynamicFormContainer';
import './IntakeForm.scss';

class IntakeForm extends React.Component {
  render() {
    return (
      <div className="intake-form-container">
        <section className="intake-form">
          <h1 className="intake-form-title">Intake Form</h1>
          <DynamicFormContainer 
            questions={IntakeFormQA}
          />
        </section>
      </div>
    )
  }
}

export default IntakeForm;