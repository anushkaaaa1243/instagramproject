import { Route, Routes } from "react-router-dom";
import Layout from "./Componets/Layouts/Layout";
import FeedPosts from "./Componets/FeedPosts/FeedPosts";
import Suggestion from "./Componets/Suggestions/SuggestionHeader";
import "./App.css"


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<FeedPosts />} />
          <Route path="/" element ={<Suggestion/>}/>
        </Route>
      </Routes>
  
  );
};

export default App;
