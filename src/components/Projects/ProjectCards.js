import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BiLinkExternal, BiZoomIn } from "react-icons/bi";
import ImageViewer from "./ImageViewer";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [carouselImages, setCarouselImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Prepare all images for the carousel
  useEffect(() => {
    const images = [props.imgPath];
    if (props.additionalImages && props.additionalImages.length > 0) {
      images.push(...props.additionalImages);
    }
    setCarouselImages(images);
  }, [props.imgPath, props.additionalImages]);

  useEffect(() => {
    // Check if the device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClose = () => setShowModal(false);
  
  const handleShow = () => {
    if (isMobile) {
      // Add click effect for mobile
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
        setShowModal(true);
      }, 150);
    } else {
      setShowModal(true);
    }
  };
  
  const openFullscreenImage = (imageSrc) => {
    setFullscreenImage(imageSrc);
    // Find the index of the clicked image
    const index = carouselImages.findIndex(img => img === imageSrc);
    if (index !== -1) {
      setCurrentImageIndex(index);
    }
  };
  
  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };
  
  const navigateImages = (direction) => {
    if (carouselImages.length <= 1) return;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % carouselImages.length;
    } else {
      newIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    }
    
    setCurrentImageIndex(newIndex);
    setFullscreenImage(carouselImages[newIndex]);
  };

  return (
    <>
      <Card className="project-card-view" onClick={handleShow}>
        <div className="project-card-img-container">
          <Card.Img 
            variant="top" 
            src={props.imgPath} 
            alt="card-img" 
            className={isClicked ? "clicked" : ""}
          />
          <div className="project-card-overlay">
            <h3>{props.title}</h3>
          </div>
        </div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <div className="project-card-buttons">
            <Button 
              className="project-button" 
              variant="primary" 
              href={props.ghLink} 
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>

            {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

            {!props.isBlog && props.demoLink && (
              <Button
                className="project-button"
                variant="primary"
                href={props.demoLink}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      {/* Project Details Modal */}
      <Modal 
        show={showModal} 
        onHide={handleClose} 
        centered
        dialogClassName="project-modal"
        contentClassName="project-modal-content"
        backdropClassName="project-modal-backdrop"
      >
        <Modal.Header className="project-modal-header">
          <Modal.Title className="project-modal-title">{props.title}</Modal.Title>
          <Button 
            variant="link" 
            className="project-modal-close" 
            onClick={handleClose}
          >
            <FaTimes />
          </Button>
        </Modal.Header>
        <Modal.Body className="project-modal-body">
          {/* Image Carousel */}
          <Carousel 
            interval={null} 
            className="project-modal-carousel"
            indicators={props.additionalImages && props.additionalImages.length > 0}
            controls={props.additionalImages && props.additionalImages.length > 0}
          >
            <Carousel.Item>
              <div className="carousel-image-container">
                <img
                  className="d-block w-100"
                  src={props.imgPath}
                  alt={props.title}
                  onClick={() => openFullscreenImage(props.imgPath)}
                />
                <div className="image-zoom-indicator">
                  <BiZoomIn />
                </div>
              </div>
            </Carousel.Item>
            {props.additionalImages && props.additionalImages.map((img, index) => (
              <Carousel.Item key={index}>
                <div className="carousel-image-container">
                  <img
                    className="d-block w-100"
                    src={img}
                    alt={`${props.title} ${index+1}`}
                    onClick={() => openFullscreenImage(img)}
                  />
                  <div className="image-zoom-indicator">
                    <BiZoomIn />
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>

          {/* Project Details */}
          <div className="project-modal-details">
            <h4>Description</h4>
            <p>{props.description}</p>
            
            {props.fullDescription && (
              <p className="project-modal-full-description">{props.fullDescription}</p>
            )}

            {props.technologies && (
              <div className="project-modal-tech">
                <h4>Technologies</h4>
                <div className="project-modal-tech-list">
                  {props.technologies.map((tech, index) => (
                    <span key={index} className="project-modal-tech-item">{tech}</span>
                  ))}
                </div>
              </div>
            )}

            {props.features && (
              <div className="project-modal-features">
                <h4>Key Features</h4>
                <ul>
                  {props.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer className="project-modal-footer">
          <Button 
            className="project-button project-modal-button" 
            href={props.ghLink} 
            target="_blank"
          >
            <BsGithub /> GitHub
          </Button>
          {!props.isBlog && props.demoLink && (
            <Button
              className="project-button project-modal-button"
              href={props.demoLink}
              target="_blank"
            >
              <CgWebsite /> Live Demo
            </Button>
          )}
        </Modal.Footer>
      </Modal>
      
      {/* Fullscreen Image Viewer */}
      {fullscreenImage && (
        <ImageViewer 
          src={fullscreenImage} 
          alt={props.title} 
          onClose={closeFullscreenImage}
          onNext={() => navigateImages('next')}
          onPrev={() => navigateImages('prev')}
          hasMultipleImages={carouselImages.length > 1}
        />
      )}
    </>
  );
}
export default ProjectCards;
