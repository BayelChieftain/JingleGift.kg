"use client";
import { useCart } from "@/context/CartContext";
import { formatWhatsAppMessage } from "@/utils/formatWhatsAppMessage";

export default function CartPage() {
  const { cart, addItem, removeItem, clearCart } = useCart();
  const phone = "996224020707";

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Ваша корзина</h1>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center border p-2 rounded bg-white shadow">
              <div>
                {item.name} x{item.qty} — {item.price * item.qty} сом
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
          <p className="font-bold">Итого: {total} сом</p>
          <a
            href={`https://wa.me/${phone}?text=${formatWhatsAppMessage(cart)}`}
            target="_blank"
            className="bg-green-600 text-white px-4 py-2 rounded block text-center"
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
