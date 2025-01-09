import { NavLink, Outlet } from "react-router-dom";
import { BiSolidUserAccount } from "react-icons/bi";
import { GiShop } from "react-icons/gi";

import "../styles/users.css";

const User_Shop = ({ heading, moveToUser, moveToShop, data }) => {
  return (
    <div>
      <h3>{heading}</h3>
      <nav>
        <NavLink to={moveToUser} className="item">
          <BiSolidUserAccount className="icon" />
          User
        </NavLink>
        <NavLink to={moveToShop} className="item">
          <GiShop className="icon" />
          Shop
        </NavLink>
      </nav>
      <Outlet context={{ data }} />
    </div>
  );
};

export default User_Shop;
