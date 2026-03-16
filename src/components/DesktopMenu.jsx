import Link from "next/link";

export const DesktopMenu = ({ items }) => {
  return (
    <nav className="hidden md:flex items-center gap-6 transition-colors">
      {items.map((item) => (
        <Link 
          key={item.label}
          href={item.href}
          className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition font-sans"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}