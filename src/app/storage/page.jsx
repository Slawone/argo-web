import { Breadcrumbs } from "@/components";
import { Compound, StorageHero, Info, TextGrid, Faq } from "@/sections";
import { textsVariants } from "@/config";
import { Pools } from "@/ui";

export default function Storage() {
  const { textItems3 } = textsVariants;

  return (
    <>
      <div className="font-sans bg-white dark:bg-black">
        <main className="">
          <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color"/>
          {/* <StorageHero />
          <Compound />
          <Info text="Многоконтроллерность повышает отказоустойчивость" />
          <TextGrid items={textItems3} />
          <Faq /> */}
          <Pools />
        </main>
      </div>
    </>
  );
}