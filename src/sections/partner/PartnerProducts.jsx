"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/ui";
import { motionVariants } from "@/config";
import { cn } from "@/utils";

export const PartnerProducts = ({ products, minprom, buttonClassName, className }) => {
  const { containerVariants, textVariants } = motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn("page-container font-sans font-light", className)}
    >
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-9.5">
        {products.map((product, index) => {
          const alt = product.soon
            ? ""
            : [product.title, product.model].filter(Boolean).join(" ");
          const imageClassName = "w-full h-auto aspect-896/412 object-contain";

          return (
            <motion.li
              key={index}
              variants={textVariants}
              className="flex flex-col border main-border"
            >
              <div className="flex flex-col gap-5 px-4 py-5 md:px-9 border-b main-border">
                <div className="h-8.25">
                  {product.minprom && (
                    <>
                      <Image
                        src={minprom.light}
                        width={134}
                        height={33}
                        alt="Минпромторг России"
                        className="dark:hidden"
                      />
                      <Image
                        src={minprom.dark}
                        width={134}
                        height={33}
                        alt="Минпромторг России"
                        className="hidden dark:block"
                      />
                    </>
                  )}
                </div>
                <Image
                  src={product.image.light}
                  width={896}
                  height={412}
                  alt={alt}
                  className={`dark:hidden ${imageClassName}`}
                />
                <Image
                  src={product.image.dark}
                  width={896}
                  height={412}
                  alt={alt}
                  className={`hidden dark:block ${imageClassName}`}
                />
              </div>
              <div className="flex flex-1 flex-col items-start justify-between gap-5 px-4 py-6 md:px-9 md:min-h-50">
                {product.soon ? (
                  <p className="text-color main-text">Скоро</p>
                ) : (
                  <>
                    <h3 className="text-color text-base md:text-lg lg:text-xl leading-6 lg:leading-6.25 whitespace-pre-line xl:whitespace-pre">
                      {product.title}
                      {product.model && (
                        <>
                          <br />
                          {product.model}
                        </>
                      )}
                    </h3>
                    {product.href ? (
                      <Link
                        href={product.href}
                        className={`button button-secondary ${buttonClassName} flex-center`}
                      >
                        Подробнее
                      </Link>
                    ) : (
                      <Button variant="secondary" className={buttonClassName} disabled>
                        Подробнее
                      </Button>
                    )}
                  </>
                )}
              </div>
            </motion.li>
          );
        })}
      </ul>
    </motion.section>
  );
};
