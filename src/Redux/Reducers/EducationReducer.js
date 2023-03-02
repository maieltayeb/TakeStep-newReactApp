import * as actionTypes from "../actionTypes";
import {
  GET_EDU,
  REMOVE_EDU,
  ADD_EDUCATION,
  EDIT_EDUCATION
} from "../actionTypes";

const initialState = [];

const EducationReducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case GET_EDU:
      newState = action.payload;
      break;
    case ADD_EDUCATION:
      newState = [...state, action.payload];
      break;
    case REMOVE_EDU:
      newState = state.filter(edu => edu._id !== action.payload);
      break;
    case EDIT_EDUCATION:
      newState = state.map(edu =>
        edu._id === action.payload.updatedEducation._id
          ? action.payload.updatedEducation
          : edu
      );
      break;

    default:
      break;
  }
  return newState;

};

export default EducationReducer;

