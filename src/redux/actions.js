import * as types from "./types";

export const changeFilterString = inputFilter => ({
  type: types.ON_CHANGE_FILTER_STRING,
  payload: inputFilter
});
