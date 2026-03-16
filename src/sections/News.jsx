import Image from "next/image";
import { LinkAsButton } from "@/ui";
import { cn } from "@/utils";

export const News = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 md:flex-row section-py">
      <div className="flex items-center gap-5">
        <span className="text-[12px] md:text-sm text-[#00B6CC] border rounded-full px-4 py-2 uppercase">New</span>
        <span className="text-[12px] md:text-sm font-sans text-color">
          Мы обновляем сайт. Следите за новостями:
        </span>
      </div>
      <LinkAsButton
        href="https://t.me/argo_technology_ist"
      >
        <Image
          className={cn(
            "dark:invert",
          )}
          src="/max.svg"
          alt=""
          width={18}
          height={18}
          priority
        />
        Max
      </LinkAsButton>
    </section>
  )
}