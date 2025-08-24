"use client";
import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import { formatWhatsAppMessage } from "@/utils/formatWhatsAppMessage";
import { Snowflake } from "lucide-react";
import { motion } from "framer-motion";

export default function CartPage() {
  const { cart, addItem, removeItem, clearCart } = useCart();
  const phone = "996224020707";

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Считаем только конфеты
  const totalCandies = cart
    .filter((item) => item.type === "candy")
    .reduce((sum, item) => sum + item.qty, 0);

  // Есть ли хотя бы одна готовая корзина?
  const hasBasket = cart.some((item) => item.type === "basket");

  const minCandiesRequired = 7;
  const meetsCandyRequirement =
    hasBasket || totalCandies >= minCandiesRequired;

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />

      {/* ❄️ Снежинки-декор */}
      <Snowflake className="absolute top-6 left-6 w-6 h-6 text-red-400/30 animate-spin-slow" />
      <Snowflake className="absolute bottom-10 right-8 w-8 h-8 text-green-400/40 animate-pulse" />

      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          🎄 Ваша корзина 🎁
        </h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">
            Корзина пуста, добавьте сладости ✨
          </p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-between items-center border p-3 rounded-2xl bg-white shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-contain rounded"
                  />
                  <span className="font-semibold text-gray-800">
                    {item.name} ×{item.qty}
                  </span>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => removeItem(item.id, item.type)}
                    className="px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white"
                  >
                    -
                  </button>
                  <button
                    onClick={() => addItem(item)}
                    className="px-3 py-1 rounded-lg bg-green-500 hover:bg-green-600 text-white"
                  >
                    +
                  </button>
                </div>
              </motion.div>
            ))}

            {meetsCandyRequirement ? (
              <p className="font-bold text-lg text-center text-green-700 mt-4">
                🎁 Итого: {total} сом
              </p>
            ) : (
              <p className="text-red-600 font-semibold text-center mt-4">
                Для оформления заказа необходимо минимум {minCandiesRequired} конфет. <br />
                Сейчас выбрано {totalCandies}.
              </p>
            )}

            <motion.a
              href={`https://wa.me/${phone}?text=${formatWhatsAppMessage(cart)}`}
              target="_blank"
              whileTap={{ scale: 0.95 }}
              className={`block mt-6 px-6 py-3 rounded-xl text-center text-white font-bold shadow-lg transition ${
                meetsCandyRequirement
                  ? "bg-gradient-to-r from-green-600 to-red-600 hover:from-green-500 hover:to-red-500"
                  : "bg-gray-400 pointer-events-none"
              }`}
            >
              📲 Заказать в WhatsApp
            </motion.a>

            <button
              onClick={clearCart}
              className="w-full mt-3 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-xl transition"
            >
              Очистить корзину
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
