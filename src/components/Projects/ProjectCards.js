import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  // Additional images for the project (to be shown in the modal)
  // In a real scenario, you would get these from props
  const additionalImages = props.additionalImages || [props.imgPath];
  
  // Mock technologies used - in real scenario this would come from props
  const technologies = props.technologies || ["React", "Bootstrap", "JavaScript"];
  
  // Mock features - in real scenario this would come from props
  const features = props.features || [
    "Responsive design",
    "Interactive UI", 
    "Fast performance"
  ];

  return (
    <>
      <Card className="project-card-view" onClick={handleModalOpen}>
        <div className="project-card-img-container">
          <Card.Img variant="top" src={props.imgPath} alt="card-img" />
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
        onHide={handleModalClose} 
        size="lg"
        centered
        className="project-modal"
      >
        <Modal.Header className="project-modal-header">
          <Modal.Title className="project-modal-title">
            {props.title}
          </Modal.Title>
          <Button 
            variant="link" 
            className="project-modal-close-btn" 
            onClick={handleModalClose}
          >
            <AiOutlineClose size={24} />
          </Button>
        </Modal.Header>
        <Modal.Body className="project-modal-body">
          <div className="project-modal-image-gallery">
            {additionalImages.map((img, index) => (
              <div key={index} className="project-modal-image-container">
                <img 
                  src={img} 
                  alt={`${props.title} screenshot ${index + 1}`} 
                  className="project-modal-image"
                />
              </div>
            ))}
          </div>
          
          <div className="project-modal-description">
            <h4>Project Description</h4>
            <p>{props.description}</p>
          </div>
          
          <div className="project-modal-details">
            <div className="project-modal-technologies">
              <h4>Technologies Used</h4>
              <ul>
                {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-modal-features">
              <h4>Key Features</h4>
              <ul>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="project-modal-footer">
          <Button 
            className="project-button" 
            variant="primary" 
            href={props.ghLink} 
            target="_blank"
          >
            <BsGithub /> &nbsp; GitHub
          </Button>
          {props.demoLink && (
            <Button
              className="project-button"
              variant="primary"
              href={props.demoLink}
              target="_blank"
            >
              <CgWebsite /> &nbsp; Live Demo
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ProjectCards;
