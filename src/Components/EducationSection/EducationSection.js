import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import "./EducationSection.css";
import AddEducation from "../Modal/AddEducationModal/AddEducation";
import EducationData from "./EducationData";
import { getAllEducation } from "../../Redux/actions/educationActionCreator";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

const EducationSection = props => {
  const { educations, users } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    const user = localStorage.getItem("user");
    const id = JSON.parse(user).id;
    const token = localStorage.getItem("token");
    Axios.get(`http://localhost:4402/volunteer/getEduWithVol/${id}`, {
      headers: {
        authorization: token
      }
    })
      .then(response => {
        const educations = response.data;
        const newEducations = [];
        for (const key in educations) {
          newEducations.push({ _id: key, ...educations[key] });
        }
        dispatch(getAllEducation(newEducations));
      })
      .catch(console.log);
  }, [dispatch]);
  return (
    <div className="EducationSection-container mt-4 rounded ">
      <div className="EducationSection-container-top">
        <div className="EducationSection-container-top-h6">
          <h6>Education</h6>
        </div>
        <div className="space"></div>
        <div className="EducationSection-container-top-icon">
          {/* <i class="fas fa-plus"></i>{" "} */}

          <AddEducation></AddEducation>
        </div>
      </div>
      {educations.length ? (
        educations.map(edu => (
          <EducationData key={edu._id} {...edu} edu={edu} />
        ))
      ) : (
        <div className="ml-3 mt-3">Add Your Education Here..</div>
      )}
      {/* <EducationData /> */}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    educations: state.educations,
    users: state.Users
  };
};

export default connect(mapStateToProps)(withRouter(EducationSection));
