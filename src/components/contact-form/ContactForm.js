import React from "react";
import ContactItem from "../contactItem/ContactItemContainer";
import ContactList from "../contactList/ContactListContainer";
import Filter from "../filter/Filter";
import css from "./ContactForm.module.css";
import { CSSTransition } from "react-transition-group";
import listTransitionPop from "../contactList/listPop.module.css";

const ContactForm = (props) => {
  return (

    <>
      <form onSubmit={(e)=> {e.preventDefault(); props.handleSubmitInput()}}>
        <div className={css.contactForm}>
          <span>Name</span>
          <input
            minLength={5}
            type="text"
            onChange={e => props.handleChangeName(e.target.value)}
            value={props.name}
          />
          <span>Number</span>
          <input
            minLength={5}
            maxLength={7}
            type="number"
            onChange={e => props.handleChangeNumber(e.target.value)}
            value={props.number}
          />
          <button className={css.addButton} type="submit">
            Add contact
          </button>
        </div>

        <>
          <CSSTransition
            in={props.contacts.length >= 2}
            timeout={250}
            unmountOnExit
            classNames={listTransitionPop}
          >
            <div className={css.contactForm}>
              <h2>Find contacts by name</h2>

              <Filter inputFilter={props.inputFilter}
              />
            </div>
          </CSSTransition>
        </>

        {props.contacts.length > 0 && (
          <ContactList>
            <ContactItem handleDelete={props.handleDelete}/>
          </ContactList>
        )}
      </form>
    </>
  );
};

export default ContactForm;
