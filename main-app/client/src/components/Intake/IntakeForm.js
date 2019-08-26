import React from 'react'
import {
  Paper,
  Typography,
  Container,
  makeStyles,
  Tabs,
  Tab,
} from '@material-ui/core'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    flexGrow: 1,
    width: 700,
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    padding: 0,
    margin: `0 auto`,
    // height: '80vh',
  },
  tabs: {
    backgroundColor: '#F6F6F6',
  },
  paper: {
    position: 'absolute',
    top: 160,
    left: 0,
    right: 0,
    width: '60%',
    minWidth: 700,
    minHeight: 600,
    marginBottom: theme.spacing(3),
    padding: 0,
  },
  title: {
    background: '#007FFF',
    color: 'white',
    padding: theme.spacing(2),
  },
  container: {
    position: 'absolute',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
    backgroundColor: theme.palette.background.paper,
    // height: '80vh',
    // overflow: 'scroll',
  },
}))

const IntakeForm = ({
  tabIndex,
  handleTabChange,
  children,
  showObligations,
}) => {
  const classes = useStyles()

  return (
    <Paper square elevation={10} className={classes.root}>
      <Typography variant="h1" className={classes.title} align="center">
        Intake Form
      </Typography>
      <Tabs
        className={classes.tabs}
        value={tabIndex}
        onChange={handleTabChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<PersonPinIcon />} label="PERSONAL INFORMATION" />
        {showObligations && (
          <Tab icon={<PlaylistAddCheck />} label="OBLIGATIONS" />
        )}
      </Tabs>
      <Container className={classes.container}>{children}</Container>
    </Paper>
  )
}

export default IntakeForm
