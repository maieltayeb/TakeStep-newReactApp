import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Col
} from 'reactstrap';
import "./ourCardCategory.css"

const OurCategoeyCard = (props) => {
  return (
    <>
  
    <Col sm={3} style={{margin:"0px 100px 0px 0px","border-top-left-radius":"7.5rem",
    "padding-top": "9px",
    "padding-bottom": "9px",backgroundColor:"#494848","padding-right": "8px",
    "padding-left": "8px"}}>
        <Card className=" cardCategory" style={{ "border-bottom-right-radius": "3.25rem"}} >
          <img  className="imgcardCategory " width="100%" src={props.srcc} alt="Card image cap" />
          <CardBody>
  <CardTitle style={{"fontFamily":"bold"}}><b>{props.name}</b></CardTitle> 
            <CardText className="text-center m-0">
             {props.description}
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col sm={3} style={{"border-top-right-radius":"7.5rem",
    "padding-top": "9px",
    "padding-bottom": "9px",backgroundColor:"#494848","padding-right": "8px",
    "padding-left": "8px"}}>
        <Card className=" cardCategory" style={{ "border-bottom-left-radius": "3.25rem"}} >
          <img  className="imgcardCategory " width="100%" src={props.srccc} alt="Card image cap" />
          <CardBody>
  <CardTitle style={{"fontFamily":"bold"}}><b>{props.nameTwo}</b></CardTitle> 
            <CardText className="text-center m-0">
            {props.descriptionTwo}
            </CardText>
          </CardBody>
        </Card>
      </Col>
    
     
      {/* <Col sm={3} style={{margin:"0px 100px 0px auto ","border-top-right-radius":"7.5rem",
    "padding-top": "9px",
    "padding-bottom": "9px", "padding-left": "8px","padding-right": "8px",backgroundColor:"#494848"}}>
        <Card className=" cardCategory" style={{ "border-bottom-left-radius": "3.25rem"}}>
          <img  className="imgcardCategory " width="100%" src="/img/webDesign.jpg" alt="Card image cap" />
          <CardBody>
          <CardTitle>Card title</CardTitle> 
            <CardText className="text-center m-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </Col>
     */}
    </>
  );
};

export default OurCategoeyCard ;