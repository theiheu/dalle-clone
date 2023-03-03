import React from "react";
import { logos } from "../src/assets";
import { Home, CreatePost } from "./pages";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white border-b sm:px-8 py-4 border-b[#e6ebf4]">
        <Link to={"/"}>
          <img src={logos} alt="" className="w-28 object-contain" />
        </Link>
        <Link
          to={"/create-post"}
          className="font-inter font-medium bg-[#6469ff] text-white rounded-md px-4 py-2"
        >
          Create
        </Link>
      </header>
      <main className="sm:px-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh - 73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
