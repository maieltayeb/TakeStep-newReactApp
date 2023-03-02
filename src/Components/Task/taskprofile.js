import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";
import "./taskprofile.css";
import JobProfile from "./jobProfile";
import AddComment from "../post/addComment";
import Comment from "../post/comment";
import { connect } from "react-redux";
import profilePic from "../../profileImage/profilephoto.png";

const TaskProfile = props => {
  const { jobs, currentUser } = props;
  const [jobsCurrentUserState, setStateJobsCurrentUser] = useState([]);

  useEffect(() => {
    let jobsCurrentUser = jobs.filter(
      job => job.userId === props.currentUser.id
    );
    setStateJobsCurrentUser(jobsCurrentUser);
  }, [jobs]);
  // console.log(jobsCurrentUserState, "jobs");

  return (
    <>
      {jobsCurrentUserState.length ? (
        jobsCurrentUserState.map(item => {
          let realComments = [];
          if (item.comments) {
            for (let i = 0; i < Object.keys(item.comments).length; i++) {
              const element = item.comments[Object.keys(item.comments)[i]];
              realComments.push(element);
            }
            return (
              <>
                <div className="profile-postContainer m-4 rounded">
                  <JobProfile job={item}></JobProfile>

                  <div className="profile-postCommentBody shadow-sm p-4 mb-4 bg-white">
                    <div className=" profile-reactToPost ml-2 clearfix">
                      <div className="float-left">
                        <span>
                          <i class=" m-1  mr-2 fas fa-comment-alt"></i>
                        </span>
                        <span>Comment</span>
                      </div>
                    </div>
                    <AddComment jobId={item.id} />
                    {realComments.length ? (
                      realComments.map(comment => {
                        return (
                          <Comment
                            key={Comment.id}
                            comment={comment}
                            jobId={item.id}
                          />
                        );
                      })
                    ) : (
                      <div className="ml-3 mt-3">{item.id}</div>
                    )}
                  </div>
                </div>
              </>
            );
          } else {
            return (
              <>
                <div className="profile-postContainer m-4 rounded">
                  <JobProfile job={item}></JobProfile>
                  <div className="postCommentBody shadow-sm p-4 mb-8 bg-white">
                    <div className=" reactToPost ml-2 mb-0 clearfix">
                      <div className="float-left">
                        <span>
                          <i class=" m-1  mr-2 fas fa-comment-alt"></i>
                        </span>
                        <span>Comment</span>
                      </div>
                    </div>
                    <AddComment jobId={item.id} />
                  </div>
                </div>
              </>
            );
          }
        })
      ) : (
        <div className="profile-postCommentBody  p-4 mb-4">No Jobs to show</div>
      )}
    </>
  );
};
const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser,
    jobs: reduxState.Users.jobs
  };
};

export default connect(mapStateToProps)(TaskProfile);
