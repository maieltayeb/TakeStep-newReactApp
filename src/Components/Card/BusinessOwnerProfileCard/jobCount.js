import React, { useState, useEffect } from "react";
import "./OwnerProfileCard.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import profilePic from "../../../profileImage/profilephoto.png";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const JobCount = props => {
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

  //   const user = localStorage.getItem("user");
  //   const volunteerId = JSON.parse(user).id;
  //   const { users } = props;
  //   console.log("users", users);
  //   const hanldeClick = () => {
  //     console.log(props);
  //     props.history.push(`/profile/${volunteerId}`);
  //   };
  if (arrayOwnerUserJob.length > 0) {
    return (
      <>
        <CardBody className="owner-card-lower-text">
          <CardSubtitle>All Jobs</CardSubtitle>

          <CardSubtitle>{arrayOwnerUserJob.length}</CardSubtitle>
        </CardBody>
      </>
    );
  } else if (state.length > 0) {
    return (
      <>
        <CardBody className="owner-card-lower-text">
          <CardSubtitle>All Jobs</CardSubtitle>

          <CardSubtitle>{state.length}</CardSubtitle>
        </CardBody>
      </>
    );
  } else {
    return (
      <>
        <CardBody className="owner-card-lower-text">
          <CardSubtitle>All Jobs</CardSubtitle>

          <CardSubtitle>0</CardSubtitle>
        </CardBody>
      </>
    );
  }
};
const mapStateToProps = state => ({
  users: state.Users,
  currentUser: state.Users.currentUser,
  jobs: state.Users.jobs,
  state: state.Inprogress.appliedTasks
});

export default withRouter(connect(mapStateToProps)(JobCount));

// if(arrayOwnerUserJob.length > 0)
