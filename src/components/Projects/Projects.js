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
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/ayoub0030/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
              additionalImages={[leaf, emotion, chatify]} 
              technologies={["PyTorch", "CNN", "Transfer Learning", "ResNet34", "Python"]}
              features={[
                "Disease detection in 14 unique plant species",
                "98% accuracy using ResNet34 model",
                "Web interface for uploading and analyzing plant images",
                "Detailed disease information and treatment recommendations",
                "Model trained on 38 classes of plant leaves"
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/ayoub0030/AI_For_Social_Good"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
              additionalImages={[suicide, leaf, emotion]} 
              technologies={["NLP", "BERT", "Python", "TensorFlow", "Flask"]}
              features={[
                "Sentiment analysis of social media posts",
                "Detection of suicide-related content",
                "Real-time monitoring and alerting system",
                "Privacy-preserving data processing",
                "Integration with support resources"
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/ayoub0030/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"
              additionalImages={[emotion, suicide, leaf]} 
              technologies={["OpenCV", "Keras", "TensorFlow", "CNN", "Python"]}
              features={[
                "Real-time face detection using OpenCV",
                "Emotion classification into 7 categories",
                "Achieved 60.1% accuracy on FER-2013 dataset",
                "Works with multiple faces in a single frame",
                "Lightweight model suitable for edge devices"
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
