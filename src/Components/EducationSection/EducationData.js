import React from "react";
import axios from "axios";
import EditEducation from "../../Components/Modal/EditEducationModal/EditEducationModal";
import { useDispatch } from "react-redux";
import { deleteEducation } from "../../Redux/actions/educationActionCreator";
import "./EducationData.css";
import { connect } from "react-redux";
const EducationData = props => {
  const { edu, users, educations } = props;
  const { _id } = edu;
  const volunteerId = users.currentUser.id;
  const dispatch = useDispatch();
  const handleDelete = event => {
    if (window.confirm("Are You Sure To Delete This")) {
      event.stopPropagation();
      const token = localStorage.getItem("token");
      axios
        .delete(
          `http://localhost:4402/volunteer/deleteEducations/${volunteerId}/${_id}`,
          {
            headers: {
              authorization: token
            }
          }
        )
        .then(response => {
          if (response.status === 200) dispatch(deleteEducation(_id));
        })
        .catch(console.log);
    }
  };

  return (
    <div>
      <div className="EducationSection-container-body">
        <div className="EducationSection-container-body-img">
          <img
            src="/img/university.jpg"
            style={{ "border-radius": "50%", width: "60px", height: "60px" }}
          />
        </div>
        <div
          className="EducationSection-container-body-info"
          style={{ width: "60%" }}
        >
          <div className="EducationSection-container-body-info-title">
            {props.facultyName}
          </div>
          <div className="EducationSection-container-body-info-dgree">
            {props.degree}
          </div>
          <div className="EducationSection-container-body-info-date">
            <p className="EducationSection-container-body-info-Startdate">
              {props.graduationYear}
            </p>
          </div>
          <div className="EducationSection-container-body-info-date">
            <p className="EducationSection-container-body-info-Startdate">
              {props.grade}
            </p>
          </div>
        </div>
        <div className="body-space"></div>
        <div className="EducationSection-container-body-icon">
          <div className="EducationSection-container-body-icon-edit">
            <EditEducation eduId={_id} />
          </div>
          <div className="EducationSection-container-body-icon-delete">
            <i
              class="fas fa-trash-alt"
              style={{ cursor: "pointer" }}
              onClick={handleDelete}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    educations: state.educations,
    users: state.Users
  };
};
export default connect(mapStateToProps)(EducationData);
