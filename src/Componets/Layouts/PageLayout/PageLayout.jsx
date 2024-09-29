import { Route, Routes } from "react-router-dom";
import { Sidebar } from "../../Sidebar/Sidebar";

const PageLayout = ({ children }) => {
  return (
    <div>
      <div>
        <div className="flex ">
          {/* Sidebar on the left */}
          <div className="">
            <Routes>
              <Route path="/sidebar" element={<Sidebar />}></Route>
              
            </Routes>
          </div>
          {/* Sidebar on the Right */}
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
