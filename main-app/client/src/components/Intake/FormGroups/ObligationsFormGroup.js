import React from 'react'
import uuid from 'uuid'
import {
  makeStyles,
  Box,
  Typography,
  FormLabel,
  Container,
  Divider,
} from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import DoneIcon from '@material-ui/icons/Done'
import _ from 'lodash'
import FormSection from '../FormSection'
import QuestionCheckBox from '../QuestionCheckBox'
import { FormGroupRadio } from '../../ParticipantProfile/FormElements'

const useStyles = makeStyles(theme => ({
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
  box: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  checkBoxGroup: {
    paddingLeft: theme.spacing(2),
  },
  checkMark: {
    color: green[600],
    verticalAlign: 'middle',
    marginBottom: 8,
  },
}))

const obligations = {
  healthResources: [
    {
      label: 'Mental Health Provider (DMH, etc)',
      name: 'agreements_obligations.health_mental',
    },
    {
      label: 'Physical Health Provider',
      name: 'agreements_obligations.health_physical',
    },
    {
      label: 'Dental Health Provider',
      name: 'agreements_obligations.health_dental',
    },
    {
      label: 'Substance Abuse Resources',
      name: 'agreements_obligations.health_substance_abuse',
    },
    {
      label: 'Vaccination (HEP A or FLU)',
      name: 'agreements_obligations.health_vaccination',
    },
    { label: 'STI/STD Testing', name: 'agreements_obligations.health_sti_std' },
    {
      label: 'First Aid Training (CPR)',
      name: 'agreements_obligations.health_first_aid',
    },
  ],
  housingResources: [
    {
      label: 'Housing Case Management',
      name: 'agreements_obligations.housing_case_management',
    },
    {
      label: 'Emergency Housing',
      name: 'agreements_obligations.housing_emergency',
    },
    {
      label: 'Safe Park LA',
      name: 'agreements_obligations.housing_safeparkla',
    },
    {
      label: "Veteran's Housing Resources",
      name: 'agreements_obligations.housing_veterans',
    },
    {
      label: 'Housing Survey (Vi-SPDAT)',
      name: 'agreements_obligations.housing_survey',
    },
  ],
  governmentResources: [
    {
      label: 'Financial Assistance (TANF, FR, SSI/SSDI)',
      name: 'agreements_obligations.government_fin_assistance',
    },
    { label: 'CalFresh', name: 'agreements_obligations.government_calfresh' },
    {
      label: 'Medi-Cal Insurance',
      name: 'agreements_obligations.government_medi_cal',
    },
    {
      label: 'Department of Consumer & Business Affairs',
      name: 'agreements_obligations.government_dept_consumer',
    },
    {
      label: 'Voter Registration',
      name: 'agreements_obligations.government_voter',
    },
    {
      label: 'Birth Certificate',
      name: 'agreements_obligations.government_birth',
    },
    {
      label: "Veteran's Services (Dept of VA)",
      name: 'agreements_obligations.government_vet_services',
    },
    {
      label: 'Library Card',
      name: 'agreements_obligations.government_library',
    },
    { label: 'DMV (ID Cards)', name: 'agreements_obligations.government_dmv' },
    {
      label: 'CAPP (Parking Ticket Assistance)',
      name: 'agreements_obligations.government_capp',
    },
  ],
  hygieneWellness: [
    { label: 'Haircut', name: 'agreements_obligations.hygiene_haircut' },
    {
      label: 'Shower or Hygiene Kit',
      name: 'agreements_obligations.hygiene_shower_kit',
    },
    {
      label: 'Health Screening',
      name: 'agreements_obligations.hygiene_screening',
    },
  ],
  communicationResources: [
    {
      label: 'Got a Cell Phone',
      name: 'agreements_obligations.communication_cell',
    },
    {
      label: 'Opened an Email Account',
      name: 'agreements_obligations.communication_email',
    },
  ],
  legalResources: [
    {
      label: 'Public Defender',
      name: 'agreements_obligations.legal_public_defender',
    },
    { label: 'Legal Aid', name: 'agreements_obligations.legal_legal_aid' },
    { label: 'Medication', name: 'agreements_obligations.legal_medication' },
    {
      label: 'Domestic Violence Resources',
      name: 'agreements_obligations.legal_domestic',
    },
    {
      label: 'Child Support Resources',
      name: 'agreements_obligations.legal_child_support',
    },
    {
      label: "Victim's Assistance Program",
      name: 'agreements_obligations.legal_victim',
    },
    {
      label: 'Probation Resources',
      name: 'agreements_obligations.legal_probation',
    },
  ],
  employmentTraining: [
    {
      label: 'Job Training(EDD, DPSS, LACC, America Works, etc)',
      name: 'agreements_obligations.employment_training',
    },
  ],
  familyServices: [
    {
      label: 'Family Source Center Services',
      name: 'agreements_obligations.family_source_center',
    },
  ],
}

const CheckBoxGroup = ({ question, title, list, children }) => {
  const classes = useStyles()
  return (
    <Box className={classes.box}>
      <Container>
        <br />
        <Typography variant="h6">{title}</Typography>
        <Box className={classes.checkBoxGroup}>
          {list.map(x => (
            <QuestionCheckBox key={uuid()} name={x.name} label={x.label} />
          ))}
          {children}
        </Box>
      </Container>
    </Box>
  )
}

export const ObligationsFormGroup = ({ values, ...props }) => {
  const classes = useStyles()
  const getSelectedServices = key => {
    let arr = [
	  ...obligations.healthResources,
      ...obligations.housingResources,
      ...obligations.governmentResources,
      ...obligations.hygieneWellness,
      ...obligations.communicationResources,
      ...obligations.legalResources,
      ...obligations.familyServices,
      ...obligations.employmentTraining,
    ]
    return arr.map(x => {
      if (key.indexOf(x.name.slice(23)) >= 0) {
        return (
          <Typography key={uuid()} gutterBottom variant="body1">
            {x.label} <DoneIcon className={classes.checkMark} />
          </Typography>
        )
      }
    })
  }
  return (
    <FormSection heading="Program Information">
      <FormGroupRadio
        required
        id="agreements_obligations.obligations_complete"
        label="Did this individual complete community Obligations?"
        value={values.obligations_complete}
        touched={props.touched.family_status}
        list={['Yes', 'No']}
      />
      <FormLabel component="legend">
        Which onsite obligations the individual complete?
      </FormLabel>
      <CheckBoxGroup
        title="Health Resources"
        list={obligations.healthResources}
      />
      <CheckBoxGroup
        title="Housing Resources"
        list={obligations.housingResources}
      />
      <CheckBoxGroup
        title="Government Resources"
        list={obligations.governmentResources}
      />
      <CheckBoxGroup
        title="Hygiene & Wellness"
        list={obligations.hygieneWellness}
      />
      <CheckBoxGroup
        title="Communication Resources"
        list={obligations.communicationResources}
      />
      <CheckBoxGroup
        title="Legal Resources"
        list={obligations.legalResources}
      />
      <CheckBoxGroup
        title="Employment Training"
        list={obligations.employmentTraining}
      />
      <CheckBoxGroup
        title="Family Services"
        list={obligations.familyServices}
      />

      <Divider />
      <br />

      <Typography variant="h6">Programs Participated in:</Typography>
      <br />
      {getSelectedServices(_.keys(_.pickBy(values.agreements_obligations)))}
      <br />
      <br />
    </FormSection>
  )
}

export default ObligationsFormGroup
