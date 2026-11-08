"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buildBreadcrumbJsonLd } from "@/lib/jsonLd";

const ruMap = {
  docs: "Документы",
  storage: "Хранение",
  partners: "Партнеры",
  graviton: "Гравитон",
  norsitrans: "Норси Транс",
  iscrastorage: "ISCRA STORAGE",
  s3storage: "S3 STORAGE",
  certification: "Сертификаты",
  technology: "Технологии",
  nfs: "NFS",
  dittoblocks: "Ditto blocks",
  fma: "FMA",
  crow: "C/ROW",
  writableclone: "Writable Clone",
  atomicsnapshot: "Atomic Snapshot",
  arc: "ARC",
  about: "О компании",
  documentation: "Документация",
  blog: "Блог",
  s3: "S3",
  monitoring: "Мониторинг",
  ai: "ИИ",
};

const unlinkedSegments = new Set(["technology"]);

export const Breadcrumbs = ({ className, lastLabel }) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const labelFor = (segment, index) =>
    index === segments.length - 1 && lastLabel
      ? lastLabel
      : ruMap[segment] || decodeURIComponent(segment);

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { href: "/", label: "Главная" },
    ...segments
      .map((segment, index) => ({
        segment,
        href: "/" + segments.slice(0, index + 1).join("/"),
        label: labelFor(segment, index),
      }))
      .filter(({ segment }) => !unlinkedSegments.has(segment)),
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
              {isLast || unlinkedSegments.has(segment) ? (
                <span>{label}</span>
              ) : (
                <Link href={href}>{label}</Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
};
