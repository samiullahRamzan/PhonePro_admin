import { useNavigate } from "react-router-dom";
import "../styles/users.css";
import { useEffect, useState } from "react";
import { viewUsers } from "../axios/users_axios";
import User_Shop from "../components/User_Shop";

const Users = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    navigate("regular-user");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const users_data = await viewUsers();
      console.log("here is users_data", users_data);
      setData(users_data);
      // set shop and regular user in local Storage
      localStorage.setItem("TotalShopUsers", users_data.shop.length);
      localStorage.setItem("TotalRegularUsers", users_data.user.length);
    };

    fetchData();
  }, []);

  return (
    <User_Shop
      heading="User/Shop"
      moveToUser="regular-user"
      moveToShop="shop"
      data={data}
    />
  );
};

export default Users;
