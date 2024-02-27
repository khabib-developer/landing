import React from "react";
import logo from "../../public/assets/logo.png";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-10 pb-5">
      <div className="flex justify-between  mt-2 mb-20  items-center w-full px-6 sm:px-8 lg:px-16">
        <div className="flex items-center gap-2">
          <img src={logo.src} className="!w-8 h-8 pt-1 inline" />
          <p className="">
            <strong className="font-medium"> Smart parking system.</strong>
          </p>
        </div>

        <div className="flex">
          <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
            <Facebook className="h-6 w-6" />
          </div>
          <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
            <Twitter className="h-6 w-6" />
          </div>
          <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
            <Instagram className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
