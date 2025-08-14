"use client";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

export default function CandyCard({ candy }) {
  const { addItem } = useCart();
  const { showToast } = useToast();

  const handleAdd = () => {
    addItem({ ...candy, type: "candy" });
    showToast(`Добавлено: ${candy.name}`);
  };

  return (
    <div className="p-4 border rounded bg-white shadow flex flex-col gap-2">
         <img
        src={candy.image}
        alt={candy.name}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h3 className="font-bold">{candy.name}</h3>
      <button
        onClick={handleAdd}
        className="mt-2 px-3 py-1 rounded text-white bg-pink-500 hover:bg-pink-600"
      >
        Добавить
      </button>
    </div>
  );
}
