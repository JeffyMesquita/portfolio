import Image from 'next/image';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { GrInstagram } from 'react-icons/gr';
import { SectionVariant } from './SectionVariant';

export function Container() {
  return (
    <SectionVariant spaceY>
      <section className="whoiam relative mx-auto w-10/12 pt-4 lg:pt-16">
        <div className="flex flex-col items-center justify-between md:flex-row-reverse">
          <div className="flex items-end justify-end max-md:pt-4">
            <div className="relative">
              <Image
                className="h-auto w-full transform"
                width={340}
                height={200}
                src="/me.png"
                alt="Hero Image"
                loading="lazy"
              />
              <div className="absolute -left-0 bottom-4 top-[5%] z-[-1] h-[70%] w-[100%] overflow-hidden rounded-full border border-blue-800 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500"></div>
            </div>
          </div>
          <div className="mt-5 p-4 pl-0 sm:mt-20">
            <h4 className="invisible -mt-8 h-0.5" id="quemsou">
              Quem sou?
            </h4>
            <p className="mt-8 text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
              Hello!
            </p>
            <h1>
              Meu nome é{' '}
              <strong className="text-blue-700">Jeferson Mesquita</strong>
              <p className="text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
                Sou Desenvolvedor Fullstack
              </p>
            </h1>
            <p className="text-base sm:text-xl md:text-base lg:pt-6 lg:text-xl xl:text-2xl">
              apaixonado por tecnologia e inovação.
            </p>
            <div className="mt-6 flex items-center md:mt-14">
              <ul className="my-4 mr-6 flex items-center space-x-2 sm:space-x-5">
                <li>
                  <a
                    href="https://github.com/JeffyMesquita"
                    className="opacity-75 transition duration-150 ease-in hover:text-blue-600 hover:opacity-100"
                    target="_blank"
                    aria-label="Github"
                  >
                    <AiOutlineGithub size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jeffymesquita/"
                    className="opacity-75 transition duration-150 ease-in hover:text-blue-600 hover:opacity-100"
                    target="_blank"
                    aria-label="Linkedin"
                  >
                    <AiOutlineLinkedin size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/jeferson.mesquita/"
                    className="opacity-75 transition duration-150 ease-in hover:text-blue-600 hover:opacity-100"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <GrInstagram size={24} />
                  </a>
                </li>
              </ul>
              <a
                href="mailto:je_2742@hotmail.com"
                className="whitespace-nowrap rounded-2xl border-[0.5px] border-blue-700 bg-blue-950/60 px-4 py-[5px] transition duration-150 ease-in hover:bg-blue-700 hover:text-white"
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
