"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GrClose } from "react-icons/gr";

import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import SocialIcons from "./SocialIcons";

//data
import { navLinks } from "../data";
import { sideBarCustomerCare } from "../data";
import { sideBarShoppingTools } from "../data";
import { sideBarUseFullLinks } from "../data";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [mobileDropDown, setMobileDropDown] = useState(
    Array(navLinks.length).fill(false)
  );

  const toggleMobileNav = (index) => {
    const updatedStates = [...mobileDropDown];
    updatedStates[index] = !updatedStates[index];
    setMobileDropDown(updatedStates);
  };

  // Prevent scrolling when the sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [sidebarOpen]);

  return (
    <>
      <div
        className={`transition-all ease duration-1000 absolute top-0 left-0 w-full h-full z-20 ${
          sidebarOpen ? "block bg-black bg-opacity-50" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>
      <aside
        className={`fixed overflow-scroll lg:overflow-hidden w-[80vw] lg:w-[25vw] h-full z-30 top-0 bg-white ${
          sidebarOpen ? "right-0 z-10" : "-right-[200%]"
        } transition-all ease duration-700`}
      >
        <GrClose
          className="absolute right-5 top-7 cursor-pointer text-xl"
          onClick={() => setSidebarOpen(false)}
        />
        <div className="flex flex-col">
          {/* Geely (responsive) */}
          <div className="flex lg:hidden flex-col gap-6 ">
            <h1 className="text-xl font-bold px-10 py-5">GEELY</h1>
            <ul className="flex flex-col gap-2">
              {navLinks &&
                navLinks.map((item, index) => {
                  return (
                    <li key={item.id} className="flex flex-col gap-1">
                      <span className="flex items-center justify-between text-sm text-gray-600 px-10">
                        <Link href={item.link}>{item.title}</Link>
                        {item.dropDown &&
                          item.dropDownItems.length > 0 &&
                          (mobileDropDown[index] ? (
                            <RiArrowDropUpLine
                              className="text-2xl"
                              onClick={() => toggleMobileNav(index)}
                            />
                          ) : (
                            <RiArrowDropDownLine
                              className="text-2xl"
                              onClick={() => toggleMobileNav(index)}
                            />
                          ))}
                      </span>
                      {item.dropDown && (
                        <ul
                          className={`px-10 bg-gray-300 ${
                            mobileDropDown[index] === false ? "hidden" : ""
                          }`}
                        >
                          {item.dropDownItems?.map((dropDownItem) => {
                            return (
                              <Link
                                href={dropDownItem.link}
                                key={dropDownItem.subId}
                              >
                                <li className="text-xs my-1">
                                  {dropDownItem.title}
                                </li>
                              </Link>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>

          {/* Useful Links (responsive) */}
          <div className="flex lg:hidden flex-col gap-6 p-10 ">
            <h1 className="text-xl font-bold">UseFul Link</h1>
            <ul className="flex flex-col gap-5">
              {sideBarUseFullLinks &&
                sideBarUseFullLinks.map((item, index) => {
                  return (
                    <Link href={item.href} key={index}>
                      <li className="flex gap-4">
                        <img src={item.img} alt={item.title} />
                        <span className="text-sm text-gray-600">
                          {item.title}
                        </span>
                      </li>
                    </Link>
                  );
                })}
            </ul>
          </div>

          {/* SHOPPING TOOLS */}
          <div className="hidden lg:flex flex-col gap-6 px-10 py-7">
            <h1 className="text-xl font-bold">SHOPPING TOOLS</h1>
            <ul className="flex flex-col gap-5">
              {sideBarShoppingTools &&
                sideBarShoppingTools.map((item, index) => {
                  return (
                    <Link href={item.href} key={index}>
                      <li className="flex gap-4">
                        <img src={item.img} alt={item.title} />
                        <span className="text-sm text-gray-600">
                          {item.title}
                        </span>
                      </li>
                    </Link>
                  );
                })}
            </ul>
          </div>

          {/* CUSTOMER CARE*/}
          <div className="hidden lg:flex flex-col gap-6 bg-gray-200 px-10 py-7">
            <h1 className="text-xl font-bold">CUSTOMER CARE</h1>
            <ul className="flex flex-col gap-5">
              {sideBarCustomerCare &&
                sideBarCustomerCare.map((item, index) => {
                  return (
                    <Link href={item.href} key={index}>
                      <li className="flex gap-4">
                        <img src={item.img} alt={item.title} />
                        <span className="text-sm text-gray-600">
                          {item.title}
                        </span>
                      </li>
                    </Link>
                  );
                })}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-5 mt-1 px-10">
            {/* Social Icons */}
            <SocialIcons fill={true} />
            {/* Copyright msg */}
            <span className="text-center text-sm">
              © Copyright 2023 Geely All rights reserved.
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
