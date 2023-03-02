import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import { getAllComments } from "../../Redux/actions/commentActionCreator";
import { addComments } from "../../Redux/actions/commentActionCreator";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
import "./taskprofile.css";
import profilePic from "../../profileImage/profilephoto.png";
import {
  getUserById,
  DeleteJob,
  EditJob
} from "../../Redux/actions/businessOwnerActionCreator";
const JobProfile = props => {
  const dispatch = useDispatch();
  const { currentUser, job } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const [modal, setModal] = useState(false);
  const togglemodal = () => setModal(!modal);
  const [stateModal, setStateModal] = useState({
    proposals: props.job.proposals,
    timeDurationNumber: props.job.timeDurationNumber,
    // timeDurationType: "Days",
    description: props.job.description,
    userId: props.currentUser.id,
    enabled: true,
    tasks: []
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setStateModal(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handelDeleteJob = () => {
    if (currentUser.id === props.job.userId) {
      dispatch(DeleteJob(props.job.id));
    } else {
      alert("you can't delete this job");
    }
  };
  const handelEditJob = () => {
    if (currentUser.id === props.job.userId) {
      togglemodal();
    } else {
      alert("you can't Edit this job");
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log("id", props.job.id);
    if (currentUser.id === props.job.userId) {
      dispatch(EditJob(stateModal, props.job.id));
    } else {
      alert("you can't Edit this job");
    }
  };
  if (props.job.comments) {
    return (
      <>
        <div className=" pl-5 pt-3 pr-5 clearfix">
          <div style={{ display: "flex", "justify-content": "space-between" }}>
            <div>
              {currentUser.imgUrl ? (
                <img
                  src={"http://localhost:4402/" + currentUser.imgUrl}
                  className="post-img  rounded-circle"
                  alt="server pic"
                  style={{ marginBottom: "20px" }}
                />
              ) : (
                <img
                  src={profilePic}
                  // src={profilePic}
                  className="post-img  rounded-circle"
                  alt="personal pic"
                  style={{ marginBottom: "15px" }}
                />
              )}
              {/* <img className="post-img  rounded-circle" src="./img/people.png" /> */}
              <div className="username-post ml-3">
                <div className="mt-3 postOwnerNameStyle">
                  <b>
                    {currentUser && currentUser.firstName}
                    &nbsp;&nbsp;
                    {currentUser && currentUser.lastName}
                  </b>
                </div>
                <div className="ml-0 postOwnerNameStyle">
                  {currentUser && currentUser.jobTitle}
                </div>
              </div>
            </div>

            <Dropdown
              isOpen={dropdownOpen}
              toggle={toggle}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <DropdownToggle style={{ background: "none", border: "none" }}>
                <div className="post-ortions">...</div>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={handelEditJob}> Edit </DropdownItem>

                <Modal
                  className="modalShap"
                  isOpen={modal}
                  toggle={togglemodal}
                  style={{ marginLeft: "320px" }}
                >
                  <ModalHeader
                    className="headerModal"
                    toggle={togglemodal}
                    style={{ paddingLeft: "320px" }}
                  >
                    Edit Job
                  </ModalHeader>

                  <ModalBody className="bodyModal">
                    <div>
                      <img
                        src="./img/profilephoto.png"
                        alt="userimg"
                        style={{
                          width: "10%",
                          borderRadius: "50%",
                          marginRight: "20px"
                        }}
                      />
                      <a>
                        {props.currentUser.firstName}
                        &nbsp;&nbsp;
                        {props.currentUser.lastName}
                      </a>
                    </div>
                    <div style={{ marginLeft: "60px", marginTop: "20px" }}>
                      <Form
                        style={{ width: "100%" }}
                        onSubmit={handleSubmit}
                        id="form"
                      >
                        <FormGroup row>
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
                              value={stateModal.proposals}
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
                              value={stateModal.timeDurationNumber}
                              onChange={handleChange}
                            ></Input>
                          </Col>
                          <Col style={{ paddingRight: "28px" }}></Col>
                        </FormGroup>

                        <FormGroup row>
                          <Label for="Description">Description :</Label>
                          <Col sm={10}>
                            <Input
                              type="textarea"
                              name="description"
                              id="Description"
                              onChange={handleChange}
                              value={stateModal.description}
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
                      onClick={togglemodal}
                      style={{ color: "#ebc010", backgroundColor: "#494848" }}
                    >
                      Cancel
                    </Button>
                    <Button
                      className=" ml-2 mr-1 addModal"
                      onClick={togglemodal}
                      type="submit"
                      form="form"
                      // onSubmit={handleSubmit}
                      style={{ color: "#ebc010", backgroundColor: "#494848" }}
                    >
                      edit
                    </Button>
                  </ModalFooter>
                </Modal>

                <DropdownItem onClick={handelDeleteJob}>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <div
          className=" ml-5  clearfix mt-3 d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <div className=" float-left">
            <span className=" font-weight-bold">Time : </span>
            <span className="">
              {job && job.timeDurationNumber}&nbsp;&nbsp;
              {job && job.timeDurationType}
            </span>
          </div>
          <div className=" ml-5 float-left">
            <span className="font-weight-bold ">Proposals :</span>
            <span className="">&nbsp;{job && job.proposals}</span>
          </div>
        </div>
        <div className="postBody pt-3 pr-5 pl-5  m-0">
          <p className="text-justify">{job && job.description}</p>
        </div>

        <div className=" reactToPost clearfix">
          <div className=" ml-4 float-left">
            <span className="mt-2 mr-2">
              {" "}
              {Object.keys(props.job.comments).length}
            </span>
            <span>
              <i class=" mb-3 fas fa-comment-alt"></i>
            </span>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className=" pl-5 pt-3 pr-5 clearfix">
          <div style={{ display: "flex", "justify-content": "space-between" }}>
            <div>
              {currentUser.imgUrl ? (
                <img
                  src={"http://localhost:4402/" + currentUser.imgUrl}
                  className="post-img  rounded-circle"
                  alt="server pic"
                  style={{ marginBottom: "20px" }}
                />
              ) : (
                <img
                  src={profilePic}
                  // src={profilePic}
                  className="post-img  rounded-circle"
                  alt="personal pic"
                  style={{ marginBottom: "15px" }}
                />
              )}
              {/* <img className="post-img  rounded-circle" src="./img/people.png" /> */}
              <div className="username-post ml-3">
                <div className="mt-3 postOwnerNameStyle">
                  <b>
                    {currentUser && currentUser.firstName}
                    &nbsp;&nbsp;
                    {currentUser && currentUser.lastName}
                  </b>
                </div>
                <div className="ml-0 postOwnerNameStyle">
                  {currentUser && currentUser.jobTitle}
                </div>
              </div>
            </div>

            <Dropdown
              isOpen={dropdownOpen}
              toggle={toggle}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <DropdownToggle style={{ background: "none", border: "none" }}>
                <div className="post-ortions">...</div>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={handelEditJob}> Edit </DropdownItem>

                <Modal
                  className="modalShap"
                  isOpen={modal}
                  toggle={togglemodal}
                  style={{ marginLeft: "320px" }}
                >
                  <ModalHeader
                    className="headerModal"
                    toggle={togglemodal}
                    style={{ paddingLeft: "320px" }}
                  >
                    Edit Job
                  </ModalHeader>

                  <ModalBody className="bodyModal">
                    <div>
                      <img
                        src="./img/profilephoto.png"
                        alt="userimg"
                        style={{
                          width: "10%",
                          borderRadius: "50%",
                          marginRight: "20px"
                        }}
                      />
                      <a>
                        {props.currentUser.firstName}
                        &nbsp;&nbsp;
                        {props.currentUser.lastName}
                      </a>
                    </div>
                    <div style={{ marginLeft: "60px", marginTop: "20px" }}>
                      <Form
                        style={{ width: "100%" }}
                        onSubmit={handleSubmit}
                        id="form"
                      >
                        <FormGroup row>
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
                              value={stateModal.proposals}
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
                              value={stateModal.timeDurationNumber}
                              onChange={handleChange}
                            ></Input>
                          </Col>
                          <Col style={{ paddingRight: "28px" }}></Col>
                        </FormGroup>

                        <FormGroup row>
                          <Label for="Description">Description :</Label>
                          <Col sm={10}>
                            <Input
                              type="textarea"
                              name="description"
                              id="Description"
                              onChange={handleChange}
                              value={stateModal.description}
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
                      onClick={togglemodal}
                      style={{ color: "#ebc010", backgroundColor: "#494848" }}
                    >
                      Cancel
                    </Button>
                    <Button
                      className=" ml-2 mr-1 addModal"
                      onClick={togglemodal}
                      type="submit"
                      form="form"
                      // onSubmit={handleSubmit}
                      style={{ color: "#ebc010", backgroundColor: "#494848" }}
                    >
                      edit
                    </Button>
                  </ModalFooter>
                </Modal>

                <DropdownItem onClick={handelDeleteJob}>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <div
          className=" ml-5  clearfix mt-3 d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <div className=" float-left">
            <span className=" font-weight-bold">Time : </span>
            <span className="">
              {job && job.timeDurationNumber}&nbsp;&nbsp;
              {job && job.timeDurationType}
            </span>
          </div>
          <div className=" ml-5 float-left">
            <span className="font-weight-bold ">Proposals :</span>
            <span className="">&nbsp;{job && job.proposals}</span>
          </div>
        </div>
        <div className="postBody pt-3 pr-5 pl-5  m-0">
          <p className="text-justify">{job && job.description}</p>
        </div>

        <div className=" reactToPost clearfix">
          <div className=" ml-4 float-left">
            <span className="mt-2 mr-2"> 0</span>
            <span>
              <i class=" mb-3 fas fa-comment-alt"></i>
            </span>
          </div>
        </div>
      </>
    );
  }
};

const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser
  };
};
export default connect(mapStateToProps)(JobProfile);
