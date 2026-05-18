import { PartnersList, PartnersHero, PartnersTech, PartnersDigital } from "@/sections";
import { Breadcrumbs } from "@/components";
import { partnersLogos } from "@/config";

export default function Partners() {
  const { logos1, logos2, logos3 } = partnersLogos;

  return (
    <main className="font-sans bg-white dark:bg-black">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <PartnersHero />
      <PartnersList logos={logos1} />
      <PartnersTech />
      <PartnersList logos={logos2} />
      <PartnersDigital />
      <PartnersList logos={logos3} />
    </main>
  );
}
