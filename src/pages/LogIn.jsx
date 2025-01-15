import { useState } from "react";
import "../styles/LogIn.css";

import { login } from "../axios/auth_axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/action";

const LogIn = ({ onLogin }) => {
  const [Email, setEmail] = useState("samidev336@gmail.com");
  const [Password, setPassword] = useState("S@mi6504");

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  console.log("here is email", Email);
  console.log("here is password", Password);

  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login(Email, Password);
      console.log("here is response in login screen", response);
      localStorage.setItem("token", response.token);
      localStorage.setItem("admin_id", response.admin._id);
      localStorage.setItem("role", response.admin.role);

      if (response) {
        dispatch(addUser(response));
        onLogin();
        Navigate("/"); // naviagte to login
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="main">
      <img src="mobilePicture.jpg" alt="mobile pic" className="login-image" />

      <div className="sub-main">
        <img src="phonePro.png" className="logo-image" />
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
                autoComplete="email"
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
                autoComplete="password"
                minLength={8}
              />
            </div>
            <button
              type="submit"
              className="submit-button"
              onClick={submitLogin}
            >
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
