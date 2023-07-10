"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between flex-nowrap w-full pb-3 border-b-[1px] border-neutral-500">
      <div className="sm:text-3xl text-xl font-bold inline-block">
        <a href="/" className="inline-block">
          Portfólio
        </a>
      </div>
      <div
        className="sm:hidden text-white hover:cursor-pointer"
        onClick={() => setShowNavbar(!showNavbar)}
      >
        {showNavbar ? <RiCloseLine size={24} /> : <GiHamburgerMenu size={24} />}
      </div>
      <nav
        className={`max-sm:absolute max-sm:w-full left-0 transition ease-in duration-300 ${
          showNavbar ? "top-16 visible" : "max-sm:invisible"
        }`}
      >
        <ul className="flex items-center max-sm:text-sm justify-between max-sm:justify-around">
          <li
            className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1 ${
              showNavbar ? "max-sm-translate-x-0" : "max-sm:-translate-x-32"
            }`}
          >
            <a href="#servicos" className="px-2">
              Serviços
            </a>
          </li>
          <li
            className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1 ${
              showNavbar ? "max-sm-translate-x-0" : "max-sm:-translate-x-40"
            }`}
          >
            <a href="#projetos" className="px-2">
              Projetos
            </a>
          </li>
          <li
            className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1 ${
              showNavbar ? "max-sm-translate-x-0" : "max-sm:-translate-x-52"
            }`}
          >
            <a href="#contato" className="px-2 whitespace-nowrap">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
