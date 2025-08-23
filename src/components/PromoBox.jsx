"use client";

import { Snowflake } from "lucide-react";
import { motion } from "framer-motion";

export default function PromoBox() {
  return (
    <section className="relative bg-gradient-to-r from-red-600 to-green-600 text-white py-16 px-6 rounded-2xl shadow-xl overflow-hidden text-center mb-8">
      {/* Снежинки на фоне */}
      <Snowflake className="absolute top-6 left-6 text-white/30 w-10 h-10 animate-spin-slow" />
      <Snowflake className="absolute top-12 right-12 text-white/30 w-8 h-8 animate-pulse" />
      <Snowflake className="absolute bottom-8 left-1/3 text-white/20 w-12 h-12 animate-bounce" />

      {/* Контент */}
      <motion.h2
        className="text-4xl font-extrabold mb-4 drop-shadow-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Создай свой идеальный подарок 🎁
      </motion.h2>

      <p className="max-w-2xl mx-auto text-lg mb-8 text-white/90">
        Собери корзину из любимых сладостей или доверься нам и закажи{" "}
        <span className="font-bold text-yellow-300">Mystery Box</span>, полный
        новогодней магии ✨
      </p>

      {/* Кнопки */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.a
          href="/order"
          className="bg-yellow-400 text-red-700 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-300 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🎄 Собрать свою корзину
        </motion.a>

        <motion.a
          href="https://wa.me/996555300555?text=Хочу%20Mystery%20Box%20🎁"
          className="bg-white text-green-700 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🎁 Заказать Mystery Box
        </motion.a>
      </div>
    </section>
  );
}
