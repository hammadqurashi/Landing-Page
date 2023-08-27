"use client";

import React, { useState } from "react";
import Link from "next/link";

const NavLink = ({ item }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <li
      className="relative p-4 cursor-pointer"
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      <Link href={item.link} className="font-bold">
        {item.title}
      </Link>
      {item.dropDown && (
        <ul
          className={`bg-white border-t-4 border-black absolute flex flex-col gap-3 w-max p-5 z-20 transform origin-top transition-all ${
            showDropDown ? "opacity-1 top-full" : "-top-[500%] opacity-0"
          } duration-300 ease-in-out`}
        >
          {item.dropDownItems.map((dropDownItem) => {
            return (
              <Link
                key={dropDownItem.subId}
                href={dropDownItem.link}
                className="hover:translate-x-2 transition-all duration-200 ease-in-out inline-block relative"
              >
                {dropDownItem.title}
              </Link>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default NavLink;
