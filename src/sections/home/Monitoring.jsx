"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { Button, MonitoringStat, Schedule, TopServices } from "@/ui";
import { OrderForm } from "@/components";

export const Monitoring = () => {
  const { containerVariants, itemVariants, textVariants, imageVariants } =
    motionVariants;;

  const [formOpen, setformOpen] = useState(false);

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative page-container section-border section-py md:h-192.5 font-sans font-light main-text"
    >
      <div className="mb-5 pt-5 md:pt-10 pl-4 relative z-10">
        <motion.h2
          variants={textVariants}
          className="text-center md:text-left title-color mb-5 text-base md:text-xl lg:text-[28px]"
        >
          Мониторинг от оборудования до сервисов
        </motion.h2>
        <motion.p
          variants={textVariants}
          className="text-center md:text-left text-color max-w-155 mb-10 pr-4"
        >
          <span className="title-color">MONITORING</span>{" "}
          <span className="title-color">
            собирает данные в реальном времени
          </span>
          , анализирует данные и прогнозирует нагрузку. Управляйте
          производительностью и снижайте до 25% затрат на обслуживание без риска
          для сервисов.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center md:flex-row gap-4"
        >
          {/* <LinkAsButton href="#" className="pointer-events-none">
            Смотреть презентацию
          </LinkAsButton> */}
          <Button variant="secondary" onClick={() => setformOpen(true)} >
            Связаться c командой
          </Button>
        </motion.div>
      </div>
      <Schedule className="hidden md:block absolute bottom-30 z-5 max-w-full" />
      <motion.div
        variants={imageVariants}
        className="hidden md:block absolute bottom-0 right-0 w-1/2 h-1/4 md:h-2/6 lg:h-1/2"
      >
        <MonitoringStat className="absolute left-0 bottom-0 w-30 h-25 md:w-40 md:h-40 md:bottom-15 lg:w-50 lg:h-50" />
        <TopServices className="absolute right-5 top-0 w-25 h-20 md:w-40 md:h-40 lg:right-25 lg:w-50 lg:h-50" />
      </motion.div>
      <OrderForm isOpen={formOpen} onClose={() => setformOpen(false)} />
    </motion.section>
  );
};
