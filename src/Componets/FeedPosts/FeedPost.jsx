import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const FeedPost = ({img,username,profilePicture}) => {
  return (
    <div>
      <PostHeader username={username} profilePicture={profilePicture}/>
      <div className="w-96   mt-2">
        <img
          src={img} alt=""
         className="w-[550px] rounded-sm overflow-hidden"
        />
      </div>
      <PostFooter username={username}/>
    </div>
  );
};

export default FeedPost;
