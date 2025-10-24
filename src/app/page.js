'use client';
import Contacts from "@/components/Contacts";
import Header from "@/components/Header";
import PartnersSection from "@/components/PartnersSection";
import ProductCard from "@/components/ProductCard";
import PromoBox from "@/components/PromoBox";
import { products } from "@/data/products";

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
      <Header />
      {/* Hero */}
      <section className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <img src="/images/IMG_6020_newlogo.jpg" alt="Logo" className="w-66 h-66 mb-4" />
        <h1 className="text-4xl font-bold text-red-600">
          Магазин сладостей
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Праздничные вкусы каждый день 🎄
        </p>
        <a
        href="#catalog"
        className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow-lg transition"
      >
        Смотреть каталог
        </a>
      </section>
      <PartnersSection />
      {/* товары */}
      <section className="px-4 py-10" id="catalog">
  <h2 className="text-2xl font-semibold text-red-600 border-b-4 border-green-500 inline-block mb-6">
    Наши корзины
  </h2>
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
    {products.map((item) => (
      <ProductCard key={item.id} product={item} />
    ))}
  </div>
</section>
      <PromoBox />
      <Contacts />
      {/* Бренды */}
      <section className="px-4 py-10 bg-red-50">
        <h2 className="text-2xl font-semibold text-center text-red-600 mb-6">
          Подарки от знаменитых брендов
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
