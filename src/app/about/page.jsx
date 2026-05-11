import { Breadcrumbs } from "@/components";
import { AboutHero } from "@/sections";


export default function Storage() {

  return (
    <>
      <main className="font-sans bg-white dark:bg-black">
        <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
        <AboutHero />
      </main>
    </>
  );
}
