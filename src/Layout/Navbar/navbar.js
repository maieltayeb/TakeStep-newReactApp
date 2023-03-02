import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import "./nav.css";
import SearchNav from './searchNav';
import SignNavBtn from './signNavBtn';

const WelcomeNavBar = (props) => {
// const [isOpen, setIsOpen] = useState(false);
// const toggle =() => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar className= " fixed-top navbar-toggler shadow-sm m-0  pt-0 pb-0 navbarStyle"  light expand="sm">
        <NavbarBrand href="/"><img className="logo " src="./img/logo.png"/></NavbarBrand>
        {/* <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar> */}
        <SearchNav/>
        <Nav className="ml-auto aboutSignNav " navbar >
            <NavItem >
              <NavLink href="#"  className="ml-35 aboutSignNavLink navItem">About Us</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="#"  className="aboutSignNavLink navItem">Sign In</NavLink>
            </NavItem>
            </Nav>
         <SignNavBtn/>
        {/* </Collapse> */}
      </Navbar>
    </div>
  );
}



export default WelcomeNavBar;