"use client";

import React, { useState, useEffect } from "react";

const Search = ({ showSearch, setShowSearch }) => {
  // Prevent scrolling when the sidebar is open
  useEffect(() => {
    if (showSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [showSearch]);

  return (
    <>
      <div
        className={`transition-all ease duration-1000 absolute top-0 left-0 w-full h-screen z-20 ${
          showSearch ? "block bg-black bg-opacity-80" : "hidden"
        }`}
        onClick={() => setShowSearch(false)}
      ></div>
      <div
        className={`${
          !showSearch ? "hidden" : ""
        }  absolute w-1/2 top-[35%] right-1/4 z-30`}
      >
        <input
          type="text"
          className=" p-4 w-full outline-none bg-transparent text-white text-2xl placeholder:text-2xl placeholder:text-gray-500 border-b-[3px] border-b-gray-400"
          placeholder="Search..."
        />
      </div>
    </>
  );
};

export default Search;
