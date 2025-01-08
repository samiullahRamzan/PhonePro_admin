import { useOutletContext } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

import "../styles/regularUser.css";
import { deleteUser } from "../axios/users_axios";

const RegularUser = () => {
  const { data } = useOutletContext();
  const [User, setUser] = useState(data?.user || []);

  const delete_user = async (userId) => {
    try {
      const response = await deleteUser(userId);
      console.log("here is a response ", response);
      // Update frontend state
      setUser((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {console.log("here is user in regular user ", User)}
          {User?.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={user.image || "/profile1.jpg"}
                  className="Profile_img"
                />
                {user.fullName}
              </td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <MdDelete
                  className="delete_icon"
                  onClick={() => delete_user(user._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegularUser;
