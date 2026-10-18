"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/ui";
import { motionVariants, gravitonVariants } from "@/config";

export const GravitonProducts = () => {
  const { containerVariants, textVariants } = motionVariants;
  const { products } = gravitonVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container py-5 md:py-10 font-sans font-light"
    >
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-9.5">
        {products.map((product, index) => (
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
                      src="/graviton/minprom-light.svg"
                      width={134}
                      height={33}
                      alt="Минпромторг России"
                      className="dark:hidden"
                    />
                    <Image
                      src="/graviton/minprom.svg"
                      width={134}
                      height={33}
                      alt="Минпромторг России"
                      className="hidden dark:block"
                    />
                  </>
                )}
              </div>
              <Image
                src={
                  product.soon
                    ? "/graviton/storage-soon.png"
                    : "/graviton/storage-active.png"
                }
                width={896}
                height={412}
                alt={product.soon ? "" : `${product.title} ${product.model}`}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-1 flex-col items-start justify-between gap-5 px-4 py-6 md:px-9 md:min-h-50">
              {product.soon ? (
                <p className="text-color main-text">Скоро</p>
              ) : (
                <>
                  <h3 className="text-color text-base md:text-lg lg:text-xl leading-6 lg:leading-6.25 whitespace-pre-line xl:whitespace-pre">
                    {product.title}
                    <br />
                    {product.model}
                  </h3>
                  {product.href ? (
                    <Link
                      href={product.href}
                      className="button button-secondary button-graviton flex-center"
                    >
                      Подробнее
                    </Link>
                  ) : (
                    <Button variant="secondary" className="button-graviton" disabled>
                      Подробнее
                    </Button>
                  )}
                </>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};
