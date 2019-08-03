import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Redirect } from 'react-router-dom'
import {
  Grid,
  Link,
  TextField,
  Typography,
  Container,
  Button,
  Avatar,
} from '@material-ui/core'
import { createStyles, withStyles } from '@material-ui/core/styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { UserAuth } from '../../utilities/auth'

const styles = createStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      submitted: false,
      loading: false,
      redirectToReferrer: false,
      error: '',
    }
  }

  static propTypes = {
    location: PropTypes.object.isRequired,
    onNewLogin: PropTypes.func.isRequired,
  }

  componentWillMount() {
    // If user is logged in redirect straight to the participants page
    const res = UserAuth.loggedIn()
    if (res) {
      this.props.history.push('/')
    }
  }

  handleChange(evt) {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }

  handleSubmit(evt) {
    evt.preventDefault()

    this.setState({ submitted: true })
    const { username, password } = this.state

    // stop here if form is invalid
    if (!(username && password)) {
      return
    }

    this.setState({ loading: true })
    UserAuth.login(username, password)
      .then(res => {
        this.props.onNewLogin(res.authToken)
        this.setState({ error: null, redirectToReferrer: true })
      })
      .catch(error => {
        this.setState({ error, loading: false })
      })
  }

  render() {
    const { classes } = this.props
    const {
      username,
      password,
      loading,
      redirectToReferrer,
      error,
    } = this.state
    const { from } = this.props.location.state || {
      from: { pathname: '/' },
    }

    if (redirectToReferrer) {
      return <Redirect to={from} />
    }

    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            noValidate
            name="form"
            className={classes.form}
            onSubmit={evt => this.handleSubmit(evt)}
          >
            {error && <div className={'alert alert-danger'}>{error}</div>}
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              autoFocus
              required
              id="username"
              label="Username"
              name="username"
              value={username}
              onChange={evt => this.handleChange(evt)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={evt => this.handleChange(evt)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              color="primary"
              disabled={loading}
              className={classes.submit}
            >
              Login
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    )
  }
}

export default withRouter(withStyles(styles)(LoginForm))
