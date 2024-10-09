import StoriesData from "../../data/Data";

const Stories = () => {
  return (
    <div>

      <div className="flex overflow-x-auto">
        {StoriesData.map((story) => (
          <div className="flex flex-col items-center mx-2" key={story.id}>
            <img src={story.img} className="w-14 h-14 rounded-full object-cover" />
            <p>{story.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
