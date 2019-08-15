import React, { useCallback } from 'react'
import { Grid, Link, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Loader from '../UI/Loader'
import { Link as RouterLink } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Contact } from './Contact'
import { Citations } from './Citation'
import { Note } from './Note'
import { useAxios } from '../../hooks'
import { updateParticipant } from '../../actions/participant'
import Typography from '@material-ui/core/Typography'
import { Status } from './Status'
// import _ from 'lodash'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  link: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
}))

export const ParticipantProfile = ({ match }) => {
  const classes = useStyles()
  const { isLoading, isError, errMsg, data, updateDataRecord } = useAxios(
    `participants/${match.params.id}`,
    []
  )
  const updateProfile = useCallback(
    values => {
      updateParticipant(values.id, values)
        .then(res => updateDataRecord(values))
        .catch(err => console.log(err))
    },
    [updateDataRecord]
  )

  return (
    <>
      {isLoading && <Loader />}
      {isError && <Typography variant="h1">{errMsg}</Typography>}
      {!isLoading && !isError && (
        <div className={classes.root}>
          <Link
            component={RouterLink}
            to="/participants"
            classes={{ root: classes.link }}
          >
            <Button variant="outlined" color="primary" size="small">
              <ArrowBackIcon />
              Back to Index
            </Button>
          </Link>
          {JSON.stringify(data)}
          <Contact contactInfo={data[0]} updateContactInfo={updateProfile} />
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Note note={data[0]} updateNote={updateProfile} />
              <Citations userId={match.params.id} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Status
                statusInfo={data[0]}
                // status={_.map(data, 'status')[0]}
                // backgroundCheck={_.map(data, 'background_check')[0]}
                updateStatus={updateProfile}
              />
            </Grid>
          </Grid>
        </div>
      )}
    </>
  )
}

export default ParticipantProfile
