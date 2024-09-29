import { Link } from "react-router-dom";
import image1 from "../../../assets/image/image1.jpg";
import image2 from "../../../assets/image/image2.avif";

const data = [
  { id: 1, name: "Priya", image: image1 },
  { id: 2, name: "Tina", image: image2 },
  { id: 3, name: "Naina", image: image2 },
  { id: 4, name: "Kriti", image: image2 },
  { id: 5, name: "Priti", image: image2 },
  { id: 6, name: "Astha", image: image2 },
  { id: 7, name: "Sneha", image: image2 },
  { id: 8, name: "Diya", image: image2 },
  { id: 9, name: "Era", image: image2 },
  { id: 10, name: "Krishna", image: image2 },
  { id: 11, name: "Tia", image: image2 },
  { id: 12, name: "Pia", image: image2 },
  { id: 13, name: "Mia", image: image2 },
  { id: 14, name: "Lia", image: image2 },
  { id: 15, name: "Zia", image: image2 },
];

const FeedCard = () => {
  return (
    <div>
      <div className="w-full h-auto flex justify-center items-center flex-wrap ">
        {data.map((feed) => (
          <div key={feed.id} className="w-full h-auto mb-6">
            {/* Profile photo, username and time */}
            <div className="w-full h-auto flex items-center justify-between mb-2">
              <div className="flex items-center gap-x-2">
                <Link to="" className="flex justify-center items-center gap-x-5 ">
                  <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-tr from-yellow-500 to-red-600">
                    <img src={feed.image} alt={feed.name} className="rounded-full w-full h-full object-cover p-[1px]" />
                  </div>
                  <span className="text-center text-[15px]">{feed.name}</span>
                </Link>
              </div>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedCard;
