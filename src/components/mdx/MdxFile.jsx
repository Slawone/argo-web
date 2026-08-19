import { FileText, Download } from "lucide-react";

export const MdxFile = ({ href, name, size }) => (
  <a
    href={href}
    download
    className="my-6 flex items-center justify-between gap-4 rounded-2xl border border-black/8 px-5 py-4 no-underline transition-colors hover:border-black/20 dark:border-white/14 dark:hover:border-white/30"
  >
    <span className="text-color flex items-center gap-2.5">
      <FileText width={20} height={20} className="shrink-0" />
      <span className="title-color font-light">
        {name}
        {size && <span className="text-color"> ({size})</span>}
      </span>
    </span>
    <Download width={20} height={20} className="text-color shrink-0" />
  </a>
);