import {connect} from 'react-redux';
import ContactList from './ContactList'
const mapStateToProps = (state) => state


export default connect(mapStateToProps)(ContactList);