import { BiEdit } from "react-icons/bi";
import { useSelector } from "react-redux";

import "../styles/profile.css";
import { useState } from "react";
import { createAdmin } from "../axios/auth_axios";

const Profile = () => {
  const [click, setClick] = useState(false);
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [Name, setName] = useState();
  const [Role, setRole] = useState();
  // Here is a login user response from react redux
  var response_user = useSelector((state) => state.user);
  console.log("here is a response in profile", response_user);
  response_user = response_user?.admin;

  const create_admin = async (e) => {
    e.preventDefault();
    try {
      const response = await createAdmin(Name, Email, Password, Role);
      console.log("admin created response", response);
      setClick(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="profile">
      {/* header */}
      <div className="header--title">
        <h3>Profile</h3>
        <div className="edit">
          <BiEdit className="icons" />
        </div>
      </div>

      <div className="user--profile">
        {!click && (
          <div className="user--detail">
            <img src="/profile1.jpg" alt="" />
            <h4 className="username">{response_user.name}</h4>
            <p>{response_user.email}</p>
            <p>
              <strong>Role: </strong>
              {response_user.role}
            </p>
          </div>
        )}

        {click && (
          <form className="login-form">
            <div className="textField">
              <label htmlFor="name" label="input-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                className="form-input"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
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
              <label htmlFor="role" label="input-label">
                Role
              </label>
              <input
                type="text"
                id="role"
                placeholder="Enter Role"
                className="form-input"
                value={Role}
                onChange={(e) => setRole(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            <div className="textField">
              <label htmlFor="password" label="input-label">
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
              onClick={create_admin}
            >
              Create Admin
            </button>
          </form>
        )}

        {response_user.role == "super_admin" && click == false ? (
          <button
            className="createAdmin_button"
            onClick={() => setClick(!click)}
          >
            Create Admin
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Profile;
