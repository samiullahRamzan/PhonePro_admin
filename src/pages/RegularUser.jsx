import React from "react";
import { useOutletContext } from "react-router-dom";

//import "../styles/regularUser.css";

const RegularUser = () => {
  const { data } = useOutletContext();
  const User = data?.user;
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr className="main_row">
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {User.map((user, index) => {
            <tr key={user._id} className="main_row">
              {console.log("here is index", index + 1)}
              <td>{index + 1}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RegularUser;
