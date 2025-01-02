import React from "react";
import { useOutletContext } from "react-router-dom";

const RegularUser = () => {
  const { data } = useOutletContext();
  console.log("data in regular user", data.user);
  return <div>Regular user</div>;
};

export default RegularUser;
