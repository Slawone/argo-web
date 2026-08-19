import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components";
import { docsProducts } from "@/config";

export const metadata = {
  title: "Документация | ARGO.TECH",
  description:
    "Документация по продуктам ARGO.TECH: ARGO Storage, ARGO S3, ARGO Monitoring и AI-решения.",
};

export default function DocumentationPage() {
  return (
    <section className="font-sans section-py bg-white dark:bg-black">
      <div className="page-container">
        <Breadcrumbs className="mb-5 font-light text-color" />
        <h1 className="text-[20px] md:text-[45px] uppercase title-color font-medium mb-7.5">
          Документация
        </h1>

        <p className="font-light text-[16px] md:text-[18px] text-color mb-7.5">
          Документация по продуктам ARGO.TECH: архитектура, установка и
          эксплуатация. Выберите продукт, чтобы перейти к статьям.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {docsProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/documentation/${product.slug}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-black/8 p-5 transition-colors hover:border-black/20 dark:border-white/14 dark:hover:border-white/30"
            >
              <div>
                <h2 className="title-color text-lg uppercase md:text-xl">
                  {product.label}
                </h2>
                <p className="text-color mt-1 text-sm font-light md:text-base">
                  {product.description}
                </p>
              </div>
              <ArrowRight className="accent-color shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
