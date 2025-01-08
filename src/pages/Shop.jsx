import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { deleteUser } from "../axios/users_axios";

import "../styles/regularUser.css";

const Shop = () => {
  const { data } = useOutletContext();

  const [Shops, setShops] = useState(data?.shop || []);

  const delete_user = async (userId) => {
    try {
      const response = await deleteUser(userId);
      console.log("here is a response ", response);
      // Update frontend state
      setShops((prevUsers) => prevUsers.filter((user) => user._id !== userId));
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
            <th>Shop Name</th>
            <th>Shop Owner</th>
            <th>Email</th>
            <th>Shop Images</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Shops?.map((shop, index) => (
            <tr key={shop._id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={shop.image || "/profile1.jpg"}
                  className="Profile_img"
                />
                {shop.shopName}
              </td>
              <td>{shop.shopOwnerName}</td>
              <td>{shop.email}</td>
              <td>
                {shop?.images.map((image, index) => (
                  <img
                    key={index}
                    src={image || "/profile1.jpg"}
                    className="Profile_img"
                  />
                ))}
              </td>
              <td>
                <MdDelete
                  className="delete_icon"
                  onClick={() => delete_user(shop._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shop;
