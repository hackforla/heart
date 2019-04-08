import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from "react-router-dom";

import { UserAuth } from '../../utilities/auth';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      submitted: false,
      loading: false,
      redirectToReferrer: false,
      error: ''
    };
  }

  static propTypes = {
    location: PropTypes.object.isRequired,
    onNewLogin: PropTypes.func.isRequired,
  };

  componentWillMount() {
    // If user is logged in redirect straight to the participants page
    const res = UserAuth.loggedIn();
    if (res) {
      this.props.history.push('/participants/1');
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
    const { username, password, submitted, loading, redirectToReferrer, error } = this.state;
    const { from } = this.props.location.state || {
      from: { pathname: '/participants/1' },
    };

    if (redirectToReferrer) {
      //this.props.history.push(from);
      return <Redirect to={from} />;
    }
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form name="form" onSubmit={evt => this.handleSubmit(evt)}>
          {error &&
            <div className={'alert alert-danger'}>{error}</div>
          }
          <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username" value={username} onChange={evt => this.handleChange(evt)} />
            {submitted && !username &&
              <div className="help-block">Username is required</div>
            }
          </div>
          <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" value={password} onChange={evt => this.handleChange(evt)} />
            {submitted && !password &&
              <div className="help-block">Password is required</div>
            }
          </div>
          <div className="form-group">
            <button className="btn btn-primary" disabled={loading}>Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);