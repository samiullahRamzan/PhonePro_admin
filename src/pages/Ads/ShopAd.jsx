import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import AdCard from "../../components/AdCard";

const ShopAd = () => {
  const { data } = useOutletContext();
  const [shopAd, setShopAd] = useState(data?.shopAd);
  return <AdCard Ad={shopAd} />;
};

export default ShopAd;
