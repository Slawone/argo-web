"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { useOrderForm } from "@/components";
import { Button } from "@/ui";

const IMAGE_WIDTH = 1284;
const IMAGE_HEIGHT = 648;

const neonRects = [
  [568, 44, 728, 124],
  [0, 124, 153, 284],
  [254, 100, 346, 228],
  [126, 356, 280, 468],
  [1142, 4, 1284, 178],
  [946, 184, 1040, 304],
  [1136, 250, 1284, 384],
  [458, 538, 733, 648],
  [858, 510, 1033, 556],
];

const contactClassName =
  "border border-black bg-white text-[#1f1f1f] hover:bg-black/4 dark:border-0 dark:bg-[#ededed] dark:text-[#0a0a0a] dark:hover:bg-[#ccc]";
const presentationClassName =
  "border border-black bg-[#0a0a0a] text-[#ededed] hover:bg-[#1a1a1a] dark:border-white/10";

export const S3Hero = ({ title, alt, source = "Связаться", presentationHref }) => {
  const { containerVariants, textVariants } = motionVariants;
  const { open } = useOrderForm();

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container font-sans -mb-[1.5px]"
    >
      <div className="relative isolate">
        <Image
          src="/s3/hero-base-light.webp"
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          alt={alt}
          priority
          className="dark:hidden w-[101.1%] max-w-none -ml-[1.1%] h-auto"
        />
        <Image
          src="/s3/hero-base-dark.webp"
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          alt={alt}
          priority
          className="hidden dark:block w-[101.1%] max-w-none -ml-[1.1%] h-auto"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-1.1%] top-0 w-[101.1%] aspect-1284/648"
        >
          {neonRects.map(([x0, y0, x1, y1], index) => {
            const width = x1 - x0;
            const height = y1 - y0;
            const style = {
              left: `${(x0 / IMAGE_WIDTH) * 100}%`,
              top: `${(y0 / IMAGE_HEIGHT) * 100}%`,
              width: `${(width / IMAGE_WIDTH) * 100}%`,
              height: `${(height / IMAGE_HEIGHT) * 100}%`,
            };
            const imageStyle = {
              width: `${(IMAGE_WIDTH / width) * 100}%`,
              left: `${-(x0 / width) * 100}%`,
              top: `${-(y0 / height) * 100}%`,
            };

            return (
              <div key={index} style={style} className="absolute overflow-hidden">
                <div className="absolute inset-0 mix-blend-multiply dark:hidden">
                  <Image
                    src="/s3/hero-light.webp"
                    width={IMAGE_WIDTH}
                    height={IMAGE_HEIGHT}
                    alt=""
                    style={imageStyle}
                    className="absolute max-w-none h-auto"
                  />
                </div>
                <div className="absolute inset-0 mix-blend-screen hidden dark:block">
                  <Image
                    src="/s3/hero-dark.webp"
                    width={IMAGE_WIDTH}
                    height={IMAGE_HEIGHT}
                    alt=""
                    style={imageStyle}
                    className="absolute max-w-none h-auto"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-4 pt-6 pb-8 flex flex-col items-center gap-5 text-center lg:absolute lg:inset-x-0 lg:top-[51%] lg:p-0 lg:gap-6.5">
          <motion.h1
            variants={textVariants}
            className="text-[#1f1f1f] dark:text-[#ededed] font-extralight text-base md:text-lg xl:text-[18px] leading-6 xl:leading-6.75"
          >
            {title}
          </motion.h1>
          <motion.div variants={textVariants} className="flex items-center gap-5">
            <Button
              variant={null}
              className={contactClassName}
              onClick={() => open(source)}
            >
              Связаться
            </Button>
            {presentationHref ? (
              <a
                href={presentationHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`button flex-center ${presentationClassName}`}
              >
                Презентация
              </a>
            ) : (
              <Button variant={null} className={presentationClassName} disabled>
                Презентация
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
