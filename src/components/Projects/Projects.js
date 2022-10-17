import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Businesscard from "../../Assets/Projects/Businesscard.png";
import weatherapp from "../../Assets/Projects/weatherapp.png";
import userauthentication from "../../Assets/Projects/userauthentication.png";
import drumkit from "../../Assets/Projects/drumkit.png";
import keylogger from "../../Assets/Projects/keylogger.png";
import blogpage from "../../Assets/Projects/blogpage.png";

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
              imgPath={Businesscard}
              isBlog={false}
              title="QR-code and Business-card generator"
              description="QR-code Business-Card generator is a web app made with vue.js where user will be able to  generate the QR-code and business-card."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keylogger}
              isBlog={false}
              title="Keylogger"
              description="it is a python script which stores the keystrokes of the user keyboard for the purpose of gaining information about the user without the user's knowledge."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Weather app"
              description="It tells the weather condition of the particular location. it is developed using HTML , CSS , JS."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={userauthentication}
              isBlog={false}
              title="User-Authentication"
              description="User authentication verifies the identity of a user attempting to gain access to a network or computing resource by authorizing. it is made with node.js and passport.js"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drumkit}
              isBlog={false}
              title="Drumkit"
              description="It is the basic drumkit app made using html,css,js where user can play various drum using the keystrokes."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogpage}
              isBlog={false}
              title="Blogpage"
              description="It is a basic blog page where user can compose their daily blogs. it is made using Node js, ejs"
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
