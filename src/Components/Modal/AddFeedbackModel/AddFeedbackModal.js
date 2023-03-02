import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Label,
  Input,
} from "reactstrap";
import "./AddFeedbackModal.css";
import "../../ProjectLink/project-Link-Component.css";
import SatrsRating from "./rating";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AddFeedback } from "./../../../Redux/actions/FeedbackActionCreator";

const FeedbackModel = (props) => {
  const { buttonLabel, modalShap, task } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const dispatch = useDispatch();
  const handleRating = (ratingValue) => {
    setRating(ratingValue);
  };
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbackObj = {
      rating,
      comment,
      taskTitle: task.jobTitle,
      link: task.taskLink,
    };
    dispatch(AddFeedback(task.volunteerId, feedbackObj));
    setModal(false);
  };
  return (
    <div>
      <div className="feedback-button" onClick={toggle}>
        <p className="feedback-button-p">Feedback</p>
      </div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="feedback-modalShap"
        style={{ marginLeft: "320px" }}
      >
        <ModalHeader
          className="feedback-headerModal"
          style={{ paddingLeft: "170px", paddingLeft: "315px" }}
          toggle={toggle}
        >
          Add Feedback
        </ModalHeader>
        <ModalBody className="feedback-bodyModal">
          <Form>
            {/* <SatrsRating /> */}
            <Label>Rate Task :</Label>
            <br />
            <div style={{ marginLeft: "80px" }}>
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => handleRating(ratingValue)}
                    />
                    <FaStar
                      className="star"
                      size={30}
                      color={
                        ratingValue <= (hover || rating) ? "#ebc010" : "#888888"
                      }
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>
            <br /> <br />
            <Label>Comment :</Label>
            <Input
              type="textarea"
              onChange={(e) => handleChange(e)}
              placeholder="write your feedback"
              Rows="4"
              value={comment}
            />
          </Form>
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
              width: "100px",
            }}
          >
            Cancel
          </Button>{" "}
          <Button
            color="secondary"
            onClick={toggle}
            onClick={(e) => handleSubmit(e)}
            style={{
              backgroundColor: "#494848",
              borderRadius: "20px",
              color: "#EBC010",
              width: "100px",
            }}
          >
            Send
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default FeedbackModel;
