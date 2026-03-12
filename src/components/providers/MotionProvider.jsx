import { MotionConfig } from "framer-motion";

export function MotionProvider({children}) {
  return (
    <MotionConfig reducedMotion="user" transition={{duration: .3, ease: 'easeOut'}}>
      {children}
    </MotionConfig>
  )
}