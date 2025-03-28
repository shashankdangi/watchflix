import React from "react";
import SearchBar from "./Components/SearchBar";
import MoviesCardGrid from "./Components/MoviesCardGrid";

const page = () => {
  return (
    <div>
      <span className="flex flex-col items-center text-center gap-5">
        <p className="text-5xl font-bold ">Search</p>
        <SearchBar />
      </span>
      <MoviesCardGrid />
    </div>
  );
};

export default page;
