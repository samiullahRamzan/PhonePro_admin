import { useEffect, useState } from "react";
import User_Shop from "../../components/User_Shop";
import { useNavigate } from "react-router-dom";
import { viewAds } from "../../axios/Ad_axios";

const Ads = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await viewAds();
        console.log("Ads response", response);
        setData(response);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    navigate("regular-userAd");
  }, []);
  return (
    <User_Shop
      heading="Ads"
      moveToUser="regular-userAd"
      moveToShop="shopAd"
      data={data}
    />
  );
};

export default Ads;
