"use client";

import React, { useState } from "react";
import Link from "next/link";

//components
import Sidebar from "./Sidebar";
import Search from "./Search";

// react icons
import { IoLocationOutline } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";

// data
import { webInfo, navLinks } from "../data";
import NavLink from "./NavLink";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="bg-white flex justify-between items-center w-full px-3 relative">
        {/* Logo */}
        <Link href="/" className="">
          <img
            src={webInfo.logo}
            alt="logo"
            className="hidden md:block max-w-full"
            width="80%"
          />
          <img
            src={webInfo.responsiveLogo}
            alt="logo"
            className="md:hidden max-w-full"
            width="80%"
          />
        </Link>

        {/* Nav Links */}
        <div className="h-full ">
          <ul className="hidden lg:flex items-center gap-4 h-full">
            {navLinks &&
              navLinks.map((item, index) => {
                return <NavLink item={item} key={index} />;
              })}
            <li>
              <Link href="/" className="text-[#06398f] font-bold">
                Buy Now
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-2 items-center">
          <span className="font-bold cursor-pointer">العربية</span>
          <IoLocationOutline className="text-[30px] cursor-pointer" />
          <AiOutlineSearch
            className="text-[30px] cursor-pointer"
            onClick={() => setShowSearch(true)}
          />
          <HiMenuAlt2
            className="text-[30px] cursor-pointer font-extralight"
            onClick={handleSidebarToggle}
          />
        </div>
      </nav>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Search showSearch={showSearch} setShowSearch={setShowSearch} />
    </>
  );
};

export default Navbar;
