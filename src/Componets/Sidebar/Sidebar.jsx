import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { sideData } from "../../data/Data";


const Sidebar = () => {
  return (
    <div>
      <div className="h-full border-r-[1px] border-r-gray-100 py-8 px-2 lg:px-5 md:px-4  ">
        <div className="flex flex-col gap-4 h-full">
          <div className="hidden md:block hover:bg-gray-400">
            <img
              src={BsInstagram}
              alt="Instagram"
              className="w-32 object-cover overflow-hidden "
            />
          </div>
          {/* <div className="md:hidden hover:rounded-lg w-16 h-11 flex items-center mb-5 hover:bg-gray-100 px-2">
            <img
              src="https://1000logos.net/wp-content/uploads/2017/02/insta-logo.png"
              className="w-5"
              alt="Instagram Logo"
            />
          </div> */}

          {sideData.map((side,i) => (
            <Link to={side.link} key={i}>
              
              <div className="flex gap-2 items-center  hover:bg-gray-100 hover:rounded-lg p-2 hover:text-black">
                {<side.icon className="h-6 w-6 " />}
                <div className="hidden sm:block">
                {side.name }

                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
