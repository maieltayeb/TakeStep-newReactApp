import {
  Get_Countries,
  Get_timeDurationTypes,
  post_SignUp_BussinessUsers,
  post_SignUp_VolunteerUsers,
  Get_BussinessUsers,
  Get_VolunteerUsers,
  Get_BussinessUsersById,
  Get_VolunteerById,
  Get_Jobs,
  post_Login_BussinessUsers,
  post_Login_VolunteerUsers,
  Edit_BussinessUsers,
  Edit_VolunteerUsers,
  ADD_Job,
  Delete_Job,
  GET_COMMENT,
  ADD_COMMENT,
  GET_Error,
  Edit_Job
} from "../actionTypes";
const initialState = {
  users: [],
  currentUser: JSON.parse(localStorage.getItem("user")),
  jobs: [],
  countries: [],
  timeDurationTypes: [],
  bussinessOwnerUsers: [],
  comments: [],
  volunteerUsers: [],
  volunteerUsersById: [],
  errorMessg: ""
};
export default (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case Get_BussinessUsersById:
      newState = { ...state };
      newState.bussinessOwnerUsers = [
        ...state.bussinessOwnerUsers,
        action.payload
      ];
      break;
    case Get_VolunteerById:
      newState = { ...state };
      newState.volunteerUsersById = [
        ...state.volunteerUsersById,
        action.payload
      ];
      break;
    case Get_BussinessUsers:
      // case Get_VolunteerUsers:
      newState = { ...state };
      newState.users = action.payload;
      break;
    case Get_VolunteerUsers:
      newState = { ...state };
      newState.volunteerUsers = action.payload;
      break;

    case Get_Countries:
      newState = { ...state };
      newState.countries = action.payload;
      //   console.log(newState.countries);
      break;
    case Get_Jobs:
      newState = { ...state };
      newState.jobs = action.payload;
      //   console.log(newState.countries);
      break;
    case Get_timeDurationTypes:
      newState = { ...state };
      newState.timeDurationTypes = action.payload;
      //   console.log(newState.countries);
      break;
    case post_SignUp_BussinessUsers:
      newState = { ...state };
      newState.users = [...state.users, action.payload];
      //   console.log(newState.users);
      break;
    case post_SignUp_VolunteerUsers:
      newState = { ...state };
      newState.volunteerUsers = [...state.volunteerUsers, action.payload];
      break;
    case post_Login_BussinessUsers:
    case post_Login_VolunteerUsers:
      newState = { ...state };
      newState.currentUser = { ...state.currentUser };
      newState.currentUser = action.payload;
      break;
    case Edit_BussinessUsers:
    case Edit_VolunteerUsers:
      newState = { ...state };
      newState.currentUser = action.payload;
      break;
    case ADD_Job:
      newState = { ...state };
      newState.jobs = [...state.jobs, action.payload];
      break;
    case Delete_Job:
      newState = { ...state };

      newState.jobs = newState.jobs.filter(job => job.id !== action.payload);
      break;
    case Edit_Job:
      newState = { ...state };
      newState.jobs = newState.jobs.map(job =>
        job.id === action.payload.jobId ? action.payload : job
      );
      break;
    case GET_Error:
      newState = { ...state };
      newState.errorMessg = action.payload;
      break;
    case GET_COMMENT:
      newState = { ...state };
      newState.comments = action.payload;
      console.log("aya", state.comments);
      state = newState;
      console.log("aya after", state.comments);
      break;
    case ADD_COMMENT:
      // debugger;
      newState = { ...state };
      console.log("newState:", newState);
      newState.comments = [...state.comments, action.payload.newComment];
      newState.jobs = state.jobs.map(job =>
        job.id === action.payload.jobId
          ? {
              ...job,
              comments: {
                ...job.comments,
                [action.payload.newComment.id]: action.payload.newComment
              }
            }
          : job
      );
      state = newState;
      console.log("state", state);
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};
