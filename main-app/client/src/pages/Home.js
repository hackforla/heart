import React from 'react'
import { Participants } from '../components/Participants'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Layout from './Layout'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    backgroundColor: theme.palette.background.paper,
  },
}))

export const HomePage = ({ onLogout }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Layout onLogout={onLogout}>
        <Participants />
      </Layout>
    </div>
  )
}
