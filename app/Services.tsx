"use client";
import ServiceCard from "@/components/ServiceCard";
import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

export default function Services() {
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
          title="ReactJs"
          icon={<FaReact size={50} className="text-sky-600" />}
          shortDescription="Desenvolvimento Web"
          description="utilizando a biblioteca ReactJs."
          linkText="Saiba mais"
          effectColor="bg-sky-600"
        />

        <ServiceCard
          title="NextJs"
          icon={<TbBrandNextjs size={50} className="text-zinc-600" />}
          shortDescription="Desenvolvimento Web"
          description="utilizando o framework NextJs."
          linkText="Saiba mais"
          effectColor="bg-zinc-600"
        />

        <ServiceCard
          title="React Native"
          icon={<FaReact size={50} className="text-teal-400" />}
          shortDescription="Desenvolvimento Mobile"
          description="utilizando a biblioteca React Native."
          linkText="Saiba mais"
          effectColor="bg-teal-400"
        />

        <ServiceCard
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
