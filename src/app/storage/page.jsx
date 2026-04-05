import { Breadcrumbs } from "@/components";
import { Compound, StorageHero, Info, TextGrid, Faq } from "@/sections";
import { textsVariants } from "@/config";

export default function Storage() {
  const { textItems3 } = textsVariants;

  return (
    <>
      <div className="flex items-center justify-center font-sans bg-white dark:bg-black">
        <main className="page-container">
          <Breadcrumbs className="pt-2 mb-5 font-light text-color"/>
          <StorageHero />
          <Compound />
          <Info text="Многоконтроллерность повышает отказоустойчивость" />
          <TextGrid items={textItems3} />
          <Faq />
        </main>
      </div>
    </>
  );
}