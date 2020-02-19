import React from "react";
import css from "./contactItem.module.css";
import { connect } from "react-redux";
import {deleteContact} from "../../redux/actions.js";

const ContactItem = (props) => {

  return (
    <>
      <div>
        <li className={css.contactItem}>
          <p>{props.el.name}:</p> <p>{props.el.number}</p>
          <button
            className={css.contactItemButtonDelete}
            type="button"
            onClick={()=>props.handleDelete(props.el.id)}
          >
            <span className={css.closeSymbol}>{`\u2716`}</span>
          </button>
        </li>
      </div>
    </>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = dispatch=>({
  handleDelete: (id)=>{dispatch(deleteContact(id))}
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
