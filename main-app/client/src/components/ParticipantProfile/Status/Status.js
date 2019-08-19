import React from 'react'
import PropTypes from 'prop-types'
import { Divider, Paper } from '@material-ui/core'
import _ from 'lodash'
import makeStyles from '@material-ui/core/styles/makeStyles'
import StatusForm from './StatusForm'
import StatusHeader from './StatusHeader'
import StatusBody from './StatusBody'
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

export const Status = ({ statusInfo, updateStatus }) => {
  const classes = useStyles()
  const { toggleEdit, isEditing, formBeingEdited } = useIsFormEditing()
  const handleCancel = () => toggleEdit()
  const handleFormSubmit = values => {
    updateStatus(values)
    toggleEdit()
  }
  return (
    <Paper className={classes.root}>
      <StatusHeader
        heading="Case Status"
        subHeading={_.startCase(statusInfo.status)}
        handleClick={() => toggleEdit('status')}
        disabled={isEditing}
      />
      <Divider />
      {formBeingEdited !== 'status' ? (
        <StatusBody bgCheck={statusInfo.background_check} />
      ) : null}
      <div className={classes.container}>
        {isEditing && formBeingEdited === 'status' && (
          <StatusForm
            handleFormSubmit={handleFormSubmit}
            isEditing={isEditing}
            initialValues={Object.assign({}, statusInfo, {
              status: _.startCase(statusInfo.status),
              case_closed_reason: [],
            })}
            handleCancel={handleCancel}
          />
        )}
      </div>
    </Paper>
  )
}
Status.defaultProps = {}

Status.propTypes = {
  statusInfo: PropTypes.object,
  updateStatus: PropTypes.func,
}

export default Status
