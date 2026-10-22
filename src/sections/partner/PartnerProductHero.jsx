"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionVariants } from "@/config";

export const PartnerProductHero = ({
  title,
  subtitle,
  image,
  imageLight,
  serverOffset = { x: 0, y: 83 },
}) => {
  const { containerVariants, textVariants, imageVariants } = motionVariants;
  const serverWidth = image.width - serverOffset.x;
  const imageStyle = {
    "--hero-w": `${(image.width / serverWidth) * 100}%`,
    "--hero-ml": `${(-serverOffset.x / serverWidth) * 100}%`,
    "--hero-mt": `${(-serverOffset.y / serverWidth) * 100}%`,
  };
  const imageClassName =
    "w-full h-auto md:max-w-none md:w-(--hero-w) md:ml-(--hero-ml) md:mt-(--hero-mt)";

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="overflow-x-clip font-sans"
    >
      <div className="page-container">
        <div className="grid md:grid-cols-2 items-start gap-8 px-4 py-10 md:py-20">
          <motion.div variants={imageVariants} className="order-2 md:order-1">
            <Image
              src={imageLight.src}
              width={imageLight.width}
              height={imageLight.height}
              alt={title}
              priority
              style={imageStyle}
              className={`dark:hidden ${imageClassName}`}
            />
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={title}
              priority
              style={imageStyle}
              className={`hidden dark:block ${imageClassName}`}
            />
          </motion.div>
          <div className="order-1 md:order-2 flex flex-col gap-5 md:gap-8 md:text-right xl:pr-5.75">
            <motion.h1
              variants={textVariants}
              className="title-color font-medium uppercase whitespace-pre-line leading-[1.44] text-2xl md:text-[32px] lg:text-[40px]"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={textVariants}
              className="title-color uppercase whitespace-pre-line text-sm leading-5 md:text-base md:leading-6 lg:text-lg lg:leading-7.5 xl:text-[20.5px] xl:leading-normal"
            >
              {subtitle}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
