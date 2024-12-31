import { ADD_TOKEN } from "./constants";

const initialState = null;

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return action.data;
    default:
      return state;
  }
};
