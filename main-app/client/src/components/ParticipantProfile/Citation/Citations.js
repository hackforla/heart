import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'
import { Fab, Paper, Divider, Typography } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CitationHeader from './CitationHeader'
import { useAxios } from '../../../hooks'
import AddIcon from '@material-ui/icons/Add'
import { updateCitation, addCitation } from '../../../actions/citations'
import { SuccessAlert, DangerAlert, WarningAlert } from '../../Alerts'
import Citation from './Citation'
import useIsFormEditing from '../../../hooks/useIsFormEditing'

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
  fabButton: {
    margin: '0 auto',
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  extendedIcon: {
    margin: theme.spacing(1),
  },
}))

export const Citations = ({ participantId }) => {
  const { isLoading, isError, errMsg, data, updateDataRecord } = useAxios(
    `citations/${participantId}`
  )
  const { toggleEdit, isEditing, formBeingEdited } = useIsFormEditing()
  const classes = useStyles()
  const [alert, setAlert] = useState('')
  const [newCitation] = useState({
    citation_number: '',
    court_code: '',
    violations: [],
    citation_status: '',
    participant_id: parseInt(participantId),
  })

  const startNewCitation = () => {
    toggleEdit('citation: ')
  }

  const putCitation = useCallback(
    values => {
      updateCitation(values.id, values)
        .then(res => {
          console.log('res', res)
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
    },
    [updateDataRecord]
  )
  const postCitation = useCallback(
    values => {
      addCitation(participantId, values)
        .then(res => {
          if (res.citations) {
            updateDataRecord(res.citations, 'post')
            setAlert('success')
            setTimeout(() => setAlert(''), 2000)
          } else {
            setAlert('error')
            setTimeout(() => setAlert(''), 3000)
          }
        })
        .catch(err => console.log(err))
    },
    [participantId, updateDataRecord]
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
              updateProfile={putCitation}
            />
          ))}
          {isEditing && formBeingEdited === 'citation: ' && (
            <Citation citation={newCitation} updateProfile={postCitation} />
          )}
        </>
      )}
      <Fab
        disabled={isEditing}
        variant="extended"
        color="primary"
        aria-label="add citation"
        className={classes.fabButton}
        onClick={startNewCitation}
      >
        <AddIcon className={classes.extendedIcon} />
        Add New Citation
      </Fab>

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
