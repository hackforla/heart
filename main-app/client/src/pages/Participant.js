import React from 'react'
import ParticipantProfile from '../components/Participant/Profile'
import Layout from './Layout'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: { height: 'calc(100vh - 64px)' },
})

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

export default ParticipantPage
