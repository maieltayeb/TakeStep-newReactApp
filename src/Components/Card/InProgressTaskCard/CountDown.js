import React, { useEffect, useState } from "react";
//import ReactDOM from "react-dom";
import { Col, Row } from "reactstrap";

const CountDown = props => {
  const timerComponents = [];
  // const [timesUp, setTimesUp] = useState(timerComponents);
  // useEffect(() => {
  //   setTimesUp(timerComponents);
  // }, [timesUp]);
  // // console.log(timesUp);

  const { date } = props;
  //   const [intervalsState, setTimeinterval] = useState(data);
  //   console.log(intervalsState);
  //   console.log(date);
  //   useEffect(() => {
  //     setTimeinterval(intervalsState);
  //   });
  function CountdownTimer() {
    const calculateTimeLeft = () => {
      const difference = +new Date(date) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    });

    // var timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
      if (!timeLeft[interval]) {
        return;
      }
      //   setTimeinterval(
      //     intervalsState.push(
      //       <span>
      //         {timeLeft[interval]} {interval}
      //       </span>
      //     )
      //   );
      //console.log(intervalsState);

      timerComponents.push(
        <span>
          {timeLeft[interval]} {interval}{" "}
        </span>
      );
    });
  }
  CountdownTimer();
  return (
    <div>
      <Row>
        {" "}
        <Col>Rest Of Time </Col>
        <Col>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          {/* && call fn to puch the id of the missed task in db (arr of the task title by their ids) */}
          {/* {d.timeDurationType} */}
          <img
            className=" ml-3"
            src="/img/sand watch.png"
            style={{ width: "18%" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default CountDown;
