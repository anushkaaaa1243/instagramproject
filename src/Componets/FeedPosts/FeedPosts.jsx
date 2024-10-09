
import FeedPost from "./FeedPost";
import Story from "../Story/Stories"
const FeedPosts = () => {
  return (
    <div>
      <Story/>
    
      <div className=" py-4 px-10 sm:py-5 mt-5 w-full pb-5 flex flex-col overflow-x-auto">
        <FeedPost
          username="Atul"
          img="/public/Photo/image1.avif"
          profilePicture="/public/Photo/image1.avif "
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
        <FeedPost
          username="Neha"
          img="/public/Photo/image6.avif"
          profilePicture="/public/Photo/image6.avif"
        />
        <FeedPost
          username="Mahi"
          img="/public/Photo/image7.avif"
          profilePicture="/public/Photo/image7.avif"
        />
        <FeedPost
          username="Akrati"
          img="/public/Photo/image8.avif"
          profilePicture="/public/Photo/image8.avif"
        />
      </div>
    </div>
  );
};

export default FeedPosts;
