import axios from "axios";
import { ipAddress } from "../config";
const token = localStorage.getItem("token");

export const viewUsers = async () => {
  try {
    const res = await axios.get(
      `http://${ipAddress}:3000/api/admin_Users/viewUsers`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Correctly set the Authorization header
        },
      }
    );

    console.log("axios response", res.data);
    return res.data;
  } catch (error) {
    console.error("Error during login:", error);
    const message = error.response?.data?.message || "Login failed";
    throw new Error(message);
  }
};
