"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { shoppingTools } from "@/src/data";

const ShoppingTools = () => {
  const [displayedItems, setDisplayedItems] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const maxItems = window.innerWidth <= 773 ? 4 : shoppingTools.length;
      setDisplayedItems(shoppingTools.slice(0, maxItems));
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full min-h-48 flex flex-col gap-5 justify-evenly items-center bg-white mt-[60px] mb-[30px]">
      <h1 className="text-xl lg:text-3xl mb-5 text-mainText">SHOPPING TOOLS</h1>
      <div className="grid grid-cols-2 md:flex md:flex-wrap w-[80%] justify-evenly md:gap-4">
        {displayedItems?.map((item, index) => {
          return (
            <Link
              key={item.id}
              href={item.link}
              className={`flex flex-col ${
                index <= 1
                  ? "border-b-[1px] border-b-gray-300 border-spacing-1"
                  : ""
              } ${
                index % 2 == 0
                  ? "border-r-[1px] border-gray-300 border-spacing-1"
                  : ""
              } md:border-none items-center gap-3 p-4 md:p-0`}
            >
              <img src={item.img} alt="" className="w-[40px] h-[40px]" />
              <span className="text-center uppercase text-mainText text-sm lg:text-md lg:font-bold">
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ShoppingTools;
