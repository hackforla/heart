import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { withStyles } from '@material-ui/core/styles'
import ParticipantProfile from './components/Participant/Profile'
import NavBar from './components/NavBar'
import LoginPage from './components/Authorization/loginPage'
import { UserAuth } from './utilities/auth'
import Intake from './components/Form/Intake'
import { NoMatch } from './routes/NoMatch'
// Higher Order Component (HOC) to prevent the users from accessing a route if they are not logged in
import { PrivateRoute } from '../src/routes/privateRoute'
import withRoot from './withRoot'
import ParticipantsList from './components/ParticipantsList/ParticipantsList'

import { PATHS } from './routes'

const UserContext = React.createContext({
  user: null,
  onLogout: () => true,
})
export const UserConsumer = UserContext.Consumer
const UserProvider = UserContext.Provider

const styles = theme => ({
  root: {
    flexBasis: 1,
  },
})

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
            <div>
              <header>
                <NavBar onLogout={this.handleLogout} />
              </header>
              <main>
                <Switch>
                  <Route
                    path={PATHS.LOGIN}
                    render={({ location }) => (
                      <LoginPage
                        location={location}
                        onNewLogin={this.handleNewLogin}
                      />
                    )}
                  />
                  <PrivateRoute
                    exact={true}
                    path={PATHS.PARTICIPANTS}
                    component={ParticipantsList}
                  />
                  <PrivateRoute
                    exact={true}
                    path={PATHS.PARTICIPANT}
                    component={ParticipantProfile}
                  />
                  {/* hold off on making this route privat */}
                  <Route exact={true} path={PATHS.INTAKE} component={Intake} />
                  <Redirect from="/" to="/login" />
                  <Route component={NoMatch} />
                </Switch>
              </main>
            </div>
          </BrowserRouter>
        </UserProvider>
      </React.Fragment>
    )
  }
}

export default withRoot(withStyles(styles)(App))
