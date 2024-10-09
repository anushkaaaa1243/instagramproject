import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Suggestion from "../Suggestions/SuggestionHeader";

const Layout = () => {
  return (
    <div className=" flex fixed  w-full lg:gap-32">
      <Sidebar />

      <div className=" flex h-screen  overflow-y-auto  lg:justify-between lg:gap-48">
        <div className="w-full lg:w-[80%] ">
          <Outlet />
        </div>
        <div className="w-0 lg:w-[40%]">
          <Suggestion />
        </div>
      </div>
    </div>
  );
};

export default Layout;
