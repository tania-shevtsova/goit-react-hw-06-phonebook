import { showNotification } from "../redux/actions";
import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  showNotifications: () => dispatch(showNotification())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
