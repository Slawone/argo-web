"use client";

import { useOrderForm } from "@/components";
import { Button } from "@/ui";

export const PartnersHero = () => {
  const { open } = useOrderForm();

  return (
    <section className="page-container section-border relative">
      <div className="section-py flex flex-col items-center px-4">
        <h1 className="text-center title-color font-medium uppercase leading-[130%] text-[24px] md:text-5xl mb-2.5 md:m-5">
          Партнерство в создании продуктов
        </h1>
        <p className="text-color font-light main-text text-center mb-5 md:mb-10 max-w-125">
          <span className="title-color">Мы не просто партнёры —</span>
           мы союзники в создании технологической  независимости.
          Совместная разработка, идеальная совместимость,  экономия ресурсов и
          партнёрство, которое не заканчивается.
        </p>
        <Button variant="primary" onClick={() => open("Стать партнером")}>
          Стать партнером
        </Button>
      </div>
    </section>
  );
};

export default PartnersHero;
