import React, { useMemo } from "react";

import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  {
    title: "ANPR Camera System",
    descr:
      "Automatic number plate recognition (ANPR), is a technology that reads vehicle registration plates.",
    image: "https://www.smartparking.com/media/p3glspbf/icon-anpr.png",
  },
  {
    title: "SmartCloud Hub",
    descr:
      "An intelligent car park management system, that puts reporting and analytics at your fingertips.",
    image:
      "	https://www.smartparking.com/media/55gpadhw/icon-smartcloud-hub-sml.png",
  },
  {
    title: "SmartCloud Platform",
    descr:
      "Sophisticated, powerful and innovative web-based service platform that gathers and processes information.",
    image: "	https://www.smartparking.com/media/rx1prgph/icon-smartcloud.png",
  },
  // {
  //   title: "Vehicle Detection Sensors",
  //   descr:
  //     "Leading technology designed to pick up the usage of individual car park bays.",
  //   image: "https://www.smartparking.com/media/qi0bnalc/icon-vehicle.png",
  // },
  // {
  //   title: "Compliance Management System",
  //   descr:
  //     "Mobile app and back-office management system designed to efficiently manage parking compliance and enforcement. ",
  //   image: "https://www.smartparking.com/media/wsfjquef/icon-cms.png",
  // },
  // {
  //   title: "Pay & Walk",
  //   descr:
  //     "This car park management system offers the best payment method for motorists, and the latest in robust and reliable Pay & Walk machines. ",
  //   image:
  //     "https://www.smartparking.com/media/izjobuj0/pay-and-walk-icon-v4.jpg",
  // },
];

const Features = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="features"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Our System is made up of interchangeable components - fully
              integrating parking, guidance, payment and analytics with other
              complementary services.
            </motion.h3>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            {features.map((feature) => {
              return (
                <ScrollAnimationWrapper
                  key={feature.title}
                  className="flex justify-center"
                >
                  <motion.div
                    variants={scrollAnimation}
                    className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
                    <div className="p-4 lg:p-0 ">
                      <img
                        src={feature.image}
                        width={77}
                        height={77}
                        alt="Free Plan"
                      />
                    </div>
                    <h4 className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                      {feature.title}
                    </h4>
                    <p>{feature.descr}</p>
                  </motion.div>
                </ScrollAnimationWrapper>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12  mx-auto"
            >
              Simple and effective solutions that delivers results.
            </motion.h3>
            <motion.p
              className="leading-normal  mx-auto my-2 w-10/12 "
              variants={scrollAnimation}
            >
              Embarking on our startup journey, we're committed to reshaping the
              parking landscape and driving revenue growth for an extensive
              array of clients. Although our journey has just begun, our vision
              is rooted in over thirty years of industry expertise.
            </motion.p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <motion.div
              className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
              variants={scrollAnimation}
            >
              <img src="/assets/parkingsystem.webp" className="" alt="" />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Features;
