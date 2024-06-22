import React from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ArticleDetail from "./Pages/ArticleDetail";
import PageNotFound from "./Components/PageNotFound";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Home />} />
          <Route path="/sports" element={<Home />} />
          <Route path="/technology" element={<Home />} />
          <Route path="/environment" element={<Home />} />
          <Route path="/article/:author" element={<ArticleDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
