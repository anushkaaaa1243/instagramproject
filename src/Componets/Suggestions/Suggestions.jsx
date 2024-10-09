import { Link } from "react-router-dom";
import SuggestData from "../../data/Data";

const Suggestions = () => {
  return (
    <div className="flex gap-2 flex-col">
   
      <div className="">
        <div className="flex justify-between items-center mt-14">
          <h1 className="text-[18px] text-[#7B7B7B] font-bold">
            Suggested for you
          </h1>
          <Link to="/see-all">
            <h1 className="hover:text-[#7B7B7B]">See all</h1>
          </Link>
        </div>
      </div>

      {/* Map through SuggestData to render suggestions */}
      {SuggestData.map((data) => (
        <div key={data.id} className="flex items-center justify-between p-2">
  
          <Link
            to={data.username}
            className="flex items-center gap-2"
          >
            <img
              src={data.img}
              alt={data.username}
              className="w-10 h-10 rounded-full object-cover"
            />
            <p>{data.username}</p>
          </Link>
         <button className="text-[15px] text-[#64a7e6] font-semibold">{data.follow}</button>
         
        </div>
      ))}
 
    </div>
  );
};

export default Suggestions;

