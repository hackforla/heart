import React from 'react'
import { Container } from '@material-ui/core'
import Participants from '../components/ParticipantsList/Participants/Participants'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: { height: 'calc(100vh - 64px)' },
})

export const HomePage = () => {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Participants />
    </Container>
  )
}
