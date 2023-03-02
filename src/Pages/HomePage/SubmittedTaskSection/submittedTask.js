import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./submittedTask.css";
import ProjectTitleData from "./ProjectTiteData";
import {connect} from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {getAllSubmitTasks} from "../../../Redux/actions/InprogressActionCreator";
const SubmittedTask =(props)=> {
const {submittedTaskLink,jobs} =props;
const dispatch = useDispatch();

const [jobsCurrentUserState, setStateJobsCurrentUser] = useState([]);

useEffect(() => {
  let jobsCurrentUser = jobs.filter(
    job => job.userId === props.currentUser.id
  );
  setStateJobsCurrentUser(jobsCurrentUser);
}, [jobs]);

    return (
     <>
  
      <div className="SubmittedTask-container">
        <div className="SubmittedTask-container-top">
          <h6>Tasks Submitted</h6>
        </div>
        <div className="SubmittedTask-container-body" 
                 style={{
                      overflow: "auto",
                      height: "14rem",
                      backgroundColor: "#F8F8F4"
                    }}>
                      {/* <div>
                      {
                          submittedTaskLink.map(taskLink =><ProjectTitleData jobTitle={taskLink.jobTitle}/>)
                       }
                       </div> */}
                          {jobsCurrentUserState.length ? (
                           jobsCurrentUserState.map(item =>(    
                           <ProjectTitleData item={item}/>
                           ))
                         ):
                        ( <div className="profile-postCommentBody  p-4 mb-4">No Jobs to show</div>
                        )}       
     </div>
    </div> 
     </> 
    );
   
  }
// const mapStateToProps= reduxState =>{
//   return{
//     submittedTaskLink:reduxState.Inprogress.submittedTaskLinks
    
//   }
// }
const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser,
    jobs: reduxState.Users.jobs,
    submittedTaskLink:reduxState.Inprogress.submittedTaskLinks
  };
};

export default connect(mapStateToProps)(SubmittedTask);
