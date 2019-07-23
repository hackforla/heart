import React from 'react'

import { UserAuth } from '../../utilities/auth'

import { PATHS } from '../../routes'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import { AppBar, Toolbar, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  ToolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  LeftContent: {
    marginLeft: '9%',
    [theme.breakpoints.down('xs')]: {
      margin: 'auto',
    },
  },
  RightContent: {
    marginRight: '9%',
    [theme.breakpoints.down('xs')]: {
      margin: 'auto',
    },
  },
  Button: {
    width: 'auto',
    margin: '5px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}))

const NavBar = ({ onLogout }) => {
  const classes = useStyles()

  const buttonWithRoute = ({ name, onClick, path }) => {
    const handleClick = history => () => {
      if (onClick) {
        onClick()
      }

      history.push(path)
    }

    return withRouter(({ history }) => (
      <Button className={classes.Button} onClick={handleClick(history)}>
        {name}
      </Button>
    ))
  }
  const HomeButton = buttonWithRoute({
    name: 'Home',
    path: PATHS.PARTICIPANTS,
  })
  const IntakeFormButton = buttonWithRoute({
    name: 'Intake Form',
    path: PATHS.INTAKE,
  })
  const LogOutButton = buttonWithRoute({
    name: 'Log Out',
    onClick: onLogout,
    path: PATHS.LOGIN,
  })
  const LogInButton = buttonWithRoute({
    name: 'Login',
    path: PATHS.LOGIN,
  })

  return (
    <div>
      <AppBar color="default" position="sticky">
        <Toolbar className={classes.ToolBar}>
          {UserAuth.loggedIn() ? (
            <>
              <div className={classes.LeftContent}>
                <HomeButton />
                <IntakeFormButton />
              </div>
              <div className={classes.RightContent}>
                <LogOutButton />
                <span>
                  Gina <i className="fas fa-user-circle"></i>
                </span>
              </div>
            </>
          ) : (
            <>
              <div className={classes.LeftContent}>
                <p>Heart</p>
              </div>
              <div className={classes.RightContent}>
                <LogInButton />
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
