import { connect } from "react-redux";
import { deleteContact } from "../../redux/actions.js";
import ContactItem from "./ContactItem";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  handleDelete: id => {
    dispatch(deleteContact(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactItem);
