import * as actionTypes from "../actionTypes";
import {
  GET_SKILL_USER_SKILLS,
  ADD_SKILL__SEC_UPDATE,
  ADD_SKILL,
  EDIT_SKILL,
  DELETE_SKILL,
} from "../actionTypes";

const initialState = [];

const SkillReducer = (state = initialState, action) => {
  let newState;
  let secState = [];
  switch (action.type) {
    case GET_SKILL_USER_SKILLS:
      newState = action.payload;
      break;
    case ADD_SKILL:
      newState = [...state, action.payload];

      break;
    case ADD_SKILL__SEC_UPDATE:
      newState = [...action.payload];
      console.log(newState);
      break;
    // debugger;

    case DELETE_SKILL:
      debugger;
      newState = state.filter((skill) => skill._id !== action.payload);
      console.log(newState);
      break;

    default:
      newState = state;
      break;
  }
  return newState;
  // }
};

export default SkillReducer;
