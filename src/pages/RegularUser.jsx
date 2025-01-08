import { useOutletContext } from "react-router-dom";
import { MdDelete } from "react-icons/md";

import "../styles/regularUser.css";

const RegularUser = () => {
  const { data } = useOutletContext();
  const User = data?.user;

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
              {console.log("here is index", index + 1)}
              {console.log("here is user image", user.image)}
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
                <MdDelete className="delete_icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegularUser;
