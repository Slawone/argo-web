import { Hero, Tabs, News, Info, TextGrid } from "@/sections";
import { textsVariants } from "@/config";

export default function Home() {
  const {textItems1, textItems2} = textsVariants;

  return (
    <>
      <div className="flex items-center justify-center font-sans bg-white dark:bg-black">
        <main className="w-full px-4">
          <News />
          <Hero />
          <Tabs />
          <Info text="Хранение от Терабайтов до Зеттабайтов" />
          <TextGrid items={textItems1} />
          <Info text="Индивидуальность в каждом продукте" />
          <TextGrid items={textItems2} />
          <Info text="Инсталяция в составе решения" />
        </main>
      </div>
    </>
  );
}
