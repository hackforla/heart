import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Paper, Divider, Grow } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import _ from 'lodash'
import ContactForm from './ContactForm'
import ContactHeadingBar from './ContactHeadingBar'
import ContactBody from './ContactBody'
import { fieldSelector } from '../../../utilities/fieldSelector'
import { contactFormSchema } from './contactFormSchema'
import { databaseDateFormat } from '../../../utilities/dateFormatter'
import useIsFormEditing from '../../../hooks/useIsFormEditing'

const useStyles = makeStyles(theme => ({
  root: {
    borderTopColor: theme.palette.primary.main,
    borderTopWidth: 6,
    borderTopStyle: 'solid',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    marginTop: theme.spacing(1),
    boxShadow: 'none',
  },
}))

export const Contact = ({ contactInfo, updateContactInfo }) => {
  const classes = useStyles()
  const { toggleEdit, isEditing, formBeingEdited } = useIsFormEditing()
  const [formValues, setFormValues] = useState()
  const handleCancel = () => toggleEdit()

  useEffect(() => {
    setFormValues(fieldSelector(contactInfo, contactFormSchema))
  }, [contactInfo])

  const handleFormSubmit = values => {
    const b = Object.assign({}, values, {
      aka: _.map(_.split(values.aka, ','), _.trim),
      dob: databaseDateFormat(values.dob),
    })
    const c = Object.assign({}, contactInfo, b)
    updateContactInfo(c)
    toggleEdit()
  }

  return (
    <Paper className={classes.root}>
      {formBeingEdited !== 'contact' && (
        <>
          <ContactHeadingBar
            heading={`${contactInfo.first_name} ${contactInfo.last_name}`}
            subHeading={`AKA: ${contactInfo.aka}`}
            handleClick={() => toggleEdit('contact')}
            disabled={isEditing}
          />
          <Divider />
          <ContactBody contactInfo={formValues} />
        </>
      )}
      {isEditing && formBeingEdited === 'contact' && (
        <Grow in={isEditing}>
          <Paper className={classes.paper}>
            <ContactForm
              isEditing={isEditing}
              initialValues={formValues}
              handleCancel={handleCancel}
              handleFormSubmit={handleFormSubmit}
            />
          </Paper>
        </Grow>
      )}
    </Paper>
  )
}

Contact.propTypes = {
  contactInfo: PropTypes.object,
  updateContactInfo: PropTypes.func,
}

Contact.defaultProps = {
  contactInfo: {},
}

export default React.memo(Contact)
