"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buildBreadcrumbJsonLd } from "@/lib/jsonLd";

const ruMap = {
  docs: "Документы",
  storage: "Хранение",
  partners: "Партнеры",
  about: "О компании",
  documentation: "Документация",
  blog: "Блог",
  s3: "S3",
  monitoring: "Мониторинг",
  ai: "ИИ",
};

export const Breadcrumbs = ({ className, lastLabel }) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const labelFor = (segment, index) =>
    index === segments.length - 1 && lastLabel
      ? lastLabel
      : ruMap[segment] || decodeURIComponent(segment);

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { href: "/", label: "Главная" },
    ...segments.map((segment, index) => ({
      href: "/" + segments.slice(0, index + 1).join("/"),
      label: labelFor(segment, index),
    })),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav className={className}>
        <Link href={"/"} className="hover:text-black dark:hover:text-white">
          Главная
        </Link>

        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;
          const label = labelFor(segment, index);

          return (
            <span className="hover:text-black dark:hover:text-white" key={href}>
              {" / "}
              {isLast ? <span>{label}</span> : <Link href={href}>{label}</Link>}
            </span>
          );
        })}
      </nav>
    </>
  );
};
