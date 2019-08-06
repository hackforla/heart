import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CardActionArea, CardContent, Divider, Paper } from '@material-ui/core'

import makeStyles from '@material-ui/core/styles/makeStyles'
import StatusForm from './StatusForm'
import StatusHeader from './StatusHeader'

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

export const StatusX = ({}) => {
  const classes = useStyles()
  const [isEditing, setEdit] = useState(false)
  const toggleEdit = () => setEdit(prev => !prev)
  const handleCancel = () => toggleEdit()
  const handleFormSubmit = values => {
    console.log(values)
  }
  return (
    <Paper className={classes.root}>
      <StatusHeader
        heading="Case Status"
        handleClick={toggleEdit}
        disabled={isEditing}
      />
      <Divider />
      <div className={classes.container}>
        <StatusForm
          handleFormSubmit={handleFormSubmit}
          isEditing={isEditing}
          initialValues={{ status: 'None', backgroundCheck: [] }}
          handleCancel={handleCancel}
        />
      </div>
    </Paper>
  )
}
StatusX.defaultProps = {}

StatusX.propTypes = {}

export default StatusX
