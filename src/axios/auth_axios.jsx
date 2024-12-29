import axios from "axios";
import { ipAddress } from "../config";

export const login = async (email, password) => {
  try {
    const res = await axios.post(
      `http://${ipAddress}:3000/api/admin_auth/login`,
      {
        email,
        password,
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
