import React from 'react'
<<<<<<< HEAD
// import AccountCircle from '@material-ui/icons/AccountCircle';
import { UserAuth } from '../../utilities/auth'
=======
>>>>>>> e5079d385ebcf06e22f9c97170fdefd520a509b0

import { PATHS } from '../../routes'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

<<<<<<< HEAD
import {AppBar, Toolbar, Button, IconButton} from '@material-ui/core'


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
=======
import { AppBar, Toolbar, Button } from '@material-ui/core'

import AccountCircle from '@material-ui/icons/AccountCircle'
const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3), // only used when nav is fixed
    flexGrow: 1,
  },
  ToolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  LeftContent: {
    width: '100%',
  },
  RightContent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  user: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginRight: theme.spacing(2),
>>>>>>> e5079d385ebcf06e22f9c97170fdefd520a509b0
  },
}))

const NavBar = ({ onLogout }) => {
  const classes = useStyles()

  const buttonWithRoute = ({ name, onClick, path }) => {
    const handleClick = history => () => {
      if (onClick) {
        onClick()
      }
<<<<<<< HEAD

=======
>>>>>>> e5079d385ebcf06e22f9c97170fdefd520a509b0
      history.push(path)
    }

    return withRouter(({ history }) => (
<<<<<<< HEAD
      <Button className={classes.Button} onClick={handleClick(history)}>
=======
      <Button classes={{ root: classes.button }} onClick={handleClick(history)}>
>>>>>>> e5079d385ebcf06e22f9c97170fdefd520a509b0
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
<<<<<<< HEAD
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
                <span>Gina <i className="fas fa-user-circle"></i></span>
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
=======

  return (
    <nav className={classes.root}>
      <AppBar color="default">
        <Toolbar className={classes.ToolBar}>
          <div className={classes.LeftContent}>
            <HomeButton />
            <IntakeFormButton />
          </div>

          <div className={classes.RightContent}>
            <LogOutButton />
            <div className={classes.user}>
              Gina <AccountCircle />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </nav>
>>>>>>> e5079d385ebcf06e22f9c97170fdefd520a509b0
  )
}

export default NavBar
