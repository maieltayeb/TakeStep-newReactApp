import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import EducationReducer from "./EducationReducer";
import SkillReducer from "./skillReducer";
// import ownerInfoReducer from "./ownerInfoReducer";
import InprogReducer from "./InprogressReducer";
import FeedbackReducer from "./feedbackReducer";

export default combineReducers({
  Users: usersReducer,
  educations: EducationReducer,
  Skills: SkillReducer,
  Inprogress: InprogReducer,
  Feedback: FeedbackReducer,
});
// console.log(InprogReducer);
