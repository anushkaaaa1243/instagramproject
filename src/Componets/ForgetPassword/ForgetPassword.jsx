import { Link, NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";

const ForgetPassword = () => {
  return (
    <div>
      <div className="min-h-[100vh] ">
        <div className="border-b-[.1px] border-[#DBDBDB] ">
            <Link to="/">
            <img
            className="w-28 ml-52"
            src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png"
            alt=""
          /></Link>
         
        </div>
        <div className="flex justify-center flex-col items-center mt-5 ">
          <div className=" sm:border sm:border-[#DBDBDB]   sm:w-[400px] sm:h-[600px] flex  items-center flex-col">
            <img
              src="https://external-preview.redd.it/XhP2DOmFBwJfNFThk_UWN_DuTMt-IOJEIpiIKdoyFdM.jpg?auto=webp&s=f41311696afaba35ca7de53cb1cbac243ee9005f"
              alt=""
              className=""
            />
            <div>
              <h1 className="text-center font-[600] text-[17px]">
                Trouble with logging in?
              </h1>
            </div>
            <div className="w-72 flex justify-center items-center tracking-[.1px] ">
              <h1 className="text-center text-[#737373] text-[14px] mt-2">
                Enter your email address, phone number or username, and well
                send you a link to get back into your account.
              </h1>
            </div>
            <div>
              <input
                type="text"
                placeholder="Email address,phone number or username"
                className="border border-[#DBDBDB] w-[320px] text-[13px] h-10 p-2 outline-none mt-3 rounded-md bg-[#E8F0FE]"
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <NavLink to="">
                <button className="bg-[#1877F2] w-80 text-white h-9 mt-5 rounded-lg font-[500] text-[16px] ">
                  Send Login Link
                </button>
              </NavLink>
            </div>
            <div className="mt-3">
              <a
                href=""
                className="text-[14px] text-[#00376B] tracking-[.1px] "
              >
                Can not reset your password?
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="w-[140px] border-[.1px] border-[#DBDBDB]" />
              <h6 className="text-[13px] text-[#737373] font-semibold">OR</h6>
              <div className="w-[140px] border-[.1px] border-[#DBDBDB]" />
            </div>
            <div className="mt-3">
              <Link
                to="/signup"
                className="text-[#262626] text-[15px] font-semibold hover:text-[#737373] "
              >
                Create New Account
              </Link>
            </div>
          </div>
          <div className=" h-[30vh] flex flex-col items-center  ">
            <div className="sm:border  sm:border-[#DBDBDB]   sm:w-[400px] h-14 flex  items-center justify-center ">
              <a
                href=""
                className="text-[#262626] text-[14px] font-semibold hover:text-[#737373]  "
              >
                Back to Login
              </a>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
