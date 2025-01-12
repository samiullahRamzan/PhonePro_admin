import React, { useState } from "react";
import "../styles/AdModal.css";
import CustomDropdown from "./CustomDropdown";

const Modal = ({ isOpen, onClose, Post, updatePost }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [statusReason, setStatusReason] = useState("");
  const [selectedOption, setSelectedOption] = useState("Pending");

  if (!isOpen) return null;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Post.images.length - 1
        ? Post.images.length - 1
        : prevIndex + 1
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
            src={Post?.images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="slider-img"
          />
          <button className="slider-btn next" onClick={handleNext}>
            &#8594;
          </button>
        </div>

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
            onClick={() => updatePost(Post._id, selectedOption, statusReason)}
          >
            update Post status
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
