import { Breadcrumbs } from "@/components";
import { AboutHero, Faq } from "@/sections";
import { faqVariants } from "@/config"


export default function Storage() {
  const { faqAbout } = faqVariants;

  return (
    <>
      <main className="font-sans bg-white dark:bg-black">
        <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
        <AboutHero />
        <Faq variants={faqAbout} />
      </main>
    </>
  );
}
