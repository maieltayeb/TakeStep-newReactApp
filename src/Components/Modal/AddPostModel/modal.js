import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./modal.css";
import CreateTask from "../../../Pages/HomePage/CreateTaskSection/createTask";
const ModalPost = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      {/* <CreateTask onClick={toggle}></CreateTask> */}
      <Button
        style={{
          marginLeft: "6px",
          backgroundColor: "#0E0D0D",
          borderRadius: "58px",
          height: "48px",
          width: "138px",
          fontSize: "20px",
          fontFamily: "tahoma"
        }}
        onClick={toggle}
      >
        Create Post
      </Button>
      <Modal
        className="modalShap"
        isOpen={modal}
        toggle={toggle}
        className={className}
        style={{ marginLeft: "320px" }}
      >
        <ModalHeader
          className="headerModal"
          toggle={toggle}
          style={{ paddingLeft: "320px" }}
        >
          Add Post
        </ModalHeader>
        <ModalBody className="bodyModal"></ModalBody>
        <ModalFooter className=" bodyModal">
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
            style={{ color: "#ebc010", backgroundColor: "#494848" }}
          >
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalPost;
