import React, { useState } from "react";
import { Label } from "reactstrap";
import "./AddFeedbackModal.css";
import "../../ProjectLink/project-Link-Component.css";
import { FaStar } from "react-icons/fa";
const SatrsRating = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const handleRating = (ratingValue) => {
    setRating(ratingValue);
  };
  return (
    <React.Fragment>
      {" "}
      <Label>Rate Task :</Label>
      <br />
      <div style={{ marginLeft: "80px" }}>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => handleRating(ratingValue)}
              />
              <FaStar
                className="star"
                size={30}
                color={ratingValue <= (hover || rating) ? "#ebc010" : "#888888"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default SatrsRating;
