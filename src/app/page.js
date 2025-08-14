"use client";
import { candies } from "@/data/candies";
import { baskets } from "@/data/baskets";
import CandyCard from "@/components/CandyCard";
import BasketCard from "@/components/BasketCard";

export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Конфеты</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {candies.map(candy => (
            <CandyCard key={candy.id} candy={candy} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Готовые корзины</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {baskets.map(basket => (
            <BasketCard key={basket.id} basket={basket} />
          ))}
        </div>
      </section>
    </div>
  );
}
