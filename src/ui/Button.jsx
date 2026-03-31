import { cn } from "@/utils";

const variants = {
  primary: "bg-[#171717] dark:bg-[#ededed] border-transparent text-white dark:text-[#0a0a0a] hover:bg-[#383838] dark:hover:bg-[#ccc]",
  secondary: "border-black/8 text-[#0a0a0a] dark:text-white hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]",
  danger: "",
};

export const Button = ({
  children,
  variant = "primary",
  className,
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        "px-4 py-1 md:px-6 md:py-2 flex items-center justify-center gap-2 rounded-full border border-solid font-sans cursor-pointer md:hover:scale-110 transition-all",
        variants[variant],
        disabled && "opacity-50, cursor-not-allowed",
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}