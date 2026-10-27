import { FileText, ChevronRight } from "lucide-react";
import { cn } from "@/utils";

export const DocumentList = ({ items, itemClassName }) => {
  return (
    <ul className="font-light border border-black/8 dark:border-white/14 rounded-2xl overflow-hidden">
      {items.map((item) => {
        const content = (
          <>
            <span className="flex items-center gap-2.5">
              <FileText width={20} height={20} className="shrink-0" />
              {item.title}
            </span>
            {!item.plain && (
              <ChevronRight className={cn("shrink-0", !item.href && "opacity-30")} />
            )}
          </>
        );
        const rowClassName = cn(
          "flex items-center justify-between gap-4 text-color md:text-[18px] px-4 py-5",
          itemClassName,
        );

        return (
          <li
            key={item.title}
            className="border-b border-b-black/8 dark:border-b-white/14 last:border-b-0"
          >
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  rowClassName,
                  "transition-colors hover:bg-black/4 dark:hover:bg-white/6 hover:text-black dark:hover:text-white",
                )}
              >
                {content}
              </a>
            ) : (
              <div className={rowClassName}>{content}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
};
