import Image from "next/image";
import { cn } from "@/utils";

export const News = () => {
  return (
    <section className="section-py">
      <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-5">
        <div className="main-text accent-color uppercase border rounded-full px-4 py-0.5 md:px-4 md:py-1 lg:px-5">New</div>
        <div className="text-color main-text">Мы обновляем сайт. Следите за новостями:</div>
        <a 
          className={cn(
            "main-text button button-primary flex-center",
          )}
          href="https://t.me/argo_technology_ist"
          target="_blank"
        >
          <Image
            className={cn(
              "invert dark:invert-0",
            )}
            src="/tg.svg"
            alt=""
            width={18}
            height={18}
            priority
          />
          <span>ARGO.TECH</span>
        </a>
      </div>
    </section>
  )
}
