"use client";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

export default function BasketCard({ basket }) {
  const { addItem } = useCart();
  const { showToast } = useToast();

  const handleAdd = () => {
    addItem({ ...basket, type: "basket" });
    showToast(`Добавлено: ${basket.name}`);
  };

  return (
    <div className="p-4 border rounded bg-white shadow flex flex-col gap-2">
        <img
        src={basket.image}
        alt={basket.name}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h3 className="font-bold">{basket.name}</h3>
      <div className="text-sm text-gray-700 mb-2">
        <p>Кол-во конфет: {basket.candiesCount}</p>
        <p>
          Состав:{" "}
          {basket.candiesList
            .map(c => `${c.name} ${c.qty}шт`)
            .join(", ")}
        </p>
      </div>
      <button
        onClick={handleAdd}
        className="mt-2 px-3 py-1 rounded text-white bg-green-500 hover:bg-green-600"
      >
        Добавить
      </button>
    </div>
  );
}
