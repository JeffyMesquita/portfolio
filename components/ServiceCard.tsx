'use client';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export interface ServiceCardProps {
  title: string;
  icon: ReactNode;
  shortDescription: string;
  description: string;
  linkText: string;
  linkHref?: string;
  effectColor: string;
  className?: string;
}

export default function ServiceCard({
  title,
  icon,
  shortDescription,
  description,
  linkText,
  linkHref = '#',
  effectColor,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        'd group relative mt-5 overflow-hidden p-5 max-sm:w-full sm:min-w-[440px]',
        className,
      )}
    >
      <h1 className="mt-5 text-center group-hover:animate-bounce">{title}</h1>
      <div className="mt-4 flex justify-center group-hover:animate-pulse">
        {icon}
      </div>
      <p className="mt-10 text-center text-neutral-300">
        <span className="text-xl font-bold">{shortDescription}</span>
        <br />
        {description}
      </p>
      <p className="mb-7 mt-10 text-center">
        <a
          target="_blank"
          href={linkHref}
          className="rounded-sm border-[0.5px] border-sky-600 px-4 py-2 text-gray-400 shadow-md transition delay-100 duration-300 ease-in hover:cursor-pointer hover:text-sky-700"
        >
          {linkText}
        </a>
      </p>
      <span className="absolute left-[45%] top-0 z-[-2] h-[60px] w-[60px] bg-white blur-[100px]" />

      <span
        className={cn(
          'absolute left-[48%] top-[27%] z-[-1] h-[20px] w-[20px] blur-[20px]',
          effectColor,
        )}
      />
      <span className="absolute bottom-0 right-0 z-[-2] h-[50px] w-[50px] bg-cyan-900 blur-[70px]" />
      <span className="absolute bottom-0 left-[33%] top-[75%] z-[-2] h-[25px] w-[25px] bg-violet-600 blur-[40px]" />
    </div>
  );
}
