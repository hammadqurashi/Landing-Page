import React from "react";
import Image from "next/image";
import Link from "next/link";

// data
import { webInfo } from "@/src/data";

const CompanyDetails = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex justify-evenly items-center">
        <Link href="/">
          <Image src={webInfo.logo} alt="logo" width={200} height={39} />
        </Link>
        <div className={`border-l border-gray-500 h-6`}></div>
        <a href={webInfo.wallanHref} target="_blank">
          <Image src={webInfo.wallanLogo} alt="" width={200} height={50} />
        </a>
      </div>
      <p className="hidden lg:block w-full text-[#414141]">
        Geely Auto Group is a leading automobile manufacturer based in Hangzhou,
        China and was founded in 1997 as a subsidiary of Zhejiang Geely Holding
        Group. The group manages several leading brands including Geely Auto,
        Lynk & Co, Proton Cars, and Geometry.
      </p>
    </div>
  );
};

export default CompanyDetails;
