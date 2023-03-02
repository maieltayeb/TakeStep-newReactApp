import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryCard from "./Category-Card";
import "./CardFrame.css";
import cardImage from "../../../images/computer.png";
class CardFrame extends Component {
  state = {
    cardData: [
      {
        img1: "./assets/hala.jpg",
        title: "web design",
        description: "lorem isbm dolor sign"
      },
      {
        img1: "./assets/hala.jpg",
        title: "web design",
        description: "lorem isbm dolor sign"
      },
      {
        img1: "./assets/hala.jpg",
        title: "web design",
        description: "lorem isbm dolor sign"
      },
      {
        img1: "./assets/hala.jpg1",
        title: "web design",
        description: "lorem isbm dolor sign"
      }
      // {
      //   img1: "./assets/hala.jpg1",
      //   title: "web design",
      //   description: "lorem isbm dolor sign"
      // },
      // {
      //   img1: "./assets/hala.jpg1",
      //   title: "web design",
      //   description: "lorem isbm dolor sign"
      // },
      // {
      //   img1: "./assets/hala.jpg",
      //   title: "web design",
      //   description: "lorem isbm dolor sign"
      // },
      // {
      //   img1: "./assets/hala.jpg",
      //   title: "web design",
      //   description: "lorem isbm dolor sign"
      // }
    ]
  };
  render() {
    // const details = this.state.cardData.map(singleCard => {
    //   return (
    //     <div>
    //       <CategoryCard details={singleCard} />
    //     </div>
    // );
    //});
    return (
      <div>
        <h1 className="all-categories">ALL CATEGORIES</h1>
        <div className="categories">
          <CategoryCard
            title="Web Design"
            description="  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry."
            img={cardImage}
          />
          <CategoryCard
            title="Web Design"
            description="  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry."
            img={cardImage}
          />
          <CategoryCard
            title="Web Design"
            description="  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry."
            img={cardImage}
          />
        </div>
        <div className="categories">
          <CategoryCard
            title="Web Design"
            description="  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry."
            img={cardImage}
          />
          <CategoryCard
            title="Web Design"
            description="  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry."
            img={cardImage}
          />
          <CategoryCard
            title="Web Design"
            description="  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry."
            img={cardImage}
          />
        </div>
      </div>
    );
  }
}
export default CardFrame;
