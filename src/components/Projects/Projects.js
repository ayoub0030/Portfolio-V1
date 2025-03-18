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

// Additional images for project details
const chatifyAdditional = [chatify, editor, leaf]; // Example - replace with actual additional images
const blogAdditional = [bitsOfCode, chatify, editor]; // Example - replace with actual additional images
const editorAdditional = [editor, chatify, leaf]; // Example - replace with actual additional images

function Projects() {
  return (
    <Container fluid className="project-section">
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
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              fullDescription="Editor.io is a powerful online code and markdown editor designed for developers and content creators. It offers real-time preview capabilities for both code (HTML, CSS, JS) and markdown content, making it an essential tool for quick prototyping, documentation creation, and educational purposes. With features like auto-save functionality and support for custom HTML tags, it streamlines the development and documentation process."
              technologies={["React.js", "CodeMirror", "Marked", "LocalStorage API", "HTML/CSS/JS", "GFM"]}
              features={[
                "Code editor with syntax highlighting for HTML, CSS, and JavaScript",
                "Real-time website preview as you type",
                "Markdown editor with GitHub Flavored Markdown support",
                "Custom HTML tags support in markdown",
                "Toolbar for common markdown formatting",
                "Auto-save functionality using browser's LocalStorage",
                "Responsive design for use on any device"
              ]}
              additionalImages={editorAdditional}
              ghLink="https://github.com/ayoub0030/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              fullDescription="Plant AI is an advanced plant disease detection system that leverages deep learning to identify diseases in plants from images of their leaves. The system was trained on a comprehensive dataset from Kaggle, covering 38 different classes of plant leaf conditions across 14 unique plant species. Using transfer learning with the ResNet34 architecture, the model achieved an impressive 98% accuracy in disease detection."
              technologies={["PyTorch", "ResNet34", "CNN", "Transfer Learning", "Python", "Heroku"]}
              features={[
                "Image classification for 38 different plant leaf conditions",
                "Disease detection for 14 unique plant species",
                "98% accuracy using ResNet34 pretrained model",
                "Web interface for easy image upload and analysis",
                "Detailed disease information and treatment recommendations",
                "Mobile-responsive design for field use"
              ]}
              additionalImages={[leaf, chatify, emotion]}
              ghLink="https://github.com/ayoub0030/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              fullDescription="AI For Social Good is a project focused on using artificial intelligence to address critical social issues, specifically suicide prevention. By leveraging Natural Language Processing techniques, the system is designed to analyze text content from social media and other online platforms to identify potential suicide-related posts and expressions of suicidal ideation. This early detection system aims to connect at-risk individuals with appropriate resources and support."
              technologies={["NLP", "Python", "TensorFlow", "BERT", "Sentiment Analysis", "Machine Learning"]}
              features={[
                "Detection of suicide-related content in online posts",
                "Analysis of linguistic patterns associated with suicidal ideation",
                "Real-time monitoring capabilities for early intervention",
                "Privacy-preserving processing of sensitive data",
                "Integration with resource providers for support referrals",
                "Multi-platform compatibility for broad coverage"
              ]}
              additionalImages={[suicide, emotion, leaf]}
              ghLink="https://github.com/ayoub0030/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              fullDescription="This Face Recognition and Emotion Detection system combines computer vision and deep learning to identify human faces and analyze their emotional expressions. Built using a Convolutional Neural Network (CNN) trained on the FER-2013 dataset, the model can recognize various emotional states with a peak accuracy of 60.1%. The system uses OpenCV for initial face detection, then passes the detected faces to the trained classifier for emotion prediction."
              technologies={["Keras", "TensorFlow", "CNN", "OpenCV", "FER-2013 Dataset", "Python"]}
              features={[
                "Real-time face detection using OpenCV",
                "Emotion classification into 7 categories (happy, sad, angry, etc.)",
                "60.1% accuracy on emotion detection",
                "Works with both static images and video streams",
                "Lightweight model suitable for edge devices",
                "Non-intrusive analysis capability"
              ]}
              additionalImages={[emotion, suicide, chatify]}
              ghLink="https://github.com/ayoub0030/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
