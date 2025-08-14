"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">Candy Shop</Link>

        <nav className="flex items-center gap-4">
          <Link href="/" className="hover:underline">Каталог</Link>

          <Link href="/cart" className="relative inline-flex items-center gap-2">
            <span>Корзина</span>
            <span className="inline-flex min-w-5 h-5 items-center justify-center rounded-full text-xs bg-pink-600 text-white px-1">
              {count}
            </span>
          </Link>

          <span className="hidden sm:block text-sm text-gray-600">
            Итого: {total} сом
          </span>
        </nav>
      </div>
    </header>
  );
}
