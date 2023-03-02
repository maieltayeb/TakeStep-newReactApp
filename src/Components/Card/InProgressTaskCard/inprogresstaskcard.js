import React from "react";
import { NavLink } from "react-router-dom";
import "./inprogresstaskcard.css";
import { Toast, ToastBody, ToastHeader, Col, Row, Button } from "reactstrap";
import ModalLink from "../../Modal/AddLink/AddLink-Modal";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  AddTasksToVol,
  getTasksByVolId,
} from "../../../Redux/actions/InprogressActionCreator";
import CountDown from "./CountDown";

const InProgressTaskCard = (props) => {
  const data = [];
  const { state } = props;
  // console.log(props);
  const [inprogState, setState] = useState(data);

  const dispatch = useDispatch();

  const user = localStorage.getItem("user");
  const volunteerId = JSON.parse(user).id;

  useEffect(() => {
    // debugger;
    dispatch(getTasksByVolId(volunteerId));
    //console.log(state);
  }, []);

  return (
    <div>
      <Row className="mr-0">
        <Col>
          <div className="p-3 my-2 rounded">
            <Toast>
              <ToastHeader>In-Progress</ToastHeader>
              <ToastBody>
                <div className="p-1 my-2 rounded bg-docs-transparent-grid">
                  {state.length ? (
                    state.map((d) => {
                      return (
                        <Toast>
                          <Row className="p-2">
                            <Col sm={9}>
                              {" "}
                              <ToastHeader className="p-1 taskTitle">
                                <NavLink to="/taskDetails">
                                  {d.details.jobTitle}
                                </NavLink>
                              </ToastHeader>
                            </Col>
                            <ModalLink
                              state={state}
                              inProgressTaskId={d.inprogTaskId}
                              jobId={d.details.id}
                              bussinessOwnerId={d.details.userId}
                              jobTitle={d.details.jobTitle}
                            ></ModalLink>
                          </Row>

                          <ToastBody className=" bg-warning m-3  rounded">
                            <CountDown date={d.details.timeDurationNumber} />
                          </ToastBody>
                          <ToastBody className=" bg-danger m-3 rounded">
                            <Row>
                              {" "}
                              <Col>DeadLine</Col>
                              <Col>
                                {d.details.timeDurationNumber}
                                <img
                                  className="w-25 ml-4"
                                  src="/img/schedule.png"
                                />
                              </Col>
                            </Row>
                          </ToastBody>
                        </Toast>
                      );
                    })
                  ) : (
                    <div>No Tasks yet </div>
                  )}
                </div>
              </ToastBody>
            </Toast>
          </div>
        </Col>

        <Col>
          <div className="p-3 my-2 rounded">
            <Toast>
              <ToastHeader>Missed Tasks</ToastHeader>
              <ToastBody>
                <div className="p-1 my-2 rounded bg-docs-transparent-grid">
                  <Toast>
                    <ToastHeader>
                      <NavLink to="/taskDetails">Image Upload Node js</NavLink>
                    </ToastHeader>
                    <ToastBody outline color="danger" className=" m-3 ">
                      <Row>
                        {" "}
                        <Col className="text-danger">
                          <img
                            className=" mr-3"
                            src="/img/warning.png"
                            style={{ width: "8%" }}
                          />
                          you didnt upload this task
                        </Col>
                      </Row>
                    </ToastBody>
                  </Toast>
                </div>
              </ToastBody>
            </Toast>
          </div>
        </Col>
      </Row>
    </div>
  );
};
const mapStateToProps = (State) => {
  return {
    state: State.Inprogress.appliedTasks,
    timesUpState: State.timesUp,
  };
};
export default connect(mapStateToProps)(InProgressTaskCard);

// export default InProgressTaskCard;
