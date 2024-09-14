import Navbar from "../Navbar/Navbar";
import MobileNav from "../MobileNav/MobileNav";

const Home = () => {
  return (
    <div>
      <div className="w-full h-auto flex items-start justify-between relative gap-x-14">
        <div className="hidden md:block border-r border-[#DBDBDBD] h-[100vh] sticky lg:top-0 lg:left-0 lg:w-[19%] pt-5">
          <Navbar />
        </div>
        <div className="block md:hidden w-full h-auto fixed bottom-2 left-0 bg-black border-t border-t-[#121212] md:border-hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
