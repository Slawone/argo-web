import Link from "next/link";
import { Cases } from "@/components";
import { MotionFadeIn } from "@/components";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative z-0 px-4">
      <MotionFadeIn>
        <section className="text-center">Мы обновляем сайт</section>
      </MotionFadeIn>
      <MotionFadeIn delay={0.6}>
        <Hero />
        {/* <section className="border border-gray-700 w-full min-h-[600px] md:min-h-[800px]">
          <div className="">
            <h1 className="uppercase text-3xl text-dark dark:text-white">
              Больше, чем система хранения данных
            </h1>
            <p className="">
              ARGO.TECH с 2016 года разрабатывает отечественные
              сертифицированные программные решения для хранения и обработки
              данных, используемые в корпоративных и государственных ИТ-системах
            </p>
            <div className="">
              <button className="">Связаться</button>
              <Link href="/">Storage</Link>
            </div>
          </div>
        </section> */}
      </MotionFadeIn>
      <MotionFadeIn delay={0.6}>
        <Cases />
      </MotionFadeIn>
      <MotionFadeIn delay={0.9}>
        <section>
          <p>ХРАНЕНИЕ от Терабайтов до Зеттабайтов</p>
        </section>
      </MotionFadeIn>
    </main>
  );
}
