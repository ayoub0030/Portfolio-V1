import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
              <img
                className="d-block w-100"
                src={props.imgPath}
                alt={props.title}
              />
            </Carousel.Item>
            {props.additionalImages && props.additionalImages.map((img, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={img}
                  alt={`${props.title} ${index+1}`}
                />
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
    </>
  );
}
export default ProjectCards;
