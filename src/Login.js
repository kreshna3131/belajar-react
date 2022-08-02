import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

export default function Login() {
  const clientId = "365823754994-27fgov0qj560dnc385qn0pl203oq1rdh.apps.googleusercontent.com";
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log("Login Success: ", res.profileObj);
    setShowLoginButton(false);
    setShowLogoutButton(true);
  };

  const onfailureSuccess = (res) => {
    console.log("login Failed: ", res);
  };

  const onSignoutSuccess = () => {
    alert("You Sign Out");
    setShowLoginButton(true);
    setShowLogoutButton(false);
  };

  return (
    <div>
      {showLoginButton ? <GoogleLogin clientId={clientId} buttonText="Login" onSuccess={onLoginSuccess} onFailure={onfailureSuccess} cookiePolicy={"single_host_origin"} /> : null}

      {showLogoutButton ? <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={onSignoutSuccess} /> : null}
    </div>
  );
}
