"use client";

import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { AppLevel, DecisionLevel, SiteLevel, Shield, X8 } from "@/ui/svg";

export const Safety = () => {
  const { containerVariants, textVariants } = motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container section-border"
    >
      <div className="grid md:grid-cols-[4fr_8fr]">
        {/* Левая колонка */}
        <div className="font-light section-py px-4 md:border-r md:border-r-black/8 md:dark:border-white/14">
          <motion.h2
            variants={textVariants}
            className="text-base md:text-xl lg:text-[28px] font-light uppercase leading-none title-color sticky top-30"
          >
            Надежность
          </motion.h2>
        </div>
        {/* Правая колонка */}
        <div className="">
          <div className="md:grid md:grid-cols-2 justify-between border-b border-b-black/8 md:dark:border-b-white/14">
            <div className="section-py px-4">
              <motion.div variants={textVariants} className="title-color text-lg md:text-xl lg:text-2xl md:mb-5 font-light">
                На уровне приложений
              </motion.div>

              <motion.div variants={textVariants} className="text-color main-text font-light mb-10">
                Без ограничения по функционалу. <br /> Коммутация дисковых полок
                на базе шины Serial Attached SCSI (SAS)
              </motion.div>
              <AppLevel />
            </div>
            <div className="section-py px-4 flex justify-center items-center">
              <Shield className="max-w-43.25 max-h-45.5" />
            </div>
          </div>
          <div className="section-py px-4 border-b border-b-black/8 md:dark:border-b-white/14">
            <div className="title-color text-lg md:text-xl lg:text-2xl md:mb-5 font-light">
              На уровне решения
            </div>

            <div className="text-color main-text font-light mb-10">
              Без единой точки отказа. <br /> Комплекс мер, технологий и средств
              направленных на защиту и <br /> равномерное распределение данных
              между путями
            </div>
            <DecisionLevel />
          </div>
          <div className="md:grid md:grid-cols-2 justify-between">
            <div className="section-py px-4">
              <div className="title-color text-lg md:text-xl lg:text-2xl md:mb-5 font-light">
                На уровне площадки
              </div>

              <div className="text-color main-text font-light mb-10">
                Гибкое горизонтальное масштабирование, расширение до зеттабайтов
              </div>
              <SiteLevel />
            </div>
            <div className="section-py px-4 flex justify-center items-center">
              <X8 className="max-w-37.5 max-h-34.5" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
