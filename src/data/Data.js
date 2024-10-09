import image1 from "../../public/Photo/image1.avif";
import image2 from "../../public/Photo/image2.avif";
import image3 from "../../public/Photo/image3.avif";
import image4 from "../../public/Photo/image4.avif";
import image5 from "../../public/Photo/image6.avif";
import image6 from "../../public/Photo/image7.avif"
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegSquarePlus } from "react-icons/fa6";
import { IoMenuOutline } from "react-icons/io5";

export const sideData = [
  {
    name: "Home",
    link: "/",
    icon: IoMdHome,
  },
  {
    name: "Search",
    link: "/search",
    icon: FaSearch,
  },
  {
    name: "Explore",
    link: "/explore",
    icon: MdOutlineExplore,
  },
  {
    name: "Reels",
    link: "/reels",
    icon: BiMoviePlay,
  },
  {
    name: "Message",
    link: "/message",
    icon: FiMessageCircle,
  },
  {
    name: "Notification",
    link: "/notification",
    icon: FaRegHeart,
  },
  {
    name: "Create",
    link: "/create",
    icon: FaRegSquarePlus,
  },
  // {
  // name:"Profile",
  // link:"profile",
  // icon: image2,},

  {
    name: "More",
    link: "/more",
    icon: IoMenuOutline,
  },
];


export const storyData=[

  {
    username: "Ayush",
    img: image1,
  
  },
  {
    username: "Isha",
    img: image2,
  
  },
  {
    username: "Priya",
    img: image3,

  },
  {
    username: "Astha",
    img: image4,

  },
  {
    username:"Naina",
    img:image5,
    
  },
  {
    username: "Ayush",
    img: image1,
    
  },
  {
    username: "Isha",
    img: image2,

  },
  {
    username: "Priya",
    img: image3,

  },
  {
    username: "Astha",
    img: image4,

  },
  {
    username:"Ayesha",
    img:image6,
  }

]
  

const SuggestData = [
  {
    username: "Ayush",
    img: image1,
    follow: "Follow",
  },
  {
    username: "Isha",
    img: image2,
    follow: "Follow",
  },
  {
    username: "Priya",
    img: image3,
    follow: "Follow",
  },
  {
    username: "Astha",
    img: image4,
    follow: "Follow",
  },
  {
    username:"Naina",
    img:image5,
    follow:"Follow"
  }
];
export default SuggestData;
