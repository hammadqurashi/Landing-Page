"use client";

import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

//data
import { socialMediaLinks } from "../data";

// props will be given like
// <SocialIcons
// fill={true} or {false}
// />
const SocialIcons = ({ fill }) => {
  return (
    <div className="flex w-full text-xl justify-center gap-5 mt-1">
      <a
        href={socialMediaLinks?.facebook}
        target="_blank"
        className={`${
          fill
            ? "bg-black p-2 rounded-sm hover:bg-gray-500 transition-all duration-150 ease-in"
            : ""
        }`}
      >
        <FaFacebookF className={`${fill ? "text-white" : ""}`} />
      </a>
      <a
        href={socialMediaLinks?.twitter}
        target="_blank"
        className={`${
          fill
            ? "bg-black p-2 rounded-sm hover:bg-gray-500 transition-all duration-150 ease-in"
            : ""
        }`}
      >
        <BsTwitter className={`${fill ? "text-white" : ""}`} />
      </a>
      <a
        href={socialMediaLinks?.instagram}
        target="_blank"
        className={`${
          fill
            ? "bg-black p-2 rounded-sm hover:bg-gray-500 transition-all duration-150 ease-in"
            : ""
        }`}
      >
        <BsInstagram className={`${fill ? "text-white" : ""}`} />
      </a>
      <a
        href={socialMediaLinks?.youtube}
        target="_blank"
        className={`${
          fill
            ? "bg-black p-2 rounded-sm hover:bg-gray-500 transition-all duration-150 ease-in"
            : ""
        }`}
      >
        <BsYoutube className={`${fill ? "text-white" : ""}`} />
      </a>
    </div>
  );
};

export default SocialIcons;
