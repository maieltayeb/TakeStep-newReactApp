import axios from "axios";
import { ADD_FEEDBACK, GET_FEEDBACK } from "../actionTypes";

export const AddFeedback = (id, feedback) => async (dispatch) => {
  const feedbackRes = await axios.post(
    `https://take-a-step-9ca1d.firebaseio.com/Feedback/${id}.json`,
    feedback
  );
  feedback.id = feedbackRes.name;

  dispatch(AddFeed(feedback));
};

const AddFeed = (review) => {
  return { type: ADD_FEEDBACK, payload: review };
};

export const getFeedbacksById = (id) => async (dispatch) => {
  debugger;
  const feedData = await axios.get(
    `https://take-a-step-9ca1d.firebaseio.com/Feedback/${id}.json`
  );

  const feedbackArray = feedData.data;

  console.log(feedbackArray);
  dispatch(getUserFeedbacks(feedbackArray));
};

const getUserFeedbacks = (feedbacks) => {
  return { type: GET_FEEDBACK, payload: feedbacks };
};
