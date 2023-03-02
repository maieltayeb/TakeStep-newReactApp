import React, { useState } from "react";
import { connect, useDispatch} from "react-redux";
import {addSubmitTaskLink,deleteJobFromProgress} from "../../../Redux/actions/InprogressActionCreator";
import { AvForm, AvField } from "availity-reactstrap-validation";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Col
} from "reactstrap";

const ModalLink = props => {
  const { buttonLabel, className,state,jobId,currentUser,bussinessOwnerId,jobTitle,inProgressTaskId} = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  // const progressTaskId=state.
  // console.log("Hii",inProgressTaskId,currentUser.id);
  const volunteerId=currentUser.id
  /////////////////////////////////////////////////
  const initialFieldValues = {
    bussinessOwnerId:bussinessOwnerId,
    jobId:jobId,
    jobTitle:jobTitle,
    volunteerId:currentUser.id,
    taskLink:"",
    VolunteerComment:""
  };
  let [values, setValues] = useState(initialFieldValues);
  const handleInputChange =  e => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };  
console.log("id",jobId)
const handleSubmit = async e => {
  e.preventDefault();
  const newLink = {
    bussinessOwnerId:bussinessOwnerId,
    volunteerId:currentUser.id,
    jobId:jobId,
    jobTitle:jobTitle,
    taskLink:values.taskLink,
    VolunteerComment:values.VolunteerComment
  };
  console.log("newLink",newLink)
  const response = await axios.post(`https://take-a-step-9ca1d.firebaseio.com/jobs/${jobId}/tasks.json`,newLink
);
const { data } = response;
// console.log("response",response)
if (response.status === 200) {
  // console.log("resposne",newLink)
  props.dispatch(addSubmitTaskLink(newLink));
  setValues({
    taskLink:"",
    VolunteerComment:""
  });

//----------------------------------------delete it from prog-----------------------------------------------//
    const resDelete = await axios.delete(`https://take-a-step-9ca1d.firebaseio.com/Inprogress/${volunteerId}/${inProgressTaskId}.json`)
      console.log("delete ", resDelete);
      if  (resDelete.status === 200){
        props.dispatch(deleteJobFromProgress(volunteerId,inProgressTaskId))
      };

//---------------------------------------------------------------------------------------//

}
}

const handleCancel = async e => {
  e.preventDefault();
  setValues({
    taskLink:"",
    VolunteerComment:""
  })
}

  return (
    // state.map(ele=>ele.details.id)
    <div>
      <Button
        onClick={toggle}
        style={{ background: "none", border: "none", outline: "none" }}
      >
        <Col className="pl-1">
          <i class="fas fa-upload text-danger"></i>
        </Col>
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        style={{ marginLeft: "320px" }}
      >
        <ModalHeader
          toggle={toggle}
          className="text-center"
          style={{
            paddingLeft: "210px",
            backgroundColor: "#494848",
            color: "#ebc010",
            paddingLeft: "320px"
          }}
        >
          Add Link
        </ModalHeader>
        <AvForm autoComplete="off" onSubmit={handleSubmit} onReset={handleCancel}>
        <ModalBody style={{ backgroundColor: "#f2f2f2" }}>
          <label style={{ fontSize: "13px" }}>add your link:</label>
          <br />
          <AvField
            type="text"
            style={{
              width: "100%",
              border: "1px solid #EBC010",
              marginBottom: "20px",
            }}
            name="taskLink"
            value={values.taskLink}
            onChange={handleInputChange}
            type="url" pattern="https?://.+" required
            errorMessage=" you should enter right link : for example http://www.github.com "
          />
          <br />
          <label style={{ fontSize: "13px" }}>leave your comment:</label>
          <br />
          <AvField
            type="text"
            style={{
              width: "100%",
              border: "1px solid #EBC010",
              marginBottom: "20px"
            }}
            name="VolunteerComment"
            value={values.VolunteerComment}
            onChange={handleInputChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={toggle}
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              border: "1px solid #EBC010",
              color: "#494848",
              width: "100px"
            }}
            type="reset"

          >
            Cancel
          </Button>{" "}
          <Button
            color="secondary"
            onClick={toggle}
            type="submit"
            style={{
              backgroundColor: "#494848",
              borderRadius: "20px",
              color: "#EBC010",
              width: "100px"
            }}
          >
            Add
          </Button>
        </ModalFooter>
        </AvForm>
      </Modal>
    </div>
  );
};
const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser,
  }
}

export default connect(mapStateToProps)(ModalLink);
