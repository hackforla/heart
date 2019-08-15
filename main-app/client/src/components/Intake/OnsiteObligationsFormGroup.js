import React from 'react'
import { Field } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
// import PropTypes from 'prop-types'
import _ from 'lodash'
import { CheckBoxField, FormSummary } from '../Form/shared'

const useStyles = makeStyles(() => ({
  label: {
    fontSize: '16px',
    color: '#4f4f4f',
    display: 'block',
    paddingBottom: '4px',
    textAlign: 'left',
  },
  formInput: {
    padding: '12px 0',
  },
}))

const obligationGroups = [
  {
    component: CheckBoxField,
    obligationGroupTitle: 'Health Resources',
    obligation: [
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
    component: CheckBoxField,
    obligationGroupTitle: 'Housing',
    obligation: [
      { name: 'Housing Case Management' },
      { name: 'Emergency Housing' },
      { name: 'Safe Park LA' },
      { name: "Veteran's Housing Resources" },
      { name: 'Housing Survey (Vi-SPDAT)' },
    ],
  },
  {
    component: CheckBoxField,
    obligationGroupTitle: 'Government Resources',
    obligation: [
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
    component: CheckBoxField,
    obligationGroupTitle: 'Hygiene & Wellness',
    obligation: [
      { name: 'Haircut' },
      { name: 'Shower or Hygiene Kit' },
      { name: 'Health Screening' },
    ],
  },
  {
    component: CheckBoxField,
    obligationGroupTitle: 'Communication Resources',
    obligation: [
      { name: 'Got a Cell Phone' },
      { name: 'Opened an Email Account' },
    ],
  },
  {
    component: CheckBoxField,
    obligationGroupTitle: 'Legal Resources',
    obligation: [
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
    component: CheckBoxField,
    obligationGroupTitle: 'Employment Training',
    obligation: [{ name: 'Job Training(EDD, DPSS, LACC, America Works, etc)' }],
  },
  {
    component: CheckBoxField,
    obligationGroupTitle: 'Family Services',
    obligation: [{ name: 'Family Source Center Services' }],
  },
]

const OnsiteObligationsFormGroup = props => {
  const classes = useStyles()
  return (
    <div className={classes.formInput}>
      <label className={classes.label}>
        Which onsite obligations did the individual complete?
      </label>
      {obligationGroups.map((boxes, index) =>
        renderObligations(index, boxes, props, classes)
      )}
      <FormSummary
        values={confirmedPrograms(props.values)}
        title="Programs Participated In:"
      />
    </div>
  )
}

const renderObligations = (index, obligationGroups, props, classes) => {
  return (
    <div key={index} className="box-form">
      <h4>{obligationGroups.obligationGroupTitle}</h4>
      {obligationGroups.obligation.map((obligation, index) => (
        <Field
          key={index}
          component={obligationGroups.component}
          name={obligation.name}
          value={obligation.value}
          onChange={props.setFieldValue}
          values={props.values}
          className={classes.style}
        />
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

export default OnsiteObligationsFormGroup
