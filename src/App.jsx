import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Componets/Login/Login";
import Signup from "./Componets/Signup/Signup";
import ForgetPassword from "./Componets/ForgetPassword/ForgetPassword";
import Instagram from "./Componets/Instagram/Instagram";
import Home from "./Componets/Home/Home";

const App = () => {
  return (
    <div className="min-w-full min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Instagram />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
