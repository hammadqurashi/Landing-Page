import Link from "next/link";
import React from "react";

const FooterBottom = ({ privacyPolicy, legalStatement }) => {
  return (
    <div className="w-full flex justify-center gap-3 py-7">
      <span className="text-center text-sm">
        © Copyright 2023 Geely All rights reserved.
      </span>
      <Link
        href={privacyPolicy ? privacyPolicy : "/"}
        className="text-center text-sm"
      >
        Privacy Policy
      </Link>
      <div className={`border-l border-gray-500 h-6`}></div>
      <Link
        href={legalStatement ? legalStatement : "/"}
        className="text-center text-sm"
      >
        Legal Statement
      </Link>
    </div>
  );
};

export default FooterBottom;
