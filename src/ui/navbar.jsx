import Image from "next/image";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-black text-black dark:text-zinc-50 sticky top-0 z-10 h-20 w-full border-b border-b-solid border-b-black/8 dark:border-b-white/14">
      <div className="flex max-w-7xl h-full mx-auto px-4 justify-between items-center">
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="Логотип ARGO.TECH"
          width={150}
          height={20}
          priority
        />
        <ThemeToggle />
      </div>
    </nav>
  );
}
