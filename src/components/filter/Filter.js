import React from "react";
import { connect } from "react-redux";
import { changeInputFilter,  } from "../../redux/actions";

const Filter = props => (
  <>
  <input
    minLength={5}
    type="text"
    onChange={e => props.inputFilter(e.target.value)}
  />

  </>
);


const mapDispatchToProps = dispatch => ({
  inputFilter: param => {
    dispatch(changeInputFilter(param));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Filter);
