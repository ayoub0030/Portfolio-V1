import React, { useEffect } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ImageViewer({ src, alt, onClose, onNext, onPrev, hasMultipleImages }) {
  // Add keyboard event listener for Escape key and arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight" && hasMultipleImages) {
        onNext();
      } else if (e.key === "ArrowLeft" && hasMultipleImages) {
        onPrev();
      }
    };
    
    // Add event listener
    window.addEventListener("keydown", handleKeyDown);
    
    // Prevent scrolling on body when viewer is open
    document.body.style.overflow = "hidden";
    
    // Clean up
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose, onNext, onPrev, hasMultipleImages]);

  // Prevent clicks inside the image from closing the viewer
  const handleImageClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="fullscreen-image-viewer" onClick={onClose}>
      <button className="fullscreen-image-close" onClick={onClose}>
        <FaTimes />
      </button>
      <div className="fullscreen-image-container">
        {hasMultipleImages && (
          <button 
            className="fullscreen-image-nav fullscreen-image-prev" 
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
          >
            <FaChevronLeft />
          </button>
        )}
        
        <img
          src={src}
          alt={alt}
          className="fullscreen-image"
          onClick={handleImageClick}
        />
        
        {hasMultipleImages && (
          <button 
            className="fullscreen-image-nav fullscreen-image-next" 
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            <FaChevronRight />
          </button>
        )}
      </div>
    </div>
  );
}

export default ImageViewer;
