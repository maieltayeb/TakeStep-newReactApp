import React, { useEffect, useState } from "react";
import "./skillSec.css";
import { getUserSkills } from "../../Redux/actions/userSkillCreator";
import { useDispatch, connect } from "react-redux";
import AddSkill from "../Modal/AddSkillModal/AddSkillModal";
import { addSkillsInSec } from "./../../Redux/actions/userSkillCreator";
const SkillSection = (props) => {
  const { userSkills } = props;
  const dispatch = useDispatch();
  const user = localStorage.getItem("user");
  const userId = JSON.parse(user).id;
  // const usersillData = useSelector((state) => state.Skills);
  // const [newSkill, SetState] = useState(userSkills);
  useEffect(() => {
    dispatch(getUserSkills(userId));
    // SetState(userSkills);
  }, [dispatch]);
  // console.log(newSkill);
  return (
    <div className="skillSection-container mt-4 rounded ">
      <div className="skillSection-container-top">
        <div className="skillSection-container-top-h6">
          <h6>Skills</h6>
        </div>
        <div className="skillSection-container-top-icon">
          {/* <i class="fas fa-pencil-alt"></i>{" "} */}
          <AddSkill></AddSkill>
        </div>
      </div>
      <div className="skillSection-container-body">
        <div className="skillSection-container-body-info">
          <div className="skillSection-container-body-info-title">
            Your skills
          </div>
          <div className="skillSection-devs">
            {userSkills.length ? (
              userSkills.map((obj) => {
                return (
                  <React.Fragment>
                    <span className="dev">{obj.skillName}</span>
                  </React.Fragment>
                );
              })
            ) : (
              <div>No item added yet </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userSkills: state.Skills,
  };
};
export default connect(mapStateToProps)(SkillSection);
