import React from "react";
import { useOutletContext } from "react-router-dom";
import { MdDelete } from "react-icons/md";

import "../styles/regularUser.css";

const Shop = () => {
  const { data } = useOutletContext();
  console.log("shop data", data.shop);
  const Shops = data?.shop;
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Shop Name</th>
            <th>Shop Owner</th>
            <th>Email</th>
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
                <MdDelete className="delete_icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shop;
