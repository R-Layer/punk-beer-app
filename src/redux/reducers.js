import * as types from "./types";

export const filterPattern = (state = "", action) => {
  switch (action.type) {
    case types.ON_CHANGE_FILTER_STRING:
      return action.payload;
    default:
      return state;
  }
};
