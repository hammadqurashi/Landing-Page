"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const FooterColumn = ({ title, links }) => {
  const [dropDown, setDropDown] = useState(false);

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="flex flex-col gap-5 w-full my-2">
      <div className="flex justify-between w-full">
        <h2 className="text-[#414141]" onClick={toggleDropDown}>
          {title}
        </h2>
        {dropDown ? (
          <RiArrowDropUpLine
            className="lg:hidden text-2xl"
            onClick={toggleDropDown}
          />
        ) : (
          <RiArrowDropDownLine
            className="lg:hidden text-2xl"
            onClick={toggleDropDown}
          />
        )}
      </div>
      <ul className={`${!dropDown ? "hidden lg:block" : "lg:block"}`}>
        <li className="flex gap-2 flex-col text-[#414141]">
          {links &&
            links.length > 0 &&
            links.map((item) => {
              return (
                <Link href={item.href} key={item.id} className="text-sm">
                  {item.innerText}
                </Link>
              );
            })}
        </li>
      </ul>
      <hr className="lg:hidden w-full border border-black" />
    </div>
  );
};

export default FooterColumn;
