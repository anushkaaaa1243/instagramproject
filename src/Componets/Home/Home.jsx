import Navbar from "../Navbar/Navbar";
import MobileNav from "../MobileNav/MobileNav";

import { Route, Routes } from "react-router-dom";
import Feed from "../Feed/Feed"

const Home = () => {
  return (
    <div>
     

      <div className="flex w-full h-auto">
      <div className="hidden h-auto sm:flex items-start  relative md:gap-x-14">
          <Navbar />
        <div className="hidden sm:block border-r border-[#DBDBDBD] h-[100vh] sticky lg:top-0 lg:left-0 lg:w-[19%] pt-5">
        </div>
      </div>
        <div className="block sm:hidden  h-auto fixed bottom-2 left-0 bg-black border-t border-t-[#121212] md:border-hidden">
          <MobileNav />
        </div>
       <Routes>
        <Route path="/" element={<Feed/>}></Route>
       </Routes>
       </div>
    
     
    </div>
  );
};

export default Home;
