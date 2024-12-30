import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { BiSolidUserAccount } from "react-icons/bi";
import { GiShop } from "react-icons/gi";

import "../styles/users.css";
import { useEffect } from "react";
const Users = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("regular-user");
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
      <Outlet />
    </div>
  );
};

export default Users;
