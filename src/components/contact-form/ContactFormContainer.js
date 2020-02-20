import { connect } from "react-redux";
import {
  changeInputName,
  changeInputNumber,
  handleSubmit
} from "../../redux/actions.js";
import ContactForm from "./ContactForm";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  handleChangeName: params => {
    dispatch(changeInputName(params));
  },
  handleChangeNumber: params => {
    dispatch(changeInputNumber(params));
  },
  handleSubmitInput: () => {
    dispatch(handleSubmit());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
