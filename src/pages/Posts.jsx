import { useEffect, useState } from "react";
import { deletePost, updatePostStatus, viewPosts } from "../axios/Posts_axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import "../styles/regularUserAd.css";
import "../styles/Posts.css";
import Comment_toggling from "../components/comment_toggling";
import Modal from "../components/PostModal";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [activeCommentPost, setActiveCommentPost] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await viewPosts();
        console.log("here is posts response", response.posts);
        setPosts(response.posts);
      } catch (error) {
        alert(error);
      }
    };
    getPosts();
  }, []);

  const toggleComment = (index) => {
    setActiveCommentPost((prev) => (prev === index ? null : index));
  };

  const delete_Post = async (id) => {
    try {
      const response = await deletePost(id);
      console.log(response);

      setPosts((prevPost) => prevPost.filter((post) => post._id != id));
    } catch (error) {
      alert(error);
    }
  };

  const updatePost = async (id, status, statusReason) => {
    try {
      const response = await updatePostStatus(id, status, statusReason);
      console.log("here is update ad response", response);
    } catch (error) {
      console.log("here is an error in update ad", error);
      alert(error);
    }
  };

  return (
    <div>
      <h3>Posts</h3>

      {/* Post card */}
      <div className="main-d">
        {posts?.map((post, index) => (
          <div className="post-card" key={index}>
            <div className="image-container">
              <div className={`status-label ${post.status.toLowerCase()}`}>
                {post.status}
              </div>
              <RiDeleteBin6Line
                className="delete-icon"
                onClick={() => delete_Post(post._id)}
              />
              <img src={post.images[0]} className="card-img post-img" />
            </div>

            <div className="card-content">
              <p>
                <strong>Description:</strong> {post.description}
              </p>

              <div className="like_com_share">
                <p className="l_c_s">
                  {post.likes.length} <AiOutlineLike />
                </p>
                <p className="l_c_s">
                  <Comment_toggling
                    post={post}
                    showComment={activeCommentPost === index}
                    toggleComment={() => toggleComment(index)}
                  />
                </p>
                <p className="l_c_s">
                  {post.shares.length} <IoMdShareAlt />
                </p>
              </div>

              {activeCommentPost == index &&
                post.comments.map((comment, index) => (
                  <div className="comment_view" key={index}>
                    <div className="comment-heading">
                      <img
                        src={
                          comment?.userId?.image
                            ? comment?.userId?.image
                            : "/public/profile.jpg"
                        }
                        className="comment-img"
                      />
                      <div className="name_date">
                        <div className="name">
                          {comment?.userId?.fullName ||
                            comment?.userId?.shopName ||
                            "No_Name"}
                        </div>
                        <div>
                          {new Date(comment?.commentedAt).toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div className="name_date">{comment.comment}</div>
                  </div>
                ))}

              <button onClick={() => handleViewDetails(post)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        Post={selectedPost}
        updatePost={updatePost}
      />
    </div>
  );
};

export default Posts;
