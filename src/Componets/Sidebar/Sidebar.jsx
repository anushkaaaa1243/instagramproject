import { Link } from "react-router-dom";
import home from "../../assets/Logo/Home/home.png";
import search from "../../assets/Logo/Search/search.png";
import explore from "../../assets/Logo/Explore/explore.png";
import reels from "../../assets/Logo/Reels/reel.png";
import message from "../../assets/Logo/Message/message.png";
import notification from "../../assets/Logo/Notification/like.png";
import create from "../../assets/Logo/Create/create.png";


const Image = [
  {
    name: "Home",
    link: "/home",
    icon: home,
  },
  {
    name: "Search",
    link: "/search",
    icon: search,
  },
  {
    name: "Explore",
    link: "/explore",
    icon: explore,
  },
  {
    name: "Reels",
    link: "/reels",
    icon: reels,
  },
  {
    name: "Message",
    link: "/message",
    icon: message,
  },
  {
    name: "Notification",
    link: "/notification",
    icon: notification,
  },
  {
    name: "Create",
    link: "/create",
    icon: create,
  },
 
 
 
];

export const Sidebar = () => {
  return (
    <div>
      <div className="h-[100vh] border-r-[1px] border-r-gray-500 py-8 fixed top-0 left-0 sm:px-2 md:px-4 ">
        <div className="flex flex-col gap-4  h-full ">
          <div className="hidden md:block  hover:bg-gray-400">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png"
              alt="instagramLogo"
              className=" w-32 filter invert"
            />
          </div>
          <div className="md:hidden hover:rounded-lg w-12 h-11 flex items-center  mb-5 hover:bg-gray-400  px-2 ">
            <img
              src="https://1000logos.net/wp-content/uploads/2017/02/insta-logo.png"
              className="w-5 filter invert"
            />
          </div>

          {Image.map((side) => (
            <Link to={side.link} key={side.id}>
              <div className="flex  items-center  gap-x-3 hover:bg-gray-400 h-10 rounded-md ">
                <img src={side.icon} className="w-5 color-invert ml-1 " />
                <p className="text-[16px] hidden md:block ">{side.name}</p>
              </div>
              
            </Link>
          ))}
          <div className="  hover:bg-gray-400 rounded-md flex items-center ">
            <Link to ="" className="flex items-center gap-x-2 ">
            <img  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" className="w-8 h-8  rounded-full object-cover"/>
            <p className="text-[16px] hidden md:block ">Profile</p>
            </Link>

          </div>
          <div className="  hover:bg-gray-400 rounded-md flex items-center h-10 w-25 justify-">
           <Link to="" className="flex items-center gap-x-2 ">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRUs5syXbQLZ5MWeX2IDkm6XYXK_BQLbTJPw&s" alt="" className="w-7 " />
           <p className="text-[16px] hidden md:block ">More</p>
           </Link>
          </div>
        
        </div>
      </div>
    </div>
  );
};
