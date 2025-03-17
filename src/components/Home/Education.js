import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";

function Education() {
  return (
    <Container fluid className="home-about-section" id="education">
      <Container>
        <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
          My <span className="purple">Education</span>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          My academic journey and certifications
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="education-card">
            <Card className="education-card-view">
              <Card.Body>
                <Card.Title className="purple" style={{ fontSize: "25px", fontWeight: "bold" }}>2019-2020</Card.Title>
                <Card.Text style={{ textAlign: "left", fontSize: "22px", fontWeight: "bold", marginTop: "10px" }}>
                  Baccalaureat
                </Card.Text>
                <Card.Text style={{ textAlign: "left", color: "#c770f0", fontWeight: "500" }}>
                  LYCÉE EL-OULAA
                </Card.Text>
                <Card.Text style={{ textAlign: "left" }}>
                  Baccalaureat Mathimatical science
                </Card.Text>
                <Card.Link href="#" className="purple see-more-link">
                  See more <FaExternalLinkAlt style={{ marginBottom: "2px" }} />
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="education-card">
            <Card className="education-card-view">
              <Card.Body>
                <Card.Title className="purple" style={{ fontSize: "25px", fontWeight: "bold" }}>2020-2025</Card.Title>
                <Card.Text style={{ textAlign: "left", fontSize: "22px", fontWeight: "bold", marginTop: "10px" }}>
                  Computer science engineering
                </Card.Text>
                <Card.Text style={{ textAlign: "left", color: "#c770f0", fontWeight: "500" }}>
                  EMSI CENTRE CASABLANCA
                </Card.Text>
                <Card.Text style={{ textAlign: "left" }}>
                  4th year computer science engineering at Emsi...
                </Card.Text>
                <Card.Link href="#" className="purple see-more-link">
                  See more <FaExternalLinkAlt style={{ marginBottom: "2px" }} />
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="education-card">
            <Card className="education-card-view">
              <Card.Body>
                <Card.Title className="purple" style={{ fontSize: "25px", fontWeight: "bold" }}>2021-2022</Card.Title>
                <Card.Text style={{ textAlign: "left", fontSize: "22px", fontWeight: "bold", marginTop: "10px" }}>
                  Kaggle Certifications
                </Card.Text>
                <Card.Text style={{ textAlign: "left", color: "#c770f0", fontWeight: "500" }}>
                  KAGGLE
                </Card.Text>
                <Card.Text style={{ textAlign: "left" }}>
                  Certifications in Python, SQL...
                </Card.Text>
                <Card.Link href="#" className="purple see-more-link">
                  See more <FaExternalLinkAlt style={{ marginBottom: "2px" }} />
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="education-card">
            <Card className="education-card-view">
              <Card.Body>
                <Card.Title className="purple" style={{ fontSize: "25px", fontWeight: "bold" }}>2022-2023</Card.Title>
                <Card.Text style={{ textAlign: "left", fontSize: "22px", fontWeight: "bold", marginTop: "10px" }}>
                  GDG badges
                </Card.Text>
                <Card.Text style={{ textAlign: "left", color: "#c770f0", fontWeight: "500" }}>
                  GOOGLE DEVELOPERS
                </Card.Text>
                <Card.Text style={{ textAlign: "left" }}>
                  Badges in DataStore, WorkManager, SQL...
                </Card.Text>
                <Card.Link href="#" className="purple see-more-link">
                  See more <FaExternalLinkAlt style={{ marginBottom: "2px" }} />
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
