import React from 'react'
import { Container } from '@material-ui/core'
import ParticipantList from '../components/ParticipantsList/ParticipantsList'

export const HomePage = () => {
  return (
    <Container>
      <h1 className="home-page">Home Page</h1>
      <ParticipantList />
    </Container>
  )
}
