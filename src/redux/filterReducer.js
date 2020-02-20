import Types from "./types";

export const filter = (state = [], { type, payload }) => {
  switch (type) {
    case Types.UPDATE_FILTER:
      return [...state, payload];

    default:
      return state;
  }
};
