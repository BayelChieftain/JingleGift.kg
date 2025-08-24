"use client";

import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { Snowflake } from "lucide-react";
import { motion } from "framer-motion";

export default function CandyCard({ candy }) {
  const { addItem } = useCart();
  const { showToast } = useToast();

  const handleAdd = () => {
    addItem({ ...candy, type: "candy" });
    showToast(`Добавлено: ${candy.name}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative p-4 border rounded-2xl bg-white shadow-md flex flex-col items-center text-center overflow-hidden"
    >
      {/* ❄️ Снежинки-декор */}
      <Snowflake className="absolute top-2 left-2 w-5 h-5 text-red-400/30 animate-spin-slow" />
      <Snowflake className="absolute bottom-2 right-2 w-6 h-6 text-green-400/30 animate-pulse" />

      {/* Фото конфет */}
      <img
        src={candy.image}
        alt={candy.name}
        className="w-24 h-24 object-contain mb-3"
      />

      {/* Название */}
      <h3 className="font-bold text-red-600 text-lg mb-2">{candy.name}</h3>

      {/* Кнопка */}
      <motion.button
        onClick={handleAdd}
        whileTap={{ scale: 0.95 }}
        className="mt-auto px-4 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-red-600 to-green-600 hover:from-red-500 hover:to-green-500 shadow"
      >
        🎁 Добавить
      </motion.button>
    </motion.div>
  );
}
