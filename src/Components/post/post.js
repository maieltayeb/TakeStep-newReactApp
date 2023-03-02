import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import axios from "axios";
import { getAllComments } from "../../Redux/actions/commentActionCreator";
import { addComments } from "../../Redux/actions/commentActionCreator";
import { Input } from "reactstrap";
import "./post.css";
import Job from "./job";
import AddComment from "./addComment";
import Comment from "./comment";
import { getUserById } from "../../Redux/actions/businessOwnerActionCreator";
import { getAllVolunteers } from "./../../Redux/actions/volunteerActionCreator";

const Post = props => {
  const { search } = props;
  let {
    comments,
    currentUser,
    jobs,
    bussinessOwnerUsers,
    job,
    users,
    volunteerUsers
  } = props;
  const dispatch = useDispatch();
  const [stateJobs, setStateJobs] = useState([]);
  /********************comment part************************************************* */
  // useEffect(() => {
  //   let userIds = jobs.map((job) => job.userId);
  //   userIds = [...new Set(userIds)];

  //   userIds.forEach((userId) => dispatch(getUserById(userId)));
  //   const volusers = dispatch(getAllVolunteers());
  //   console.log("voliuinteeeeeeeeeeeeeeeeer", volusers);
  // }, [jobs, dispatch]);

  /********************comment part************************************************* */

  /**********************job part******************* */

  // useEffect(() => {
  //   let userIds = jobs.map(job => job.userId);
  //   userIds = [...new Set(userIds)];
  //   userIds.forEach(userId => dispatch(getUserById(userId)));
  // }, [jobs, dispatch]);
  useEffect(() => {
    setStateJobs(jobs);
    if (search !== "") {
      jobs = jobs.filter(job =>
        job.description.toLowerCase().includes(search.toLowerCase())
      );
      setStateJobs(jobs);
    }
    // console.log("jobs", jobs);
  }, [search, jobs]);
  // console.log("statjobs", stateJobs);

  return (
    <>
      {stateJobs
        .slice(0)
        .reverse()
        .map(job => {
          const user = bussinessOwnerUsers.find(u => u.id === job.userId);
          // console.log("**************", user);
          let realComments = [];
          if (job.comments) {
            for (let i = 0; i < Object.keys(job.comments).length; i++) {
              const element = job.comments[Object.keys(job.comments)[i]];
              realComments.push(element);
            }
            return (
              <>
                <div className="postContainer shadow">
                  <Job user={user} job={job}></Job>
                  <div className="postCommentBody shadow-sm p-4 mb-8 bg-white">
                    <div className=" reactToPost ml-2 mb-0 clearfix">
                      <div className="float-left">
                        <span>
                          <i class=" m-1  mr-2 fas fa-comment-alt"></i>
                        </span>
                        <span>Comment</span>
                      </div>
                    </div>
                    <AddComment jobId={job.id} />
                    {realComments.length ? (
                      realComments.map(comment => {
                        // const userVol = volunteerUsers.find(
                        //   u => u.id === comment.userId
                        // );
                        return (
                          <Comment
                            key={Comment.id}
                            comment={comment}
                            jobId={job.id}
                          />
                        );
                      })
                    ) : (
                      <div className="ml-3 mt-3">{job.id}</div>
                    )}
                  </div>
                </div>
              </>
            );
          } else {
            const user = bussinessOwnerUsers.find(u => u.id === job.userId);
            return (
              <>
                <div className="postContainer shadow">
                  <Job user={user} job={job} key={job.id}></Job>
                  <div className="postCommentBody shadow-sm p-4 mb-8 bg-white">
                    <div className=" reactToPost ml-2 mb-0 clearfix">
                      <div className="float-left">
                        <span>
                          <i class=" m-1  mr-2 fas fa-comment-alt"></i>
                        </span>
                        <span>Comment</span>
                      </div>
                    </div>
                    <AddComment jobId={job.id} />
                  </div>
                </div>
              </>
            );
          }
        })}
    </>
  );
};
const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser,
    jobs: reduxState.Users.jobs,
    bussinessOwnerUsers: reduxState.Users.bussinessOwnerUsers,
    comments: reduxState.Users.comments,
    users: reduxState.Users,
    volunteerUsers: reduxState.Users.volunteerUsers
  };
};
export default connect(mapStateToProps)(Post);
