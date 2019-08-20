import React from 'react'
import { Field } from 'formik'
import { CheckBoxField } from '../Form/shared'
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
        name: 'agreement_voluntary',
        label: 'I am taking part of this program voluntarily',
        value: false,
      },
    ],
  },
  {
    component: CheckBoxField,
    disclaimer: '',
    agreement_inputs: [
      {
        name: 'agreement_at_risk',
        label: 'I am currently homeless or at risk of homelessness',
        value: false,
      },
    ],
  },
  {
    component: CheckBoxField,
    disclaimer: 'I understand that',
    style: 'list',
    agreement_inputs: [
      {
        name: 'agreement_obligations',
        label:
          'in order to take part of this program, I will need to complete X obligations',
        value: false,
      },
      {
        name: 'agreement_infractions',
        label:
          'Only infractions are eligible to be expunged and that misdemeanors and felonies are not eligible to be expunged through this program ',

        value: false,
      },
      {
        name: 'agreement_warrants',
        label:
          'Any active warrants in my name will block any expungement that I could have obtained through the program',

        value: false,
      },
    ],
  },
  {
    component: CheckBoxField,
    disclaimer: 'I also understand that',
    style: 'list',
    agreement_inputs: [
      {
        name: 'agreement_court_form',
        label:
          'This is not a court form, and that I cannot bring this form to court for any proceedings I have been asked to appear to',
        value: false,
      },
      {
        name: 'agreement_progress',
        label:
          "This program can take up to 3 or 4 months to take effect, and that I can check up on my cases's progress at anytime by contacting xxxxxxxxx",
        value: false,
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
        name: 'phone',
        label: 'phone',
        value: false,
      },
      {
        name: 'email',
        label: 'email',
        value: false,
      },
    ],
  },
  {
    component: CheckBoxField,
    disclaimer: '🔥🔥🔥 Urgency',
    agreement_inputs: [
      {
        name: 'urgent',
        label: 'Is there an urgent rush?',
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
