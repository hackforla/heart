import React from "react";

import LoginForm from "./loginForm";
import './loginPage.scss';

export function LoginPage(props) {
  return (
    <div className="login-page--container">
      <h1 className="login-page-header">Welcome to Heart</h1>
      <LoginForm 
        location={props.location}
        onNewLogin={props.onNewLogin}
      />
    </div>
  );
}

export default LoginPage;
