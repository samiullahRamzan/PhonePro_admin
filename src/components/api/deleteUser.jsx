import { deleteUser } from "../../axios/users_axios";

export const delete_user = async (setUser, userId) => {
  try {
    const response = await deleteUser(userId);
    console.log("here is a response ", response);
    // Update frontend state
    setUser((prevUsers) => prevUsers.filter((user) => user._id !== userId));
  } catch (error) {
    alert(error);
  }
};
