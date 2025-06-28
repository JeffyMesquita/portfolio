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
  tags?: string[];
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

// Color map for tags
const tagColors: Record<string, { bg: string; text: string; border: string }> =
  {
    React: {
      bg: 'bg-cyan-900/60',
      text: 'text-cyan-300',
      border: 'border-cyan-700',
    },
    'Next.js': {
      bg: 'bg-neutral-900/60',
      text: 'text-white',
      border: 'border-neutral-700',
    },
    TypeScript: {
      bg: 'bg-blue-900/60',
      text: 'text-blue-300',
      border: 'border-blue-700',
    },
    JavaScript: {
      bg: 'bg-yellow-900/60',
      text: 'text-yellow-200',
      border: 'border-yellow-700',
    },
    Node: {
      bg: 'bg-green-900/60',
      text: 'text-green-300',
      border: 'border-green-700',
    },
    'Node.js': {
      bg: 'bg-green-900/60',
      text: 'text-green-300',
      border: 'border-green-700',
    },
    NestJS: {
      bg: 'bg-pink-900/60',
      text: 'text-pink-300',
      border: 'border-pink-700',
    },
    PostgreSQL: {
      bg: 'bg-blue-950/60',
      text: 'text-blue-200',
      border: 'border-blue-900',
    },
    MongoDB: {
      bg: 'bg-emerald-900/60',
      text: 'text-emerald-200',
      border: 'border-emerald-700',
    },
    Docker: {
      bg: 'bg-sky-900/60',
      text: 'text-sky-200',
      border: 'border-sky-700',
    },
    Tailwind: {
      bg: 'bg-cyan-950/60',
      text: 'text-cyan-200',
      border: 'border-cyan-800',
    },
    'Tailwind CSS': {
      bg: 'bg-cyan-950/60',
      text: 'text-cyan-200',
      border: 'border-cyan-800',
    },
    Jest: {
      bg: 'bg-red-900/60',
      text: 'text-red-200',
      border: 'border-red-700',
    },
    Figma: {
      bg: 'bg-pink-950/60',
      text: 'text-pink-200',
      border: 'border-pink-800',
    },
    Fastify: {
      bg: 'bg-yellow-950/60',
      text: 'text-yellow-100',
      border: 'border-yellow-800',
    },
    'Styled Components': {
      bg: 'bg-pink-900/60',
      text: 'text-pink-200',
      border: 'border-pink-700',
    },
    'Chakra UI': {
      bg: 'bg-teal-900/60',
      text: 'text-teal-200',
      border: 'border-teal-700',
    },
    Shadcn: {
      bg: 'bg-zinc-900/60',
      text: 'text-zinc-200',
      border: 'border-zinc-700',
    },
    'Shadcn/UI': {
      bg: 'bg-zinc-900/60',
      text: 'text-zinc-200',
      border: 'border-zinc-700',
    },
    Tamagui: {
      bg: 'bg-orange-900/60',
      text: 'text-orange-200',
      border: 'border-orange-700',
    },
    Git: {
      bg: 'bg-orange-950/60',
      text: 'text-orange-200',
      border: 'border-orange-800',
    },
    GitHub: {
      bg: 'bg-neutral-900/60',
      text: 'text-neutral-200',
      border: 'border-neutral-700',
    },
    // fallback
    default: {
      bg: 'bg-blue-900/60',
      text: 'text-blue-200',
      border: 'border-blue-900',
    },
  };

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
  tags = [],
}: ProjectCardProps) {
  const [showMore, setShowMore] = useState<boolean>(false);
  const categoryData = categories.find((cat) => cat.name === category);

  return (
    <div
      className={cn(
        'group relative flex min-h-[340px] max-w-sm transform flex-col justify-between overflow-hidden rounded-lg border border-neutral-50/40 p-4 transition-all duration-500 ease-linear hover:scale-105 hover:border-sky-600 hover:shadow-xl hover:shadow-sky-800 sm:w-full sm:p-6 md:max-w-[700px] lg:max-w-[450px] lg:p-8',
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

      {/* TAGS */}
      {tags && tags.length > 0 && (
        <div
          className="mb-4 flex w-full justify-end gap-2 overflow-x-auto overflow-y-hidden pb-2"
          style={{ maxHeight: 40 }}
        >
          <div className="flex gap-2" style={{ minWidth: '100%' }}>
            {tags.map((tag) => {
              const color = tagColors[tag] || tagColors.default;
              return (
                <span
                  key={tag}
                  className={cn(
                    'flex w-auto items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-medium shadow-sm',
                    color.bg,
                    color.text,
                    color.border,
                  )}
                >
                  {tag}
                </span>
              );
            })}
          </div>
          <style jsx>{`
            div[style*='overflow-x-auto']::-webkit-scrollbar {
              height: 6px;
            }
            div[style*='overflow-x-auto']::-webkit-scrollbar-thumb {
              background: #334155;
              border-radius: 8px;
            }
            div[style*='overflow-x-auto']::-webkit-scrollbar-track {
              background: transparent;
            }
          `}</style>
        </div>
      )}

      <dl className="mt-2 flex justify-end gap-4 sm:gap-6">
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
