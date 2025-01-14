'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLine } from 'react-icons/ri';

export function Navbar() {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  return (
    <div className="mx-auto w-10/12 pt-4">
      <div className="flex w-full flex-nowrap items-center justify-between border-b-[1px] border-neutral-500 pb-3">
        <div className="inline-block text-xl font-bold sm:text-3xl">
          <a href="#" className="inline-block">
            Portfólio
          </a>
        </div>
        <div
          className="text-white hover:cursor-pointer md:hidden"
          onClick={() => setShowNavbar(!showNavbar)}
        >
          {showNavbar ? (
            <RiCloseLine size={24} />
          ) : (
            <GiHamburgerMenu size={24} />
          )}
        </div>

        <nav
          className={cn('transition duration-300 ease-in max-md:hidden', {})}
        >
          <ul className="flex items-center justify-between max-sm:justify-around max-sm:text-sm">
            <li className="mx-1 rounded py-1 transition delay-100 duration-300 ease-in hover:bg-neutral-700">
              <a href="#servicos" className="px-2 hover:cursor-pointer">
                Minha Stack
              </a>
            </li>
            <li className="mx-1 rounded py-1 transition delay-100 duration-300 ease-in hover:bg-neutral-700">
              <a href="#ferramentas" className="px-2 hover:cursor-pointer">
                Ferramentas
              </a>
            </li>

            <li className="mx-1 rounded py-1 transition delay-100 duration-300 ease-in hover:bg-neutral-700">
              <a href="#projetos" className="px-2 hover:cursor-pointer">
                Projetos
              </a>
            </li>

            <li className="mx-1 rounded py-1 transition delay-100 duration-300 ease-in hover:bg-neutral-700">
              <a href="#contato" className="px-2 hover:cursor-pointer">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <nav className={cn('h-auto w-full md:hidden')}>
        <ul
          className={cn('flex h-0 w-full flex-col transition duration-300', {
            'mb-0 hidden h-0': !showNavbar,
            'h-40': showNavbar,
          })}
        >
          <li className="w-full rounded px-4 py-1 transition delay-100 duration-300 ease-in hover:bg-neutral-700">
            <a href="#servicos" className="block hover:cursor-pointer">
              Serviços
            </a>
          </li>
          <li className="w-full rounded px-4 py-1 transition delay-100 duration-300 ease-in hover:bg-neutral-700">
            <a href="#ferramentas" className="block hover:cursor-pointer">
              Ferramentas
            </a>
          </li>
          <li className="w-full rounded px-4 py-1 transition delay-100 duration-300 ease-in hover:bg-neutral-700">
            <a href="#projetos" className="block hover:cursor-pointer">
              Projetos
            </a>
          </li>
          <li className="w-full rounded px-4 py-1 transition delay-100 duration-300 ease-in hover:bg-neutral-700">
            <a href="#contato" className="block hover:cursor-pointer">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
