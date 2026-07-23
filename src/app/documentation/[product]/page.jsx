import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components";
import { docsProducts } from "@/config";
import { getDocsArticles } from "@/lib/mdx";
import { DocsExplorer } from "@/sections/documentation/DocsExplorer";

export function generateStaticParams() {
  return docsProducts.map((product) => ({ product: product.slug }));
}

export async function generateMetadata({ params }) {
  const { product: productSlug } = await params;
  const product = docsProducts.find((item) => item.slug === productSlug);
  if (!product) return {};

  return {
    title: `Документация ${product.label} | ARGO.TECH`,
    description: product.description,
  };
}

export default async function ProductDocsPage({ params }) {
  const { product: productSlug } = await params;
  const product = docsProducts.find((item) => item.slug === productSlug);
  if (!product) notFound();

  const articles = await getDocsArticles(productSlug);

  return (
    <section className="font-sans section-py bg-white dark:bg-black">
      <div className="page-container">
        <Breadcrumbs className="mb-5 font-light text-color" />
        <h1 className="text-[20px] md:text-[45px] uppercase title-color font-medium mb-7.5">
          Документация {product.label}
        </h1>

        {articles.length === 0 ? (
          <p className="font-light text-color">
            Статьи по этому продукту пока не опубликованы.
          </p>
        ) : (
          <DocsExplorer articles={articles} />
        )}
      </div>
    </section>
  );
}
