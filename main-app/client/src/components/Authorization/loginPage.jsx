import React from "react";

import LoginForm from "./loginForm";

export function LoginPage(props) {
  return (
    <div>
      <div className="top-image">
        <div className="centered-container centered-text content">
          <h1 className="top-image-header">Welcome to Heart</h1>
        </div>
      </div>
      <LoginForm 
        location={props.location}
        onNewLogin={props.onNewLogin}
      />
    </div>
  );
}

export default LoginPage;
