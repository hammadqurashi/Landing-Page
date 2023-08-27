import React from "react";
import { CgNotes } from "react-icons/cg";
import { GiSteeringWheel } from "react-icons/gi";
import { IoCallOutline } from "react-icons/io5";
import FixedNavigationBtn from "../components/FixedNavigationBtn";

const FixedVerticalNavigation = () => {
  return (
    <div className="fixed top-1/3 right-3 z-20 flex gap-3 flex-col">
      <FixedNavigationBtn
        href={"/"}
        icon={<GiSteeringWheel />}
        text="Test Drive"
      />
      <FixedNavigationBtn href={"/"} icon={<CgNotes />} text="Get Quote" />
      <FixedNavigationBtn
        href={"/"}
        icon={<IoCallOutline />}
        text="Contact Us"
      />
    </div>
  );
};

export default FixedVerticalNavigation;
