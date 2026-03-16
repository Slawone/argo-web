"use client";

import { Plus } from 'lucide-react';
import { motion } from "framer-motion";
import { motionVariants } from "@/config";

export const SmallTextGrid = ({ items }) => {
  const { containerVariants, textVariants } = motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="section-border max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-3 place-items-center font-sans text-color relative">
        <motion.div
          variants={textVariants}
          className="px-5 h-60 md:h-75 lg:h-85 xl:h-70 flex flex-col justify-center md:pt-10 md:justify-start border-b border-black/8 dark:border-white/14 md:border-b-0 md:border-r text-sm md:text-md lg:text-lg"
        >
          <span className="title-color">
            Опыт внедрения в региональных ИТ-инфраструктурах.
          </span>{" "}
          Наши решения развёрнуты в разных регионах России, включая удалённые
          площадки и новые территории. Обеспечиваем стабильность инфраструктуры
          и поддержку проектов даже при ограниченных ресурсах.
        </motion.div>
        <motion.div
          variants={textVariants}
          className="px-5 h-60 md:h-75 lg:h-85 xl:h-70 flex flex-col justify-center md:pt-10 md:justify-start border-b border-black/8 dark:border-white/14 md:border-b-0 md:border-r text-sm md:text-md lg:text-lg"
        >
          <span className="title-color">
            Решения для проектов любой сложности.
          </span>{" "}
          Наши продукты разворачиваются в корпоративных инфраструктурах,
          дата-центрах и на стратегических объектах. Настраиваем конфигурации
          под нагрузки и условия эксплуатации.
        </motion.div>
        <motion.div
          variants={textVariants}
          className="px-5 h-60 md:h-75 lg:h-85 xl:h-70 flex flex-col justify-center md:pt-10 md:justify-start border-b border-black/8 dark:border-white/14 md:border-b-0 text-sm md:text-md lg:text-lg"
        >
          <span className="title-color">
            Для инфраструктуры с повышенными требованиями.
          </span>{" "}
          Мы адаптируем решения под условия эксплуатации и требования
          безопасности критичной инфраструктуры, обеспечивая стабильную работу
          ИТ-систем.
        </motion.div>
        <Plus className="absolute text-color right-[-12] bottom-[-12]" />
      </div>
    </motion.section>
  );
};