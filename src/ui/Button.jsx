import { cn } from "@/utils";

const variants = {
  primary: "button-primary",
  secondary: "button-secondary",
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
        "button",
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