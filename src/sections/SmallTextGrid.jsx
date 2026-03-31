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
      viewport={{ once: true }}
      className="section-border"
    >
      <div className="grid md:grid-cols-3 place-items-start font-sans text-color main-text relative">
        <motion.div
          variants={textVariants}
          className="flex flex-col gap-1 md:gap-2 px-4 py-4 md:border-b border-black/8 dark:border-white/14 md:h-55 xl:h-50"
        >
          <h4 className="title-color">
            Опыт внедрения в региональных ИТ-инфраструктурах.
          </h4>
          Наши решения развёрнуты в разных регионах России, включая удалённые
          площадки и новые территории, в том числе Республике Крым.
        </motion.div>
        <motion.div
          variants={textVariants}
          className="flex flex-col gap-1 md:gap-2 px-4 py-4 border-t border-b border-black/8 dark:border-white/14 md:border-t-0 md:border-r md:border-l md:h-55 xl:h-50"
        >
          <h4 className="title-color">Решения для проектов любой сложности.</h4>{" "}
          Наши продукты разворачиваются в корпоративных инфраструктурах,
          дата-центрах и на стратегических объектах. Настраиваем конфигурации
          под нагрузки и условия эксплуатации.
        </motion.div>
        <motion.div
          variants={textVariants}
          className="flex flex-col gap-1 md:gap-2 px-4 py-4 border-b border-black/8 dark:border-white/14 md:h-55 xl:h-50"
        >
          <h4 className="title-color">
            Для инфраструктуры с повышенными требованиями.
          </h4>{" "}
          Мы адаптируем решения под условия эксплуатации и требования
          безопасности критичной инфраструктуры, обеспечивая стабильную работу
          ИТ-систем.
        </motion.div>
        <Plus className="absolute text-color right-[-12] bottom-[-12]" />
      </div>
    </motion.section>
  );
};
