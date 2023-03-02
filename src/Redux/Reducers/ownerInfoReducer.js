import { GET_OwnerUser, EDIT_OwnerUser } from "../actionTypes";

const initialState = null;
export default (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case GET_OwnerUser:
      newState = action.payload;
      break;

    case EDIT_OwnerUser:
      newState = action.payload;
      break;

    default:
      newState = state;
  }
  console.log(newState);
  return newState;
};
