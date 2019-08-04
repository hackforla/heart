import React from 'react'
import '../Form/IntakeForm/style/FormGroup.scss'
import { YesNoField, FormSummary } from '../Form/shared'
import PropTypes from 'prop-types'
import _ from 'lodash'

const form_group_boxes = [
  {
    box_name: 'Health Resources',
    box_inputs: [
      { name: 'Mental Health Provider (DMH, etc)' },
      { name: 'Physical Health Provider' },
      { name: 'Dental Health Provider' },
      { name: 'Substance Abuse Resources' },
      { name: 'Vaccination (HEP A or FLU)' },
      { name: 'STI/STD Testing' },
      { name: 'First Aid Training (CPR)' },
    ],
  },
  {
    box_name: 'Housing',
    box_inputs: [
      { name: 'Housing Case Management' },
      { name: 'Emergency Housing' },
      { name: 'Safe Park LA' },
      { name: "Veteran's Housing Resources" },
      { name: 'Housing Survey (Vi-SPDAT)' },
    ],
  },
  {
    box_name: 'Government Resources',
    box_inputs: [
      { name: 'Financial Assistance (TANF, FR, SSI/SSDI)' },
      { name: 'CalFresh' },
      { name: 'Medi-Cal Insurance' },
      { name: 'Department of Consumer & Business Affairs' },
      { name: 'Voter Registration' },
      { name: 'Birth Certificate' },
      { name: "Veteran's Services (Dept of VA)" },
      { name: 'Library Card' },
      { name: 'DMV (ID Cards)' },
      { name: 'CAPP (Parking Ticket Assistance)' },
    ],
  },
  {
    box_name: 'Hygiene & Wellness',
    box_inputs: [
      { name: 'Haircut' },
      { name: 'Shower or Hygiene Kit' },
      { name: 'Health Screening' },
    ],
  },
  {
    box_name: 'Communication Resources',
    box_inputs: [
      { name: 'Got a Cell Phone' },
      { name: 'Opened an Email Account' },
    ],
  },
  {
    box_name: 'Legal Resources',
    box_inputs: [
      { name: 'Public Defender' },
      { name: 'Legal Aid' },
      { name: 'Medication' },
      { name: 'Domestic Violence Resources' },
      { name: 'Child Support Resources' },
      { name: "Victim's Assistance Program" },
      { name: 'Probation Resources' },
    ],
  },
  {
    box_name: 'Employment Training',
    box_inputs: [{ name: 'Job Training(EDD, DPSS, LACC, AMerica Works, etc)' }],
  },
  {
    box_name: 'Family Services',
    box_inputs: [{ name: 'Family Source Center Services' }],
  },
  {
    box_name: '🔥🔥🔥 Urgency',
    box_inputs: [{ name: 'Is there an urgent rush?' }],
  },
]

const OnsiteObligationsFormGroup = props => {
  return (
    <div className="form-inputs">
      <label className="label">
        Which onsite obligations did the individual complete?
      </label>
      {form_group_boxes.map((boxes, index) => renderBoxes(index, boxes, props))}
      <FormSummary
        values={confirmedPrograms(props.values)}
        title="Programs Participated In:"
      />
    </div>
  )
}

const renderBoxes = (index, boxes, props) => {
  return (
    <div key={index} className="box-form">
      <div className="title">{boxes.box_name}</div>
      {boxes.box_inputs.map((box_input, index) => (
        <YesNoField key={index} box_input={box_input} {...props} />
      ))}
    </div>
  )
}

const confirmedPrograms = values => {
  return _.keys(
    _.pickBy(values, (value, key) => {
      return value === true
    })
  )
}

YesNoField.propTypes = {
  props: PropTypes.object,
}

export default OnsiteObligationsFormGroup
