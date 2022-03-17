import React from "react";
import "./login.scss";
const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Login</h1>
          <input type="email" placeholder="Enter your email or phone number" />
          <input type="password" placeholder="Enter your password here" />
          <button className="loginButton">Sign In</button>
          <span>
            Net to Netflix <b>Sign Up Now</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn More</b>
          </small>
        </form>
      </div>
    </div>
  );
};
export default Login;
