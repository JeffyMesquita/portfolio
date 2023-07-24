"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface ServiceCardProps {
  title: string;
  icon: ReactNode;
  shortDescription: string;
  description: string;
  linkText: string;
  effectColor: string;
  className?: string;
}

export default function ServiceCard({
  title,
  icon,
  shortDescription,
  description,
  linkText,
  effectColor,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group d p-5 relative overflow-hidden mt-5 max-sm:w-full sm:min-w-[440px]",
        className
      )}
    >
      <h1 className="text-center mt-5 group-hover:animate-bounce">{title}</h1>
      <div className="flex justify-center mt-4 group-hover:animate-pulse">
        {icon}
      </div>
      <p className="text-center mt-10 text-neutral-300">
        <span className="text-xl font-bold">{shortDescription}</span>
        <br />
        {description}
      </p>
      <p className="text-center mt-10 mb-7">
        <a
          href="#"
          className="px-4 py-2 rounded-sm border-[0.5px] border-sky-600 shadow-md text-gray-400 hover:text-sky-700 transition ease-in duration-300 delay-100 hover:cursor-pointer"
        >
          {linkText}
        </a>
      </p>
      <span className="w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0" />

      <span
        className={cn(
          "w-[20px] h-[20px] z-[-1] blur-[20px] left-[48%] absolute top-[27%]",
          effectColor
        )}
      />
      <span className="w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-cyan-900 absolute bottom-0" />
      <span className="w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[33%] bg-violet-600 absolute bottom-0" />
    </div>
  );
}
