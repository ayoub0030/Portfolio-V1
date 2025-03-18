import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function ProjectsHome() {
  return (
    <Container fluid className="home-about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/ayoub0030/Chatify"
              demoLink="https://chatify-49.web.app/"
              additionalImages={[chatify, editor, bitsOfCode]} 
              technologies={["React", "Firebase", "Material-UI", "Socket.io", "Node.js"]}
              features={[
                "Real-time messaging with WebSockets",
                "User authentication and profile management",
                "File and image sharing capabilities",
                "Message reactions and emojis",
                "Mobile-responsive design"
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/ayoub0030/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
              additionalImages={[bitsOfCode, editor, chatify]} 
              technologies={["Next.js", "Tailwind CSS", "Markdown", "Vercel"]}
              features={[
                "Markdown-based content management",
                "Dark/Light mode toggle",
                "Responsive design for all devices",
                "Fast page loading with Next.js",
                "SEO optimized content"
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview."
              ghLink="https://github.com/ayoub0030/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
              additionalImages={[editor, bitsOfCode, chatify]} 
              technologies={["React", "CodeMirror", "JavaScript", "HTML/CSS"]}
              features={[
                "Live code preview",
                "Syntax highlighting for multiple languages",
                "Markdown preview with GitHub Flavored Markdown support",
                "Auto-save functionality",
                "Responsive layout for coding on any device"
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectsHome;
