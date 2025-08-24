"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Snowflake } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { cart } = useCart();
  const count = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-red-600 via-red-500 to-green-600 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Логотип / Назад */}
        <Link
          href="/"
          className="font-bold text-lg flex items-center gap-2 hover:opacity-90 transition"
        >
          <Snowflake className="w-5 h-5 text-white/80" />
          На главную
        </Link>

        {/* Навигация */}
        <nav className="flex items-center gap-6">
          <Link
            href="/order"
            className="hover:underline underline-offset-4 font-medium"
          >
            🎄 Каталог
          </Link>

          {/* Корзина */}
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link
              href="/cart"
              className="relative flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl hover:bg-white/20 transition"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="font-medium">Корзина</span>
              {count > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex min-w-6 h-6 items-center justify-center rounded-full text-xs bg-yellow-400 text-black font-bold px-1 shadow">
                  {count}
                </span>
              )}
            </Link>
          </motion.div>
        </nav>
      </div>
    </header>
  );
}

