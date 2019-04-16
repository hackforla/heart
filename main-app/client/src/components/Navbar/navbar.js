import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { UserAuth } from '../../utilities/auth';

import "./navbar.css";

export class NavBar extends React.Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired,
};

 logOut() {
    this.props.onLogout();
  }

  render() {
    // Render either log-in or log-out on nav-bar according to the state
    let logInOutOption;

    if(UserAuth.loggedIn() === true) {
      logInOutOption = (
        <div>
          <Link to="/login" onClick={() => this.props.onLogout()}>
            Log out
          </Link>
        </div>
      );
    }
    else {
      logInOutOption = (
        <div>
          <Link to="/login">Login</Link>
        </div>
      );
    }
  
    return (
      <div role="navigation" className="nav-bar">
        <p className="logo">
          Heart
        </p>
        <div className="topnav-menu-right">
        {logInOutOption}
        </div>
      </div>
    );
  }
}

export default NavBar;
