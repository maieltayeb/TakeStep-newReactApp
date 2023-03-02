import "bootstrap/dist/css/bootstrap.min.css";
import { connect, useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import "./project-Link-Component.css";
// import feedback from "../../../public/img/feedback.png";
import FeedbackModel from "./../Modal/AddFeedbackModel/AddFeedbackModal";
import { Link } from "react-router-dom";
import { getVolunteerById } from "../../Redux/actions/volunteerActionCreator";

const ProjectLink = (props) => {
  const { tasks } = props;

  const dispatch = useDispatch();
  console.log("taskassssssssss", tasks);
  useEffect(() => {});
  useEffect(() => {
    let volIds = Object.values(tasks).map((task) => task.volunteerId);
    volIds = [...new Set(volIds)];
    volIds.forEach((volId) => dispatch(getVolunteerById(volId)));
  }, [tasks, dispatch]);

  return (
    <>
      {Object.values(tasks).map((task, i) => {
        const user = props.volunteerUsersById.find(
          (u) => u.id === task.volunteerId
        );

        return (
          <div className="project-link-container">
            <div className="project-link-text">
              <span className="project-link-span">
                {" "}
                <a href={[task.taskLink]} target="_blank">
                  {" "}
                  project Link
                </a>
              </span>
              <span className="project-link-Name">
                {user && user.firstName}
                &nbsp;&nbsp;
                {user && user.lastName}
              </span>
            </div>
            <div className="feedback-cobtainer">
              <div>
                <img src="./img/feedback.png" className="img-feedback" />
                <span className="feedback-text">{[task.VolunteerComment]}</span>
              </div>
              {/* <div className="feedback-button">
          <p className="feedback-button-p">Feedback</p>
        </div> */}

              <FeedbackModel task={task} />
            </div>
          </div>
        );
      })}
    </>
  );
};
const mapStateToProps = (reduxState) => {
  return {
    currentUser: reduxState.Users.currentUser,
    jobs: reduxState.Users.jobs,
    bussinessOwnerUsers: reduxState.Users.bussinessOwnerUsers,
    comments: reduxState.Users.comments,
    users: reduxState.Users,
    volunteerUsersById: reduxState.Users.volunteerUsersById,
  };
};
export default connect(mapStateToProps)(ProjectLink);
