import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Spinner } from "reactstrap";
import "./upperSection-Profile-Info.css";
import PersonalInfoModal from "../Modal/PersonalInfo/PersonalInfoModal";
// import profilePic from "profilephoto.png";
import profilePic from "../../profileImage/profilephoto.png";
const PersonalInfo = props => {
  // console.log("current user", props.currentUser);
  let currentcountry = Object.values(props.currentUser.country);
  //  console.log(currentcountry[1]);
  return (
    <div>
      <Container>
        <div className="upper-container">
          <Row>
            <Col lg="8">
              <div className="first-profile-info">
                <div className="upper-info">
                  <div className="profile-photo">
                    {props.currentUser.imgUrl ? (
                      <img
                        src={
                          "http://localhost:4402/" + props.currentUser.imgUrl
                        }
                        className="img"
                        alt="personal pic"
                      />
                    ) : (
                      <img
                        src={profilePic}
                        className="img"
                        alt="personal pic"
                      />
                    )}
                    {/* <img src={profilePic} className="img" alt="personal pic" /> */}

                    <div className="edit-icon">
                      <PersonalInfoModal />
                    </div>
                  </div>
                  <div className="username-location">
                    {props.currentUser.companyName ? (
                      <span>{props.currentUser.companyName} </span>
                    ) : (
                      props.currentUser.paymentData && (
                        <span>company-Name </span>
                      )
                    )}
                    <br />
                    <span className="font-smaller">
                      {props.currentUser.jobTitle ? (
                        <span>{props.currentUser.jobTitle} </span>
                      ) : (
                        <span>job-Title </span>
                      )}
                    </span>
                    <br />
                    <span className="map-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <span className="location">
                      {currentcountry[1] ? (
                        <span>{currentcountry[1]} </span>
                      ) : (
                        <span>country-Title </span>
                      )}
                    </span>
                  </div>
                </div>

                <div className="job">
                  <p className="job-title">
                    {props.currentUser.firstName}&nbsp;
                    {props.currentUser.lastName}
                  </p>
                  <p className="job-description">
                    {props.currentUser.description ? (
                      <span>{props.currentUser.description} </span>
                    ) : (
                      <span>Descripe yourself .......... </span>
                    )}
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="col-profile-setting">
                <div className="profile-setting">
                  <p>Profile Setting</p>
                </div>
                <div className="loctaion">
                  <h6>Location</h6>
                  <p>Cairo</p>
                </div>
                <div className="languages">
                  <h6>languages</h6>
                  <p>English</p>
                </div>
                <div className="profile-link">
                  <p>ProfileLink</p>
                </div>
                <div className="link">
                  <p>http://www.nameproject.com</p>
                </div>
                <div className="copylink">
                  <p>CopyLink</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
const mapStateToProps = reduxState => {
  // console.log("test map state propes");
  return {
    currentUser: reduxState.Users.currentUser
  };
};
export default connect(mapStateToProps)(PersonalInfo);
