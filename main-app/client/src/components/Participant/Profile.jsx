import React from 'react'
import { Container, Grid, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Card from './components/Card'
import Loader from '../UI/Loader'
import Error from '../UI/Error'
import Citations from './components/Citations'
import Notes from './components/Notes'
import Status from './components/Status'
import { useFetch } from '../../hooks/useFetch'

const useStyles = makeStyles(theme => ({
  root: { padding: theme.spacing(2), backgroundColor: '#f3f7fc' },
  link: {
    color: "#252525",
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 600,
    '&:hover': {
      color: '#428FE2',
      textDecoration: 'none'
    },
  },
    arrowLeft: {
      display: 'inline-block',
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(1)
    },

}))

const ParticipantProfile = props => {
  const [state, fetchData, dispatch] = useFetch(
    `participants/${props.match.params.id}`
  )
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {state.isLoading ? (
        <Loader />
      ) : (
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Link to="/participants" className={classes.link}>
                {state.isError && <Error error={state.isError} />}
                <i className="fas fa-arrow-left"></i>
                <span className={classes.arrowLeft}>Back to Index</span>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Card user={state.data[0]} />
            </Grid>
            <Grid item xs={8}>
              <Notes user={state.data[0]} />
              <Citations user={state.data[0]} />
            </Grid>
            <Grid item xs={4}>
              <Status user={state.data[0]} />
            </Grid>
          </Grid>
        </Container>
      )}
      {JSON.stringify(state)}
    </div>
  )
}

export default ParticipantProfile
