import React, { useMemo } from "react";

import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  {
    title: "Real vaqtda mavjudlik:",
    descr:
      "Foydalanuvchilar uchun qulay mobil ilovamiz yoki veb-saytimiz orqali real vaqtda mashinalar joylari mavjudligini tekshiring. Endi taxmin qilish o'yinlari yo'q - kelishdan oldin joyni qaerdan topishni aniq biling.",
    image: "https://www.smartparking.com/media/p3glspbf/icon-anpr.png",
  },
  {
    title: "Band qilish tizimi:",
    descr:
      "To'xtash joyini oldindan band qiling, bu muammosiz to'xtash joyini ta'minlash uchun. Oʻzingizga kerakli joyni bir necha marta bosish bilan oʻz joyingizga ega bo'lasiz.",
    image:
      "	https://www.smartparking.com/media/55gpadhw/icon-smartcloud-hub-sml.png",
  },
  {
    title: "Navigatsiya integratsiyasi:",
    descr:
      "Smart Parking tizimimizni sevimli navigatsiya ilovalaringiz bilan muammosiz birlashtiring. Mavjud to'xtash joylariga real vaqt rejimida yo'nalishlarga ega bo'ling, bu esa sayohatingizni yanada oson qiladi.",
    image: "	https://www.smartparking.com/media/rx1prgph/icon-smartcloud.png",
  },
  {
    title: "Xavfsiz to'lovlar:",
    descr:
      "Xavfsiz va qulay to'lov imkoniyatlari bilan xotirjamlikdan rohatlaning. Kredit/debet kartalari yoki mobil hamyonlarni afzal ko'rasizmi, bizning tizimimiz xavfsiz va muammosiz to'lov jarayonini ta'minlaydi.",
    image: "	https://www.smartparking.com/media/rx1prgph/icon-smartcloud.png",
  },
  {
    title: "Foydalanuvchi uchun qulay interfeys:",
    descr:
      "Xavfsiz va qulay to'lov imkoniyatlari bilan xotirjamlikdan rohatlaning. Kredit/debet kartalari yoki mobil hamyonlarni afzal ko'rasizmi, bizning tizimimiz xavfsiz va muammosiz to'lov jarayonini ta'minlaydi.",
    image: "	https://www.smartparking.com/media/rx1prgph/icon-smartcloud.png",
  },
  {
    title: "24/7 mijozlarni qo'llab-quvvatlash:",
    descr:
      "Savollaringiz bormi yoki yordam kerakmi? Mijozlarni qo'llab-quvvatlash bo'yicha bizning maxsus guruhimiz 24/7 tezkor yordam ko'rsatish va har qanday tashvishlaringizni hal qilish uchun ishlaydi.",
    image: "	https://www.smartparking.com/media/rx1prgph/icon-smartcloud.png",
  },
];

export function About() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="about"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Asosiy xususiyatlar
            </motion.h3>
          </ScrollAnimationWrapper>
          <div className="flex flex-wrap justify-between pt-10">
            {features.map((feature) => {
              return (
                <ScrollAnimationWrapper
                  key={feature.title}
                  className="flex justify-center lg:w-1/3 md:w-1/2 w-full"
                >
                  <motion.div
                    variants={scrollAnimation}
                    className="flex flex-col m-5 justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
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
      </div>
    </div>
  );
}
