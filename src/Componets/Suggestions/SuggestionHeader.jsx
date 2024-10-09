import { Link } from "react-router-dom";
import profile from "../../assets/image/image2.avif";
import Suggestions from "./Suggestions";

const Suggestion = () => {
  return (
    <div className="py-16 hidden lg:block ">
      <div className="flex   w-full ">
        <Link to="/profile">
          <div className="flex  justify-between gap-20">
            <div className="flex gap-2">
              <img
                src={profile}
                className="w-12 h-12 rounded-full object-cover overflow-hidden"
              />
              <div>
                <p>Priti Sharma</p>
                <p>Priti</p>
              </div>
            </div>
            <p className="text-[#80acd6] font-semibold">Switch</p>
          </div>
        </Link>
      </div>

      <Suggestions />
    </div>
  );
};

export default Suggestion;
