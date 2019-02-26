import React from 'react';
import { DynamicFormContainer } from 'components/DynamicForm';
import CitationsQA from './Citations.data';
import './Citations.scss';
class Citations extends React.Component {
  render() {
    return (
      <section className='citations-container'>
        <div className='citations-title'>Citations</div>
        <div className='citations-form'>
          <DynamicFormContainer questions={CitationsQA} />
        </div>
      </section>
    )
  }
}

export default Citations;