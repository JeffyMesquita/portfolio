import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { SectionVariant } from "./SectionVariant";

export function Footer() {
  // function scrollToLeft() {
  //   window.scrollTo({
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }

  // function handleScroll(id: string) {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   }

  //   setTimeout(() => {
  //     scrollToLeft();
  //   }, 850);
  // }

  return (
    <SectionVariant variant>
      <footer className="w-full mt-14 max-sm:mt-8 max-md:mt-12 pb-2">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 items-center text-blue-700">
            <div className="relative">
              <Image
                className="w-8 h-auto transform"
                width={340}
                height={200}
                src="/me.png"
                alt="Hero Image"
                loading="lazy"
              />
              <div className="w-[100%] overflow-hidden h-[70%] z-[-1] top-[5%] -left-0 rounded-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 absolute border bottom-4 border-blue-800" />
            </div>

            <h4 className="text-3xl font-extrabold sm:text-5xl relative">
              Jeferson Mesquita
            </h4>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-neutral-500">
            Desenvolvedor Fullstack apaixonado por tecnologia e inovação.
          </p>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <a
                className="text-neutral-700 transition hover:text-neutral-700/75 cursor-pointer"
                href="#quemsou"
              >
                Quem Sou
              </a>
            </li>

            <li>
              <a
                className="text-neutral-700 transition hover:text-neutral-700/75 cursor-pointer"
                href="#sobre"
              >
                Sobre mim
              </a>
            </li>

            <li>
              <a
                className="text-neutral-700 transition hover:text-neutral-700/75 cursor-pointer"
                href="#servicos"
              >
                Serviços
              </a>
            </li>

            <li>
              <a
                className="text-neutral-700 transition hover:text-neutral-700/75 cursor-pointer"
                href="#ferramentas"
              >
                Ferramentas
              </a>
            </li>

            <li>
              <a
                className="text-neutral-700 transition hover:text-neutral-700/75 cursor-pointer"
                href="#projetos"
              >
                Projetos
              </a>
            </li>
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <a
                href="https://www.linkedin.com/in/jeffymesquita/"
                rel="noreferrer"
                target="_blank"
                className="text-blue-700 transition hover:text-blue-700/75"
              >
                <Linkedin size={24} />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/JeffyMesquita"
                rel="noreferrer"
                target="_blank"
                className="text-blue-700 transition hover:text-blue-700/75"
              >
                <Github size={24} />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/jeferson.mesquita/"
                rel="noreferrer"
                target="_blank"
                className="text-blue-700 transition hover:text-blue-700/75"
              >
                <Instagram size={24} />
              </a>
            </li>
          </ul>
        </div>
        <p className="text-xs text-center text-neutral-500">
          &copy; 2023. Jeferson Mesquita. All rights reserved.
        </p>
      </footer>
    </SectionVariant>
  );
}
