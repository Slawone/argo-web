"use client";

import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { Button, LinkAsButton, MonitoringStat, Schedule, TopServices } from "@/ui";

export const Monitoring = () => {
  const { containerVariants, itemVariants, textVariants, imageVariants } =
    motionVariants;;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative section-border max-w-7xl mx-auto h-192.5 dark:bg-[url('/hero-bg.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 dark:bg-black/70 z-0"></div>
      <div className="pt-5 md:pt-10 pl-4 relative z-10">
        <motion.h2
          variants={textVariants}
          className="title-color text-4xl md:text-[45px] font-bold leading-10 mb-5"
        >
          Мониторинг от оборудования <br /> до сервисов
        </motion.h2>
        <motion.p
          variants={textVariants}
          className="text-color max-w-155 text-lg md:text-xl leading-7 mb-10"
        >
          <span className="inline-flex items-center gap-1 title-color">
            <svg
              width="26"
              height="12"
              viewBox="0 0 26 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="title-color"
            >
              <path
                d="M13.007 0.000968185C17.1115 0.0490248 20.2899 1.79382 22.4052 3.47453C23.4652 4.3168 24.2765 5.1551 24.8247 5.78723C25.0994 6.10396 25.3092 6.37187 25.4547 6.56464C25.5275 6.66111 25.5845 6.7396 25.6246 6.79621C25.6446 6.82428 25.6609 6.84672 25.6728 6.86388C25.6786 6.87232 25.6839 6.87927 25.6878 6.88493C25.6896 6.88753 25.691 6.89046 25.6923 6.89245L25.6953 6.89546V6.89696L23.139 8.61419L23.1405 8.61569V8.6172C23.1404 8.61704 23.1393 8.61532 23.1375 8.61269C23.1334 8.60674 23.1252 8.59467 23.1135 8.5781C23.0899 8.54496 23.0513 8.49128 22.9977 8.42021C22.8899 8.27745 22.7217 8.06437 22.4969 7.8052C22.0461 7.28536 21.3713 6.58566 20.4895 5.88497C18.7207 4.47966 16.1848 3.11819 12.971 3.08056C9.77457 3.04331 7.174 4.39829 5.32462 5.83234C4.40428 6.54605 3.69036 7.2633 3.21041 7.79918C2.97121 8.06627 2.79285 8.28692 2.67659 8.43525C2.61853 8.50935 2.57617 8.56564 2.55028 8.60066C2.53742 8.61807 2.52792 8.63021 2.52322 8.63675C2.5222 8.63817 2.52082 8.6389 2.52021 8.63975L0 6.8714V6.86989L0.00150371 6.86689C0.00287572 6.86494 0.00566458 6.86349 0.00751853 6.86087C0.0115319 6.85521 0.0163451 6.84696 0.0225556 6.83832C0.0349611 6.82106 0.052609 6.79766 0.0736815 6.76915C0.115954 6.71196 0.176075 6.63224 0.252622 6.53457C0.406148 6.3387 0.628998 6.06699 0.91726 5.74512C1.4929 5.1024 2.33936 4.24983 3.43597 3.39934C5.62136 1.70459 8.88539 -0.0471218 13.007 0.000968185Z"
                fill="#00B6CC"
              />
              <path
                d="M15.9931 8.69872C15.9931 10.4411 14.5807 11.8535 12.8384 11.8535C11.096 11.8535 9.68359 10.4411 9.68359 8.69872C9.68359 6.95639 11.096 5.54395 12.8384 5.54395C14.5807 5.54395 15.9931 6.95639 15.9931 8.69872Z"
                fill="currentColor"
              />
            </svg>
            MONITORING
          </span>{" "}
          <span className="title-color">
            собирает данные в реальном времени
          </span>
          , анализирует данные и прогнозирует нагрузку. Управляйте
          производительностью и снижайте до 25% затрат на обслуживание без риска
          для сервисов.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center gap-4"
        >
          <LinkAsButton href="#">Смотреть презентацию</LinkAsButton>
          <Button variant="secondary">Связаться c командой</Button>
        </motion.div>
      </div>
      <Schedule className="absolute bottom-30 z-5 max-w-full" />
      <motion.div
        variants={imageVariants}
        className="absolute bottom-0 right-0 w-1/2 h-1/4 md:h-2/6 lg:h-1/2"
      >
        <MonitoringStat className="absolute left-0 bottom-0 w-30 h-20 md:w-40 md:h-40 md:bottom-15 lg:w-50 lg:h-50" />
        <TopServices className="absolute right-10 top-0 w-25 h-20 md:w-40 md:h-40 lg:right-25 lg:w-50 lg:h-50" />
      </motion.div>
    </motion.section>
  );
};
