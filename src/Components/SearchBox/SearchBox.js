import React from "react";
import { connect } from "react-redux";
import { Input } from "reactstrap";

const SearchBox = props => {
  const { handleChange } = props;

  return (
    <>
      <Input
        onChange={handleChange}
        className="p-3 mt-1"
        placeholder="search ..."
        style={{ height: "22px", borderRadius: "35px" }}
        type="text"
      />
    </>
  );
};

const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.Users.currentUser,
    jobs: reduxState.Users.jobs
  };
};
export default connect(mapStateToProps)(SearchBox);
