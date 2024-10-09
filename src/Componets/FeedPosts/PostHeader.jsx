import { Link } from "react-router-dom";
import { TbPointFilled } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";



const PostHeader = ({username,profilePicture}) => {
  return (
    <div >
        <div className="flex justify-between items-center ">
        <div className="flex items-center gap-1 w-40 ">
       
          <img
            src={profilePicture}
            alt={username}
            className="w-10 h-10 rounded-full object-cover overflow-hidden"
          />

          <div className="flex ">
            <Link to="" className="flex ">
              <p className="flex text-[18px] font-semibold ">{username}</p>
              <p className="flex items-center text-gray-500">
                <TbPointFilled />
                28 Sep
              </p>
            </Link>
            </div>
        </div>
      <div>
      <BsThreeDots size={28}/>

      </div>
        </div>
     
     
    </div>
  );
};

export default PostHeader;
