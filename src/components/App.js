import React, { Component } from "react";
import ContactForm from "./contact-form/ContactForm";
import css from "./App.module.css";
import transitions from "../transitions.module.css";
import cssForm from "./contact-form/ContactForm.module.css";
import { CSSTransition } from "react-transition-group";
import "pnotify/dist/es/PNotifyAnimate";
import Notify from "./notify/Notify";
import tr from "./notify/tr.module.css";
import {showNotification} from '../redux/actions';
import { connect } from "react-redux";

class App extends Component {
  state = {
    isOpen: false
  };

  componentDidMount() {
    this.setState({
      isOpen: true
    });
  }

  render() {
    const { isOpen } = this.state;

    if(this.props.onNotification){
      setTimeout(()=>{
        this.props.showNotifications()
      }, 1500)
    }

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

        <ContactForm />
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

const mapDispatchToProps = (dispatch)=>({
  showNotifications: ()=>dispatch(showNotification())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
