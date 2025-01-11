import { useEffect, useState } from "react";
import { viewPosts } from "../axios/Posts_axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import "../styles/regularUserAd.css";

import "../styles/Posts.css";
import Comment_toggling from "../components/comment_toggling";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [activeCommentPost, setActiveCommentPost] = useState(null);

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
              <RiDeleteBin6Line className="delete-icon" />
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
