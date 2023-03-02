import React, { useState } from "react";
import { Nav, NavItem, Button } from "reactstrap";
import "./nav.css";
const SignNavBtn = props => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle =() => setIsOpen(!isOpen);

  return (
    <div>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Button className="navBtn">Sign Up</Button>
        </NavItem>
      </Nav>
    </div>
  );
};

export default SignNavBtn;
