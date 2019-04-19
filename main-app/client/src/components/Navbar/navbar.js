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
    let authNav;

    if(UserAuth.loggedIn() === true) {
      // if user is logged in, provide option to log out
      logInOutOption = (
        <div>
          <Link to="/login" onClick={() => this.props.onLogout()}>
            Log out
          </Link>
        </div>
      );
      // authorized navigation links, when user is logged in
      authNav = (
        <ul className="nav-links-list">
          <li>
           <Link to="/">Home</Link>
          </li>
          <li>
           <Link to="/participants/1">Participants</Link>
          </li>
          <li>
           <Link to="/form">Reporting</Link>
          </li>
        </ul>
      )
    }
    else {
      // if user is not logged in, provide link to login
      logInOutOption = (
        <div>
          <Link to="/login">Login</Link>
        </div>
      );
      // Not logged in... Create default navigation links?
      authNav = (
      <div className="logo">
        <p>Heart</p>
      </div> 
      );
      
    }
  
    return (
      <div role="navigation" className="nav-bar">
        <div className="topnav-menu-left">
          {authNav}
        </div>
        <div className="topnav-menu-right">
          {logInOutOption}
        </div>
      </div>
    );
  }
}

export default NavBar;
