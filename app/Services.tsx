"use client";
import ServiceCard from "@/components/ServiceCard";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpo } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export function Services() {
  return (
    <section className="w-10/12 mx-auto">
      <h1
        id="servicos"
        className="md:text-4xl text-3xl lg:text-5xl font-bold mb-10"
      >
        Serviços
      </h1>
      <div className="flex flex-wrap gap-7 justify-center">
        <ServiceCard
          className="services-1"
          title="ReactJs"
          icon={<FaReact size={50} className="text-sky-600" />}
          shortDescription="Desenvolvimento Web"
          description="utilizando a biblioteca ReactJs."
          linkText="Saiba mais"
          effectColor="bg-sky-600"
        />

        <ServiceCard
          className="services-2"
          title="NextJs"
          icon={<TbBrandNextjs size={50} className="text-zinc-600" />}
          shortDescription="Desenvolvimento Web"
          description="utilizando o framework NextJs."
          linkText="Saiba mais"
          effectColor="bg-zinc-600"
        />

        <ServiceCard
          className="services-3"
          title="React Native"
          icon={<FaReact size={50} className="text-teal-400" />}
          shortDescription="Desenvolvimento Mobile"
          description="utilizando a biblioteca React Native."
          linkText="Saiba mais"
          effectColor="bg-teal-400"
        />

        <ServiceCard
          className="services-4"
          title="Expo"
          icon={<SiExpo size={50} className="text-zinc-950" />}
          shortDescription="Desenvolvimento Mobile"
          description="utilizando o framework Expo."
          linkText="Saiba mais"
          effectColor="bg-zinc-950"
        />

        <ServiceCard
          className="services-5"
          title="NodeJs"
          icon={<FaNodeJs size={50} className="text-green-400" />}
          shortDescription="Desenvolvimento Backend"
          description="utilizando o runtime NodeJs."
          linkText="Saiba mais"
          effectColor="bg-green-400"
        />
      </div>
    </section>
  );
}
