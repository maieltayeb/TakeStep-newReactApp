import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./submittedTask.css";
const ProjectTitleData = props => {
  const { jobTitle, item } = props;
  // console.log("ya rab",item)
  if (item.tasks) {
    return (
      <>
        {
          <div className="SubmittedTask-container-body-pro">
            <Link
              item={item}
              to={{
                // "/home"
                pathname: "/jobDetails",
                search: `/${item.id}`,
                state: {
                  job: item
                }
              }}
            >
              {item.jobTitle}
            </Link>
          </div>
        }
      </>
    );
  } else {
    return (
      <>
        {
          <div className="">
            {/* <NavLink to="/jobDetails">{item.jobTitle}</NavLink> */}
          </div>
        }
      </>
    );
  }
};

export default ProjectTitleData;
