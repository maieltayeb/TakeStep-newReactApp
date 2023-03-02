import * as actionTypes from "../actionTypes";
import { ADD_FEEDBACK, GET_FEEDBACK } from "../actionTypes";

const initialState = [];

const FeedbackReducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case GET_FEEDBACK:
      // debugger;
      newState = Object.keys(action.payload).map((key) => ({
        id: String(key),
        details: action.payload[key],
      }));
      break;
    case ADD_FEEDBACK:
      newState = [...state, action.payload];

      break;
  }
  return newState;
  // }
};

export default FeedbackReducer;
