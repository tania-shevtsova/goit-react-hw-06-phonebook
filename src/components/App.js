import React, { Component } from "react";
import ContactForm from "./contact-form/ContactForm";
import uuid from "uuid";
import css from "./App.module.css";
import transitions from "../transitions.module.css";
import cssForm from "./contact-form/ContactForm.module.css";
import { CSSTransition } from "react-transition-group";
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyAnimate";
import Notify from "./notify/Notify";
import tr from "./notify/tr.module.css";
import {saveContact, deleteContact, changeInputFilter} from '../redux/actions';
import { connect } from "react-redux";

class App extends Component {
  state = {
    isOpen: false
    // onNotification: false,
  };

  componentDidMount() {
    this.setState({
      isOpen: true
    });
  }

  handleSubmit = e => {
    // const findSame = this.props.changeInputFilter(e.target.value);
    // this.props.contacts.find(
    //   el => el.name.toLowerCase() === this.props.name.toLowerCase()
    // );
    // if (findSame) {
    //   this.setState({
    //     onNotification: true,
    //     notificationMessage: `${this.props.name} already exists in your contact list!`
    //   });
    //   setTimeout(() => {
    //     this.setState({
    //       onNotification: false
    //     });
    //   }, 1500);

  
  
  };

  // onChangeInputFilter = e => {
  //   this.setState({
  //     filter: e.target.value
  //   });
  // };

  // inputFilter = (filter) => {
  //   return { this.props.props.contacts.filter(el =>
  //     el.name.toLowerCase().includes(filter.toLowerCase())
  //   )}
  // };



  render() {
    const { isOpen } = this.state;
    // if (onNotification) {
    //   setTimeout(() => {
    //      this.props.onNotification: false;
    //   }, 1500);
    // }

    return (
      <>
        <CSSTransition
          in={isOpen}
          timeout={500}
          classNames={transitions}
          unmountOnExit
        >
          <h2 className={cssForm.header}>Phonebook</h2>
        </CSSTransition>

        <ContactForm
        // contacts={this.state.contacts}
        // handleSubmitInput={this.props.handleSubmit}
        // handleChangeName={this.props.handleChangeName}
        // handleChangeNumber={this.props.handleChangeNumber}
        // value={this.props.name}
        // valuenum={this.props.number}
        // name={this.state.contacts.name}
        // // arr={filteredNames}
        // number={this.props.contacts.number}
        // onChangeInputFilter={this.onChangeInputFilter}
        // valueFilter={this.state.filter}
        // handleDelete={this.props.handleDelete}
        />
        <CSSTransition
          in={this.props.onNotification}
          timeout={250}
          classNames={tr}
          unmountOnExit
        >
          <Notify notificationMessage={this.props.notificationMessage} />
        </CSSTransition>
      </>
    );
  }
}
const mapStateToProps = state => state;


export default connect(mapStateToProps)(App);
