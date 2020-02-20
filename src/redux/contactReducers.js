import Types from "./types";
const uuidv1 = require("uuid/v1");

const INT = {
  contacts: [],
  filterArr:[],
  name: "",
  number: "",
  filter: "",
  onNotification: false,
  notificationMessage: ""
};

export const contacts = (state = INT, { type, payload }) => {
  switch (type) {

    case Types.DELETE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts.filter(el => el.id !== payload)]
      };

    case Types.CHANGE_INPUT_NAME:
      return { ...state, name: payload };

    case Types.CHANGE_INPUT_NUMBER:
      return { ...state, number: payload };

    case Types.HANDLE_SUBMIT:
    
      if (state.contacts.find(el => el.name.toLowerCase() === state.name.toLowerCase())) {
        return {
          ...state,
          onNotification: true,
          notificationMessage: (
            `${state.name} already exists in your contact list!` ),
          name:'',
          number: ''

        };
      
      }
      else{
        if (state.name === "") {
            alert("Please, enter a name!");
            return {...state}
          }
    
          if (state.number === "") {
            alert("Please, enter a phone number!");
            return {...state};
          }
          if (state.number !== null &&
            state.name !== null) {
                return {
              ...state,
              contacts: [
                ...state.contacts,
                { name: state.name, number: state.number, id: uuidv1() }
              ],
              name: "",
              number: ""
            }
        }
      }
    break;
      

    case Types.CHANGE_INPUT_FILTER:
      return {...state,filter:payload, filterArr: [...state.contacts.filter(el => el.name.includes(payload)) ] }

    case Types.SHOW_NOTIFICATION:
      return {...state, onNotification: false }

    default:
      return state;
  }
};
