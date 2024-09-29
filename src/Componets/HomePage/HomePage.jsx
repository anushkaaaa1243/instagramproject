import FeedPosts from "../FeedPosts/FeedPosts";
import Suggestions from "../Suggestions/Suggestions";

const HomePage = () => {
  return (
    <div>
      <div className="flex">
        {/* Feed Post  */}
        <div className="">
          <FeedPosts />
        </div>

        {/* Suggestion  */}
        <div className=" hidden md:block"><Suggestions/></div>
      </div>
    </div>
  );
};

export default HomePage;
