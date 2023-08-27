"use client";

import Link from "next/link";
import React from "react";

const Button = ({ text, fill, outline, href, rounded }) => {
  // if giving outline give object like this:
  // outline = "dark" or "light"

  // if giving fill then
  // fill= "dark" or "light"

  const outlineVariants = {
    light:
      "bg-transparent border-white text-white hover:bg-white hover:text-black",
    dark: "bg-transparent border-black text-black hover:bg-black hover:text-white",
  };

  const fillVariants = {
    dark: "bg-black text-white",
    light: "bg-white text-black",
  };

  return (
    <Link
      href={href}
      className={` ${
        outline ? outlineVariants[outline] : fill ? fillVariants[fill] : ""
      } ${rounded ? "rounded-sm" : ""}
   capitalize md:uppercase py-[5px] px-[10px] md:py-[10px] md:px-5 border-[1px] text-xs font-semibold transition-all duration-300 w-full text-center`}
    >
      {text}
    </Link>
  );
};

export default Button;
