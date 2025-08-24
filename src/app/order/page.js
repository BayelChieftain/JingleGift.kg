"use client";
import { candies } from "@/data/candies";
import { baskets } from "@/data/baskets";
import CandyCard from "@/components/CandyCard";
import BasketCard from "@/components/BasketCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="space-y-8">
      <Navbar />
      <section>
        <h2 className="text-2xl font-bold mb-4">Конфеты</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {candies.map(candy => (
            <CandyCard key={candy.id} candy={candy} />
          ))}
        </div>
      </section>

     
    </div>
  );
}
