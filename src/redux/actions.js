import { createAction } from "@reduxjs/toolkit";

import Types from "./types";

export const deleteContact = createAction(Types.DELETE_CONTACT);

export const updateFilter = createAction(Types.UPDATE_FILTER);

export const changeInputName = createAction(Types.CHANGE_INPUT_NAME);

export const changeInputNumber = createAction(Types.CHANGE_INPUT_NUMBER);

export const handleSubmit = createAction(Types.HANDLE_SUBMIT);

export const changeInputFilter = createAction(Types.CHANGE_INPUT_FILTER);

export const showNotification = createAction(Types.SHOW_NOTIFICATION);
