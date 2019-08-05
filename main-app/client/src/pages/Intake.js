import React from 'react'
import Layout from './Layout'
import { Intake } from '../components/Intake'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    background: `linear-gradient(to bottom, #6f7ce2, #6f7ce2 45%, ${theme.palette.background.paper} 45%)`,
  },
}))

export const IntakePage = ({ onLogout }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Layout onLogout={onLogout}>
        <Intake />
      </Layout>
    </div>
  )
}
