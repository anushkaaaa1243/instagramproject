import Home from "../../assets/Logo/Home/home.png";
import Search from "../../assets/Logo/Search/search.png";
import Explore from "../../assets/Logo/Explore/explore.png";
import Reels from "../../assets/Logo/Reels/reel.png";
import Messages from "../../assets/Logo/Message/message.png";
import Notifications from "../../assets/Logo/Notification/like.png";
import Create from "../../assets/Logo/Create/create.png";
import More from "../../assets/Logo/More/more.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("/home");

  const icon = [
    {
      name: "Home",
      link: "/home",
      icon: Home,
    },
    {
      name: "Search",
      link: "/search",
      icon: Search,
    },
    {
      name: "Explore",
      link: "/explore",
      icon: Explore,
    },
    {
      name: "Reels",
      link: "/reels",
      icon: Reels,
    },
    {
      name: "Messages",
      link: "/message",
      icon: Messages,
    },
    {
      name: "Notifications",
      link: "/notifications",
      icon: Notifications,
    },
    {
      name: "Create",
      link: "/create",
      icon: Create,
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center  ">
        <div>
          <img
            src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png"
            alt=""
            className="hidden lg:block w-24 ml-5 "
          />
          <img
            src="https://seeklogo.com/images/I/instagram-new-2016-glyph-logo-84CB825424-seeklogo.com.png"
            alt=""
            className="block lg:hidden w-5 ml-5 mb-10"
          />
        </div>
        {icon.map((items, index) => (
          <Link
            to={items.link}
            key={index}
            className="list-none flex items-center gap-y-6 gap-x-4  hover:bg-[#F2F2F2] h-12 hover:rounded-lg w-14 lg:w-[10vw] ml-5 p-2"
          >
            <img
              src={items.icon}
              alt={items.name}
              className="nav-icon w-5 filter invert"
            />

            <p
              onClick={() => setActive(items.name)}
              className={`hidden lg:block text-[18px] ${
                active === items.name ? "font-semibold" : ""
              }`}
            >
              {items.name}
            </p>
          </Link>
        ))}
        {/* Profile Section */}
        <Link
          to=""
          className="flex items-center gap-4   hover:bg-[#F2F2F2] h-12 hover:rounded-lg w-14 lg:w-[90%] "
        >
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Profile icon"
            className="w-7 h-7 object-cover rounded-full  ml-4 overflow-hidden"
          />
          <p
            onClick={() => setActive("profile")}
            className={`hidden lg:block text-[18px] ${
              active == "profile" ? "font-semibold" : ""
            }`}
          >
            Profile
          </p>
        </Link>
        {/* More Section */}
        <Link
          to=""
          className="flex items-center gap-4   hover:bg-[#F2F2F2] h-12 hover:rounded-lg w-14 lg:w-[90%] ml-5"
        >
          <img src={More} className="nav-icon w-5 filter invert " />
          <p
            onClick={() => setActive("more")}
            className={`hidden lg:block text-[18px] ${
              active == "more" ? "font-semibold" : ""
            }`}
          >
            More
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
