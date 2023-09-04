"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";

export function Navbar() {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  return (
    <div className="w-10/12 mx-auto pt-4">
      <div className="flex items-center justify-between flex-nowrap w-full pb-3 border-b-[1px] border-neutral-500">
        <div className="sm:text-3xl text-xl font-bold inline-block">
          <a href="#" className="inline-block">
            Portfólio
          </a>
        </div>
        <div
          className="md:hidden text-white hover:cursor-pointer"
          onClick={() => setShowNavbar(!showNavbar)}
        >
          {showNavbar ? (
            <RiCloseLine size={24} />
          ) : (
            <GiHamburgerMenu size={24} />
          )}
        </div>

        <nav
          className={cn("max-md:hidden transition ease-in duration-300", {})}
        >
          <ul className="flex items-center max-sm:text-sm justify-between max-sm:justify-around">
            <li className="py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1">
              <a href="#servicos" className="px-2  hover:cursor-pointer">
                Serviços
              </a>
            </li>
            <li className="py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1">
              <a href="#ferramentas" className="px-2 hover:cursor-pointer">
                Ferramentas
              </a>
            </li>

            <li className="py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1">
              <a href="#projetos" className="px-2 hover:cursor-pointer">
                Projetos
              </a>
            </li>

            <li className="py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1">
              <a href="#contato" className="px-2 hover:cursor-pointer">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <nav className={cn("w-full h-auto md:hidden")}>
        <ul
          className={cn("flex flex-col w-full h-0 transition duration-300", {
            "hidden h-0 mb-0": !showNavbar,
            "h-40": showNavbar,
          })}
        >
          <li className="py-1 px-4 w-full hover:bg-neutral-700 transition ease-in duration-300 rounded delay-100">
            <a href="#servicos" className="hover:cursor-pointer block">
              Serviços
            </a>
          </li>
          <li className="py-1 px-4 w-full hover:bg-neutral-700 transition ease-in duration-300 rounded delay-100">
            <a href="#ferramentas" className="hover:cursor-pointer block">
              Ferramentas
            </a>
          </li>
          <li className="py-1 px-4 w-full hover:bg-neutral-700 transition ease-in duration-300 rounded delay-100">
            <a href="#projetos" className="hover:cursor-pointer block">
              Projetos
            </a>
          </li>
          <li className="py-1 px-4 w-full hover:bg-neutral-700 transition ease-in duration-300 rounded delay-100">
            <a href="#contato" className="hover:cursor-pointer block">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
