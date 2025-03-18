import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
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
          <Button className="project-button" variant="primary" href={props.ghLink} target="_blank">
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
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
