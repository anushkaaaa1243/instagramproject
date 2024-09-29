import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";

const PostFooter = () => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const handleLikeToggle = () => {
    if (!liked) {
      setLiked(true);
      setLikesCount(likesCount + 1);
    } else {
      setLiked(false);
      setLikesCount(likesCount - 1);
    }
  };

  return (
    <div className="pb-5">
      <div className="flex justify-between items-center ">
        <div className="flex items-center pt-2 gap-2">
          <button
            onClick={handleLikeToggle}
            className={` rounded-full transition-colors duration-300 ${
              liked ? "text-red-600" : "text-gray-600"
            }`}
          >
            {liked ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
          </button>
          <button>
            <FaRegComment size={24} className="text-gray-600" />
          </button>
          <button>
            <FiSend size={24} className="text-gray-600" />
          </button>
        </div>
        <div className="pt-2">
          <FaRegBookmark size={24} className="text-gray-600" />
        </div>
      </div>
      <span className="text-lg">
        {likesCount} {likesCount === 1 ? "Like" : "Likes"}
      </span>
      <div className="flex justify-between items-center w-full">
        <input
          type="text"
          placeholder="Add a comment..."
          className="border text-[18px] p-1 w-full outline-none text-white border-none bg-black"
        />
        <button type="submit" className="ml-2 text-white hover:text-blue-600">
          Post
        </button>
       </div>
       <div className="border-b border-gray-700 w-full mt-4 "/>
    </div>
  );
};

export default PostFooter;
