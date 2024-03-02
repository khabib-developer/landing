import React, { useMemo } from "react";

import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import img from "../public/assets/img.png";

const features = [
  {
    title: "ANPR kamera sistemasi",
    descr:
      "Raqamni avtomatik aniqlash (ANPR) - bu avtomobil ro'yxatga olish raqamlarini o'qiydigan texnologiya.",
    image: "https://www.smartparking.com/media/p3glspbf/icon-anpr.png",
  },
  {
    title: "SmartCloud Hub",
    descr:
      "Avtoturargohni boshqarishning aqlli tizimi, bu hisobot va tahlillarni barmoq uchiga qo'yadi.",
    image:
      "	https://www.smartparking.com/media/55gpadhw/icon-smartcloud-hub-sml.png",
  },
  {
    title: "SmartCloud Platformasi",
    descr:
      "Murakkab, kuchli va innovatsion xizmat ko'rsatish platformasi, u ma'lumotni to'playdi va qayta ishlaydi.",
    image: "	https://www.smartparking.com/media/rx1prgph/icon-smartcloud.png",
  },
];

const team = [
  {
    title: "ILYASKHOJA",
    descr: "Loyiha rahbari",
    image: "/assets/img1.png",
  },
  {
    title: "SADRIDDIN",
    descr: "It mutaxassis, Backend",
    image: "/assets/img.png",
  },
  {
    title: "HABIB",
    descr: "It mutaxassis, Frontend",
    image: "/assets/img.png",
  },
  {
    title: "NURIDDIN",
    descr: "It mutaxassis, UX/UI dizayner",
    image: "/assets/img2.png",
  },
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
              Bizning tizimimiz almashtiriladigan komponentlardan tashkil topgan
              - to'xtash joyi, yo'l-yo'riq, to'lov va tahlilni boshqa qo'shimcha
              xizmatlar bilan to'liq integratsiyalashgan.
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
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Bizning jamoa
            </motion.h3>
          </ScrollAnimationWrapper>
          <div id="team" className="flex flex-wrap justify-between pt-10 ">
            {team.map((feature) => {
              return (
                <ScrollAnimationWrapper
                  key={feature.title}
                  className="flex justify-center lg:w-1/4 md:w-1/2 w-full"
                >
                  <motion.div
                    variants={scrollAnimation}
                    className="flex flex-col m-3 justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
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
              Nima uchun Toshkentda Smart Parking Systemni tanlash kerak?
            </motion.h3>
            <motion.p
              className="leading-normal  mx-auto my-2 w-10/12 "
              variants={scrollAnimation}
            >
              Avtoturargohning samarali yechimlari bilan vaqtni tejang va
              stressni kamaytiring.
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
