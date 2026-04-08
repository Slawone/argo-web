import Link from 'next/link';
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="text-center min-h-[60vh] flex flex-col justify-center items-center gap-5 font-sans title-color bg-white dark:bg-black">
      <p>Извините, такой страницы не существует</p>
      <Link href="/" className='flex items-center gap-2'> <MoveLeft width={18} height={18} /> Вернуться на главную</Link>
    </div>
  );
}