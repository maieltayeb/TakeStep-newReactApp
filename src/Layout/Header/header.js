import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import "./header.css";
const Header = props => {
  return (
    <div>
      <Jumbotron fluid className="fluid1 mb-0">
        <Container fluid>
          <h1 className="display-4">Take your step</h1>
          <p className="leead1">
            Take Step connects Volunteers Coash and beginer
            <br />
            developers to teach and guid them with little cost.
          </p>
          <button outline className="secondary">
            Get started
            <div className="span">
              <i id="arrow-ico" className="fa fa-arrow-right"></i>
            </div>
          </button>{" "}
          <div className="yel-dev">
            <div className="pic"></div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
