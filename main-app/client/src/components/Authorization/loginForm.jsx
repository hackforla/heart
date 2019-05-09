import React from "react";
import PropTypes from "prop-types";
import { withRouter, Redirect } from "react-router-dom";

import { UserAuth } from "../../utilities/auth";

import "./loginForm.scss";

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
      from: { pathname: "/participants/1" }
    };

    if (redirectToReferrer) {
      //this.props.history.push(from);
      return <Redirect to={from} />;
    }
    return (
      <div className="centered-container">
        <h2 className="login-header">Login</h2>
        <form
          name="form"
          className="login-form"
          onSubmit={evt => this.handleSubmit(evt)}
        >
          {error && <div className={"alert alert-danger"}>{error}</div>}
          <div
            className={
              "form-group" + (submitted && !username ? " has-error" : "")
            }
          >
            <label htmlFor="username">Username</label>
            {submitted && !username && (
              <div className="help-block login-error">Username is required</div>
            )}
            <input
              type="text"
              className="form-input"
              name="username"
              value={username}
              placeholder="Username"
              aria-label="Username"
              onChange={evt => this.handleChange(evt)}
            />
          </div>
          <div
            className={
              "form-group" + (submitted && !password ? " has-error" : "")
            }
          >
            <label htmlFor="password">Password</label>
            {submitted && !password && (
              <div className="help-block login-error">Password is required</div>
            )}
            <input
              type="password"
              className="form-input"
              name="password"
              value={password}
              placeholder="Password"
              aria-label="Password"
              onChange={evt => this.handleChange(evt)}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" disabled={loading}>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
