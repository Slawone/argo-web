import { Hero, Tabs, News, DataSecurity, Monitoring, Info, TextGrid, SmallTextGrid, Support, AboutSection } from "@/sections";
import { textsVariants } from "@/config";

export default function Home() {
  const { textItems1, textItems2 } = textsVariants;

  return (
    <>
      <div className="flex items-center justify-center font-sans bg-white dark:bg-black">
        <main className="page-container">
          <News />
          <Hero />
          <Tabs />
          <Info text="Хранение от Терабайтов до Зеттабайтов" />
          {/* <AboutSection /> */}
          {/* <DataSecurity /> */}
          {/* <Monitoring /> */}
          {/* <TextGrid items={textItems1} /> */}
          {/* <Support /> */}
          <Info text="Индивидуальность в каждом продукте" />
          {/* <TextGrid items={textItems2} /> */}
          {/* active */}
          <Info text="Инсталяция в составе решения" />
          {/* world */}
          <SmallTextGrid />
          {/* form */}
        </main>
      </div>
    </>
  );
}
