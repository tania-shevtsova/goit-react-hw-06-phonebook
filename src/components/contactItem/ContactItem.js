import React from "react";
import css from "./contactItem.module.css";

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

export default ContactItem;