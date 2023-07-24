import { cn } from "@/lib/utils";
import Image from "next/image";

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
        "border-[0.5px] border-neutral-500 block rounded-2xl my-6",
        className
      )}
      target="_blank"
    >
      <div className="py-8 bg-neutral-800 w-full text-center rounded-t-2xl">
        <Image
          className="max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125 hover:contrast-100 transition ease-in duration-300 delay-100"
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
