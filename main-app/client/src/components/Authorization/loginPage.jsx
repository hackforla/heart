import React from "react";

import LoginForm from "./loginForm";

export function LoginPage(props) {
  // If user is logged in redirect straight to the participants page
  //if (props.loggedIn) {
    //return <Redirect to="/participants" />;
  //}

  return (
    <div>
      <div className="top-image">
        <div className="centered-container centered-text content">
          <h1 className="top-image-header">Welcome to Heart</h1>
        </div>
      </div>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
