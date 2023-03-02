import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import axios from "axios";
import { getAllComments } from "../../Redux/actions/commentActionCreator";
import { addComments } from "../../Redux/actions/commentActionCreator";
import {
  Button,
  Dropdown,
  Input,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./post.css";
import Job from "./job";
import { getUserById } from "../../Redux/actions/businessOwnerActionCreator";
import { getVolunteerById } from "../../Redux/actions/volunteerActionCreator";
import TaskDetails from "./../../Pages/Task-Details/Task-Details";
import AddComment from "./addComment";
import profilePic from "../../profileImage/profilephoto.png";

const Comment = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const dispatch = useDispatch();

  /********************comment part********************************** */
  const {
    comment,
    currentUser,
    jobs,
    bussinessOwnerUsers,
    jobId,
    userId,
    users,
    userVol,
    volunteerUsers,
    comments
  } = props;

  const [user, setUser] = useState();

  useEffect(() => {
    const commentUser =
      volunteerUsers.find(u => u.id === comment.userId) ||
      users.find(u => u.id === comment.userId);
    setUser(commentUser);
  }, [comment, volunteerUsers, users]);
  // useEffect(() => {
  //   let userIds = comments.map(comm => comm.userId);
  //   userIds = [...new Set(userIds)];
  //   userIds.forEach(userId => dispatch(getVolunteerById(userId)));
  //   // const aya = dispatch(getVolunteerById(userIds[0]));
  //   console.log("usersId", userId);
  // }, [comments, dispatch]);

  // useEffect(() => {
  //   let userIds = comments.map(comm => comm.userId);
  //   userIds = [...new Set(userIds)];

  //   userIds.forEach(userId => dispatch(getUserById(userId)));
  // }, [comments, dispatch]);
  // console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", volunteerUsers);
  // {
  // const user = users.find(u => u.id === comments.userId);
  // if (user) {
  //   console.log(user);
  // } else {
  //   console.log("a333333333333333");
  // }
  return (
    <>
      <div className="clearfix d-flex">
        <div className=" float-left ">
          {/* <img
            className="post-img mt-2 rounded-circle"
            src="./img/people.png"
          /> */}
          {user && user.imgUrl ? (
            <img
              src={"http://localhost:4402/" + user.imgUrl}
              className="mt-3 post-img rounded-circle"
              alt="personal pic"
            />
          ) : (
            <img
              src={profilePic}
              className="mt-3 post-img rounded-circle"
              alt="personal pic"
            />
          )}
        </div>
        <div className=" ml-2 float-left ">
          <div className="p-2 mt-2 commentbody">
            <p className=" m-1">
              {" "}
              {user && user.firstName}
              &nbsp;&nbsp;
              {user && user.lastName}
            </p>
            <p className=" m-1 small">{props.comment.body} </p>
          </div>
        </div>
      </div>
    </>
  );
};
// };
const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser,
    jobs: reduxState.Users.jobs,
    bussinessOwnerUsers: reduxState.Users.bussinessOwnerUsers,
    comments: reduxState.Users.comments,
    volunteerUsers: reduxState.Users.volunteerUsers,
    users: reduxState.Users.users
  };
};
export default connect(mapStateToProps)(Comment);
