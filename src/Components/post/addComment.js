import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import axios from "axios";

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
import profilePic from "../../profileImage/profilephoto.png";

const AddComment = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const dispatch = useDispatch();

  /********************comment part************************************************* */
  const {
    comments,
    currentUser,
    jobs,
    bussinessOwnerUsers,
    job,
    jobId
  } = props;
  const initialFieldValues = {
    body: "",
    jobId: jobId,
    userId: currentUser.id
  };
  let [values, setValues] = useState(initialFieldValues);
  const handleInputChange = e => {
    var { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
  };
  const handleKeyUp = async event => {
    const { key } = event;
    const newComment = {
      body: values.body,
      jobId: jobId,
      userId: currentUser.id
    };
    if (key === "Enter" && values.body !== "") {
      const response = await axios.post(
        "https://take-a-step-9ca1d.firebaseio.com/comment.json",
        newComment
      );
      if (response.status === 200) {
        console.log("new", newComment.jobId);
        const response = await axios.post(
          `https://take-a-step-9ca1d.firebaseio.com/jobs/${newComment.jobId}/comments.json`,
          newComment
        );
        console.log("hiiComment", newComment);
        newComment.id = response.data.name;
        props.dispatch(addComments(newComment, jobId));
        setValues({ body: "" });
      }
    }
  };

  return (
    <>
      <div className="clearfix comment-container">
        <div className=" float-left ">
          {/* <img
            className="mt-3 post-img rounded-circle"
            src="./img/people.png"
          /> */}
          {currentUser.imgUrl ? (
            <img
              src={"http://localhost:4402/" + currentUser.imgUrl}
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
          <Input
            placeholder="Add your comment"
            className="mt-3 commentArea"
            name="body"
            value={values.body}
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
            style={{
              width: " 474px",
              border: " 1px solid #ebc010",
              "border-radius": " 50px"
            }}
          ></Input>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser,
    jobs: reduxState.Users.jobs,
    bussinessOwnerUsers: reduxState.Users.bussinessOwnerUsers,
    comments: reduxState.Users.comments
  };
};
export default connect(mapStateToProps)(AddComment);
