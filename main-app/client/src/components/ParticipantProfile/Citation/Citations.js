import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Paper, Divider, Grow, Typography } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CitationForm from './CitationForm'
import CitationHeader from './CitationHeader'

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

export const Citations = ({ contactInfo }) => {
  const classes = useStyles()
  const [isEditing, setEdit] = useState(false)
  const toggleEdit = () => setEdit(prev => !prev)
  const handleCancel = () => toggleEdit()
  const handleFormSubmit = values => {
    console.log('submitted')
  }
  console.log('Contact Rendered')
  return (
    <Paper className={classes.root}>
      {!isEditing && (
        <>
          <CitationHeader
            heading={`${contactInfo.first_name} ${contactInfo.last_name}`}
            subHeading={`AKA: ${contactInfo.aka}`}
            handleClick={toggleEdit}
          />

          <Divider />
          <Typography>Citations Go Here</Typography>
          <Typography>Violations Go Here</Typography>
        </>
      )}
      {isEditing && (
        <Grow in={isEditing}>
          <Paper className={classes.paper}>
            <CitationForm
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

Citations.propTypes = {
  contactInfo: PropTypes.object,
}

Citations.defaultProps = {
  contactInfo: {},
}

export default React.memo(Citations)
