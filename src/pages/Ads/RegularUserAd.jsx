import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import AdCard from "../../components/AdCard";

const RegularUserAd = () => {
  const { data } = useOutletContext();
  console.log("here is data in ad", data);
  const [UserAd, setUserAd] = useState([]);

  useEffect(() => {
    if (data?.userAd) {
      setUserAd(data.userAd);
    }
  }, [data]);

  if (UserAd.length === 0) {
    return <div className="container">No ads available.</div>;
  }

  return <AdCard Ads={UserAd} />;
};

export default RegularUserAd;
