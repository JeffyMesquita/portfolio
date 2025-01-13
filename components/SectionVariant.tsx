import { cn } from '@/lib/utils';

interface SectionVariantProps {
  children: React.ReactNode;
  variant?: boolean;
  spaceY?: boolean;
  className?: string;
}

export function SectionVariant({
  children,
  variant,
  spaceY,
  className,
}: SectionVariantProps) {
  return (
    <div
      className={cn(
        'h-auto w-full',
        {
          'bg-neutral-950/60': variant,
          'pb-20 pt-10': spaceY,
        },
        className,
      )}
    >
      {children}
    </div>
  );
}
