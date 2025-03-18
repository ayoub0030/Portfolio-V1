import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

// Additional images for project details
const chatifyAdditional = [chatify, leaf, bitsOfCode];
const leafAdditional = [leaf, chatify, bitsOfCode];
const blogAdditional = [bitsOfCode, chatify, leaf];
const editorAdditional = [editor, chatify, bitsOfCode];

function ProjectsHome() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Recent Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              fullDescription="Chatify is a comprehensive chat application designed to create personal chat rooms or workspaces where friends can collaborate, share resources, and communicate in real-time. Built with modern web technologies, it offers a seamless and intuitive user experience with a focus on real-time interaction and media sharing capabilities."
              technologies={["React.js", "Material-UI", "Firebase", "Firestore", "Authentication", "Cloud Storage"]}
              features={[
                "Real-time messaging with instant updates",
                "Image and file sharing capabilities",
                "Emoji reactions to messages",
                "User authentication and profile management",
                "Responsive design for mobile and desktop",
                "Dark mode support"
              ]}
              additionalImages={chatifyAdditional}
              ghLink="https://github.com/ayoub0030/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              fullDescription="Bits-0f-C0de is a modern, responsive blog platform that allows for easy content creation and management. Built with Next.js and styled with Tailwind CSS, it provides an optimal reading experience across all devices while maintaining high performance standards. The blog supports markdown for easy content creation and includes features like dark mode for comfortable reading in any environment."
              technologies={["Next.js", "Tailwind CSS", "Markdown", "React", "Vercel"]}
              features={[
                "Responsive design for all devices",
                "Markdown support for easy content creation",
                "Dark mode toggle for comfortable reading",
                "Static site generation for improved performance",
                "SEO optimized structure",
                "Fast page transitions"
              ]}
              additionalImages={blogAdditional}
              ghLink="https://github.com/ayoub0030/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview."
              fullDescription="Editor.io is a versatile online code and markdown editor that supports a wide range of features for developers and writers. Built with React.js, it offers a seamless coding experience with instant previews, syntax highlighting, and support for HTML, CSS, and JavaScript. The markdown editor includes features like GFM support, custom HTML tags, and a toolbar for easy formatting."
              technologies={["React.js", "JavaScript", "HTML", "CSS", "Markdown", "GFM"]}
              features={[
                "Online code editor with instant preview",
                "Support for HTML, CSS, and JavaScript",
                "Markdown editor with GFM support",
                "Custom HTML tags and toolbar",
                "Syntax highlighting and code completion",
                "Responsive design for mobile and desktop"
              ]}
              additionalImages={editorAdditional}
              ghLink="https://github.com/ayoub0030/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectsHome;
