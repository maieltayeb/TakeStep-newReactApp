import React, { useState } from "react";
import { connect } from "react-redux";
import { Nav, NavItem, Input } from "reactstrap";
import "./nav.css";
const SearchNav = props => {
  const { jobs, handleChange } = props;

  return (
    <div>
      <Nav className="mR-auto  clearfix" navbar>
        <NavItem>
          <Input
            onChange={handleChange}
            class="form-control py-2"
            placeholder="search"
            type="search"
            className="searchInput float-left mr-1"
          >
            <span class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">
                <i class=" mt- fas fa-search"></i>
              </button>
            </span>
          </Input>
        </NavItem>
        <NavItem>
          <span>
            <i class=" mt-2 fas fa-search"></i>
          </span>
        </NavItem>
      </Nav>
    </div>
  );
};
const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser,
    jobs: reduxState.Users.jobs
  };
};
export default connect(mapStateToProps)(SearchNav);
