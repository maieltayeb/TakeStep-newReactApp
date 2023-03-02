import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import "./nav.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Container
} from "reactstrap";
import SearchBox from "../../Components/SearchBox/SearchBox";
import NotificationDropdown from "../../Components/Dropdown/NotificationDropdown";

const ProfileNavbar = props => {
  const { handleChange } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  let currentuserJson = localStorage.getItem("user");
  // debugger;
  let currentUser = JSON.parse(currentuserJson);

  const handleClick = () => {
    localStorage.clear();
  };

  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "#e9ecef",
          position: "fixed",
          zIndex: "5",
          width: "100%",
          top: "0px"
        }}
        light
        expand="md"
        className="p-0 shadow"
      >
        <Container className="themed-container" fluid={true}>
          <NavbarBrand href="/" style={{ marginLeft: "93px" }}>
            <img width="70%" src="/img/logo.png" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav style={{ marginRight: "31.9rem" }} navbar>
              <NavItem>
           
              </NavItem>
         
            </Nav>
            <Nav style={{ marginRight: "3.5rem" }}>
              <NavItem>
                <NavLink
                  className="userLink"
                  // style={{ cursor: "pointer" }}
                  tag={RRNavLink}
                  to={{
                    // "/home"
                    pathname: "/home",
                    search: `/${currentUser.id}`
                  }}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="userLink"
                  // tag={RRNavLink}

                  //  style={{ cursor: "pointer", color: "unset" }}
                >
                  About Us
                </NavLink>
              </NavItem>
              <NavItem className="ml-2 ">
                <NavLink
                  className="userLink"
                  // style={{ cursor: "pointer", color: "unset" }}
                  tag={RRNavLink}
                  to={{
                    // "/home"
                    pathname: "/profile",
                    search: `/${currentUser.id}`
                  }}
                >
                  My Profile
                </NavLink>
              </NavItem>
              <NavItem className="ml-2 ">
                <NotificationDropdown></NotificationDropdown>
              </NavItem>
            </Nav>

            <Button
              style={{
                borderRadius: "35px",
                color: "#fffff",
                backgroundColor: "black",
                padding: "4px 29px"
              }}
            >
              <RRNavLink
                onClick={handleClick}
                className="userLink"
                to="/welcomePage"
              >
                {" "}
                Log Out
              </RRNavLink>
            </Button>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default ProfileNavbar;

