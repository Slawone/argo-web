import { cn } from "@/utils";
import { filesMarkup } from "./filesMarkup";

export const S3Files = ({ label, className, children }) => (
  <div className={cn("s3-files-wrap relative mx-auto w-full max-w-135 [container-type:inline-size]", className)}>
    <svg
      viewBox="0 0 540 313"
      fill="none"
      role="img"
      aria-label={label}
      className="s3-files block h-auto w-full"
      dangerouslySetInnerHTML={{ __html: filesMarkup }}
    />
    {children}
  </div>
);
