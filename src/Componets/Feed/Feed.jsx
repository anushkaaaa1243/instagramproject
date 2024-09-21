import Storie from "../Stories/Storie";

import TopNav from "../TopNav/TopNav";

const Feed = () => {
  return (
    <div>
      <div>
        <div className="lg:w-[81%] md:w-full sm:w-full w-full min-h-screen lg:py-3 md:py-3 sm:py-3 px-3 flex  gap-x-20 sm:bg-white sm:text-black bg-black text-white">
          {/* feed + story section */}
          
          <div className="  lg:w-full md:w-full sm:w-full w-full h-auto relative">
            {/* topnavbar */}
            <div className="block bg-black md:hidden">
            <TopNav/>

            </div>
            {/* storiesSection */}
            <Storie/>
            {/* feed section */}
            <div className="w-full h-auto flex items-center justify-center-mt-6">
              <div className="lg:w-[73%] md:w-[73%] sm:w-[80%] w-[80%] h-auto"></div>
            </div>
          </div>
        </div>
        {/* Recomaended userSection */}
        <div className="w- h-auto lg:block md:hidden sm:hidden hidden">

        </div>
      </div>
    </div>
  );
};

export default Feed;
