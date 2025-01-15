import { useOutletContext } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useState, useEffect } from "react";

import "../styles/regularUser.css";
import { delete_user } from "../components/api/deleteUser";

const RegularUser = () => {
  const { data } = useOutletContext();
  const [User, setUser] = useState([]);

  const role = localStorage.getItem("role");
  console.log("here is role", role);

  // Update User state whenever data changes
  useEffect(() => {
    if (data?.user) {
      setUser(data.user);
    }
  }, [data]);

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
              {role == "super_admin" ? (
                <td>
                  <MdDelete
                    className="delete_icon"
                    onClick={() => delete_user(setUser, user._id)}
                  />
                </td>
              ) : (
                <td>Cannot delete</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegularUser;
