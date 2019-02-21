import React from 'react';
import { DynamicFormContainer } from 'components/DynamicForm';
import CitationsQA from './Citations.data';
import './Citations.scss';
class Citations extends React.Component {
  render() {
    return (
      <section className='citations-container'>
        <div className='citations-title'>Citations</div>
        <DynamicFormContainer questions={CitationsQA} />
      </section>
    )
  }
}

export default Citations;