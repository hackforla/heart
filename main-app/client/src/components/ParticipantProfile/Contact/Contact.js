import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Paper, Divider, Grow } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ContactForm from './ContactForm'
import ContactHeadingBar from './ContactHeadingBar'
import ContactBody from './ContactBody'
import updateParticipant from '../../../api/updateParticipant.api'
import _ from 'lodash'

const useStyles = makeStyles(theme => ({
  root: {
    borderTopColor: theme.palette.primary.main,
    borderTopWidth: 6,
    borderTopStyle: 'solid',
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    marginTop: theme.spacing(1),
    boxShadow: 'none',
  },
}))

export const Contact = ({ contactInfo }) => {
  const classes = useStyles()
  const [isEditing, setEdit] = useState(false)
  const toggleEdit = () => setEdit(prev => !prev)
  const handleCancel = () => toggleEdit()
  const handleFormSubmit = values => {
    // database has 'aka' as an array reassigning back on this line
    const b = Object.assign({}, values, {
      aka: _.map(_.split(values.aka, ','), _.trim),
    })
    let x = updateParticipant({ id: 1, data: b })
    x.then(res => console.log(res))
  }
  console.log('Contact Rendered')
  return (
    <Paper className={classes.root}>
      {!isEditing && (
        <>
          <ContactHeadingBar
            heading={`${contactInfo.first_name} ${contactInfo.last_name}`}
            subHeading={`AKA: ${contactInfo.aka}`}
            handleClick={toggleEdit}
          />

          <Divider />
          <ContactBody contactInfo={contactInfo} />
        </>
      )}
      {isEditing && (
        <Grow in={isEditing}>
          <Paper className={classes.paper}>
            <ContactForm
              handleFormSubmit={handleFormSubmit}
              isEditing={isEditing}
              initialValues={contactInfo}
              handleCancel={handleCancel}
            />
          </Paper>
        </Grow>
      )}
    </Paper>
  )
}

Contact.propTypes = {
  contactInfo: PropTypes.object,
}

Contact.defaultProps = {
  contactInfo: {},
}

export default React.memo(Contact)
