import React from "react";
import { CSSTransition } from "react-transition-group";
import listTransitionSlide from "../contactList/listSlide.module.css";
import { connect } from "react-redux";
import { changeInputFilter } from "../../redux/actions";

const Filter = props => (
  // <CSSTransition
  //   // in={valueFilter !== null}
  //   timeout={250}
  //   unmountOnExit
  //   classNames={listTransitionSlide}
  // >
  <input
    minLength={5}
    type="text"
    onChange={e => props.inputFilter(e.target.value)}
    // value={props.filter}
  />
  // </CSSTransition>
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
