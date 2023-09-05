import { cn } from "@/lib/utils";

interface SectionVariantProps {
  children: React.ReactNode;
  variant?: boolean;
  spaceY?: boolean;
}

export function SectionVariant({
  children,
  variant,
  spaceY,
}: SectionVariantProps) {
  return (
    <div
      className={cn("w-full h-auto", {
        "bg-neutral-950/60": variant,
        "pb-20 pt-10": spaceY,
      })}
    >
      {children}
    </div>
  );
}
