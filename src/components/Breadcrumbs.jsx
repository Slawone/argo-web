"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"

const ruMap = {
  documents: "Документы",
};

export const Breadcrumbs = ({className}) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav
      className={className}
    >
      <Link href={'/'}>Главная</Link>

      {segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");
        const isLast = index === segments.length - 1;

        const label = ruMap[segment] || decodeURIComponent(segment);

        return (
          <span className="" key={href}>
            {" / "}
            {isLast ? (
              <span>{label}</span>
            ) : (
              <Link href={href}>{label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};
