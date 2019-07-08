import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import PropTypes from "prop-types";

import { UserAuth } from "../../utilities/auth";

export class NavBar extends React.Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired
  };

  logOut() {
    this.props.onLogout();
  }

  render() {
    // Render either log-in or log-out on nav-bar according to the state
    let logInOutOption;
    let authNav;

    if (UserAuth.loggedIn() === true) {
      // if user is logged in, provide option to log out
      logInOutOption = (
        <div className="topnav-menu-right">
          <div className="search-bar">Insert search bar here</div>
          <div className="current-username">Gina</div>
          <Link to="/login" onClick={() => this.props.onLogout()}>
            Log out
        </Link>
        </div>
      );
      // authorized navigation links, when user is logged in
      authNav = (
        <ul className="nav-links-list">
          <li>
            <NavLink to="/" className="btn nav" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/form" className="btn nav" activeClassName="active">
              Intake Form
            </NavLink>
          </li>
        </ul>
      );
    } else {
      // if user is not logged in, provide link to login
      logInOutOption = <Link to="/login">Login</Link>;
      // Not logged in... Create default navigation links?
      authNav = (
        <div className="logo">
          <p>Heart</p>
        </div>
      );
    }

    return (
      < div role="navigation" className="nav-bar" >
        <div className="topnav-menu-left">{authNav}{console.log("this is props", this.props)}</div>
        {logInOutOption}
      </div >
    );
  }
}

export default NavBar;
