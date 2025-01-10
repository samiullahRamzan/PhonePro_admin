import { useState } from "react";
import { FaLocationPin } from "react-icons/fa6";
import "../styles/regularUserAd.css";
import Modal from "./AdModal";
import { updateAdStatus } from "../axios/Ad_axios";

const AdCard = ({ Ad }) => {
  const [selectedAd, setSelectedAd] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (ad) => {
    setSelectedAd(ad);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedAd(null);
    setIsModalOpen(false);
  };

  const updateAd = async (id, status, statusReason) => {
    try {
      const response = await updateAdStatus(id, status, statusReason);
      console.log("here is update ad response", response);
    } catch (error) {
      console.log("here is an error in update ad", error);
      alert(error);
    }
  };

  return (
    <div className="main">
      {Ad.map((ad, index) => (
        <div key={index} className="card">
          <img src={ad.images[0]} className="card-img" alt={ad.brand} />
          <div className="card-content">
            <h4>{ad.brand}</h4>
            <p>Rs.{ad.price}</p>
            {ad?.createdBy?.shopName && <h5>{ad.createdBy.shopName}</h5>}
            <p>
              <FaLocationPin className="location" />
              {ad.location}
            </p>
            <button onClick={() => handleViewDetails(ad)}>View Details</button>
          </div>
        </div>
      ))}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        Ad={selectedAd}
        updateAd={updateAd}
      />
    </div>
  );
};

export default AdCard;
