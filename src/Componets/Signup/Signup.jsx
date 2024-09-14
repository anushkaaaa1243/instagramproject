import { FaFacebookSquare } from "react-icons/fa";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { Link, NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-1">
      <div className="flex flex-col  justify-center items-center  ">


          <div className=" sm:border sm:border-[#DBDBDB] mt-3  sm:w-[350px] sm:h-[660px] ">
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-52 mt-7"
                src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png"
                alt=""
              />
               <div className=" text-center w-64 mb-2 to see photos and videos from your friends.   font-[600] text-[#737373] text-[16px] ">
              <h1>Sign up to see photos and videos from your friends.</h1>
            </div>
            <div className="flex justify-center items-center">
                <NavLink>
                <Button text="Log in with facebook" icon={<FaFacebookSquare/>}/>
                </NavLink>
         
              
            </div>
            <div className="flex justify-center items-center gap-5 mt-3 ">
              <div className="w-[100px] border-[.1px] border-[#DBDBDB]" />
              <h6 className="text-[#737373] font-[500] text-[12px]">OR</h6>
              <div className="w-[100px] border-[.1px] border-[#DBDBDB]" />
            </div>
               <div className="flex  flex-col justify-center  items-center gap-2 mt-5 ">
             <Input placeholder="Mobile number or email address" type="text"/>
              <Input placeholder="Full Name" type="text"/>
               <Input placeholder="Username" type="text" />
             <Input placeholder="Password" type="Password"/>
                
              
              <div className="w-72 flex">
              <h6 className="text-center text-[13px] font-[400] text-[#737373]">People who use our service may have uploaded your contact information to Instagram.<Link to="" className="text-[13px] text-[#00376B]">Learn more</Link></h6>
              </div>
              <div className="w-72 flex">
              <h6 className="text-center text-[13px] font-[400] text-[#737373]">By signing up, you agree to our <Link to="" className="text-[13px] text-[#00376B]">Terms,Privacy Policy and cookies</Link></h6>
              </div>
              
             
           
            </div>
           
            <div className="flex justify-center items-center mt-3">
                <NavLink to="">
                <Button text="Sign up"/>
                </NavLink>
           
            </div>
           </div>
            </div>
        
   
          <div className="flex gap-2 mt-5 sm:w-[350px] sm:border sm:border-[#DBDBDB] h-16 justify-center sm:items-center text-[14px]">
            <h6> Have an account?</h6>
            <Link  to="/login" className="text-[#0095F6] font-semibold">
             Log in
            </Link>
           
          </div>
          <div className="text-center text-[15px] sm:mt-2">
            <h6>Get the app.</h6>
          </div>
          <div className="mt-3 flex flex-wrap justify-center items-center gap-2 xl:ml-5">
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              alt=""
              className="w-36 h-11"
            />
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
              alt=""
              className="w-32"
            />
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default SignUp