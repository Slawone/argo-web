"use client";

import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { Active, AiArgo } from "@/ui/svg";

export const Union = () => {
  const { containerVariants, textVariants } = motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section-border text-color font-sans px-4 grid md:grid-cols-[7fr_5fr] items-stretch"
    >
      <div className="py-5 md:py-10 md:pr-4 md:border-r md:border-r-black/8 md:dark:border-r-white/14 h-full flex flex-col  justify-end">
        <div className="mb-5">
          <Active className="w-full h-auto" />
        </div>
        <p className="text-sm md:text-base lg:text-lg font-light leading-6">
          <span className="title-color">Мы объединяем</span> системы хранения
          данных с аналитикой и автоматизированным управлением, чтобы упростить
          эксплуатацию и повысить эффективность инфраструктуры. Решение
          поддерживает масштабирование под нагрузку и обеспечивает стабильную
          работу сервисов.
        </p>
      </div>

      <div className="py-5 md:py-10  h-full flex flex-col md:pl-4">
        <div className="relative flex items-center justify-center mb-5">
          <AiArgo className="w-auto h-42.5 md:h-60" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-lanier-to-t from-black/50 to-transparent pointer-events-none"></div>
        </div>
        <p className="text-sm md:text-base lg:text-lg font-light leading-6">
          Решения соответствуют требованиям ФСТЭК, ФЗ-152 и ISO. Поддерживаются
          пилотное и защищённое развертывание, контроль доступа (RBAC, MFA),
          моделирование угроз и управление безопасностью.
        </p>
      </div>
    </motion.section>
  );
};
