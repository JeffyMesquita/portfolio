import Image from 'next/image';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { GrInstagram } from 'react-icons/gr';
import { FiDownload } from 'react-icons/fi';
import { SectionVariant } from './SectionVariant';
import { TechParticles } from './TechParticles';
import { motion } from 'framer-motion';
import { RESUME_PDF_LINK, RESUME_DOCX_LINK } from '@/constants';

export function Container() {
  return (
    <SectionVariant spaceY>
      <section className="whoiam relative mx-auto w-10/12 overflow-x-hidden pt-4 lg:pt-16">
        <TechParticles />
        <motion.div
          className="flex flex-col items-center justify-between md:flex-row-reverse"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-end justify-end max-md:pt-4">
            <div className="">
              <Image
                className="drop-shadow-[0_10px_8px_rgba(63, 4, 111, 0.4)] h-48 w-48 rounded-full shadow-2xl shadow-blue-950 ring-2 ring-blue-800 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96"
                width={384}
                height={384}
                src="/me.png"
                alt="Hero Image"
                loading="lazy"
              />
            </div>
          </div>
          <motion.div
            className="relative z-10 mt-5 w-full p-2 pl-0 sm:mt-20 sm:p-4 md:w-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="invisible -mt-8 h-0.5" id="quemsou">
              Quem sou?
            </h4>
            <motion.p
              className="mt-8 text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Hello!
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Meu nome é{' '}
              <strong className="text-blue-700">Jeferson Mesquita</strong>
              <p className="text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
                Sou Desenvolvedor Fullstack
              </p>
            </motion.h1>
            <motion.p
              className="text-base sm:text-xl md:text-base lg:pt-6 lg:text-xl xl:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              apaixonado por tecnologia e inovação.
            </motion.p>
            <motion.div
              className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <ul className="flex items-center space-x-2 sm:space-x-5">
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
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <a
                  href="mailto:je_2742@hotmail.com"
                  className="whitespace-nowrap rounded-2xl border-[0.5px] border-blue-700 bg-blue-950/60 px-3 py-[5px] text-sm transition duration-150 ease-in hover:bg-blue-700 hover:text-white sm:px-4 sm:text-base"
                >
                  E-mail
                </a>
                <a
                  href={RESUME_PDF_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 whitespace-nowrap rounded-xl border-[0.5px] border-red-600 bg-red-950/40 px-2.5 py-[5px] text-xs transition duration-150 ease-in hover:bg-red-700 hover:text-white sm:gap-2 sm:px-3 sm:text-sm"
                  aria-label="Baixar Currículo em PDF"
                >
                  <FiDownload className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span>PDF</span>
                </a>
                <a
                  href={RESUME_DOCX_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 whitespace-nowrap rounded-xl border-[0.5px] border-green-600 bg-green-950/40 px-2.5 py-[5px] text-xs transition duration-150 ease-in hover:bg-green-700 hover:text-white sm:gap-2 sm:px-3 sm:text-sm"
                  aria-label="Baixar Currículo em DOCX"
                >
                  <FiDownload className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span>DOCX</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </SectionVariant>
  );
}
