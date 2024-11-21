import { cn } from '@/lib/utils';
import Image from 'next/image';

export interface ToolCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  className?: string;
}

export function ToolCard({
  title,
  description,
  link,
  image,
  className,
}: ToolCardProps) {
  return (
    <a
      href={link}
      className={cn(
        'my-6 block rounded-2xl border-[0.5px] border-neutral-500',
        className,
      )}
      target="_blank"
    >
      <div className="w-full rounded-t-2xl bg-neutral-800 py-8 text-center">
        <Image
          className="mx-auto max-w-[80px] rounded-2xl brightness-90 contrast-125 transition delay-100 duration-300 ease-in hover:contrast-100"
          src={image}
          alt={title}
          width={80}
          height={80}
        />
      </div>
      <div className="p-8 py-10">
        <h1 className="mb-1 font-bold">{title}</h1>
        <p className="text-neutral-400">{description}</p>
      </div>
    </a>
  );
}
