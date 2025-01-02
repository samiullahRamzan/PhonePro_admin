import React from "react";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const { data } = useOutletContext();
  console.log("shop data", data.shop);
  return <div>shop user</div>;
};

export default Shop;
