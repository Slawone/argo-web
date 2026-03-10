import { Cases } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <section className="">
        <div className="">
          <h1 className="">Больше, чем система хранения данных</h1>
          <p className="">ARGO.TECH с 2016 года разрабатывает отечественные сертифицированные программные решения для хранения и обработки данных, используемые
            в корпоративных и государственных ИТ-системах
          </p>
          <div className="">
            <button className="">Связаться</button>
            <Link href="/">Storage</Link>
          </div>
        </div>
      </section>
      <Cases />
      <section>
        <p>ХРАНЕНИЕ от Терабайтов до Зеттабайтов</p>
      </section>
    </main>
  );
}
