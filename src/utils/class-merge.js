import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  const classNames = twMerge(clsx(...inputs));
  return classNames || undefined; // Return undefined when classNames is empty to avoid rendering the class attribute.
}
