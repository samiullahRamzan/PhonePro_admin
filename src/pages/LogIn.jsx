import React, { useState } from "react";
import "../styles/LogIn.css";

const LogIn = ({ onLogin }) => {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  return (
    <div className="main">
      <img
        src="../../public/mobilePicture.jpg"
        alt="mobile pic"
        className="login-image"
      />

      <div className="sub-main">
        <img src="../../public/phonePro.png" className="logo-image" />
        <div className="login-card">
          <form className="login-form">
            <div className="textField">
              <label htmlFor="email" label="input-label">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter Email"
                className="form-input"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="textField">
              <label htmlFor="email" label="input-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Enter password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Log In
            </button>
          </form>
        </div>
        <div className="forgot-Password">Forgot Password?</div>
      </div>
    </div>
  );
};

export default LogIn;
