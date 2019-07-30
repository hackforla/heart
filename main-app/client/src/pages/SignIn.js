import React from 'react'
import LoginForm from '../components/Authorization/LoginForm'

export const SignInPage = ({ location, onNewLogin }) => {
  return (
    <div>
      <LoginForm location={location} onNewLogin={onNewLogin} />
    </div>
  )
}
