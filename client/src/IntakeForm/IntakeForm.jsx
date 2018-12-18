import * as React from 'react';
import IntakeFormQA from './IntakeForm.data';
import DynamicFormContainer from './../DynamicForm/components/DynamicFormContainer';
import './IntakeForm.scss';

class IntakeForm extends React.Component {
  render() {
    return (
      <section className="intake-form-container">
        <h1 className="intake-form-title">Intake Form</h1>
        <DynamicFormContainer 
          questions={IntakeFormQA}
        />
      </section>
    )
  }
}

export default IntakeForm;