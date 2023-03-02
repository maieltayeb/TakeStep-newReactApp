import React from "react";
import { Card, CardText, CardBody, Col } from "reactstrap";
import "./howitworkcard.css";
import { register } from './../../../serviceWorker';
const HowItWorkCard = props => {
  return (
    <>
      <Col>
        <Card className="cardHowItWork ">
          <img  className="imgHowItWork" width="100%" src="/img/find.svg" alt="Card image cap" />
          <CardBody>
            <CardText className="text-center m-0">
          
             Create Your account as Volunteer or Bussiness-Owner.
      
           
           
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card className="cardHowItWork ">
          <img className="imgHowItWork" width="100%" src="/img/hire.svg" alt="Card image cap" />
          <CardBody>
            <CardText className="text-center m-0">
              Complete your Profile Information , add more info about you.
                          </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card className="cardHowItWork">
          <img   className="imgHowItWork" width="100%" src="/img/work.svg" alt="Card image cap" />
          <CardBody>
            <CardText className="text-center m-0">
            {/* Complete your Profile Information , add more info about you. */}
               Create Task if Bussiness-Owner or apply to Tasks 
              if Volunteer.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card className="cardHowItWork ">
          <img  className="imgHowItWork" width="100%" src="/img/pay.svg" alt="Card image cap" />
          <CardBody>
            <CardText className="text-center m-0">
                As Bussiness-Owner,
             You will find simplified Payment ways .
           
            
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
export default HowItWorkCard;
