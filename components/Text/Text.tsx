import { cn } from "@/lib/utils";
import { type TextProps } from "./types";

export function Text({ size = "md", children, className }: TextProps) {
  return (
    <p
      className={cn(
        "text-theme leading-relaxed",
        {
          "text-2xs": size === "xs",
          "text-xs": size === "sm",
          "text-sm": size === "md",
          "text-base": size === "lg",
        },
        className
      )}
    >
      {children}
    </p>
  );
}
