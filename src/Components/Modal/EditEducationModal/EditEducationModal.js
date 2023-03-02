import React, { useState, useEffect } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import { withRouter } from "react-router-dom";

import { editEducation } from "../../../Redux/actions/educationActionCreator";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import "./EditEducationModal.css";

const EditEducation = props => {
  const { buttonLabel, className, eduId, educations } = props;
  console.log("eduId", eduId);
  const [modal, setModal] = useState(false);
  // const { educations } = props;
  // console.log("education from edit", educations[0].degree);
  const toggle = () => setModal(!modal);
  const [selectedEducation, setSelectedEducation] = useState(
    
    educations.find(education => education._id === eduId)
  );

  const dispatch = useDispatch();

  const changeHandler = e => {

    const { name, value } = e.target;
    setSelectedEducation(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const user = localStorage.getItem("user");
  const volunteerId = JSON.parse(user).id;
  // console.log("here",selectedEducation)
  const submitHandler = async e => {
    e.preventDefault();
    console.log("submitted");

    await dispatch(
      editEducation(volunteerId, selectedEducation._id, selectedEducation)
      
    );
    console.log("alaaa", selectedEducation.facultyName);
  };
  console.log("halaaaa", selectedEducation._id);

  return (
    <div>
      <i
        class=" d-inline-block p-10 fas fa-pen text-warning"
        onClick={toggle}
        style={{ cursor: "pointer" }}
      ></i>
      <Modal
        style={{ width: "720px" }}
        className="modal-structure"
        isOpen={modal}
        toggle={toggle}
        className={className}
        style={{ marginLeft: "320px" }}
      >
        <ModalHeader
          className="modal-structure-header"
          toggle={toggle}
          style={{ paddingLeft: "310px" }}
        >
          Edit Education
        </ModalHeader>

        <Form onSubmit={submitHandler}>
          <ModalBody style={{ width: "720px", backgroundColor: "#f2f2f2" }}>
            <FormGroup>
              <Label for="eduFaculty" className="lab-size" >
                University
              </Label>
              <Input
                className="input-border"
                type="select"
                id="eduFaculty"
                value={selectedEducation.facultyName}
                name="facultyName"
                onChange={changeHandler}
              >
                {/* <option></option> */}
                <option>Harvard University</option>
                <option>Yale University</option>
                <option>Northwestern University</option>
                <option>Tsinghua University</option>
                <option>Monash University</option>
                <option>Al-Azhar University</option>
                <option>Massachusetts Institute of Technology (MIT)</option>
                <option>Stanford University</option>

                <option>University of Oxford</option>
                <option>EPFL</option>
                <option>The University of Tokyo</option>
                <option>Duke University</option>
                <option>Cornell University</option>
                <option>University of British Columbia</option>
                <option>UCL</option>
                <option>The University of Tokyo</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Degree</Label>
              <Input
                className="input-border"
                type="degree"
                name="degree"
                value={selectedEducation.degree}
                onChange={changeHandler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleDate">Graduation Date</Label>
              <Input
                className="input-border"
                type="date"
                name="graduationYear"
                id="exampleDate"
                placeholder="date placeholder"
                value={selectedEducation.graduationYear}
                onChange={changeHandler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="gradeSelect">Grade</Label>
              <Input
                className="input-border"
                type="select"
                name="grade"
                id="gradeSelect"
                value={selectedEducation.grade}
                onChange={changeHandler}
              >
                <option></option>
                <option>Excellent</option>
                <option>Very good</option>
                <option>Good</option>
                <option>Fair</option>
              </Input>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={toggle}
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                border: "1px solid #EBC010",
                color: "black",
                width: "100px"
              }}
            >
              Cancel
            </Button>{" "}
            <Button
              color="secondary"
              type="submit"
              style={{
                backgroundColor: "#494848",
                borderRadius: "20px",
                color: "#EBC010",
                width: "100px"
              }}
              onClick={toggle}
            >
              Add
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};
const mapStateToProps = reduxstate => {
  return {
    educations: reduxstate.educations
  };
};
export default connect(mapStateToProps)(withRouter(EditEducation));

// const educations = useSelector(state => state.educations);
// const [newEdu, setNewEdu] = useState(educations);

// useEffect(() => {
//   setNewEdu(educations);
// }, [educations]);

// const dispatch = useDispatch();
// const educationId = props.matcid;
// console.log(props);
// console.log(userId);

// const changeHandler = e => {
//   const updatedEducation = { ...newEdu };
//   updatedEducation[e.target.name] = e.target.value;
//   setNewEdu(updatedEducation);
// };

// const submitHandler = async e => {
//   e.preventDefault();
//   console.log("submitted");

//   dispatch(editEducation(educationId, newEdu));
// };
