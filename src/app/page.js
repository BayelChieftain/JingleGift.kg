import PartnersSection from "@/components/PartnersSection";

export default function Home() {
  const brands = [
    "/images/rot-front.png",
    "/images/sladkanka.png",
    "/images/krasny-oct.svg",
    "/images/vaveks.svg",
    "/images/avk.jpg",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <img src="/images/main-logo.png" alt="Logo" className="w-66 h-42 mb-4" />
        <h1 className="text-4xl font-bold text-red-600">
          Магазин сладостей
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Праздничные вкусы каждый день 🎄
        </p>
        <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow-lg transition">
          Смотреть каталог
        </button>
      </section>
      <PartnersSection />
      {/* Категории / товары */}
      <section className="px-4 py-10">
        <h2 className="text-2xl font-semibold text-red-600 border-b-4 border-green-500 inline-block mb-6">
          Наши товары
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-white border rounded-xl p-4 shadow hover:shadow-lg transition">
            <img src="/candy1.jpg" alt="Candy" className="rounded-lg" />
            <h3 className="mt-3 font-semibold">Шоколадка</h3>
            <p className="text-gray-600">150 c</p>
          </div>
          <div className="bg-white border rounded-xl p-4 shadow hover:shadow-lg transition">
            <img src="/candy2.jpg" alt="Candy" className="rounded-lg" />
            <h3 className="mt-3 font-semibold">Конфеты</h3>
            <p className="text-gray-600">200 c</p>
          </div>
        </div>
      </section>

      {/* Бренды */}
      <section className="px-4 py-10 bg-red-50">
        <h2 className="text-2xl font-semibold text-center text-red-600 mb-6">
          Наши бренды
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
          {brands.map((src, i) => (
            <img key={i} src={src} alt="Brand" className="h-12 object-contain" />
          ))}
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-red-600 text-white py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 Магазин сладостей. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
