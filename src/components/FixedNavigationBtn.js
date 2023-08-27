"use client";

import Link from "next/link";
import React, { useState } from "react";

const FixedNavigationBtn = ({ href, icon, text }) => {
  const [showText, setShowText] = useState(false);

  return (
    <Link
      href={href}
      className="flex w-8 h-8 items-center"
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <span
        className={`bg-white/80 min-w-[7em] flex justify-center items-center h-8 absolute transition-all duration-300 ease-in-out ${
          showText ? "right-full opacity-1" : "right-0 opacity-0"
        } rounded-sm text-sm`}
      >
        {text}
      </span>
      <div className="bg-white/75 w-8 h-8 flex justify-center items-center text-xl rounded-sm">
        {icon}
      </div>
    </Link>
  );
};

export default FixedNavigationBtn;
