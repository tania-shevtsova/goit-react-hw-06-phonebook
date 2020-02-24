import React from "react";
import ContactItem from "../contactItem/ContactItemContainer";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import listTransitionSlide from "./listSlide.module.css";

const ContactList = props => (
  
  <TransitionGroup component="ul">
     {props.filter !== ""
      ? props.filterArr.map(el => (
          <CSSTransition
            key={el.id}
            timeout={250}
            unmountOnExit
            classNames={listTransitionSlide}
          >
            <ContactItem key={el.id} el={el}/>
          </CSSTransition>
        ))
      : props.contacts.map(el => (
          <CSSTransition
            key={el.id}
            timeout={250}
            unmountOnExit
            classNames={listTransitionSlide}
          >
            <ContactItem key={el.id} el={el}/>
          </CSSTransition>
        )) } 
  </TransitionGroup>
);

export default ContactList;
