import { createReducer } from "@reduxjs/toolkit";
import Types from "./types";
const uuidv1 = require("uuid/v1");

const INT = {
  contacts: [],
  filterArr: [],
  name: "",
  number: "",
  filter: "",
  onNotification: false,
  notificationMessage: ""
};

export const contacts = createReducer(INT, {
  [Types.DELETE_CONTACT]: (state, { payload }) => {
    return {
      ...state,
      contacts: [...state.contacts.filter(el => el.id !== payload)],
      filterArr: [...state.contacts.filter(el => el.id !== payload)]
    };
  },

  [Types.UPDATE_FILTER]: (state, { payload }) => {
    return [...state, payload];
  },

  [Types.CHANGE_INPUT_NAME]: (state, { payload }) => {
    return { ...state, name: payload };
  },

  [Types.CHANGE_INPUT_NUMBER]: (state, { payload }) => {
    return { ...state, number: payload };
  },

  [Types.HANDLE_SUBMIT]: (state, { payload }) => {
    if (
      state.contacts.find(
        el => el.name.toLowerCase() === state.name.toLowerCase()
      )
    ) {
      return {
        ...state,
        onNotification: true,
        notificationMessage: `${state.name} already exists in your contact list!`,
        name: "",
        number: ""
      };
    } else {
      if (state.name === "") {
        alert("Please, enter a name!");
        return { ...state };
      }

      if (state.number === "") {
        alert("Please, enter a phone number!");
        return { ...state };
      }
      if (state.number !== null && state.name !== null) {
        return {
          ...state,
          contacts: [
            ...state.contacts,
            { name: state.name, number: state.number, id: uuidv1() }
          ],
          filterArr: [
            ...state.filterArr,
            { name: state.name, number: state.number, id: uuidv1() }
          ],
          name: "",
          number: ""
        };
      }
    }
  },

  [Types.CHANGE_INPUT_FILTER]: (state, { payload }) => {
    return {
      ...state,
      filter: payload,
      filterArr: [...state.contacts.filter(el => el.name.includes(payload))]
    };
  },

  [Types.SHOW_NOTIFICATION]: (state, { payload }) => {
    return { ...state, onNotification: false };
  }
});
