import React from 'react'
import IntakeForm from './IntakeForm/components/IntakeForm'
import './Intake.scss'

const Intake = props => {
  return (
    <div className="intake">
      <div className="top-header"></div>
      <IntakeForm />
    </div>
  )
}

export default Intake
