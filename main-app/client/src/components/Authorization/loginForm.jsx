import React from "react";
import PropTypes from "prop-types";
import { withRouter, Redirect } from "react-router-dom";
import { TextField, Typography, Container, Button } from '@material-ui/core'

import { UserAuth } from "../../utilities/auth";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      submitted: false,
      loading: false,
      redirectToReferrer: false,
      error: ""
    };
  }

  static propTypes = {
    location: PropTypes.object.isRequired,
    onNewLogin: PropTypes.func.isRequired
  };

  componentWillMount() {
    // If user is logged in redirect straight to the participants page
    const res = UserAuth.loggedIn();
    if (res) {
      this.props.history.push("/");
    }
  }

  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;

    // stop here if form is invalid
    if (!(username && password)) {
      return;
    }

    this.setState({ loading: true });
    UserAuth.login(username, password)
      .then(res => {
        this.props.onNewLogin(res.authToken);
        this.setState({ error: null, redirectToReferrer: true });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  render() {
    const {
      username,
      password,
      submitted,
      loading,
      redirectToReferrer,
      error
    } = this.state;
    const { from } = this.props.location.state || {
      from: { pathname: "/" }
    };

    if (redirectToReferrer) {
      //this.props.history.push(from);
      return <Redirect to={from} />;
    }
    return (
      <Container maxWidth="sm">
        <Typography variant="h2">Login</Typography>
        <form
          name="form"
          className="login-form"
          onSubmit={evt => this.handleSubmit(evt)}
        >
          {error && <div className={"alert alert-danger"}>{error}</div>}
          <TextField
            required
            id="username"
            label="Username"
            style={{ margin: 8 }}
            name="username"
            value={username}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={evt => this.handleChange(evt)}
            /><br />
          <TextField
            required
            id="password"
            label="Password"
            type="password"
            style={{ margin: 8 }}
            name="password"
            value={password}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={evt => this.handleChange(evt)}
          />
          <br />
          <br />
          <Button
            variant="contained"
            size="large"
            color="default"
            disabled={loading}
          >
            Login
          </Button>
        </form>
      </Container>
    );
  }
}

export default withRouter(LoginForm);
