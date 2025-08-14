"use client";
import { candies } from "@/data/candies";
import { baskets } from "@/data/baskets";
import { useCart } from "@/context/CartContext";

export default function Home() {
  const { addItem } = useCart();

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Конфеты</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {candies.map(candy => (
            <div key={candy.id} className="p-4 border rounded bg-white shadow">
              <h3 className="font-bold">{candy.name}</h3>
              <p>{candy.price} сом</p>
              <button
                onClick={() => addItem({ ...candy, type: "candy" })}
                className="mt-2 bg-pink-500 text-white px-3 py-1 rounded"
              >
                Добавить
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Готовые корзины</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {baskets.map(basket => (
            <div key={basket.id} className="p-4 border rounded bg-white shadow">
              <h3 className="font-bold">{basket.name}</h3>
              <p>{basket.price} сом</p>
              <button
                onClick={() => addItem({ ...basket, type: "basket" })}
                className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
              >
                Добавить
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
