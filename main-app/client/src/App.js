import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { UserAuth } from './utilities/auth'
import { NoMatch } from './routes/NoMatch'
import { PrivateRoute } from '../src/routes/privateRoute'
import withRoot from './withRoot'
import { HomePage, SignInPage, IntakePage, ParticipantPage } from './pages/'

import { PATHS } from './routes'

const UserContext = React.createContext({
  user: null,
  onLogout: () => true,
})

export const UserConsumer = UserContext.Consumer
const UserProvider = UserContext.Provider

class App extends Component {
  state = {
    user: null,
  }

  decodeToken = authToken => {
    const user = jwtDecode(authToken)
    this.setState({ user })
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh()
  }

  componentWillMount() {
    const authToken = localStorage.getItem('authToken')
    if (authToken === 'undefined') {
      console.log('authToken is undefined')
      // If for some reason authToken is undefined log the user out.
      UserAuth.logout()
      return
    }
    if (authToken) {
      this.decodeToken(authToken)
      this.startPeriodicRefresh()
    }
  }

  handleNewLogin = authToken => {
    UserAuth.setAuthToken(authToken)
    this.decodeToken(authToken)
    this.startPeriodicRefresh()
  }

  handleLogout = () => {
    UserAuth.logout()
    this.setState({ user: null })
    this.stopPeriodicRefresh()
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => {
        UserAuth.refreshAuthToken()
      },
      60 * 60 * 1000 // One hour
    )
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return
    }

    clearInterval(this.refreshInterval)
  }

  render() {
    const { user } = this.state
    return (
      <React.Fragment>
        <UserProvider
          value={{
            user,
            onLogout: this.handleLogout,
          }}
        >
          <BrowserRouter>
            <Switch>
              <Route
                path={PATHS.LOGIN}
                render={({ location }) => (
                  <SignInPage
                    location={location}
                    onNewLogin={this.handleNewLogin}
                  />
                )}
              />
              <PrivateRoute
                exact={true}
                path={PATHS.HOME}
                render={() => <HomePage onLogout={this.handleLogout} />}
              />
              <PrivateRoute
                exact={true}
                path={PATHS.PARTICIPANT}
                render={({ match }) => (
                  <ParticipantPage match={match} onLogout={this.handleLogout} />
                )}
              />
              <PrivateRoute
                exact={true}
                path={PATHS.INTAKE}
                render={() => <IntakePage onLogout={this.handleLogout} />}
              />
              <Redirect from="/" to="/login" />
              <Route component={NoMatch} />
            </Switch>
          </BrowserRouter>
        </UserProvider>
      </React.Fragment>
    )
  }
}

export default withRoot(App)
