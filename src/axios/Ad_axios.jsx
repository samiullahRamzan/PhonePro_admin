import axios from "axios";
import { ipAddress } from "../config";
const token = localStorage.getItem("token");

export const viewAds = async () => {
  try {
    const res = await axios.get(
      `http://${ipAddress}:3000/api/admin_Ads/viewAds`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Correctly set the Authorization header
        },
      }
    );

    console.log("axios response", res.data);
    return res.data;
  } catch (error) {
    console.error("Error during ads:", error);
    const message = error.response?.data?.message || "Error in getting ads";
    throw new Error(message);
  }
};

export const updateAdStatus = async (id, status, statusReason) => {
  try {
    const res = await axios.patch(
      `http://${ipAddress}:3000/api/admin_Ads/update_Ad/${id}`,
      {
        status,
        statusReason,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Correctly set the Authorization header
        },
      }
    );

    console.log("axios response", res.data);
    return res.data;
  } catch (error) {
    console.error("Error during update ad status:", error);
    const message = error.response?.data?.message || "Error in updating ads";
    throw new Error(message);
  }
};

export const deleteAd = async (id) => {
  try {
    const res = await axios.delete(
      `http://${ipAddress}:3000/api/admin_Ads/delete_Ad/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Correctly set the Authorization header
        },
      }
    );

    console.log("axios response", res.data);
    return res.data;
  } catch (error) {
    console.error("Error during delete ad:", error);
    const message = error.response?.data?.message || "Error in deleting ads";
    throw new Error(message);
  }
};
