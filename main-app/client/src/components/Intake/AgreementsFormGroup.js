import React from 'react'
import { Field } from 'formik'
import { YesField, CheckBoxField } from '../Form/shared'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  agreementsWrapper: {
    borderBottom: '1px solid black',
  },
  agreements: {
    padding: '20px 0 10px 0',
    maxWidth: '700px',
    fontSize: '16px',
  },
  redStar: {
    color: 'red',
  },
}))

const agreement_groups = [
  {
    component: CheckBoxField,
    disclaimer: '',
    agreement_inputs: [
      {
        name: 'I am taking part of this program voluntarily',
        value: 'voluntarily',
      },
    ],
  },
  {
    component: CheckBoxField,
    disclaimer: '',
    agreement_inputs: [
      {
        name: 'I am currently homeless or at risk of homelessness',
        value: 'homeless',
      },
    ],
  },
  {
    component: CheckBoxField,
    disclaimer: 'I understand that',
    style: 'list',
    agreement_inputs: [
      {
        name:
          'in order to take part of this program, I will need to complete X obligations',
        value: 'complete_obligations',
      },
      {
        name:
          'Only infractions are eligible to be expunged and that misdemeanors and felonies are not eligible to be expunged through this program ',
        value: 'infractions_1',
      },
      {
        name:
          'Any active warrants in my name will block any expungement that I could have obtained through the program',
        value: 'active_warrants_1',
      },
    ],
  },
  {
    component: CheckBoxField,
    disclaimer: 'I also understand that',
    style: 'list',
    agreement_inputs: [
      {
        name:
          'This is not a court form, and that I cannot bring this form to court for any proceedings I have been asked to appear to',
        value: 'not_court_form',
      },
      {
        name:
          "This program can take up to 3 or 4 months to take effect, and that I can check up on my cases's progress at anytime by contacting xxxxxxxxx",
        value: 'program_can_take_3_months',
      },
    ],
  },
  {
    component: CheckBoxField,
    star: true,
    disclaimer:
      "I give the HEART team permission to follow up with me on my application's progress, the best way to contact me is",
    agreement_inputs: [
      {
        name: 'contact_by_phone',
        label: 'phone',
        value: false,
      },
      {
        name: 'contact_by_email',
        label: 'email',
        value: false,
      },
    ],
  },
]

const AgreementsFormGroup = props => {
  const classes = useStyles()
  return (
    <div className="agreements-form-group">
      <h4>
        Agreements<span className={classes.redStar}>*</span>
      </h4>
      {agreement_groups.map((agreements, index) =>
        renderAgreementFields(index, agreements, props, classes)
      )}
    </div>
  )
}

const renderAgreementFields = (index, agreements, props, classes) => {
  return (
    <div key={index} className={classes.agreementsWrapper}>
      <div className={classes.agreements}>
        <div className="disclaimer">
          {agreements.disclaimer}
          <span className={classes.redStar}>{agreements.star && '*'}</span>
        </div>
        {agreements.agreement_inputs.map((agreement_input, index) => (
          <Field
            key={index}
            component={agreements.component}
            name={agreement_input.name}
            value={agreement_input.value}
            onChange={props.setFieldValue}
            values={props.values}
            className={agreements.style}
            label={agreement_input.label}
          />
        ))}
      </div>
    </div>
  )
}

export default AgreementsFormGroup
