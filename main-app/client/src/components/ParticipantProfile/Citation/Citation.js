import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Paper, Divider, Grow } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CitationForm from './CitationForm'
import { Violations } from '../Violations'
import CitationInfo from './CitationInfo'
import { EditButton } from '../FormElements'
import { SuccessAlert, DangerAlert, WarningAlert } from '../../Alerts'
import useIsFormEditing from '../../../hooks/useIsFormEditing'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white',
    margin: theme.spacing(3, 1, 3, 1),
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    marginTop: theme.spacing(1),
    boxShadow: 'none',
  },
}))

export const Citation = ({ citation, updateProfile }) => {
  const classes = useStyles()
  const { toggleEdit, isEditing, formBeingEdited } = useIsFormEditing()
  const [alert, setAlert] = useState('')
  const handleCancel = () => toggleEdit()
  const handleFormSubmit = values => {
    updateProfile(values)
    toggleEdit()
  }

  return (
    <Paper className={classes.root}>
      <>
        {formBeingEdited !== `citation: ${citation.citation_number}` && (
          <>
            <CitationInfo citation={citation} />
            <Violations
              violations={citation.violations}
              isEditing={
                isEditing &&
                formBeingEdited === `citation: ${citation.citation_number}`
              }
            />
            <Divider />
          </>
        )}

        {isEditing &&
          formBeingEdited === `citation: ${citation.citation_number}` && (
            <Grow in={isEditing}>
              <Paper className={classes.paper}>
                <CitationForm
                  handleFormSubmit={handleFormSubmit}
                  isEditing={isEditing}
                  initialValues={citation}
                  handleCancel={handleCancel}
                  setAlert={setAlert}
                />
              </Paper>
            </Grow>
          )}
        {!isEditing && (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <EditButton
              handleClick={() =>
                toggleEdit(`citation: ${citation.citation_number}`)
              }
              disabled={isEditing}
              tipTitle="Edit Citation"
            />
          </div>
        )}
      </>

      <SuccessAlert
        status={alert === 'success'}
        message="Citation successfully updated"
      />
      <DangerAlert
        status={alert === 'error'}
        message="Unable to update Citation"
      />
      <WarningAlert
        status={alert === 'warning'}
        message="Max violations of 5 reached!"
      />
    </Paper>
  )
}

Citation.propTypes = {
  citationInfo: PropTypes.object,
}

Citation.defaultProps = {
  citationInfo: {},
}

export default React.memo(Citation)
