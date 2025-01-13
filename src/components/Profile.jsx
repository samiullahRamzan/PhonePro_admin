import { BiEdit } from "react-icons/bi";
import { useSelector } from "react-redux";

import "../styles/profile.css";

const Profile = () => {
  // Here is a login user response from react redux
  var response_user = useSelector((state) => state.user);
  console.log("here is a response in profile", response_user);
  response_user = response_user?.admin;

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
        <div className="user--detail">
          <img src="/profile1.jpg" alt="" />
          <h4 className="username">{response_user.name}</h4>
          <p>{response_user.email}</p>
          <p>
            <strong>Role: </strong>
            {response_user.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
