import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Componets/Login/Login";
import Signup from "./Componets/Signup/Signup";
import ForgetPassword from "./Componets/ForgetPassword/ForgetPassword";

import PageLayout from "./Componets/Layouts/PageLayout/PageLayout";
import HomePage from "./Componets/HomePage/HomePage";

const App = () => {
  return (
    <div className=" min-h-screen bg-black text-white flex justify-center items-center">
      <BrowserRouter>
        <PageLayout>
          <Routes>
          
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/sidebar" element={<HomePage/>}></Route>
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
