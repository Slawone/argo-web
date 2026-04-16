import { Breadcrumbs } from "@/components";
import {
  Compound,
  Control,
  StorageHero,
  Safety,
  Info,
  TextGrid,
  Controllers,
  Faq,
  Properties,
} from "@/sections";
import { textsVariants } from "@/config";

export default function Storage() {
  const { textItems3 } = textsVariants;

  return (
    <>
      <main className="font-sans bg-white dark:bg-black">
        <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
        <StorageHero />
        <Compound />
        <Control />
        <Info text="Многоконтроллерность повышает отказоустойчивость" />
        <TextGrid items={textItems3} />
        <Safety />
        <Controllers />
        <Properties />
        <Info text="Данные - опора цифрового сувернитета" />
        <Faq />
      </main>
    </>
  );
}
