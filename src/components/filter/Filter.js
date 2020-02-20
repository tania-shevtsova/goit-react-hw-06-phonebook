import React from "react";
import { CSSTransition } from "react-transition-group";
import listTransitionSlide from "../contactList/listSlide.module.css";
import { connect } from "react-redux";
import { changeInputFilter } from "../../redux/actions";

const Filter = props => (
  <input
    minLength={5}
    type="text"
    onChange={e => props.inputFilter(e.target.value)}
  />
);

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  inputFilter: param => {
    dispatch(changeInputFilter(param));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
