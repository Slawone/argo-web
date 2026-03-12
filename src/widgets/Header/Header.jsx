import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 py-6 bg-background">
      <div className="container flex items-center justify-between">
        <Link href={'/'} className="text-foreground uppercase font-bold text-3xl">
          Argo.tech
        </Link>
        <nav className="flex gap-5">
          <Link className="hover:text-white" href={'/storage'}>Storage</Link>
          <Link href={'/about'}>О нас</Link>
          <Link href={'/partners'}>Партнеры</Link>
        </nav>
        <button>Заказать демо</button>
      </div>
    </header>
  )
} 