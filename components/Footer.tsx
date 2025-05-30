import { Github, Instagram, Linkedin, MailIcon } from 'lucide-react';
import Image from 'next/image';
import { SectionVariant } from './SectionVariant';
import Link from 'next/link';

export function Footer() {
  return (
    <SectionVariant variant>
      <footer className="mt-14 w-full pb-2 max-md:mt-12 max-sm:mt-8">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 text-blue-700">
            <div className="relative">
              <Image
                className="drop-shadow-[0_10px_8px_rgba(69, 4, 116, 0.4)] size-20 transform rounded-full border shadow-2xl shadow-blue-950 ring-2 ring-blue-800"
                width={340}
                height={200}
                src="/me.png"
                alt="Hero Image"
                loading="lazy"
              />
              <div className="absolute -left-0 bottom-4 top-[5%] z-[-1] h-[70%] w-[100%] overflow-hidden rounded-full border border-blue-800 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500" />
            </div>

            <h4 className="relative text-3xl font-extrabold sm:text-5xl">
              Jeferson Mesquita
            </h4>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-neutral-500">
            Desenvolvedor Fullstack apaixonado por tecnologia e inovação.
          </p>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <Link
                className="cursor-pointer text-neutral-700 transition hover:text-neutral-700/75"
                href="#quemsou"
              >
                Quem Sou
              </Link>
            </li>

            <li>
              <Link
                className="cursor-pointer text-neutral-700 transition hover:text-neutral-700/75"
                href="#sobre"
              >
                Sobre mim
              </Link>
            </li>

            <li>
              <Link
                className="cursor-pointer text-neutral-700 transition hover:text-neutral-700/75"
                href="#servicos"
              >
                Serviços
              </Link>
            </li>

            <li>
              <Link
                className="cursor-pointer text-neutral-700 transition hover:text-neutral-700/75"
                href="#ferramentas"
              >
                Ferramentas
              </Link>
            </li>

            <li>
              <Link
                className="cursor-pointer text-neutral-700 transition hover:text-neutral-700/75"
                href="#projetos"
              >
                Projetos
              </Link>
            </li>
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <Link
                href="https://www.linkedin.com/in/jeffymesquita/"
                rel="noreferrer noopener"
                target="_blank"
                className="text-blue-700 transition hover:text-blue-700/75"
              >
                <Linkedin size={24} />
              </Link>
            </li>

            <li>
              <Link
                href="https://github.com/JeffyMesquita"
                rel="noreferrer noopener"
                target="_blank"
                className="text-blue-700 transition hover:text-blue-700/75"
              >
                <Github size={24} />
              </Link>
            </li>

            <li>
              <Link
                href="https://www.instagram.com/jeferson.mesquita/"
                rel="noreferrer noopener"
                target="_blank"
                className="text-blue-700 transition hover:text-blue-700/75"
              >
                <Instagram size={24} />
              </Link>
            </li>

            <li>
              <Link
                href="mailto:je_2742@hotmail.com"
                rel="noreferrer noopener"
                target="_blank"
                className="text-blue-700 transition hover:text-blue-700/75"
              >
                <MailIcon size={24} />
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-center text-xs text-neutral-500">
          &copy; {new Date().getFullYear()} JeffyMesquita. Todos os direitos
          reservados.
        </p>
      </footer>
    </SectionVariant>
  );
}
