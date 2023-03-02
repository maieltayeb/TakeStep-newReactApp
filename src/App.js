import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import "./App.css";
// import BussinessOwnerProfile from "./Pages/BusinessOwnerProfile/bussinessowner";
import Profile from "./Pages/Profile/profile";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import Login from "./Pages/LoginPage/login";
import SignUp from "./Pages/SignUpPage/sighnup";
import HomePage from "./Pages/HomePage/Home";
import TaskDetails from "./Pages/Task-Details/Task-Details";
import TaskSubmittedFrame from "./Pages/TaskSubmit/task-submitted-frame";
import ProjectLink from "./Components/ProjectLink/project-Link-Component";
import TaskSubmit from "./Components/Task-submitted/Task-submitted";
import {
  getAllUsersBussinessOwner,
  getAllCountries,
  getTimeDurationTypes,
  getAllJobs
} from "./Redux/actions/businessOwnerActionCreator";
// import { getAllVolunteers } from "./Redux/actions/volunteerActionCreator";
function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsersBussinessOwner());
    dispatch(getAllCountries());
    dispatch(getTimeDurationTypes());
    dispatch(getAllJobs());
  }, [dispatch]);
  return (
    <React.Fragment>
      <Switch>
        //anonymous user
        <Route path="/signUp" component={SignUp} />
        <Route path="/logIn" component={Login} />
        <Route path="/welcomePage" exact component={WelcomePage} />
        //profile
        <Route path="/profile" component={Profile} />
        {/* <Route path="/jobDetails" component={TaskSubmittedFrame} /> */}
        <Route path="/jobDetails" render={props => <TaskSubmit {...props}></TaskSubmit>} />
        //home
        <Route path="/home" component={HomePage} />
        <Route path="/taskDetails" component={TaskDetails} />
        
        // both users
        <Redirect from="/" exact to="welcomePage" />
      </Switch>
      {/* <VolunteerProfile /> */}
    </React.Fragment>
  );
}
const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser
  };
};
export default connect(mapStateToProps)(App);
