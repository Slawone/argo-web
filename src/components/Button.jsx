export function Button({
  className = "",
  variant = "default",
  size = "md",
  children,
  ...props
}) {
  const variantStyles = {
    default: "bg-white text-black hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      variant={variant}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}