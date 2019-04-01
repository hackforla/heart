import React from "react";
import { Link } from "react-router-dom";

import { userAuth } from '../../utilities/auth';

import "./navbar.css";

export class NavBar extends React.Component {
 logOut() {
    userAuth.logout();
  }

  render() {
    // Render either log-in or log-out on nav-bar according to the state
    let logInOutOption;

    if(userAuth.loggedIn() === true) {
      logInOutOption = (
        <div>
          <Link to="/login" onClick={() => this.logOut()}>
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
