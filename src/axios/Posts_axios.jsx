import axios from "axios";
import { ipAddress } from "../config";
const token = localStorage.getItem("token");

export const viewPosts = async () => {
  try {
    const res = await axios.get(
      `http://${ipAddress}:3000/api/admin_Posts/viewPosts`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Correctly set the Authorization header
        },
      }
    );

    console.log("axios response", res.data);
    return res.data;
  } catch (error) {
    console.error("Error during posts:", error);
    const message = error.response?.data?.message || "Error in getting ads";
    throw new Error(message);
  }
};

export const deletePost = async (id) => {
  try {
    const res = await axios.delete(
      `http://${ipAddress}:3000/api/admin_Posts/delete_Post/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Correctly set the Authorization header
        },
      }
    );

    console.log("axios response", res.data);
    return res.data;
  } catch (error) {
    console.error("Error during deleting posts:", error);
    const message = error.response?.data?.message || "Error in delering post";
    throw new Error(message);
  }
};
export const deleteComment = async (postId, commentId) => {
  try {
    const res = await axios.delete(
      `http://${ipAddress}:3000/api/admin_Ads/${postId}/${commentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Correctly set the Authorization header
        },
      }
    );

    console.log("axios response", res.data);
    return res.data;
  } catch (error) {
    console.error("Error during deleting comment:", error);
    const message =
      error.response?.data?.message || "Error in delering comment";
    throw new Error(message);
  }
};

export const updatePostStatus = async (id, status, statusReason) => {
  try {
    const res = await axios.patch(
      `http://${ipAddress}:3000/api/admin_Posts/update_PostStatus/${id}`,
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
    console.error("Error during update post status:", error);
    const message = error.response?.data?.message || "Error in updating post";
    throw new Error(message);
  }
};
