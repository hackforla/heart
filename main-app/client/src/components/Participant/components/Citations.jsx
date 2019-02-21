import React from 'react';
import { DynamicFormContainer } from 'components/DynamicForm';
import CitationsQA from './Citations.data';
class Citations extends React.Component {
  render() {
    return (
      <DynamicFormContainer questions={CitationsQA} />
    )
  }
}

export default Citations;