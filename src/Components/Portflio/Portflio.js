import React from "react";
import "./Portflio.css";

const Portflio = props => {
  return (
    <div className="Portflio-container w-75">
      <div className="Portflio-items">
        <div className="Portflio-item">
          <div>
            <img
              className="Portflio-item-img"
              top
              // width="100%"
              src="/img/watch.jpg"
              alt="Card image cap"
            />
          </div>
          <div className="Portflio-item-title">Card title</div>
          <div>
            <i
              className="fas fa-star feedback-icon"
              style={{ marginLeft: "80px" }}
            ></i>
            <i className="fas fa-star feedback-icon"></i>
            <i className="fas fa-star feedback-icon"></i>
            <i className="fas fa-star feedback-icon"></i>
            <i className="fas fa-star feedback-icon"></i>
          </div>
        </div>

        <div className="Portflio-item">
          <img
            className="Portflio-item-img"
            style={{
              borderRadius: " 50% 0"
            }}
            top
            // width="100%"
            src="/img/watch.jpg"
            alt="Card image cap"
          />

          <div className="Portflio-item-title">Card title</div>
          <div>
            <i
              className="fas fa-star feedback-icon"
              style={{ marginLeft: "80px" }}
            ></i>
            <i className="fas fa-star feedback-icon"></i>
            <i className="fas fa-star feedback-icon"></i>
            <i className="fas fa-star feedback-icon"></i>
            <i className="fas fa-star feedback-icon"></i>
          </div>
        </div>
      </div>
      <div className="Portflio-title">
        {" "}
        See More
        <i class="fas fa-chevron-right mt-1" style={{ paddingLeft: "5px" }}></i>
      </div>
    </div>
  );
};

export default Portflio;
