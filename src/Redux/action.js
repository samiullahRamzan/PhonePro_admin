import { User } from "./constants";

export function addUser(item) {
  return {
    type: User,
    data: item,
  };
}
