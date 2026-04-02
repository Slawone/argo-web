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
      className="section-border text-color font-sans px-4 grid md:grid-cols-[7fr_5fr] items-center"
    >
      <div className="py-5 md:py-10 md:pr-4 md:border-r md:border-r-black/8 md:dark:border-r-white/14 h-65 lg:h-120">
        <Active className="w-full h-auto mb-5" />
        <p className="text-center text-sm md:text-base lg:text-lg font-light leading-6">
          <span className="title-color">Мы объединяем</span> системы хранения
          данных с аналитикой и автоматизированным управлением, чтобы упростить
          эксплуатацию и повысить эффективность инфраструктуры. Решение
          поддерживает масштабирование под нагрузку и обеспечивает стабильную
          работу сервисов.
        </p>
      </div>
      <div className="py-5 md:py-10 h-65 md:h-65 lg:h-120 flex flex-col">
        <AiArgo className="w-full h-auto mb-5 grow-0" />
        <p className="text-center text-sm md:text-base lg:text-lg font-light leading-6">
          Решения соответствуют требованиям ФСТЭК, ФЗ-152 и ISO. Поддерживаются
          пилотное и защищённое развертывание, контроль доступа (RBAC, MFA),
          моделирование угроз и управление безопасностью.
        </p>
      </div>
    </motion.section>
  );
};
