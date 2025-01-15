import axios from "axios";
import { ipAddress } from "../config";
const token = localStorage.getItem("token");

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

export const createAdmin = async (name, email, password, role) => {
  try {
    const res = await axios.post(
      `http://${ipAddress}:3000/api/admin_auth/create-admin`,
      {
        name,
        email,
        password,
        role,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("axios response admin created", res.data);
    return res.data;
  } catch (error) {
    console.error("Error during create admin:", error);
    const message = error.response?.data?.message || "create admin  failed";
    throw new Error(message);
  }
};
