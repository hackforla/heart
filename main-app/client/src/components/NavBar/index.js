import React from 'react'

import { PATHS } from '../../routes'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

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
      <Button classes={{ root: classes.button }} onClick={handleClick(history)}>
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
  )
}

export default NavBar
