import { Accordian } from "@/components"
import { faqVariants } from "@/config"

export const Faq = () => {
  const { faqStorage } = faqVariants;

  return (
    <section className="border border-black/8 dark:border-white/14 grid md:grid-cols-2">
      <div className="section-py px-4 md:border-r md:border-r-black/8 md:dark:border-white/14">
        <h2 className="text-base md:text-xl lg:text-[28px]font-light uppercase leading-none title-color">Faq</h2>
      </div>
      <div className="">
        <Accordian items={faqStorage} className="" />
      </div>
    </section>
  );
};
