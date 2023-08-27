import React from "react";
import Contact from "../components/FooterComponents/Contact";
import CompanyDetails from "../components/FooterComponents/CompanyDetails";
import FooterColumn from "../components/FooterComponents/FooterColumn";
import SocialIcons from "../components/SocialIcons";
import FooterBottom from "../components/FooterComponents/FooterBottom";

// data
import { footerColumn1, footerColumn2, footerColumn3 } from "../data";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-[#eae9e8] pt-5">
      <Contact />
      <hr className="hidden lg:block border border-gray-500 mx-10" />
      <div className="flex flex-col lg:flex-row gap-10 py-10 mx-10">
        <div className="w-full lg:w-[45%]">
          <CompanyDetails />
        </div>
        <div className="w-full lg:w-[65%] grid grid-flow-row lg:grid-flow-col">
          <FooterColumn
            title={footerColumn1.title}
            links={footerColumn1.links}
          />
          <FooterColumn
            title={footerColumn2.title}
            links={footerColumn2.links}
          />
          <FooterColumn
            title={footerColumn3.title}
            links={footerColumn3.links}
          />
        </div>
      </div>
      <div className="w-full bg-[#dfdfdf] py-10">
        <SocialIcons fill={true} />
      </div>
      <FooterBottom privacyPolicy="/" legalStatement="/" />
    </footer>
  );
};

export default Footer;
