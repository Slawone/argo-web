import { cn } from "@/utils";

const Dot = ({ on }) => (
  <span
    className={cn(
      "size-3 rounded-full",
      on ? "bg-[#7129ff]" : "bg-[#d6d6d6] dark:bg-[#464646]",
    )}
  />
);

export const S3Table = ({ head, rows, className }) => (
  <div className={cn("w-full max-w-153.75 overflow-x-auto font-sans", className)}>
    <div className="min-w-96 border main-border rounded-[10px] overflow-hidden">
      <div className="grid grid-cols-[352fr_139fr_125fr] border-b main-border">
        {head.map((cell) => (
          <div
            key={cell}
            className="flex h-12 xl:h-13.5 items-center justify-center border-r main-border last:border-r-0 px-2 text-center text-base xl:text-xl font-normal text-[#1f1f1f] dark:text-[#ededed]"
          >
            {cell}
          </div>
        ))}
      </div>
      {rows.map(([label, ...values]) => (
        <div
          key={label}
          className="grid grid-cols-[352fr_139fr_125fr] border-b main-border last:border-b-0"
        >
          <div className="flex min-h-11.5 items-center border-r main-border px-3.5 text-sm xl:text-xl font-light leading-6 text-color">
            {label}
          </div>
          {values.map((on, index) => (
            <div
              key={index}
              className="flex items-center justify-center border-r main-border last:border-r-0"
            >
              <Dot on={on} />
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);
