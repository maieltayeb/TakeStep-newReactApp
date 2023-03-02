import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { editbussinessOwner } from "../../../Redux/actions/businessOwnerActionCreator";
import { volunteeredit } from "../../../Redux/actions/volunteerActionCreator";
import ImageUploader from "react-images-upload";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  ModalFooter,
  Input,
  FormGroup,
  Col
} from "reactstrap";

const PersonalInfoModal = props => {
  const { className, currentUser } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [state, setState] = useState({ ...currentUser });

  const dispatch = useDispatch();

  useEffect(() => {
    setState(prevState => ({
      ...prevState
    }));
  }, [currentUser]);

  const onDrop = picture => {
    setState(prevState => ({
      ...prevState,
      imgUrl: picture[0]
    }));
    console.log(picture[0]);
  };

  const changeHandler = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const submitHandler = async e => {
    e.preventDefault();
    const {
      imgUrl,
      firstName,
      lastName,
      description,
      countryName,
      jobTitle,
      email,
      country,
      companyName
    } = state;
    console.log("submitted");
    const form = new FormData();
    form.append("imgUrl", imgUrl);
    form.append("firstName", firstName);
    form.append("lastName", lastName);
    form.append("companyName", companyName);
    form.append("description", description);
    form.append("countryName", countryName);
    form.append("jobTitle", jobTitle);
    form.append("email", email);
    form.append("countryId", country._id);
    let bussinesslogin = props.users.filter(function(user) {
      return user.email == props.currentUser.email;
    });
    //  debugger;
    if (bussinesslogin.length == 0) {
      await dispatch(volunteeredit(props.currentUser.id, form));
    } else {
      await dispatch(editbussinessOwner(props.currentUser.id, form));
    }

    console.log(state);
  };

  return (
    <div>
      <i className="fas fa-pencil-alt" onClick={toggle}></i>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        style={{ marginLeft: "320px" }}
      >
        <ModalHeader
          toggle={toggle}
          className="text-center rounded-top"
          style={{
            paddingLeft: "210px",
            backgroundColor: "#494848",
            color: "#ebc010",
            paddingLeft: "320px"
          }}
        >
          Edit Info
        </ModalHeader>
        <Form onSubmit={submitHandler}>
          {/* onSubmit={imageUploadHandler} */}
          <ModalBody style={{ backgroundColor: "#f2f2f2" }}>
            <div>
              {/* <img
                src="/img/profilephoto.png"
                style={{
                  width: "20%",
                  borderRadius: "50%",
                  marginLeft: "40%"
                }}
              />
              <i
                className="fas fa-pencil-alt"
                style={{
                  display: "block",
                  marginLeft: "55%",
                  color: "#ebc010"
                }}
              ></i> */}
              <div className="App">
                <div
                  style={{
                    width: "40%",
                    borderRadius: "50%",
                    margin: "auto"
                  }}
                >
                  <ImageUploader
                    withIcon={false}
                    withPreview={true}
                    label=""
                    buttonText="Pick Image"
                    onChange={onDrop}
                    imgExtension={[
                      ".jpg",
                      ".gif",
                      ".png",
                      ".jpeg",
                      ".gif",
                      ".svg"
                    ]}
                    singleImage={true}
                    maxFileSize={1048576}
                    fileSizeError=" file size is too big"
                  />
                </div>
              </div>
            </div>
            <label style={{ fontSize: "13px" }}>first name</label>

            <input
              type="text"
              name="firstName"
              value={state.firstName}
              onChange={changeHandler}
              style={{
                width: "100%",
                border: "1px solid #EBC010",
                marginBottom: "20px"
              }}
            ></input>

            <label style={{ fontSize: "13px" }}>last name</label>

            <input
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={changeHandler}
              style={{
                width: "100%",
                border: "1px solid #EBC010",
                marginBottom: "20px"
              }}
            ></input>
            {props.currentUser.paymentData && (
              <>
                <label style={{ fontSize: "13px" }}>Company Name</label>

                <input
                  type="text"
                  name="companyName"
                  value={state.companyName}
                  onChange={changeHandler}
                  style={{
                    width: "100%",
                    border: "1px solid #EBC010",
                    marginBottom: "20px"
                  }}
                ></input>
              </>
            )}
            <label style={{ fontSize: "13px" }}>Job title</label>

            <input
              type="text"
              name="jobTitle"
              value={state.jobTitle}
              onChange={changeHandler}
              style={{
                width: "100%",
                border: "1px solid #EBC010",
                marginBottom: "20px"
              }}
            ></input>
            <label style={{ fontSize: "13px" }}>Location</label>

            <FormGroup row>
              <Col>
                <Input
                  type="select"
                  name="country"
                  id="exampleSelect"
                  onChange={changeHandler}
                  style={{
                    border: "1px solid #EBC010"
                  }}
                >
                  {props.countries.map(
                    item =>
                      item.countryName == state.countryName && (
                        <option defaultValue key={item._id} value={item._id}>
                          {item.countryName}
                        </option>
                      )
                  )}
                  {props.countries.map(
                    item =>
                      item.countryName !== state.countryName && (
                        <option key={item._id} value={item._id}>
                          {item.countryName}
                        </option>
                      )
                  )}
                </Input>
              </Col>
            </FormGroup>
            {/* <input
                type="text"
                name="countryName"
                value={state.countryName}
                onChange={changeHandler}
                style={{
                  width: "100%",
                  border: "1px solid #EBC010",
                  marginBottom: "20px"
                }}
              ></input> */}

            <label style={{ fontSize: "13px" }}>add description:</label>

            <textarea
              type="text"
              name="description"
              value={state.description}
              onChange={changeHandler}
              style={{
                width: "100%",
                maxHeight: "100px",
                border: "1px solid #EBC010",
                marginBottom: "40px"
              }}
            ></textarea>
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
            >
              Cancel
            </Button>{" "}
            <Button
              type="submit"
              color="secondary"
              onClick={toggle}
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
        </Form>
      </Modal>
    </div>
  );
};
const mapStateToProps = reduxState => {
  return {
    users: reduxState.Users.users,
    currentUser: reduxState.Users.currentUser,
    countries: reduxState.Users.countries
  };
};

export default connect(mapStateToProps)(withRouter(PersonalInfoModal));
