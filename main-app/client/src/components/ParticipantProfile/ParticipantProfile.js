import React, { useCallback } from 'react'
import { Grid, Link, Button } from '@material-ui/core'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
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

import { FormEditingProvider } from '../../contexts/FormEditingContext'

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
  const { isLoading, isError, errMsg, data, updateDataRecord } = useAxios(
    `participants/${match.params.id}`,
    []
  )
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const updateProfile = useCallback(
    values => {
      updateParticipant(values.id, values)
        .then(res => updateDataRecord(values))
        .catch(err => console.log(err))
    },
    [updateDataRecord]
  )

  return (
    <FormEditingProvider>
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
          <Contact contactInfo={data[0]} updateContactInfo={updateProfile} />
          <Grid
            container
            spacing={4}
            direction={matches ? 'column-reverse' : 'row'}
          >
            <Grid item xs={12} md={8}>
              <Note note={data[0]} updateNote={updateProfile} />
              <Citations participantId={match.params.id} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Status statusInfo={data[0]} updateStatus={updateProfile} />
            </Grid>
          </Grid>
        </div>
      )}
    </FormEditingProvider>
  )
}

export default ParticipantProfile
