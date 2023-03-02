import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Category-Card.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const CategoryCard = (props) => {
  return (
    <div className="card-container">
      <Card className="card">
        <CardImg src={props.img} className="card-img" />
        <CardBody>
          <CardTitle className="card-title">{props.title}</CardTitle>

          <CardText className="card-text" style={{}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CategoryCard;
