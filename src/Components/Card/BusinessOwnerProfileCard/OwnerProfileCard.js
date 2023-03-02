import React, { useState, useEffect } from "react";
import "./OwnerProfileCard.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import JobCount from "./jobCount";

import profilePic from "../../../profileImage/profilephoto.png";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const OwnerProfileCard = props => {
  const { jobs, currentUser, state } = props;
  const [jobsCurrentUserState, setStateJobsCurrentUser] = useState([]);
  let arrayOwnerUserJob = [];
  jobs.map(job => {
    job.userId === props.currentUser.id
      ? arrayOwnerUserJob.push(job)
      : console.log();
  });
  // console.log("hala", array);
  // state.map(inprog => {
  //   inprog.details.userId === props.currentUser.id
  //     ? array.push({ inprog })
  //     : console.log();
  //   //   : console.log("hhhh", inprog.details.userId);
  //   // console.log("hala", inprog.details.userId);
  // });
  // console.log("hala", state);
  // useEffect(() => {
  // let jobsCurrentUser = jobs.filter(
  //   jobs.map(job => {
  //     job.userId === props.currentUser.id ? array.push(job) : console.log();
  //   });
  //   console.log("hala", array);
  //   setStateJobsCurrentUser(array.length);
  // }, [jobs]);

  // useEffect(() => {
  //   const userJob =
  //     jobs.find(u => u.id === comments.userId) ||
  //     users.find(u => u.id === comment.userId);
  //   setUser(commentUser);
  // }, [comment, volunteerUsers, users]);

  const user = localStorage.getItem("user");
  const volunteerId = JSON.parse(user).id;
  const { users } = props;
  // console.log("users", users);
  const hanldeClick = () => {
    console.log(props);
    props.history.push(`/profile/${volunteerId}`);
  };
  return (
    <>
      {
        <div
          style={{ position: "fixed", width: "250px", marginBottom: "200px" }}
        >
          <Card
            className="owner-card-container owner-card-border"
            style={{ marginTop: "30px" }}
          >
            <Card className="owner-inner-card">
              {users.currentUser.imgUrl ? (
                <CardImg
                  top
                  //width="70%"
                  style={{width:"70%"}}
                  className="mt-4 rounded-circle owner-card-img"
                  src={"http://localhost:4402/" + users.currentUser.imgUrl}
                  //src="./img/developer.jpg"
                  alt="Card image cap"
                />
              ) : (
                <CardImg
                  top

                 // width="70%"
                  className="mt-4 rounded-circle owner-card-img"
                  style={{width:"70%"}}
                  src={profilePic}
                 // src="./img/developer.jpg"
                  alt="Card image cap"
                />
              )}
              {/* <CardImg
          top
          width="100%"
          className="mt-4 rounded-circle owner-card-img"
          src="./img/developer.jpg"
          alt="Card image cap"
        /> */}
              <CardBody>
                <CardTitle
                  onClick={() => {
                    hanldeClick();
                  }}
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  className="owner-card-upper-text"
                >
                  {" "}
                  <strong>
                    {users.currentUser.firstName +
                      " " +
                      users.currentUser.lastName}
                  </strong>{" "}
                </CardTitle>
                <CardSubtitle className="owner-card-upper-text">
                  {users.firstName}
                </CardSubtitle>
              </CardBody>
            </Card>
            <JobCount />
          </Card>
        </div>
      }
    </>
  );
};
const mapStateToProps = state => ({
  users: state.Users,
  currentUser: state.Users.currentUser,
  jobs: state.Users.jobs,
  state: state.Inprogress.appliedTasks
});

export default withRouter(connect(mapStateToProps)(OwnerProfileCard));
