import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { BiSolidUserAccount } from "react-icons/bi";
import { GiShop } from "react-icons/gi";

import "../styles/users.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Users = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();

  const response = useSelector((state) => state.user);
  console.log("here is a response", response);

  useEffect(() => {
    navigate("regular-user");
  }, []);

  // useEffect(()=>{
  //   const fetchData=await
  // })

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
