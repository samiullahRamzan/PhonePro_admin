import { FaLocationPin } from "react-icons/fa6";

import "../styles/regularUserAd.css";

const AdCard = ({ Ad }) => {
  return (
    <div className="main">
      {Ad.map((ad, index) => (
        <div key={index} className="card">
          <img src={ad.images[0]} className="card-img" />
          <div className="card-content">
            <h4>{ad.brand}</h4>
            <p>Rs.{ad.price}</p>
            {ad?.createdBy?.shopName && <h5>{ad.createdBy.shopName}</h5>}
            <p>
              <FaLocationPin className="location" />
              {ad.location}
            </p>
            <button>View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdCard;
