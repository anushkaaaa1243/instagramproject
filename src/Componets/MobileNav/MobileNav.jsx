import Home from "../../assets/Logo/Home/home.png";
import Search from "../../assets/Logo/Search/search.png";
import Reels from "../../assets/Logo/Reels/reel.png";
import Create from "../../assets/Logo/Create/create.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileNav = () => {
  const [active, setActive] = useState("");
  const icon = [
    { name: "Home", link: "/home", icon: Home },
    { name: "Search", link: "/search", icon: Search },
    { name: "Create", link: "/create", icon: Create },
    { name: "Reels", link: "/reels", icon: Reels },

  ];

  return (
    <div>
      <div className="w-full flex ">
        {icon.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className={`list-none flex items-center  gap-x-11 h-12 ml-7 hover:bg-[#F2F2F2] hover:rounded-lg w-14 lg:w-full  ${
              active === item.name ? "bg-[#F2F2F2] rounded-lg" : ""
            }`}
            onClick={() => setActive(item.name)}
          >
            <img src={item.icon} alt={item.name} className="nav-icon w-6" />
          </Link>
        ))}
        <Link
          to=""
          className="flex items-center gap-4    h-12 hover:rounded-lg w-14 lg:w-[90%] "
        >
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Profile icon"
            className="w-7 h-7 object-cover rounded-full  ml-4 overflow-hidden"
          />
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
