"use client";

import { Snowflake } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      className="relative bg-white border-2 border-transparent rounded-2xl shadow-lg hover:shadow-2xl transition p-6 max-w-3xl mx-auto overflow-hidden"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* ❄ Снежинки */}
      <Snowflake className="absolute -top-3 -left-3 text-red-200/40 w-8 h-8 animate-spin-slow" />
      <Snowflake className="absolute top-4 right-6 text-green-200/50 w-6 h-6 animate-pulse" />
      <Snowflake className="absolute bottom-4 left-1/4 text-blue-200/40 w-10 h-10 animate-bounce" />

      {/* Верхняя часть: картинка и инфо */}
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <img
          src={product.image}
          alt={product.title}
          className="w-40 h-56 object-contain drop-shadow-md"
        />

        <div className="flex-1 text-left">
          <h2 className="text-2xl font-bold text-red-600 mb-2 drop-shadow-sm">
            {product.title}
          </h2>
          <ul className="space-y-2 text-gray-700 mb-4">
            {product.features.map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-yellow-500">✦</span>
                {f}
              </li>
            ))}
          </ul>
          <p className="text-lg font-extrabold text-green-700">
            🎁 Цена: {product.price} сом
          </p>
          <p className="text-sm text-gray-500">
            Бесплатная доставка при заказе от 30 подарков 🚚
          </p>

          {/* Кнопка заказа */}
          <motion.a
            href={`https://wa.me/996555138989?text=Здравствуйте! Хочу заказать ${product.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-gradient-to-r from-red-500 to-green-600 text-white px-6 py-2 rounded-xl shadow hover:from-red-600 hover:to-green-700 transition font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Заказать в WhatsApp
          </motion.a>
        </div>
      </div>

      {/* Состав */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-purple-800 mb-4">🍬 Состав:</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {product.contents.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center bg-white/70 p-3 rounded-xl shadow-sm hover:shadow-md transition"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-16 object-contain mb-2"
              />
              <p className="text-sm text-gray-800 font-medium">{item.name}</p>
              <span className="text-xs text-gray-500">{item.count}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
