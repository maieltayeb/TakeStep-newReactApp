import React from "react";

const Ads = () => {
  return (
    <div
      className="ads-container"
      style={{ marginTop: "50px", marginLeft: "50px" }}
      style={{ position: "fixed" }}
    >
      <div className="image-socialmedia" style={{ marginBottom: "60px" }}>
        <img
          src="./img/ad1.jpg"
          style={{ width: "10rem", marginLeft: "50px" }}
        />
        <p
          style={{ color: "#ebc010", textAlign: "center", paddingTop: "22px" }}
        >
          Read More..
        </p>
      </div>
      <div className="image-web-image" style={{ marginBottom: "60px" }}>
        <img
          src="./img/ad3.jpg"
          style={{ width: "10rem", marginLeft: "50px" }}
        />
        <p
          style={{ color: "#ebc010", textAlign: "center", paddingTop: "22px" }}
        >
          Read More..
        </p>
      </div>
    </div>
  );
};

export default Ads;
