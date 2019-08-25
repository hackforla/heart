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
      {
        label: 'Mental Health Provider (DMH, etc)',
        name: 'health_mental',
        value: false,
      },
      {
        label: 'Physical Health Provider',
        name: 'health_physical',
        value: false,
      },
      { label: 'Dental Health Provider', name: 'health_dental', value: false },
      {
        label: 'Substance Abuse Resources',
        name: 'health_substance_abuse',
        value: false,
      },
      {
        label: 'Vaccination (HEP A or FLU)',
        name: 'health_vaccination',
        value: false,
      },
      { label: 'STI/STD Testing', name: 'health_sti_std', value: false },
      {
        label: 'First Aid Training (CPR)',
        name: 'health_first_aid',
        value: false,
      },
    ],
  },
  {
    component: CheckBoxField,
    obligationGroupTitle: 'Housing',
    obligation: [
      {
        label: 'Housing Case Management',
        name: 'housing_care_management',
        value: false,
      },
      { label: 'Emergency Housing', name: 'housing_emergency', value: false },
      { label: 'Safe Park LA', name: 'housing_safeparkla', value: false },
      {
        label: "Veteran's Housing Resources",
        name: 'housing_veterans',
        value: false,
      },
      {
        label: 'Housing Survey (Vi-SPDAT)',
        name: 'housing_survey',
        value: false,
      },
    ],
  },
  {
    component: CheckBoxField,
    obligationGroupTitle: 'Government Resources',
    obligation: [
      {
        label: 'Financial Assistance (TANF, FR, SSI/SSDI)',
        name: 'government_fin_assistance',
        value: false,
      },
      { label: 'CalFresh', name: 'government_calfresh', value: false },
      {
        label: 'Medi-Cal Insurance',
        name: 'government_medi_cal',
        value: false,
      },
      {
        label: 'Department of Consumer & Business Affairs',
        name: 'government_debt_consumer',
        value: false,
      },
      { label: 'Voter Registration', name: 'government_voter', value: false },
      { label: 'Birth Certificate', name: 'government_birth', value: false },
      {
        label: "Veteran's Services (Dept of VA)",
        name: 'government_vet_services',
        value: false,
      },
      { label: 'Library Card', name: 'government_library', value: false },
      { label: 'DMV (ID Cards)', name: 'government_dmv', value: false },
      {
        label: 'CAPP (Parking Ticket Assistance)',
        name: 'government_capp',
        value: false,
      },
    ],
  },
  {
    component: CheckBoxField,
    obligationGroupTitle: 'Hygiene & Wellness',
    obligation: [
      { label: 'Haircut', name: 'hygiene_haircut', value: false },
      {
        label: 'Shower or Hygiene Kit',
        name: 'hygiene_shower_kit',
        value: false,
      },
      { label: 'Health Screening', name: 'hygiene_screening', value: false },
    ],
  },
  {
    component: CheckBoxField,
    obligationGroupTitle: 'Communication Resources',
    obligation: [
      { label: 'Got a Cell Phone', name: 'communication_cell', value: false },
      {
        label: 'Opened an Email Account',
        name: 'communication_email',
        value: false,
      },
    ],
  },
  {
    component: CheckBoxField,
    obligationGroupTitle: 'Legal Resources',
    obligation: [
      { label: 'Public Defender', name: 'legal_public_defender', value: false },
      { label: 'Legal Aid', name: 'legal_legal_aid', value: false },
      { label: 'Medication', name: 'legal_medication', value: false },
      {
        label: 'Domestic Violence Resources',
        name: 'legal_domestic',
        value: false,
      },
      {
        label: 'Child Support Resources',
        name: 'legal_child_support',
        value: false,
      },
      {
        label: "Victim's Assistance Program",
        name: 'legal_victim',
        value: false,
      },
      { label: 'Probation Resources', name: 'legal_probation', value: false },
    ],
  },
  {
    component: CheckBoxField,
    obligationGroupTitle: 'Employment Training',
    obligation: [
      {
        label: 'Job Training(EDD, DPSS, LACC, America Works, etc)',
        name: 'employment_training',
        value: false,
      },
    ],
  },
  {
    component: CheckBoxField,
    obligationGroupTitle: 'Family Services',
    obligation: [
      {
        label: 'Family Source Center Services',
        name: 'family_source_center',
        value: false,
      },
    ],
  },
]

const OnsiteObligationsFormGroup = props => {
  const classes = useStyles()
  return (
    <div className={classes.formInput}>
      <label className={classes.label}>
        Which onsite obligations did the individual complete? Check all that
        apply.
      </label>
      {obligationGroups.map((obligationGroups, index) =>
        renderObligations(index, obligationGroups, props, classes)
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
          label={obligation.label}
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
  console.log(values)
  return _.keys(
    _.pickBy(values, (value, key) => {
      return value === true
    })
  )
}

export default OnsiteObligationsFormGroup
