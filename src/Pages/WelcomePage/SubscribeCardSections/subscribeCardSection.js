import React, { Component } from "react";
import "./subsribeCardsSections.css";
import SubscribeCard from "../../../Components/Card/SubscribeCard/subscribeCard";

class SubscribeCardsSection extends Component {
  state = {
    SubscribeTypes: [
      {
        type: "Free",
        Price: "0.00",
        advatages: [
          "Create Untill 5 Tasks Free",
          "Filter Volunteer Proposals",
         
       
          "Assign Tasks to Volunteer",
          "Rate  Volunteer Proposals",
          "Show B-Owners  Profiles",
          "Show Volunteer  Profiles",
        ]
      },
      {
        type: "Plus",
        Price: "99.00",
        advatages: [
          "Create Untill 20 Tasks Free",
         
          "Filter Volunteer Proposals",
         
       
          "Assign Tasks to Volunteer",
          "Rate  Volunteer Proposals",
          "Show B-Owners  Profiles",
          "Show Volunteer  Profiles",
        ]
      },
      {
        type: "Premium",
        Price: "199.00",
        advatages: [
          "Create Untill 50 Tasks Free",
          "Filter Volunteer Proposals",
         
       
          "Assign Tasks to Volunteer",
          "Rate  Volunteer Proposals",
          "Show B-Owners  Profiles",
          "Show Volunteer  Profiles",
        ]
      }
    ]
  };
  render() {
    return (
      <>
        <div className="containerdiv"> 
        {/* {this.state.SubscribeTypes.map(subCard => {
          return ( */}
            <SubscribeCard
              // type={subCard.type}
              // price={subCard.Price}
              // advatages={subCard.advatages}
            />
          {/* );
        })} */}
        </div> 
      </>
    );
  }
}

export default SubscribeCardsSection;
