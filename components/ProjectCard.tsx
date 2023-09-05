"use client";
import { cn } from "@/lib/utils";
import {
  Computer,
  Globe2,
  MonitorCheck,
  Server,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export interface ProjectCardProps {
  title: string;
  category: "web" | "mobile" | "backend";
  shortDescription: string;
  moreDescription: string;
  repositoryLink: string;
  deployLink: string;
  image?: string;
  className?: string;
}

const categories = [
  {
    name: "web",
    titleName: "Frontend",
    textColor: "text-blue-600",
    icon: <MonitorCheck size={20} className="text-blue-600" />,
  },
  {
    name: "mobile",
    titleName: "Mobile",
    textColor: "text-teal-400",
    icon: <Smartphone size={20} className="text-teal-400" />,
  },
  {
    name: "backend",
    titleName: "Backend",
    textColor: "text-green-400",
    icon: <Server size={20} className="text-green-400" />,
  },
];

export function ProjectCard({
  title = "A simple project",
  category = "web",
  shortDescription = "A short description about the project Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  moreDescription = "A more detailed description about the project, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  repositoryLink,
  deployLink,
  image,
  className,
}: ProjectCardProps) {
  const [showMore, setShowMore] = useState<boolean>(false);
  const categoryData = categories.find((cat) => cat.name === category);

  return (
    <div
      className={cn(
        "group flex flex-col justify-between relative min-h-[250px] lg:max-w-[450px] md:max-w-[700px] sm:w-full overflow-hidden rounded-lg border border-neutral-50/40 p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:shadow-sky-800 hover:border-sky-600 transition duration-300",
        className
      )}
    >
      <div className="w-full flex flex-col gap-2">
        <span className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-blue-400 via-sky-600 to-indigo-900" />
        <div className="sm:flex sm:gap-4">
          <div className="max-sm:hidden">
            <Image
              alt={title}
              width={192}
              height={128}
              src={image || "/figma.png"}
              className="h-32 w-48 rounded-lg object-cover shadow-sm border-2 border-neutral-50/40 group-hover:border-sky-600 transition duration-300"
              loading="lazy"
            />
          </div>
          <div className="text-right w-full">
            <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
            <p
              className={cn(
                "flex justify-end items-center gap-2 mt-1 text-xs font-medium",
                {},
                categoryData?.textColor
              )}
            >
              {categoryData?.titleName} {categoryData?.icon}
            </p>

            <div className="max-xs:hidden mt-4 text-right flex justify-end">
              <p className="max-w-[35ch] text-sm text-neutral-500">
                {shortDescription}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 text-right flex justify-end">
          <p className="xs:hidden max-w-[40ch] text-sm text-neutral-500">
            {shortDescription}
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col mt-2 mb-8">
        <div className="flex justify-end items-center gap-2">
          <p className="text-3xs text-neutral-600">
            {!showMore ? "mostrar mais" : "mostrar menos"}
          </p>
          <button
            aria-label="Ver mais"
            className="w-6 h-6 rounded bg-blue-700 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-blue-600  focus:bg-blue-600 focus:outline-none focus:ring-0 active:bg-blue-700 "
            type="button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "-" : "+"}
          </button>
        </div>
        <div
          className={cn(
            "flex flex-col items-end gap-2 text-right transition-all duration-300 mt-2",
            {
              "h-0": !showMore,
              "h-52 sm:h-20": showMore,
            }
          )}
        >
          <Image
            alt={title}
            width={192}
            height={128}
            src={image || "/figma.png"}
            className={cn(
              "h-32 w-6/12 rounded-lg object-cover object-center shadow-sm border border-neutral-50/40 group-hover:border-sky-600 transition-all duration-200 sm:hidden",
              {
                "h-0 invisible": !showMore,
                "h-20 visible": showMore,
              }
            )}
            loading="lazy"
          />
          <p
            className={cn(
              "text-sm text-neutral-500 transition-all duration-200",
              {
                "h-0 invisible": !showMore,
                "h-full": showMore,
              }
            )}
          >
            {moreDescription}
          </p>
        </div>
      </div>

      <dl className="mt-6 flex justify-end gap-4 sm:gap-6">
        <div className="flex flex-col">
          <dt className="text-sm font-medium text-neutral-200">Repositório</dt>
          <a
            href={repositoryLink}
            target="_blank"
            className="text-xs text-neutral-400 hover:text-blue-700 hover:font-semibold"
          >
            <dd className="flex gap-2 items-end">
              <Computer size={16} />
              Link
            </dd>
          </a>
        </div>

        <div className="flex flex-col">
          <dt className="text-sm font-medium text-neutral-200">Deploy</dt>
          <a
            href={deployLink || "#"}
            target={deployLink ? "_blank" : "_self"}
            className="text-xs text-neutral-400 hover:text-blue-700 hover:font-semibold"
          >
            <dd className="flex gap-2 items-end">
              <Globe2 size={16} />
              {deployLink ? "Link" : "  ---  "}
            </dd>
          </a>
        </div>
      </dl>
    </div>
  );
}
