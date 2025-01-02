import { User } from "./constants";

const initialState = null;

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case User:
      return action.data;
    default:
      return state;
  }
};
