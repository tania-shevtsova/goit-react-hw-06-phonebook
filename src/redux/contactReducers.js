import Types from "./types";
const uuidv1 = require("uuid/v1");

const INT = {
  contacts: [],
  name: "",
  number: "",
  filter: "",
  onNotification: false,
  notificationMessage: ""
};

export const contacts = (state = INT, { type, payload }) => {
  switch (type) {
    // case Types.SAVE_CONTACT:
    // return {...state,contacts:[...state.contacts, ...[payload.value]]}

    case Types.DELETE_CONTACT:
      console.log("PAYLOAD", payload);
      return {
        ...state,
        contacts: [...state.contacts.filter(el => el.id !== payload)]
      };

    case Types.CHANGE_INPUT_NAME:
      return { ...state, name: payload };

    case Types.CHANGE_INPUT_NUMBER:
      return { ...state, number: payload };

    case Types.HANDLE_SUBMIT:
    
      if (state.contacts.find(el => el.name === state.name)) {
        return {
          ...state,
          onNotification: true,
          notificationMessage: (
            `${state.name} already exists in your contact list!` ),
            // setTimeout(() => {
            //     { onNotification:false }
            //   }, 1500),
        
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
      

    // case Types.CHANGE_INPUT_FILTER:
    //   return {...state, filter: [payload.value], contacts: [...state.contacts.find(
    //         el => el.name.toLowerCase() === payload.value.toLowerCase()
    //       )] }
        
          
      

    default:
      return state;
  }
};
