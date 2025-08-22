// components/ProductCard.jsx
export default function ProductCard({ product }) {
  return (
    <div className="bg-white border rounded-2xl shadow hover:shadow-lg transition p-6 max-w-3xl mx-auto">
      {/* Верхняя часть: картинка и инфо */}
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <img
          src={product.image}
          alt={product.title}
          className="w-40 h-56 object-contain"
        />

        <div className="flex-1 text-left">
          <h2 className="text-xl font-bold text-red-600 mb-2">{product.title}</h2>
          <ul className="space-y-2 text-gray-700 mb-4">
            {product.features.map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-yellow-500">✦</span>
                {f}
              </li>
            ))}
          </ul>
          <p className="text-lg font-bold text-orange-600">
            Цена: {product.price} сом
          </p>
          <p className="text-sm text-gray-500">
            Бесплатная доставка по городу при заказе от 50 подарков
          </p>
        </div>
      </div>

      {/* Состав */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-purple-800 mb-4">Состав:</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {product.contents.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <img
                src={item.image}
                alt={item.name}
                className="h-16 object-contain mb-2"
              />
              <p className="text-sm text-gray-800 font-medium">{item.name}</p>
              <span className="text-xs text-gray-500">{item.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
