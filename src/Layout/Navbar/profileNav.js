import React, { useState } from "react";
import SearchBox from "./../../Components/SearchBox/SearchBox";
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

const NavProf = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "#e9ecef",
          position: "fixed",
          zIndex: "5",
          width: "100%"
        }}
        light
        expand="md"
        className="p-0 shadow"
      >
        <Container className="themed-container" fluid={true}>
          <NavbarBrand href="/" style={{ "margin-left": "93px" }}>
            <img width="50%" src="/img/logo.png" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav style={{ marginLeft: "5.4rem", marginRight: "4rem" }} navbar>
              <NavItem>
                <SearchBox />
                {/* <Input className="p-3 mt-1"  placeholder="search ..." style={{height:"22px",borderRadius:"35px"}}type="text"/> */}
              </NavItem>
              <NavItem className=" ml-2 mt-2">
                <i className="fas fa-search"></i>
              </NavItem>
            </Nav>
            <Nav>
              <NavItem>
                <NavLink style={{ cursor: "pointer" }}>Home</NavLink>
              </NavItem>
              <NavItem className="ml-2 ">
                <NavLink style={{ cursor: "pointer" }}>About Us</NavLink>
              </NavItem>
              <NavItem className="ml-2 ">
                <NavLink style={{ cursor: "pointer" }}>My Proffile</NavLink>
              </NavItem>
              <NavItem
                className=" ml-2  mr-4 mt-2"
                style={{ color: "#EBC010" }}
              >
                <i class="fa fa-bell"></i>
              </NavItem>
            </Nav>

            <Button
              style={{
                borderRadius: "35px",
                color: "#fffff",
                backgroundColor: "black",
                padding: "4px 29px",
                right: "5px"
              }}
            >
              {" "}
              Logout
            </Button>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavProf;
