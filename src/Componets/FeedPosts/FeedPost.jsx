import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";



const FeedPost = ({img,username,profilePicture}) => {
  return (
    <div className="">
  
      <PostHeader username={username} profilePicture={profilePicture}/>
      <div className="  pt-2 ">
        <img
          src={img} alt=""
         className=" rounded-sm overflow-hidden"
        />
      </div>
      <PostFooter username={username}/>
    </div>
  );
};

export default FeedPost;
