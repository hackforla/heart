import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import {
  Fab,
  Paper,
  Divider,
  Typography,
  AppBar,
  Toolbar,
} from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CitationHeader from './CitationHeader'
import { useAxios } from '../../../hooks'
import uuid from 'uuid'
import AddIcon from '@material-ui/icons/Add'

import { updateCitation } from '../../../actions/citations'
import { SuccessAlert, DangerAlert, WarningAlert } from '../../Alerts'
import Citation from './Citation'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(2),
    borderTopColor: theme.palette.primary.main,
    borderTopWidth: 6,
    borderTopStyle: 'solid',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    backgroundColor: '#e4e9ed',
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    marginTop: theme.spacing(1),
    boxShadow: 'none',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}))

export const Citations = ({ userId }) => {
  const { isLoading, isError, errMsg, data, updateDataRecord } = useAxios(
    `citations/${userId}`
  )

  const classes = useStyles()
  const [isEditing, setEdit] = useState(false)
  const [alert, setAlert] = useState('')
  const toggleEdit = () => setEdit(prev => !prev)
  const handleCancel = () => toggleEdit()

  const updateProfile = useCallback(
    values => {
      updateCitation(values.id, values)
        .then(res => {
          if (res.citations) {
            updateDataRecord(values)
            setAlert('success')
            setTimeout(() => setAlert(''), 2000)
          } else {
            setAlert('error')
            setTimeout(() => setAlert(''), 3000)
          }
        })
        .catch(err => console.log(err))
      toggleEdit()
    },
    [updateDataRecord]
  )

  return (
    <Paper className={classes.root}>
      {isLoading && <h1>Loading ...</h1>}
      {isError && <Typography variant="h1">{errMsg}</Typography>}
      {!isLoading && !isError && (
        <>
          <CitationHeader
            heading="Citations"
            subHeading="With related violations"
            handleClick={toggleEdit}
            disabled={isEditing}
          />
          <Divider />

          {data.map(citation => (
            <Citation
              key={uuid()}
              citation={citation}
              updateProfile={updateProfile}
            />
          ))}
          <Citation
            key={uuid()}
            citation={data[0]}
            updateProfile={updateProfile}
          />
          <Citation
            key={uuid()}
            citation={data[0]}
            updateProfile={updateProfile}
          />
        </>
      )}
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Tooltip title="Add New Citation">
            <Fab
              color="secondary"
              aria-label="add"
              className={classes.fabButton}
            >
              <AddIcon />
            </Fab>
          </Tooltip>
        </Toolbar>
      </AppBar>
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

Citations.propTypes = {
  citationInfo: PropTypes.object,
}

Citations.defaultProps = {
  citationInfo: {},
}

export default React.memo(Citations)
