import { useState } from "react";
import { FaLocationPin } from "react-icons/fa6";
import "../styles/regularUserAd.css";
import Modal from "./AdModal";
import { deleteAd, updateAdStatus } from "../axios/Ad_axios";
import { RiDeleteBin6Line } from "react-icons/ri";

const AdCard = ({ Ads }) => {
  const [selectedAd, setSelectedAd] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Ad, setAd] = useState(Ads);

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

  const delete_Ad = async (id) => {
    try {
      const response = await deleteAd(id);
      console.log("here is delete ad response", response);

      setAd((ads) => ads.filter((ad) => ad._id != id));
    } catch (error) {
      console.log("here is an error in delete ad", error);
      alert(error);
    }
  };

  return (
    <div className="main">
      {Ad.map((ad, index) => (
        <div key={index} className="card">
          <div className="image-container">
            <div className={`status-label ${ad.status.toLowerCase()}`}>
              {ad.status}
            </div>
            <RiDeleteBin6Line
              className="delete-icon"
              onClick={() => delete_Ad(ad._id)}
            />
            <img src={ad.images[0]} className="card-img" alt={ad.brand} />
          </div>
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
