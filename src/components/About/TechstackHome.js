import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TechstackHome() {
  const skills = [
    { name: "VisualBasic", percentage: 80 },
    { name: "C/C++", percentage: 70 },
    { name: "BASH/Shell", percentage: 65 },
    { name: "HTML/CSS/JS", percentage: 75 },
    { name: "PHP", percentage: 75 },
    { name: "Python", percentage: 70 },
    { name: "SQL/PLSQL", percentage: 65 },
    { name: "Arduino", percentage: 85 }
  ];

  return (
    <Container fluid className="home-about-section">
      <Container>
        <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
          My <span className="purple">Skills</span>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={8} className="skill-section">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-percentage">{skill.percentage}%</div>
                <div className="skill-bar">
                  <div 
                    className="skill-bar-fill" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default TechstackHome;
