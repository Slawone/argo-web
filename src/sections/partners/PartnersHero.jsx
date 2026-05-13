"use client";

import { useState } from "react";
import { OrderForm } from "@/components";
import { Button } from "@/ui";

export const PartnersHero = () => {
  const [formOpen, setformOpen] = useState(false);

  return (
    <section className="page-container section-border relative">
      <div className="section-py flex flex-col items-center px-4">
        <h1 className="text-center title-color font-medium uppercase leading-[130%] text-[24px] md:text-5xl mb-2.5 md:m-5">Партнерство в создании продуктов</h1>
        <p className="text-color font-light main-text text-center mb-5 md:mb-10 max-w-125">
          <span className="title-color">Мы не просто партнёры —</span> мы союзники в создании технологической 
          независимости. Совместная разработка, идеальная совместимость, 
          экономия ресурсов и партнёрство, которое не заканчивается.
        </p>
        <Button variant="primary" onClick={() => setformOpen(true)}>Стать партнером</Button>
      </div>
      <OrderForm isOpen={formOpen} onClose={() => setformOpen(false)} />
    </section>
  );
};

export default PartnersHero;
