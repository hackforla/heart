import React from 'react'
import { ParticipantProfile } from '../components/ParticipantProfile'
import Layout from './Layout'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    backgroundColor: theme.palette.background.paper,
  },
}))

export const ParticipantPage = ({ onLogout, match }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Layout onLogout={onLogout}>
        <ParticipantProfile match={match} />
      </Layout>
    </div>
  )
}
