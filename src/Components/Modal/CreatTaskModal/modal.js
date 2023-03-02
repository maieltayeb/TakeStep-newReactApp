import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { addJob } from "../../../Redux/actions/businessOwnerActionCreator";
import profilePic from "../../../profileImage/profilephoto.png";
import "./modal.css";

const ModalCreateTask = props => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    proposals: 0,
    timeDurationNumber: 0,
    // timeDurationType: "Days",
    description: "",
    userId: props.currentUser.id,
    enabled: true,
    tasks: []
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  // console.log("type", props.timeDurationTypes);

  const handleSubmit = e => {
    e.preventDefault();
    // console.log("submitaddddddddddddddddd");
    dispatch(addJob(state));
  };
  return (
    <div>
      <p onClick={toggle} style={{ cursor: "pointer" }}>
        {" "}
        What's your Task ?
      </p>

      <Modal
        className="modalShap"
        isOpen={modal}
        toggle={toggle}
        style={{ marginLeft: "320px" }}
      >
        <ModalHeader
          className="headerModal"
          toggle={toggle}
          style={{ paddingLeft: "320px" }}
        >
          Create Job
        </ModalHeader>

        <ModalBody className="bodyModal">
          <div>
            {/* <img
              src="./img/profilephoto.png"
              alt="userimg"
              style={{
                width: "10%",
                borderRadius: "50%",
                marginRight: "20px"
              }}
            /> */}
            {props.currentUser.imgUrl ? (
              <img
                src={"http://localhost:4402/" + props.currentUser.imgUrl}
                className="mt-3 post-img rounded-circle"
                alt="userimg"
                style={{
                  width: "10%",
                  height: "10%",
                  borderRadius: "50%",
                  marginRight: "20px"
                }}
              />
            ) : (
              <img
                src={profilePic}
                className="mt-3 post-img rounded-circle"
                alt="personal pic"
              />
            )}
            <a>
              {props.currentUser.firstName}
              &nbsp;&nbsp;
              {props.currentUser.lastName}
            </a>
          </div>
          <div style={{ marginLeft: "60px", marginTop: "20px" }}>
            <Form style={{ width: "100%" }} onSubmit={handleSubmit} id="form">
              {/* <FormGroup row>
                <Label for="jobTitle">Job Title &nbsp;&nbsp;&nbsp;:</Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="jobTitle"
                    placeholder="write task title "
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup> */}

              <FormGroup row>
                <Label for="jobTitle">Job title &nbsp;&nbsp;:</Label>
                <Col sm={10} className="mb-3">
                  <Input
                    type="text"
                    name="jobTitle"
                    id="jobTitle"
                    onChange={handleChange}
                  />
                </Col>
                <Label for="Proposals">Proposals &nbsp;&nbsp;:</Label>
                <Col sm={4}>
                  <Input
                    type="number"
                    name="proposals"
                    id="Proposals"
                    placeholder="Proposals num "
                    min="5"
                    max="15"
                    onChange={handleChange}
                  />
                </Col>
                <Label for="Time">Task Deadline:</Label>
                <Col sm={4}>
                  <Input
                    // type="number"
                    name="timeDurationNumber"
                    id="Time"
                    type="date"
                    // value="0"
                    // min="1"
                    onChange={handleChange}
                  ></Input>
                </Col>
                <Col style={{ paddingRight: "28px" }}>
                  {/* <Input
                    type="select"
                    name="timeDurationType"
                    id="exampleSelect"
                    onChange={handleChange}
                  >
                    {props.timeDurationTypes.map(item => (
                      <option key={item.id} value={item.durationType}>
                        {item.durationType}
                      </option>
                    ))}
                  </Input> */}
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="Description">Description :</Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    name="description"
                    id="Description"
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleFile">File /Image :</Label>
                <Col sm={10}>
                  <Input
                    type="file"
                    name="file"
                    id="exampleFile"
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>
            </Form>
          </div>
        </ModalBody>
        <ModalFooter
          className=" bodyModal"
          style={{ backgroundColor: "white" }}
        >
          <Button
            className=" mr-0 cancelModal"
            onClick={toggle}
            style={{ color: "#ebc010", backgroundColor: "#494848" }}
          >
            Cancel
          </Button>
          <Button
            className=" ml-2 mr-1 addModal"
            onClick={toggle}
            type="submit"
            form="form"
            // onSubmit={handleSubmit}
            style={{ color: "#ebc010", backgroundColor: "#494848" }}
          >
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser,
    timeDurationTypes: reduxState.Users.timeDurationTypes,
    users: reduxState.Users
  };
};
export default connect(mapStateToProps)(ModalCreateTask);
