import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { Button, FormGroup, Container, Alert } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import "./login.css";
import NavWelcome from "../../Layout/navWelcome";
import { Link } from "react-router-dom";
import { logInBussinessOwner } from "../../Redux/actions/businessOwnerActionCreator";
import { logInVolunteers } from "../../Redux/actions/volunteerActionCreator";
import { useHistory } from "react-router-dom";

const Login = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [stateError, setStateError] = useState(false);

  const [state, setState] = useState({
    email: "",
    password: ""
  });
  // const [statePassword, setStatePassword] = useState("");
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  let currentuserJson = localStorage.getItem("user");

  let currentUser = JSON.parse(currentuserJson);
  // console.log("currentUserBeforeHadelSubmit", currentUser);

  let response;
  const handleValidSubmit = async (event, values) => {
    // console.log("click login ", values);
    event.preventDefault();

    // debugger;
    let bussinesslogin = props.users.filter(user => {
      return user.email === state.email;
    });
    if (bussinesslogin.length == 0) {
      let response = await dispatch(logInVolunteers(state));

      if (response == "wrong email or password") {
        setStateError(true);
      } else {
        currentUser = response;
        history.push(`/profile/${currentUser.id}`);
      }
    } else {
      let response = await dispatch(logInBussinessOwner(state));

      if (response == "wrong email or password") {
        setStateError(true);
      } else {
        currentUser = response;
        history.push(`/profile/${currentUser.id}`);
      }
    }
  };

  return (
    <>
      <NavWelcome></NavWelcome>
      <Container>
        <AvForm
          onValidSubmit={handleValidSubmit}
          className="border-warning  p-5"
          style={{
            width: "50%",
            margin: "110px auto",
            border: "1px solid",
            borderRadius: "1.5rem"
          }}
        >
          <h3 className="text-center m-3 mb-5"> Login</h3>
          <FormGroup className="input-icons">
            <i class="fa fa-envelope icon text-warning"></i>
            <AvField
              errorMessage="Invalid email"
              validate={{ email: true }}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="input-field"
              onChange={handleChange}
              style={{ paddingLeft: "3rem" }}
            />
          </FormGroup>{" "}
          <FormGroup className="input-icons">
            <i class="fas fa-lock icon text-warning"></i>
            <AvField
              errorMessage="Invalid password must be 4  numbers/charchters at least "
              validate={{
                required: { value: true },
                pattern: { value: "^[A-Za-z0-9]+$" },
                minLength: { value: 4 }
              }}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              style={{ paddingLeft: "3rem" }}
            />
            <p className="m-3">Forgot your Password ?</p>

            {stateError && (
              <Alert color="danger"> worng email or passwoed !!</Alert>
            )}
          </FormGroup>{" "}
          <Button
            className="d-block bg-warning border-warning  text-dark"
            style={{
              margin: "20px auto",
              borderRadius: "1.5rem",
              padding: ".7rem 5rem"
            }}
          >
            Login
          </Button>
          <Link
            to="/signUp"
            className="btn d-block bg-dark border-dark text-white"
            style={{
              margin: "20px 125px",
              borderRadius: "1.5rem",
              padding: ".7rem 4.5rem"
            }}
          >
            Sign Up
          </Link>
        </AvForm>
      </Container>
    </>
  );
};
const mapStateToProps = reduxState => {
  return {
    users: reduxState.Users.users
    // currentUser: reduxState.Users.currentUser
  };
};

export default connect(mapStateToProps)(Login);
