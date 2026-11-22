import Image from "next/image";
import Link from "next/link";
import { TechnologyLines } from "@/components/TechnologyLines";
import { PartnerSplit } from "@/sections/partner/PartnerSplit";

const CopiesDiagram = () => (
  <div className="relative aspect-[874/547] w-full max-w-218.5 shrink-0">
    <Image
      src="/dittoblocks/copies-light.png"
      width={1436}
      height={612}
      alt="Копии блока данных в тракте хранения: SAS 1 и SAS 2, контроллер SAS-C и носитель HDD с тремя копиями блока. Общая линия питания POWER."
      className="absolute left-[8.9245%] top-[21.9378%] h-auto w-[82.151%] dark:hidden"
    />
    <Image
      src="/dittoblocks/copies-dark.png"
      width={1436}
      height={612}
      alt="Копии блока данных в тракте хранения: SAS 1 и SAS 2, контроллер SAS-C и носитель HDD с тремя копиями блока. Общая линия питания POWER."
      className="absolute left-[8.9245%] top-[21.9378%] hidden h-auto w-[82.151%] dark:block"
    />
  </div>
);

export const DittoBlocksDetails = () => (
  <div className="pt-10 md:pt-23.5 pb-2.5" data-ditto-details>
    <section
      aria-label="Схема копий блоков"
      className="page-container grid border-[1.4px] border-[#d4d4d4] md:grid-cols-[22fr_78fr] xl:grid-cols-[280px_minmax(0,1fr)] dark:border-[#1d2332]"
    >
      <h2 className="border-b-[1.4px] border-[#d4d4d4] px-4 py-8 text-xl font-normal text-[#1f1f1f] md:border-r-[1.4px] md:border-b-0 md:p-12.5 md:text-[28px] md:leading-[33.2px] dark:border-[#1d2332] dark:text-[#fffff1]">
        COPIES
      </h2>
      <div className="flex min-w-0 items-center justify-center px-4 pt-5 pb-8 md:h-121 md:px-9.25 md:pb-17.5">
        <CopiesDiagram />
      </div>
    </section>
    <div className="pt-8 md:pt-12.75 [&_.main-border]:border-[#d4d4d4] dark:[&_.main-border]:border-[#1d2332]">
      <PartnerSplit
        hidePlus
        gridClassName="md:grid-cols-[747fr_523fr] xl:min-h-76.75"
        leftClassName="flex min-w-0 items-center"
        rightClassName="min-w-0 xl:pr-4"
        left={
          <p className="font-normal text-[#1f1f1f] xl:text-[28px] xl:leading-[33.2px] dark:text-[#fffff1]">
            <TechnologyLines
              lines={[
                "Ditto blocks в ISCRA STORAGE по умолчанию применяются к",
                "метаданным файловой системы, а не к пользовательским",
                "данным. Пользовательские данные по умолчанию хранятся в",
                "одной копии, если не включить свойство Copies вручную.",
              ]}
            />
          </p>
        }
        right={
          <div className="flex h-full flex-col gap-7.5">
            <p className="font-light text-[#1f1f1f] xl:text-xl xl:leading-[33.2px] dark:text-[#a1a1a1]">
              <TechnologyLines
                lines={[
                  "Ditto blocks работают независимо от кэша. Даже если блок",
                  "метаданных закэширован в L2ARC, Native ZFS всё равно хранит",
                  "его несколько копий на дисках (ditto blocks). Если при чтении",
                  "из L2ARC обнаружится повреждение, Native ZFS возьмёт",
                  "корректную копию с диска и исправит повреждённый блок.",
                ]}
              />
            </p>
            <Link
              href="/technology/arc/"
              className="inline-flex min-h-11 w-full max-w-62.5 items-center justify-center gap-2.5 self-start rounded-lg border border-[#1f1f1f] bg-[#ededed] px-4 py-2 text-base font-light text-black dark:border-[#fffff1]"
            >
              Adaptive Replacement Cache
              <Image
                src="/dittoblocks/button-light.svg"
                width={18.6992}
                height={18.6992}
                alt=""
                className="shrink-0 dark:hidden"
              />
              <Image
                src="/raid-z/button.svg"
                width={18.6992}
                height={18.6992}
                alt=""
                className="hidden shrink-0 dark:block"
              />
            </Link>
          </div>
        }
      />
    </div>
  </div>
);
