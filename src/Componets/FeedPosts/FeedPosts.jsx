import FeedPost from "./FeedPost";

const FeedPosts = () => {
  
  return (
    <div>
      <div className=" py-10 px-40 mt-5">
        <FeedPost
          username="Atul"
          img="/public/Photo/image1.avif"
          profilePicture="/public/Photo/image1.avif"
        />

        <FeedPost
          username="Priya"
          img="/public/Photo/image2.avif"
          profilePicture="/public/Photo/image2.avif"
        />
        <FeedPost
          username="Kriti"
          img="/public/Photo/image3.avif"
          profilePicture="/public/Photo/image3.avif"
        />
        <FeedPost
          username="Avni"
          img="/public/Photo/image4.avif"
          profilePicture="/public/Photo/image4.avif"
        />
        <FeedPost
          username="Tia"
          img="/public/Photo/image5.avif"
          profilePicture="/public/Photo/image5.avif"
        />
      </div>
     
    
    </div>
  );
};

export default FeedPosts;
