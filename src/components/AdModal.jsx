import React, { useState } from "react";
import "../styles/AdModal.css";
import CustomDropdown from "./CustomDropdown";

const Modal = ({ isOpen, onClose, Ad, updateAd }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("Pending");
  const [statusReason, setStatusReason] = useState("");

  if (!isOpen) return null;

  console.log("here is ad in modal component ", Ad);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Ad.images.length - 1 ? Ad.images.length - 1 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="image-slider">
          <button className="slider-btn prev" onClick={handlePrev}>
            &#8592;
          </button>
          <img
            src={Ad.images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="slider-img"
          />
          <button className="slider-btn next" onClick={handleNext}>
            &#8594;
          </button>
        </div>
        <h4>{Ad.brand}</h4>
        <p>Rs. {Ad.price}</p>
        {Ad?.createdBy?.fullName && (
          <p>
            <strong>Created By:</strong>
            {Ad.createdBy.fullName}
          </p>
        )}
        {Ad?.createdBy?.shopName && (
          <p>
            <strong>Created By:</strong>
            {Ad.createdBy.shopName}
          </p>
        )}
        <p>
          <strong>Condition:</strong> {Ad.condition}
        </p>
        <p>
          <strong>Location:</strong> {Ad.location}
        </p>
        <p>
          <strong>Description:</strong> {Ad.description}
        </p>
        <div className="status">
          <strong>Status:</strong>
          <CustomDropdown
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
        {selectedOption == "rejected" && (
          <div className="Reason">
            <label htmlFor="Reason" label="reason-label">
              <strong>Status Reason</strong>
            </label>
            <textarea
              type="text"
              id="Reason"
              placeholder="Enter Status Reason"
              className="reason-input"
              value={statusReason}
              onChange={(e) => setStatusReason(e.target.value)}
              required
            />
          </div>
        )}

        {(selectedOption == "approved" || selectedOption == "rejected") && (
          <button
            className="status_button"
            onClick={() => updateAd(Ad._id, selectedOption, statusReason)}
          >
            update ad status
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
