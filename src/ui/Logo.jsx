import Image from "next/image";
import { cn } from "@/utils";

export const Logo = ({ className = "" }) => {
  return (
    <Image
      className={cn(
        "dark:invert cursor-pointer",
        className,
      )}
      src="/logo.svg"
      alt="Логотип ARGO.TECH"
      width={150}
      height={20}
      priority
    />
  )
}