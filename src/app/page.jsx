"use client";

import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { textsVariants } from "@/config";
import { Hero, Tabs, News, Info, TextGrid, SmallTextGrid } from "@/sections";
import { EcoSystem } from "@/ui/svg/EcoSystem";
import { WebStorage } from "@/ui/svg/WebStorage";

export default function Home() {
  const { containerVariants, itemVariants, textVariants, imageVariants } =
    motionVariants;
  const { textItems1, textItems2 } = textsVariants;

  return (
    <>
      <div className="flex items-center justify-center font-sans bg-white dark:bg-black">
        <main className="w-full px-4">
          <News />
          <Hero />
          <Tabs />
          <Info text="Хранение от Терабайтов до Зеттабайтов" />
          <motion.section variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-color section-border max-w-7xl mx-auto grid md:grid-cols-2"
          >
            <div className="py-5 px-4 md:border-r border-black/8 dark:border-white/14 md:py-10 px-6">
              <motion.div variants={textVariants} className="text-sm mb-2">Широкий портфель</motion.div>
              <motion.p variants={textVariants} className="md:mb-5">
                <span className="title-color">Экосистема</span> ИТ-решений для хранения, защиты и управления данными. Продукты <span className="title-color">ARGO.TECH</span> создаются командой, которая с 2016 года работает с инфраструктурой, понимает задачи инженеров и помогает повышать отказоустойчивость и стабильность систем.
              </motion.p>
              <EcoSystem className='w-full' />
            </div>
            <div className="py-5 px-4 md:py-10 px-6">
              <motion.div variants={textVariants} className="text-sm mb-2">Безопасная разработка и защита данных</motion.div>
              <motion.p variants={textVariants} className="md:mb-5">
                <span className="title-color">Более 10 лет</span> лет создаём средства информационной безопасности. ARGO.TECH лицензирована ФСТЭК России (Л050-00107-00/00581308 от 13.08.2021), что подтверждает соответствие требованиям.
              </motion.p>
              <motion.div variants={imageVariants}>
                <WebStorage className='w-full' />
              </motion.div>
            </div>
          </motion.section>
          <TextGrid items={textItems1} />
          <Info text="Индивидуальность в каждом продукте" />
          <TextGrid items={textItems2} />
          <Info text="Инсталяция в составе решения" />
          <SmallTextGrid />
        </main>
      </div>
    </>
  );
}
