import React from "react";
import {
  Jumbotron,
  Row,
  Col,
  Container,
  ListGroupItem,
  Alert
} from "reactstrap";
import "./footer.css";

const Footer = props => {
  return (
    <div>
      <Jumbotron className="bg p-0 m-0 mt-5" style={{ borderRadius: "0px" }}>
        <Jumbotron
          className="m-0 "
          style={{ backgroundColor: "#40434685", borderRadius: "0px" }}
        >
          <Container>
            <Row style={{ justifyContent: "space-around" }}>
              <Col sm="6" md="auto">
                <h3 className="text-warning">COMPANY</h3>
                <ListGroupItem>About Us</ListGroupItem>
                <ListGroupItem>Investor Relations</ListGroupItem>
                <ListGroupItem>Careers</ListGroupItem>
                <ListGroupItem>Upwork Foundation</ListGroupItem>
                <ListGroupItem>Press</ListGroupItem>
                <ListGroupItem>Trust & Safety</ListGroupItem>
                {/* <ListGroupItem>Terms of Service</ListGroupItem>
                <ListGroupItem>Privacy Policy</ListGroupItem>
                <ListGroupItem>Accessibility</ListGroupItem> */}
              </Col>
              <Col sm="6" md="auto">
                <h3 className="text-warning">RESOURCES</h3>
                {/* <ul>
                  <li>Customer Support</li>
                  <li>Customer Stories</li>
                  <li>Business Resources</li>
                  <li>Payroll Services</li>
                  <li>Upwork Reviews</li>
                </ul> */}
                <ListGroupItem>Customer Support</ListGroupItem>
                <ListGroupItem>Customer Stories</ListGroupItem>
                <ListGroupItem>Careers</ListGroupItem>
                <ListGroupItem>Business Resources</ListGroupItem>
                <ListGroupItem>Upwork Reviews</ListGroupItem>
              </Col>
              <Col sm="6" md="auto">
                <h3 className="text-warning">BROWSE</h3>
                {/* <ul>
                  <li> Freelancers by Skill</li>
                  <li>Freelancers in USA</li>
                  <li>Freelancers in UK</li>
                  <li>Freelancers in Canada</li>
                  <li>Freelancers in Australia</li>
                  <li>Jobs in USA</li>
                  <li>Find Jobs</li>
                </ul> */}
                <ListGroupItem>Freelancers by Skill</ListGroupItem>
                <ListGroupItem>Freelancers in USA</ListGroupItem>
                <ListGroupItem>Freelancers in UK</ListGroupItem>
                <ListGroupItem>Upwork Foundation</ListGroupItem>
                <ListGroupItem>Freelancers in Canada</ListGroupItem>
                <ListGroupItem>Freelancers in Australia</ListGroupItem>
                <ListGroupItem>Jobs in USA</ListGroupItem>
              </Col>
            </Row>
          </Container>
          {/* <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead"> */}
          {/* <Button color="primary">Learn More</Button>
          </p> */}
        </Jumbotron>
      </Jumbotron>
      <Alert
        className="bg-warning m-0 text-center text-dark border-warning"
        style={{ borderRadius: "0px" }}
      >
        &copy; CopyRights 2020
      </Alert>
    </div>
  );
};

export default Footer;
