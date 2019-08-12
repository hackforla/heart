import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Paper, Divider, Grow } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CitationForm from './CitationForm'
import { Violations } from '../Violations'
import CitationInfo from './CitationInfo'
import { EditButton } from '../FormElements'
import { SuccessAlert, DangerAlert, WarningAlert } from '../../Alerts'

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
  const [isEditing, setEdit] = useState(false)
  const [alert, setAlert] = useState('')
  const toggleEdit = () => setEdit(prev => !prev)
  const handleCancel = () => toggleEdit()

  return (
    <Paper className={classes.root}>
      <>
        {!isEditing && (
          <>
            <CitationInfo citation={citation} />
            <Violations
              violations={citation.violations}
              isEditing={isEditing}
            />
            <Divider />
          </>
        )}

        {isEditing && (
          <Grow in={isEditing}>
            <Paper className={classes.paper}>
              <CitationForm
                handleFormSubmit={updateProfile}
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
              handleClick={toggleEdit}
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
