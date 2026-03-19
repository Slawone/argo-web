"use client";

import { motion } from "framer-motion";
import { motionVariants } from "@/config";

export const Schedule = ({ className }) => {
  const {svgVariants, pathVariants} = motionVariants;

  return (
    <motion.svg
      variants={svgVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      width="1280"
      // height="560"
      viewBox="0 0 1280 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="5" cy="554.568" r="5" fill="#002ECC" />
      <circle cx="115.02" cy="554.568" r="5" fill="#0041CB" />
      <circle cx="225.115" cy="445" r="5" fill="#0156CC" />
      <circle cx="337.211" cy="335.468" r="5" fill="#006BCC" />
      <circle cx="448.307" cy="335.468" r="5" fill="#0083CC" />
      <circle cx="557.4" cy="335.468" r="5" fill="#0099CC" />
      <circle cx="650.66" cy="225" r="5" fill="#01A9CB" />
      <circle cx="744.34" cy="114.968" r="5" fill="#09B8CD" />
      <circle cx="892.688" cy="114" r="5" fill="#4EC8D7" />
      <circle cx="1003.78" cy="5" r="5" fill="#79D2DD" />
      <circle cx="1114.88" cy="224" r="5" fill="#BEE2E6" />
      <motion.path
        variants={pathVariants}
        d="M4.00013 554.568H114.482L336.677 334.818H557.582L742.96 114.512H891.163L1003.18 4.7793L1114.48 224.28H1279.97"
        stroke="url(#paint0_linear_122_509)"
        strokeWidth="3"
      />
      <circle cx="1274.97" cy="224" r="5" fill="#EBECEC" />
      <defs>
        <linearGradient
          id="paint0_linear_122_509"
          x1="4"
          y1="554.568"
          x2="1142.14"
          y2="734.788"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0029CC" />
          <stop offset="0.5625" stopColor="#00B6CC" />
          <stop offset="1" stopColor="#EDEDED" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};
