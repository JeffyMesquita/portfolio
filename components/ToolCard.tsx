import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ToolCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function ToolCard({ title, description, image, link }: ToolCardProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="group flex h-24 items-center gap-4 rounded-lg bg-gray-800/50 p-4 transition-all hover:bg-gray-800/70"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative h-12 w-12 overflow-hidden rounded-lg">
          <Image src={image} alt={title} fill className="object-contain p-1" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-white group-hover:text-blue-400">
            {title}
          </h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
}
