import React from "react";
import Button from "../Button";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

// data
import { webInfo } from "@/src/data";

const Contact = () => {
  return (
    <div className="hidden lg:flex justify-between w-full py-5 px-10">
      <div className="flex w-1/2 items-center gap-2">
        <IoLocationOutline className="text-2xl" />
        <a href={webInfo?.addressLink} target="_blank" className="text-lg">
          {webInfo?.address}
        </a>
      </div>
      <div className="flex w-1/3">
        <div className="flex justify-end gap-2 w-1/2 items-center">
          <BsTelephone className="text-2xl" />
          <a href={webInfo.whatsappMe} target="_blank" className="text-lg">
            {webInfo.contactNo}
          </a>
        </div>
        <div className="w-1/2 text-end">
          <Button fill="dark" text="Request a call" href="/" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
