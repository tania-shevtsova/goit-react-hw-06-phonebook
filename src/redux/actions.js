import Types from "./types";

export const deleteContact=(id)=>({
    type: Types.DELETE_CONTACT,
    payload: id
});

export const updateFilter=value=>({
    type: Types.UPDATE_FILTER,
    payload: value
})

export const changeInputName=value=>({
    type: Types.CHANGE_INPUT_NAME,
    payload: value
})

export const changeInputNumber=value=>({
    type: Types.CHANGE_INPUT_NUMBER,
    payload: value
})

export const handleSubmit=()=>({
    type: Types.HANDLE_SUBMIT
});

export const changeInputFilter=(value)=>({
    type: Types.CHANGE_INPUT_FILTER,
    payload: value
});

export const showNotification=()=>({
    type: Types.SHOW_NOTIFICATION
})
