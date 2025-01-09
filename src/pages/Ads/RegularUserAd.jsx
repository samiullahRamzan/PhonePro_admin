import { useContext, useEffect, useState } from "react";

const RegularUserAd = () => {
  const { data } = useContext();
  const [UserAd, setUserAd] = useState([]);

  useEffect(() => {
    if (data?.userAd) {
      setUserAd(data.userAd);
    }
  }, [data]);

  return (
    <div>
      <div>regular user ad</div>
    </div>
  );
};

export default RegularUserAd;
