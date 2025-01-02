import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { BiSolidUserAccount } from "react-icons/bi";
import { GiShop } from "react-icons/gi";

import "../styles/users.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { viewUsers } from "../axios/users_axios";
const Users = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();

  // const response_user = useSelector((state) => state.user);
  // console.log("here is a response in Users", response_user);

  useEffect(() => {
    navigate("regular-user");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const users_data = await viewUsers();
      console.log("here is users_data", users_data);
      setData(users_data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>User/Shop</h3>
      <nav>
        <NavLink to="regular-user" className="item">
          <BiSolidUserAccount className="icon" />
          User
        </NavLink>
        <NavLink to="shop" className="item">
          <GiShop className="icon" />
          Shop
        </NavLink>
      </nav>
      <Outlet context={{ data }} />
    </div>
  );
};

export default Users;
