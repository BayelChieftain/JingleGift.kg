"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-red-600/80 backdrop-blur border-green-500 border-b">
      <div className="max-w-5xl text-white mx-auto px-4 py-3 flex items-center justify-between">
        {/* Текст показывается только на sm и выше */}
        <Link
          href="/"
          className="hidden sm:block font-bold text-lg"
        >
          Удивляем подарками с 2012 года!
        </Link>

        <nav className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-end">
          <Link href="/order" className="hover:underline">
            Заказ Подарков
          </Link>
        </nav>
      </div>
    </header>
  );
}
