import Image from "next/image";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

export interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

export function ProjectCard({
  title,
  description,
  link,
  image,
}: ProjectCardProps) {
  return (
    <div className="mt-20 md:w-9/12 mx-auto ">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="rounded-xl opacity-90"
      />
      <div className="my-10 sm:w-10/12 mx-auto">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <div className="text-neutral-300">{description}</div>
        <div className="mt-6 inline-block">
          <a
            href={link}
            className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700"
          >
            Veja mais{" "}
            <BsArrowUpRight size={14} className="ml-2 text-blue-600" />
          </a>
        </div>
      </div>
    </div>
  );
}
