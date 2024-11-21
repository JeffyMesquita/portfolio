'use client';
import { RepositoryType, StackType } from '@/constants/projects';
import { cn } from '@/lib/utils';
import {
  Computer,
  Globe2,
  MonitorCheck,
  Server,
  Smartphone,
  LayersIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export interface ProjectCardProps {
  title: string;
  category: StackType;
  shortDescription: string;
  moreDescription: string;
  repositoryType: RepositoryType;
  repositoryLink: string | null;
  deployLink: string;
  image?: string;
  className?: string;
  side: '@LEFT' | '@RIGHT';
}

const categories = [
  {
    name: '@FRONTEND',
    titleName: 'Frontend',
    textColor: 'text-blue-600',
    icon: <MonitorCheck size={20} className="text-blue-600" />,
  },
  {
    name: '@MOBILE',
    titleName: 'Mobile',
    textColor: 'text-teal-400',
    icon: <Smartphone size={20} className="text-teal-400" />,
  },
  {
    name: '@BACKEND',
    titleName: 'Backend',
    textColor: 'text-green-400',
    icon: <Server size={20} className="text-green-400" />,
  },
  {
    name: '@FULLSTACK',
    titleName: 'Fullstack',
    textColor: 'text-purple-400',
    icon: <LayersIcon size={20} className="text-purple-400" />,
  },
];

export function ProjectCard({
  title = 'A simple project',
  category = '@FRONTEND',
  shortDescription = 'A short description about the project Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  moreDescription = 'A more detailed description about the project, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  repositoryType,
  repositoryLink = '/',
  deployLink,
  image,
  className,
  side = '@LEFT',
}: ProjectCardProps) {
  console.log('side', side);
  const [showMore, setShowMore] = useState<boolean>(false);
  const categoryData = categories.find((cat) => cat.name === category);

  return (
    <div
      className={cn(
        'group relative flex min-h-[250px] transform flex-col justify-between overflow-hidden rounded-lg border border-neutral-50/40 p-4 transition-all duration-500 ease-linear hover:scale-105 hover:border-sky-600 hover:shadow-xl hover:shadow-sky-800 sm:w-full sm:p-6 md:max-w-[700px] lg:max-w-[450px] lg:p-8',
        className,
      )}
    >
      <div className="flex w-full flex-col gap-2">
        <span className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-blue-400 via-sky-600 to-indigo-900" />
        <div className="sm:flex sm:gap-4">
          <div className="">
            <Image
              alt={title}
              width={192}
              height={128}
              src={image || '/figma.png'}
              className="mx-auto h-24 w-1/2 rounded-lg border-2 border-neutral-50/40 object-fill shadow-sm transition duration-300 group-hover:border-sky-600 sm:h-32 sm:w-48 sm:object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full text-right">
            <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
            <p
              className={cn(
                'mt-1 flex items-center justify-end gap-2 text-xs font-medium',
                {},
                categoryData?.textColor,
              )}
            >
              {categoryData?.titleName} {categoryData?.icon}
            </p>

            <div className="mt-4 flex justify-end text-right max-xs:hidden">
              <p className="max-w-[35ch] text-sm text-neutral-500">
                {shortDescription}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end text-right">
          <p className="max-w-[40ch] text-sm text-neutral-500 xs:hidden">
            {shortDescription}
          </p>
        </div>
      </div>

      <div className="mb-8 mt-2 flex w-full flex-col">
        <div className="flex items-center justify-end gap-2">
          <p className="text-3xs text-neutral-600">
            {!showMore ? 'mostrar mais' : 'mostrar menos'}
          </p>
          <button
            aria-label="Ver mais"
            className="h-6 w-6 rounded bg-blue-700 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-0 active:bg-blue-700"
            type="button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? '-' : '+'}
          </button>
        </div>
        <div
          className={cn(
            'mt-2 flex flex-col items-end gap-2 text-right transition-all duration-300',
            {
              'h-0': !showMore,
              'h-52 sm:h-20': showMore,
            },
          )}
        >
          <Image
            alt={title}
            width={192}
            height={128}
            src={image || '/figma.png'}
            className={cn(
              'h-32 w-6/12 rounded-lg border border-neutral-50/40 object-cover object-center shadow-sm transition-all duration-200 group-hover:border-sky-600 sm:hidden',
              {
                'invisible h-0': !showMore,
                'visible h-20': showMore,
              },
            )}
            loading="lazy"
          />
          <p
            className={cn(
              'text-sm text-neutral-500 transition-all duration-200',
              {
                'invisible h-0': !showMore,
                'h-full': showMore,
              },
            )}
          >
            {moreDescription}
          </p>
        </div>
      </div>

      <dl className="mt-6 flex justify-end gap-4 sm:gap-6">
        <div className="flex flex-col">
          <dt className="text-sm font-medium text-neutral-200">Repositório</dt>
          {repositoryType === '@PUBLIC' && repositoryLink ? (
            <Link
              title="Repositório"
              aria-label="Repositório"
              href={repositoryLink}
              target="_blank"
              className="text-xs text-neutral-400 hover:font-semibold hover:text-blue-700"
              prefetch
            >
              <dd className="flex items-end gap-2">
                <Computer size={16} />
                Link
              </dd>
            </Link>
          ) : (
            <dd className="flex items-end gap-2">
              <Computer size={16} />
              ---
            </dd>
          )}
        </div>

        <div className="flex flex-col">
          <dt className="text-sm font-medium text-neutral-200">Deploy</dt>
          <Link
            title={deployLink ? 'Deploy' : '---'}
            aria-label={deployLink ? 'Deploy' : '---'}
            href={deployLink || '#'}
            target={deployLink ? '_blank' : '_self'}
            className="text-xs text-neutral-400 hover:font-semibold hover:text-blue-700"
            prefetch
          >
            <dd className="flex items-end gap-2">
              <Globe2 size={16} />
              {deployLink ? 'Link' : '  ---  '}
            </dd>
          </Link>
        </div>
      </dl>
    </div>
  );
}
