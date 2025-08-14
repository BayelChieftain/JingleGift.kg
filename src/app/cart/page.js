"use client";
import { useCart } from "@/context/CartContext";
import { formatWhatsAppMessage } from "@/utils/formatWhatsAppMessage";

export default function CartPage() {
  const { cart, addItem, removeItem, clearCart } = useCart();
  const phone = "996224020707";

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Считаем только конфеты
  const totalCandies = cart
    .filter(item => item.type === "candy")
    .reduce((sum, item) => sum + item.qty, 0);

  // Есть ли хотя бы одна готовая корзина?
  const hasBasket = cart.some(item => item.type === "basket");

  const minCandiesRequired = 7;
  const meetsCandyRequirement =
    hasBasket || totalCandies >= minCandiesRequired;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Ваша корзина</h1>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border p-2 rounded bg-white shadow"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <span>
                  {item.name} x{item.qty} 
                </span>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => removeItem(item.id, item.type)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  -
                </button>
                <button
                  onClick={() => addItem(item)}
                  className="px-2 py-1 bg-green-500 text-white rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          {meetsCandyRequirement ? (
            <p className="font-bold text-lg">
              Итого: {total} сом
            </p>
          ) : (
            <p className="text-red-600 font-semibold">
              Для оформления заказа необходимо выбрать минимум {minCandiesRequired} конфет.
              Сейчас выбрано {totalCandies}.
            </p>
          )}

          <a
            href={`https://wa.me/${phone}?text=${formatWhatsAppMessage(cart)}`}
            target="_blank"
            className={`px-4 py-2 rounded block text-center text-white ${
              meetsCandyRequirement
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 pointer-events-none"
            }`}
          >
            Заказать в WhatsApp
          </a>

          <button
            onClick={clearCart}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Очистить корзину
          </button>
        </div>
      )}
    </div>
  );
}
