import { useState } from "react";
import Footer from "../Footer/Footer";
import { Link,NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setError("Please enter both fields");
      console.log("Please enter both fields");
    } else {
      setError("");

      alert("Logging in...");
      console.log("Logging in with:", username, password);
    }
  };
  return (
    <div>
     
        {/* Left Side */}
        <div className="flex justify-center">
          <div className=" hidden md:block">
            <img
              src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk"
              alt=""
              className=" mt-5 lg:mt-10"
            />
            <div className=" top-[45px] lg:top-[65px] md:left-[155px] lg:left-[320px] xl:left-[400px] ">
              <img
                src="https://tazzafood.com/wp-content/uploads/2024/07/screenshot1.png"
                alt=""
              />
             </div>
          </div>
          {/* RightSide */}
          <div className="  ">
            <div className=" sm:border sm:border-[#DBDBDB] mt-5 md:mt-10 sm:w-[350px] sm:h-[450px]">
              <div className="flex justify-center items-center">
                <img
                  className="w-52 mt-7 filter invert"
                  src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png"
                  alt=""
                />
              </div>
              <div className="flex  flex-col justify-center  items-center gap-2 ">
                <Input
                  placeholder="Phone number, username or email address"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
              </div>
              <div className="flex justify-center items-center">
                <NavLink to="">
                <Button onClick={handleLogin} text="Log in" />
                </NavLink>
             
              </div>
              <div className="flex justify-center items-center gap-5 mt-5">
                <div className="w-[100px] border-[.1px] border-[#DBDBDB]" />
                <h6 className="text-[#737373] font-semibold text-[14px]">OR</h6>
                <div className="w-[100px] border-[.1px] border-[#DBDBDB]" />
              </div>
              <div className="flex justify-center">
                <NavLink to="">
                <button className="flex  items-center gap-2 cursor-pointer mt-5">
                  <span>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKrFhY-ljA-u7J5IMWeTv8zmpBx4PP9nQMw&s"
                      alt=""
                      className="w-4"
                    />
                  </span>
                  <span className="font-semibold text-blue-800 text-[15px]">
                    Log in with Facebook
                  </span>
                </button>
                </NavLink>
                
              </div>

              <div className="mt-3 flex justify-center items-center ">
                <Link
                  to="/forget-password"
                  className="text-[#0093CF] text-[12px]"
                >
                  Forgotten your password?
                </Link>
              </div>
            </div>
            {/* Signup */}
            <div className="flex gap-2 mt-5 sm:w-[350px] sm:border sm:border-[#DBDBDB] h-20 justify-center sm:items-center">
              <h6>Dont have an account?</h6>
              <Link to="/signup" className="text-[#0095F6] font-semibold">
                Sign up
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
        </div>
        <Footer />
    
    </div>
  )
}

export default Login