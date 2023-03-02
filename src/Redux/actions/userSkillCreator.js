import axios from "axios";

import {
  GET_SKILL_USER_SKILLS,
  GET_SKILL_BY_ID,
  ADD_SKILL,
  ADD_SKILL__SEC_UPDATE,
  DELETE_SKILL,
  EDIT_SKILL
} from "../actionTypes";

export const getSkillById = id => dispatch => {
  axios
    .get(`https://newapi-q6i2.onrender.com/volunteer/getSkillById/${id}`, {
      headers: { authorization: localStorage.getItem("token") }
    })
    .then(res => {
      const userSkill = res.data;

      // console.log(userSkill.skillName);
      dispatch(getSkill(userSkill.skilName));
    })
    .catch(err => {
      // console.log(err);
    });
};

const getSkill = skill => {
  return { type: GET_SKILL_BY_ID, payload: skill };
};

export const getUserSkills = id => dispatch => {
  axios
    .get(`https://newapi-q6i2.onrender.com/volunteer/getUserSkills/${id}`, {
      headers: { authorization: localStorage.getItem("token") }
    })

    .then(res => {
      const userAllSkills = res.data;
      console.log(userAllSkills);
      dispatch(getUserAllSkills(userAllSkills));
    })
    .catch(err => {
      console.log(err);
    });
};

const getUserAllSkills = skills => {
  return { type: GET_SKILL_USER_SKILLS, payload: skills };
};

export const AddSkills = skillsAdded => dispatch => {
  axios
    .post(`https://newapi-q6i2.onrender.com/volunteer/addSkill`, skillsAdded, {
      headers: { authorization: localStorage.getItem("token") }
    })
    .then(res => {
      const addSkill = res.data;

      console.log(addSkill.newSkill);
      dispatch(AddSkillToUser(addSkill.newSkill));
    })
    .catch(err => {
      console.log(err);
    });
};

const AddSkillToUser = skillAdded => {
  return { type: ADD_SKILL, payload: skillAdded };
};
////////////////////////////////
export const addSkillsInSec = NewDataInSec => {
  return { type: ADD_SKILL__SEC_UPDATE, payload: NewDataInSec };
};
export const DeletSkills = (volunteerId, skillId) => dispatch => {
  axios
    .delete(
      `https://newapi-q6i2.onrender.com/volunteer/delete_skill/${volunteerId}/${skillId}`,
      {
        headers: { authorization: localStorage.getItem("token") }
      }
    )
    .then(res => {
      // console.log(res.data);
      dispatch(DeleteSkill(skillId));
    })
    .catch(err => {
      console.log(err);
    });
};

const DeleteSkill = id => {
  return { type: DELETE_SKILL, payload: id };
};
