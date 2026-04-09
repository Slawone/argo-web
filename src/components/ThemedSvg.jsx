"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemedSvg = ({
  lightSvg,
  darkSvg,
  className = "",
  width = "100%",
  height = "100%",
  ...props
}) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className={className} style={{ width, height }}></div>
  }

  const currentSVG = resolvedTheme === "dark" ? darkSvg : lightSvg;

  if (typeof currentSVG === "function") {
    const SVGComponent = currentSVG;
    return (
      <SVGComponent
        className={className}
        width={width}
        height={height}
        {...props}
      />
    );
  }
};
