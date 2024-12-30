import axios from "axios";
import { ipAddress } from "../config";

export const viewUsers = async () => {
  try {
    const res = await axios.get(
      `http://${ipAddress}:3000/api/admin_Users/viewUsers`
    );

    console.log("axios response", res.data);
    return res.data;
  } catch (error) {
    console.error("Error during login:", error);
    const message = error.response?.data?.message || "Login failed";
    throw new Error(message);
  }
};
