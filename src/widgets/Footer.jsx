"use client";

import { motion } from "framer-motion";
import Image from "next/image"
import { cn } from "@/utils";
import { motionVariants } from "@/config";

export const Footer = () => {
  const {containerVariants, itemVariants, textVariants } = motionVariants;

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white dark:bg-black text-black px-4 dark:text-zinc-50 w-full"
    >
      <div className="max-w-7xl mx-auto px-4 section-py flex flex-col gap-5 md:flex-row md:gap-10">
        <div className="">
          <motion.h4
            variants={textVariants}
            className="text-black dark:text-white font-sans mb-2"
          >
            Компания
          </motion.h4>
          <motion.ul
            variants={itemVariants}
            className="text-zinc-600 dark:text-zinc-400 font-sans text-sm flex flex-col gap-2"
          > 
            <li>
              <span>ООО «АРГО ТЕХНОЛОДЖИ ИСТ»</span>
            </li>
            <li>
              <span>ИНН: 5010052504</span>
            </li>
            <li>
              <span>ОКВЭД: 62.01</span>
            </li>
            <li>
              <span>
                Адрес: 111250, город Москва, <br />
                проезд Завода Серп и Молот, дом 6, корпус 1, <br />
                эт. 7, комн. 709
              </span>
            </li>
            <li className="hover:translate-x-1 transition hover:text-black dark:hover:text-white">
              <a href="tel:84994300054">8 (499) 430 00 54</a>
            </li>
            <li className="hover:translate-x-1 transition hover:text-black dark:hover:text-white">
              <a href="mailto:info@argo.tech">E-mail: info@argo.tech</a>
            </li>
          </motion.ul>
        </div>
        <div className="">
          <motion.h4
            variants={textVariants}
            className="text-black font-sans dark:text-white mb-2"
          >
            Социальные сети
          </motion.h4>
          <motion.ul
            variants={itemVariants}
            className="text-zinc-600 dark:text-zinc-400 text-sm font-sans flex flex-col gap-2"
          >
            <li className="hover:translate-x-1 transition hover:text-black dark:hover:text-white">
              <a
                className="flex items-center gap-2"
                href="https://max.ru/join/A9BI2uNQbcqGW2DuMSXPXK1BlxoEZkYoez2rA5vA84U"
                target="_blank"
              >
                <Image
                  className={cn("dark:invert")}
                  src="/max-light.svg"
                  alt=""
                  width={15}
                  height={15}
                  priority
                />
                Max
              </a>
            </li>
            <li className="hover:translate-x-1 transition hover:text-black dark:hover:text-white">
              <a href="https://companies.rbc.ru/id/1165007052583-argotech/">
                РБК Компании
              </a>
            </li>
          </motion.ul>
        </div>
      </div>
    </motion.footer>
  );
}