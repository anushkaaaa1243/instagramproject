import { Link } from "react-router-dom";
import Notifications from "../../assets/Logo/Notification/like.png";
import Message from "../../assets/Logo/Message/message.png";

const TopNav = () => {
  return (
    <div className="w-full h-auto mb-5 sm:hidden flex">
      <div className="w-full h-auto flex justify-between items-center px-4">
        <Link to="/">
          <img src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png" 
               alt="Instagram Logo" 
               className="w-20 h-auto object-contain filter invert" />
        </Link>
        <div className="flex items-center gap-x-5">
          <Link to="/">
            <img src={Notifications} 
                 alt="Notifications" 
                 className="nav-icon w-5" />
          </Link>
          <Link to="/">
            <img src={Message} 
                 alt="Messages" 
                 className="nav-icon w-5 " />
                 <div className="absolute right-4  top-4 bg-red-600 text-sm text-white rounded-full w-5 h-5 flex items-center justify-center text-center">12</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
