import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";
import {
  Button,
  FormGroup,
  Input,
  Container,
  Col,
  Row,
  Alert
} from "reactstrap";
import { Link } from "react-router-dom";
import "./signup.css";
import NavWelcome from "../../Layout/navWelcome";
import {
  SignupBussinessOwner,
  getAllUsersBussinessOwner
} from "../../Redux/actions/businessOwnerActionCreator";
import {
  SignupVolunteers,
  getAllVolunteers
} from "../../Redux/actions/volunteerActionCreator";

const SignUp = props => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    country: "5edab5034b7a063de0203607"
  });
  const [stateStatus, setSatateStatus] = useState(false);
  const [stateError, setStateError] = useState(false);
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  // const handlePaymentChange = e => {
  //   const { name, value } = e.target;
  //   setState(prevState => ({
  //     ...prevState,
  //     paymentData: {
  //       ...prevState.paymentData,
  //       [name]: value
  //     }
  //   }));
  // };

  /*******handel click*************** */
  const handleClick = e => {
    if (e.target.textContent === "Software Intern") {
      setSatateStatus(true);
      setState(prevState => ({
        ...prevState,
        paymentData: {
          ...prevState.paymentData,
          cardNum: 58888888886569,
          secretNum: 546,
          phone: "01222222222",
          total: 800
        }
      }));
    } else {
      setSatateStatus(false);
    }
  };
  let response;

  /*******handel submit*************** */
  const handleValidSubmit = async (event, values) => {
    // console.log("values", values);
    event.preventDefault();
    // console.log("state", state);
    // debugger;
    if (stateStatus) {
      dispatch(getAllVolunteers());
      response = await dispatch(SignupVolunteers(state));

      if (response != " email already exist!") {
        history.push("/logIn");
      } else if (response == " email already exist!") {
        setStateError(true);
      }
    } else if (!stateStatus) {
      dispatch(getAllUsersBussinessOwner());
      response = await dispatch(SignupBussinessOwner(state));
      if (response != " email already exist!") {
        history.push("/logIn");
      } else if (response == " email already exist!") {
        setStateError(true);
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
          <h3 className="text-center m-3 mb-5"> Sign Up</h3>
          <FormGroup className="input-icons">
            <i class="fa fa-envelope icon text-warning"></i>
            <AvField
              errorMessage="Invalid email"
              validate={{
                email: true,
                required: true
              }}
              onChange={handleChange}
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
              className="input-field"
              style={{ paddingLeft: "3rem" }}
            />
            {stateError && (
              <Alert color="danger">this email Already exist !!</Alert>
            )}
          </FormGroup>{" "}
          <Row>
            <Col md={6}>
              <FormGroup className="input-icons">
                <i class="fas fa-user icon text-warning"></i>
                <AvField
                  errorMessage="Invalid First-name"
                  validate={{
                    required: { value: true },
                    pattern: { value: "^[A-Za-z]+$" },
                    minLength: { value: 2 },
                    maxLength: { value: 16 }
                  }}
                  onChange={handleChange}
                  type="text"
                  name="firstName"
                  placeholder="FirsttName"
                  style={{ paddingLeft: "3rem" }}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="input-icons">
                <i class="fas fa-user icon text-warning"></i>
                <AvField
                  errorMessage="Invalid Last-name"
                  validate={{
                    required: { value: true },
                    pattern: { value: "^[A-Za-z]+$" },
                    minLength: { value: 2 },
                    maxLength: { value: 16 }
                  }}
                  onChange={handleChange}
                  type="text"
                  name="lastName"
                  placeholder="LastName"
                  style={{ paddingLeft: "3rem" }}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className="input-icons">
            <i class="fas fa-lock icon text-warning"></i>
            <AvField
              errorMessage="Invalid password must be 4  numbers/charchters at least "
              validate={{
                required: { value: true },
                pattern: { value: "^[A-Za-z0-9]+$" },
                minLength: { value: 4 }
              }}
              onChange={handleChange}
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Create a Password"
              style={{ paddingLeft: "3rem" }}
            />
          </FormGroup>{" "}
          <FormGroup row>
            <Col>
              <Input
                type="select"
                name="country"
                id="exampleSelect"
                onChange={handleChange}
              >
                {props.countries.map(item => (
                  <option key={item.id} value={item._id}>
                    {item.countryName}
                  </option>
                ))}
              </Input>
            </Col>
          </FormGroup>
          <p className="text-center">I want to work as a :</p>
          <Button
            onClick={handleClick}
            className="  border-warning text-dark "
            style={{
              marginLeft: "4rem ",
              backgroundColor: "#F2F2F2",
              padding: ".7rem 1rem"
            }}
          >
            Software Intern
          </Button>
          <Button
            onClick={handleClick}
            className="  border-warning text-dark "
            style={{
              margin: "20px ",
              backgroundColor: "rgb(235, 192, 16)",
              padding: ".7rem 2rem"
            }}
          >
            Volunteer Coach
          </Button>
          {stateStatus && (
            <>
              <div style={{ display: "inline-block", "text-align": "center" }}>
                <img width="20%" className="mr-3" src="./img/visa.png" />
                <span>Or</span>
                <img width="20%" className="ml-3" src="./img/mastercard.png" />
              </div>
              <FormGroup className="input-icons">
                <i class="far fa-credit-card icon text-primary"></i>
                <AvField
                  // errorMessage="Invalid  card num  must be 12 number "
                  // validate={{
                  //   required: { value: true },

                  //   minLength: { value: 12 },
                  //   maxLength: { value: 12 }
                  // }}
                  min="1"
                  // onChange={handlePaymentChange}
                  disabled
                  type="Number"
                  name="cardNum"
                  id="exampleEmail"
                  placeholder="Card-num"
                  className="input-field"
                  style={{ paddingLeft: "3rem" }}
                />
              </FormGroup>

              <FormGroup className="input-icons">
                <i class="fas fa-key icon text-warning"></i>

                <AvField
                  // errorMessage="Invalid secret num must be 3  numbers "
                  // validate={{
                  //   required: { value: true },

                  //   minLength: { value: 3 },
                  //   maxLength: { value: 4 }
                  // }}
                  min="0"
                  // onChange={handlePaymentChange}
                  disabled
                  type="Number"
                  name="secretNum"
                  id="exampleEmail"
                  placeholder="Secret-num"
                  className="input-field"
                  style={{ paddingLeft: "3rem" }}
                />
              </FormGroup>

              <FormGroup className="input-icons">
                <i class="fas fa-phone-alt icon text-secondary"></i>

                <AvField
                  // errorMessage="Invalid phone number must be 11 number "
                  // validate={{
                  //   required: { value: true },

                  //   minLength: { value: 11 },
                  //   maxlength: { value: 13 }
                  // }}
                  disabled
                  min="0"
                  // onChange={handlePaymentChange}
                  type="Number"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  className="input-field"
                  style={{ paddingLeft: "3rem" }}
                />
              </FormGroup>

              <FormGroup className="input-icons">
                <i class="fas fa-money-bill-wave icon text-success"></i>

                <Input
                  // onChange={handlePaymentChange}
                  disabled
                  type="Number"
                  name="total"
                  min="1"
                  id="total"
                  placeholder="Total"
                  className="input-field"
                  style={{ paddingLeft: "3rem" }}
                />
              </FormGroup>
            </>
          )}
          <Button
            className="d-block bg-dark border-dark"
            style={{
              margin: "20px auto",
              borderRadius: "1.5rem",
              padding: ".7rem 2.5rem"
            }}
          >
            Create new Account
          </Button>
          <div className="text-center">
            <span className="text-center">Already have an account? </span>
            <Link to="/logIn" className="d-inline-block p-1">
              Log in !
            </Link>
          </div>
        </AvForm>
      </Container>
    </>
  );
};
const mapStateToProps = reduxState => {
  return {
    countries: reduxState.Users.countries,
    error: reduxState.Users.errorMessg
  };
};
export default connect(mapStateToProps)(SignUp);
