import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import SearchBox from "../Components/SearchBox/SearchBox";
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

const NavWelcome = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        style={{ backgroundColor: "#e9ecef" }}
        light
        expand="md"
        className="p-0 shadow"
      >
        <Container className="themed-container" fluid={true}>
          <NavbarBrand href="/" style={{ "margin-left": "93px" }}>
            <img width="70%" src="/img/logo.png" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav style={{ marginRight: "31.9rem" }} navbar>
              <NavItem>
                {/* <SearchBox /> */}
                {/* <Input className="p-3 mt-1"  placeholder="search ..." style={{height:"22px",borderRadius:"35px"}}type="text"/> */}
              </NavItem>
              {/* <NavItem className=" ml-2 mt-2">
                <i className="fas fa-search"></i>
              </NavItem> */}
            </Nav>
            <Nav
              style={{
                marginRight: "3.5rem",
                backgroundColor: "#EBC010",
                padding: "19px 75px 10px 32px"
              }}
            >
              <NavItem>
                <NavLink style={{ cursor: "pointer" }}>About Us</NavLink>
              </NavItem>
              <NavItem className="ml-2 ">
                <NavLink
                  style={{ cursor: "pointer", color: "black" }}
                  to="/logIn"
                  tag={RRNavLink}
                >
                  Sign In
                </NavLink>
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
              <NavLink
                style={{ cursor: "pointer", color: "White" }}
                to="signUp"
                tag={RRNavLink}
              >
                Sign Up
              </NavLink>
            </Button>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavWelcome;
