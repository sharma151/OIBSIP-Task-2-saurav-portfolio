// import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
// import axios from "axios";
import pdf from "../../Assets/Saurav-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  // const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  // const [spojRank, upadteSpojRank] = useState(0);
  // const [hackerrank, upadteHackerank] = useState(0);
  // const [sem, upadateSem] = useState(0);
  // const [cgpa, upadteCgpa] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get(uri)
  //     .then((res) => {
  //       upadteSpojRank(res.data.message[0].spojRank);
  //       upadteHackerank(res.data.message[1].hackerrank);
  //       // upadteCgpa(res.data.message[2].cgpa);
  //       // upadateSem(res.data.message[3].sem);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Intern at MP Police Cyber cell"
              date="June 2022 - present"
              content={[
                "Worked as cybersecurity awareness volunteer. went to various places and make people aware about the cyber-crime and cyber security.",
                "Learned and worked on various types of cyber attacks and laws regarding it.",
              ]}
            />
            <Resumecontent
              title="Intern at 1stop.ai"
              date="march 2022 - april 2022"
              content={["Worked as  business development intern for a week."]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="UI/UX Designer [Tech Fest of OCT,Bhopsl]"
              content={[
                "Participated and Created a landing page for a E-commerce website.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Oriental college of technology, Bhopal "
              date="2020 - Present"
              // content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
              content={[`CGPA:  9.31  ( Till 4th Sem )`]}
            />
            <Resumecontent
              title="[ DAV sushil kedia vishwa Bharti ] 12th Board"
              date="2018 - 2020"
              content={["Precentage: 81%"]}
            />
            <Resumecontent
              title=" [ Gyan Bharti Public School  ] 10th Board  "
              date="2018"
              content={["Precentage: 73%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Participated in International English Olympiad and secured 1271 rank.",
                "Participated in International Science Olympiad and secured 3591 rank.",
                "Participated in International Mathematics Olympiad and secured 4930 rank.",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
