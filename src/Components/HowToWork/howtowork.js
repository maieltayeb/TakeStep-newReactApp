import React from "react";
import { Jumbotron, Container, Row } from "reactstrap";
import "./howtowork.css";
// import bgimage from "../../../../public/images/Howitwork.png";
import HowItWorkCard from "./../Card/HowItWorkCard/howitworkcard";
const HowITWork = (props) => {
  return (
    <div style={{ position: "relative" }}>
      <Jumbotron fluid className="fluiid" style={{ borderRadius: "0px" }}>
        <Jumbotron className="black-dev" style={{ borderRadius: "0px" }}>
          <Container fluid className="text-center">
            <div className="Ques-title">
              <p className="m-0 text-light"> How it work ?</p>
            </div>
            <p className="Ques-ans text-center mt-5">
            Just create your account , chosse what you want to be  <br /> 
            Volunteer or bussiness-owner and become one of our community
             
             
            </p>
          </Container>
        </Jumbotron>
      </Jumbotron>
      <Container
        className="bg-white shadow"
        style={{
          position: "absolute",
          top: "253px",
          left: "271px",
          width: "60%",
        }}
      >
        <Row style={{ padding: "36px 0" }}>
          <HowItWorkCard></HowItWorkCard>
        </Row>
      </Container>
    </div>
  );
};

export default HowITWork;
