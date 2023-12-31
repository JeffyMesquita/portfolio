import Image from "next/image";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { SectionVariant } from "./SectionVariant";

export function Container() {
  return (
    <SectionVariant spaceY>
      <section className="lg:pt-16 pt-4 relative w-10/12 mx-auto whoiam">
        <div className="flex items-center justify-between flex-row-reverse">
          <div className="flex justify-end items-end max-md:pt-4">
            <div className="relative">
              <Image
                className="w-full h-auto transform"
                width={340}
                height={200}
                src="/me.png"
                alt="Hero Image"
                loading="lazy"
              />
              <div className="w-[100%] overflow-hidden h-[70%] z-[-1] top-[5%] -left-0 rounded-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 absolute border bottom-4 border-blue-800"></div>
            </div>
          </div>
          <div className="p-4 pl-0 mt-5 sm:mt-20">
            <h4 className="invisible h-0.5 -mt-8" id="quemsou">
              Quem sou?
            </h4>
            <p className="text-xl mt-8 sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
              Hello!
            </p>
            <h1>
              Meu nome é{" "}
              <strong className="text-blue-700">Jeferson Mesquita</strong>
              <p className="text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
                Sou Desenvolvedor Fullstack
              </p>
            </h1>
            <p className="text-base sm:text-xl md:text-base lg:text-xl xl:text-2xl lg:pt-6">
              apaixonado por tecnologia e inovação.
            </p>
            <div className="flex items-center mt-6 md:mt-14">
              <ul className="flex items-center space-x-2 sm:space-x-5 mr-6 my-4">
                <li>
                  <a
                    href="https://github.com/JeffyMesquita"
                    className="hover:opacity-100 opacity-75 transition ease-in duration-150  hover:text-blue-600"
                    target="_blank"
                    aria-label="Github"
                  >
                    <AiOutlineGithub size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jeffymesquita/"
                    className="hover:opacity-100 opacity-75 transition ease-in duration-150  hover:text-blue-600"
                    target="_blank"
                    aria-label="Linkedin"
                  >
                    <AiOutlineLinkedin size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/jeferson.mesquita/"
                    className="hover:opacity-100 opacity-75 transition ease-in duration-150 hover:text-blue-600"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <GrInstagram size={24} />
                  </a>
                </li>
              </ul>
              <a
                href="mailto:je_2742@hotmail.com"
                className="px-4 py-[5px] whitespace-nowrap transition ease-in duration-150 border-[0.5px] border-blue-700 rounded-2xl bg-blue-950/60 hover:bg-blue-700 hover:text-white"
              >
                E-mail
              </a>
            </div>
          </div>
        </div>
      </section>
    </SectionVariant>
  );
}
