"use client";

import { motion } from "framer-motion";

export function MotionFadeIn({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// "use client";

// import { motion } from "framer-motion";

// export function MotionFadeIn({
//   children,
//   className = "",
//   delay = 0,
//   duration = 0.6,
//   threshold = 0.1,
//   once = true,
// }) {
//   return (
//     <motion.div
//       className={className}
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{
//         amount: threshold, // 0.1 = 10% элемента должно быть видно
//       }}
//       transition={{
//         duration,
//         delay,
//         ease: "easeOut",
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }