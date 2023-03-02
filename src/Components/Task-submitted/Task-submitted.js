
import ProjectLink from "../ProjectLink/project-Link-Component";
import { connect, useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import InsideNav from "../../Layout/Navbar/insidenav";
import "../../Pages/TaskSubmit/task-submitted-frame.css";

const TaskSubmit = (props) => {


const { job } = props.location.state;

  return (
    <div>
       <InsideNav />
      <div className="container-submit-task " style={{paddingBottom:"20px"}}>
        <div className="task-submitted-title ">
          <p className="task-submitted-title-p">Tasks Submited</p>
        </div>

        <div className="poject-title ">
        <div className="project-title-container" >
          {job.jobTitle}
        </div>
        <div className="project-description">
          <p className="project-description-p">
           {job.description}
          </p>
        </div>

        <ProjectLink tasks={job.tasks}/>
      
      </div>
      </div>
    </div>
    
   
  );
};
const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser,
    jobs: reduxState.Users.jobs,
   
    bussinessOwnerUsers: reduxState.Users.bussinessOwnerUsers,

    state: reduxState.Inprogress.newTask
  };
};
export default connect(mapStateToProps)(TaskSubmit);
