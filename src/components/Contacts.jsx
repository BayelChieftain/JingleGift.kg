"use client";

import { motion } from "framer-motion";
import { Snowflake, PhoneCall } from "lucide-react";

export default function Contacts() {
  return (
    <section className="relative text-center text-white py-16 overflow-hidden bg-gradient-to-r from-red-700 to-red-900">
      {/* ❄️ Анимированные снежинки */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white/40"
          initial={{ y: -50, x: Math.random() * 400 }}
          animate={{ y: "100vh" }}
          transition={{ duration: 8 + i, repeat: Infinity, delay: i * 0.8 }}
        >
          <Snowflake size={28} />
        </motion.div>
      ))}

      {/* Заголовок */}
      <motion.h2
        className="text-4xl font-bold mb-6 flex items-center justify-center gap-3 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <PhoneCall className="text-yellow-300" /> Контакты
      </motion.h2>

      {/* Адрес */}
      <motion.p
        className="text-lg mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
       Фрунзе 583
      </motion.p>

      {/* Телефоны */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="text-lg font-semibold text-yellow-300">
          Новогодний колл-центр
        </p>
        <p className="mt-2">WhatsApp</p>
        <p className="text-2xl font-extrabold mt-2">+996 (555) 138 989</p>
        <p className="text-2xl font-extrabold">0555 138 989</p>
      </motion.div>

      {/* Призыв */}
      <motion.p
        className="text-yellow-300 mt-10 font-semibold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Заказывайте легко, через наш сайт
      </motion.p>

      <motion.a
        href="https://jingle-gift-kg.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-3 text-2xl font-extrabold text-white hover:text-yellow-400 transition"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        jingle-gift.kg
      </motion.a>
    </section>
  );
}
