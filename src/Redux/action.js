import { ADD_TOKEN } from "./constants";

export function addToken(item) {
  return {
    type: ADD_TOKEN,
    data: item,
  };
}
