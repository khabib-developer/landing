import React from "react";
import logo from "../../public/assets/logo.png";
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
          <a href="tel:++998993825423" className="mx-2 p-2 ">
            +998 (99) 382-5423
          </a>
          <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
            <a href="mailto:ilyasxoja.jumaniyazov@gmail.com">
              <img
                className="h-6 w-6"
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
