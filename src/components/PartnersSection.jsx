"use client";

import { Snowflake } from "lucide-react";
import { motion } from "framer-motion";

export default function PartnersSection() {
  const candyBrands = [
    "/images/sladkanka.png",
    "/images/rot-front.png",
    "/images/krasny-oct.svg",
    "/images/avk.jpg",
    "/images/vaveks.svg",
    "/images/konti.png",
  ];


  return (
    <section className="relative px-4 py-16 bg-gradient-to-r from-red-50 via-white to-green-50 overflow-hidden">
      {/* ❄ Снежинки на фоне */}
      <Snowflake className="absolute top-6 left-6 text-red-200/40 w-10 h-10 animate-spin-slow" />
      <Snowflake className="absolute top-12 right-12 text-green-200/40 w-8 h-8 animate-pulse" />
      <Snowflake className="absolute bottom-8 left-1/3 text-blue-200/30 w-12 h-12 animate-bounce" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Заголовок */}
        <motion.h2
          className="text-3xl font-extrabold text-center text-red-600 drop-shadow mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🎄 УВАЖАЕМЫЕ ПАРТНЕРЫ 🎄
        </motion.h2>

        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10 text-lg">
          Скоро <span className="font-bold text-green-600">Новый Год 2026</span> – пора
          заказывать сладкие подарки!  
          Красочная упаковка, лучшие конфеты и бесплатная доставка 🎁
        </p>

        {/* Конфеты */}
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          В составе только лучшие конфеты:
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center mb-12">
          {candyBrands.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt="Candy brand"
              className="h-12 object-contain"
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>

        {/* Условия */}
        <motion.div
          className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-red-600 mb-4 text-center">
            Доступная цена и бесплатная доставка
          </h3>
          <p className="text-gray-700 mb-4">
            🎁 Подарки от 780 г до 1,8 кг, стоимость от 250 сом.  
            Корпоративные подарки, картонные коробки и мешковина — на выбор.
          </p>
          <p className="text-gray-700">
            🛒 Бесплатная доставка при заказе от 30 подарков.  
            ✔ Все документы для юр. лиц.  
            ✔ Оплата наличными или по безналу.
          </p>
        </motion.div>

        {/* Контакты */}
        <div className="text-center">
          <p className="font-bold text-red-600 text-lg mb-2">
            Мы поможем выбрать лучшие подарки 🎅
          </p>
          <p className="text-gray-800 text-lg">
            📞 +996 555 138 989, +0(555)138989
          </p>
        </div>
      </div>
    </section>
  );
}
