import { Accordian } from "@/components"
import { cn } from "@/utils";


export const Faq = ({variants, className, titleClassName = "title-color"}) => {
  return (
    <section className={cn("page-container border border-black/8 dark:border-white/14 grid md:grid-cols-2", className)}>
      <div className="section-py px-4 flex items-center justify-center border-b md:border-b-0 border-black/8 dark:border-white/14 md:border-r md:border-r-black/8 md:dark:border-white/14">
        <h2 className={cn("text-6xl md:text-8xl lg:text-9xl font-light uppercase leading-none", titleClassName)}>Faq</h2>
      </div>
      <div className="">
        <Accordian items={variants} className="" />
      </div>
    </section>
  );
};
