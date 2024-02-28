import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Kasalxonalar va tibbiyot markazlari",
  "Dam olish va turizm",
  "Mehmonxona va mehmondo'stlik",
  "Restoranlar va pablar",
  "Supermarketlar",
  "Universitetlar va ta'lim",
  "Savdo markazlari va chakana savdo",
];

const Place = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="place"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <img
              src="/assets/parkin2.webp"
              alt="Parking"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-xl lg:text-3xl font-medium leading-relaxed text-black-600">
              Biz bir nechta sektorlar bo'ylab moslashtirilgan parking tizimini
              taklif qilamiz
            </h3>

            <ul className="text-black-500 self-start list-inside ml-8 pt-2">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list pb-2"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Place;
