import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";
import logo from "../../public/assets/logo.png";
import { useRouter } from "next/router";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const router = useRouter();
  const handleNavigate = () => router.push("/login");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          {/* <div className="col-start-1 col-end-2 flex items-center">
            <img
              src={logo.src}
              style={{ width: "2rem !important" }}
              // className="!w-8"
            />
          </div> */}
          <ul className="hidden lg:flex justify-start text-black-500 items-center">
            <LinkScroll
              activeClass="active"
              to={"home"}
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("home");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "home"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 a")
              }
            >
              Bosh sahifa
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Asosiy xususiyatlar
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="place"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("place");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "place"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Dastur
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="features"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "pricing"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Bizning jamoa
            </LinkScroll>
          </ul>
          <div
            onClick={handleNavigate}
            className="col-start-10 col-end-12 font-medium flex justify-end items-center"
          >
            <ButtonOutline>Boshlash</ButtonOutline>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20  sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "mx-1 sm:mx-2 px-2 sm:px-4 py-1 flex flex-col items-center text-[8px] border-t-2 transition-all " +
                (activeLink === "about"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-center">Biz haqimizda</span>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "mx-1 sm:mx-2 px-2 sm:px-4 py-1 flex flex-col items-center text-[8px] border-t-2 transition-all " +
                (activeLink === "feature"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <span className="text-center">Asosiy xususiyatlar</span>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="place"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("place");
              }}
              className={
                "mx-1 sm:mx-2 px-2 sm:px-4 py-1 flex flex-col items-center text-[8px] border-t-2 transition-all " +
                (activeLink === "place"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <img
                className="w-6 h-6"
                src="https://img.icons8.com/?size=512&id=83240&format=png"
              />
              <span className="text-center">Dastur</span>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="team"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("team");
              }}
              className={
                "mx-1 sm:mx-2 px-2 sm:px-4 py-1 flex flex-col items-center text-[8px] border-t-2 transition-all " +
                (activeLink === "team"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <img
                className="w-6 h-6"
                src="https://img.icons8.com/?size=512&id=83240&format=png"
              />
              <span className="text-center">Bizning jamoa</span>
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
