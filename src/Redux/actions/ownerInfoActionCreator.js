import axios from "axios";

import {
  // GET_OwnerUsers,
  GET_OwnerUser,
  ADD_OwnerUser,
  EDIT_OwnerUser,
  DELETE_OwnerUser
} from "../actionTypes";
// export const getOwnerUsers = () => dispatch => {
//   axios
//     .get("https://take-a-step-9ca1d.firebaseio.com/bussinessowner.json")
//     .then(res => {
//       const allOwnerUsers = res.data;
//       const allUsers = [];
//       for (const key in allOwnerUsers) {
//         allUsers.push({ id: key, ...allUsers[key] });
//       }
//       console.log(allOwnerUsers);
//       dispatch(getOwnerUsersSuccess(allOwnerUsers));
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// const getOwnerUsersSuccess = OwnerUsers => {
//   return { type: GET_OwnerUsers, payload: OwnerUsers };
// };

export const getOwnerUserById = id => dispatch => {
  axios
    .get(`https://take-a-step-9ca1d.firebaseio.com/bussinessowner/${id}.json`)
    .then(res => {
      const OwnerUser = res.data;
      // const currentUser = [];
      // currentUser.push({ ...OwnerUser });
      console.log(OwnerUser);
      dispatch(getOwnerUserSuccess(OwnerUser));
    })
    .catch(err => {
      console.log(err);
    });
};

const getOwnerUserSuccess = OwnerUser => {
  return { type: GET_OwnerUser, payload: OwnerUser };
};

export const editOwnerUser = (id, newUser) => dispatch => {
  axios
    .patch(
      `https://take-a-step-9ca1d.firebaseio.com/bussinessowner/${id}.json`,
      newUser
    )
    .then(res => {
      const { data } = res;
      console.log(data);

      dispatch(editOwnerUserSuccess(data));
    })
    .catch(err => {
      console.log(err);
    });
};

const editOwnerUserSuccess = newUser => {
  return { type: EDIT_OwnerUser, payload: newUser };
};
