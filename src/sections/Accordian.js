"use client";

import React, { useEffect, useState } from "react";
import { accordianSlides } from "@/src/data";
import Link from "next/link";

const TestAccordian = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === accordianSlides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <section className="my-14 flex flex-col md:flex-row h-[70vh] items-center justify-center w-full overflow-hidden">
      {accordianSlides.map((item, index) => (
        <div
          key={index}
          className={`w-full relative bg-cover bg-center bg-no-repeat h-full text-white cursor-pointer flex-1/2 m-2 transition-all duration-700 ease-in`}
          style={{
            backgroundImage: `url(${item.image})`,
            flex: activeIndex === index ? 5 : 0.5,
            opacity: activeIndex === index ? 1 : 0.5,
          }}
          onClick={() => handleClick(index)}
        >
          <div
            className={`w-full absolute bg-black/50 p-4 text-center text-lg text-white transition-all duration-1000 ease-out ${
              activeIndex === index
                ? "bottom-0 opacity-1"
                : "-bottom-[200%] opacity-0"
            } `}
          >
            <Link href={item.href} className="text-2xl">
              {item.header}
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TestAccordian;
