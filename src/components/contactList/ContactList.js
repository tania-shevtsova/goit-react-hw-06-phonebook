import React from "react";
import ContactItem from "../contactItem/ContactItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import listTransitionSlide from "./listSlide.module.css";
import {connect} from 'react-redux';

const ContactList = (props) => (

  <TransitionGroup component="ul">
    {props.contacts.map(el => (
      <CSSTransition
          key={el.id}
          timeout={250}
          unmountOnExit
          classNames={listTransitionSlide}
        >
          <ContactItem key={el.id} el={el} />
        </CSSTransition>
    ))}


  </TransitionGroup>
)

const mapStateToProps = (state) => state


export default connect(mapStateToProps)(ContactList);
