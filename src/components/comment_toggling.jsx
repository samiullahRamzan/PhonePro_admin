import { FaAngleRight } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

const Comment_toggling = ({ post, showComment, toggleComment }) => {
  return (
    <>
      {post.comments.length} <FaRegComment />
      {showComment ? (
        <FaAngleDown onClick={toggleComment} />
      ) : (
        <FaAngleRight onClick={toggleComment} />
      )}
    </>
  );
};

export default Comment_toggling;
