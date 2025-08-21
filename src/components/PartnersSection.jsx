// components/PartnersSection.jsx
export default function PartnersSection() {
  const candyBrands = [
    "/images/sladkanka.png",
    "/images/rot-front.png",
    "/images/krasny-oct.svg",
    "/images/avk.jpg",
    "/images/vaveks.svg",
    "/images/konti.png",
  ];

  const partners = [
    "/images/aua.png",
    "/images/toyota.png",
    "/images/podarki.png",
    "/images/rosneft.png",
    "/images/red-petroleum.png",
  ];

  return (
    <section className="px-4 py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Заголовок */}
        <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">
          УВАЖАЕМЫЕ ПАРТНЕРЫ, Скоро Новый Год – пора заказывать новогодние сладкие подарки 2026!
        </h2>
        
        <p className="text-gray-700 w-2xl mb-8">
          У вас есть возможность приобрести разнообразные сладкие подарки в красочной
          яркой упаковке от компании <span className="font-semibold">Podarki.kg</span>
        </p>

        {/* Конфеты */}
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          В составе только лучшие и самые вкусные конфеты ведущих производителей:
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mt-10 gap-6 place-items-center mb-10">
          {candyBrands.map((src, i) => (
            <img key={i} src={src} alt="Candy brand" className="h-12 object-contain" />
          ))}
        </div>

        {/* Условия */}
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          ДОСТУПНАЯ ЦЕНА И БЕСПЛАТНАЯ ДОСТАВКА
        </h3>
        <p className="text-gray-700 mb-4">
          Стоимость подарка может быть - от доступной до элитной - весом от 780 грамм до 1,8 килограмм и стоимостью от 250 сомов. Только у нас Вы сможете приобрести около 7 видов подарков (картон, мешковина). Вас порадуют корпоративные Новогодние подарки, также мы предоставляем бесплатную оперативную доставку подарков, если заказ идет свыше 30 подарков.
Мы предоставляем все стандартные закрывающие документы, которые предусмотрены действующим законодательством Кыргызской Республики.
        </p>
        <p className="text-gray-700 mb-8">
          МЫ ПРИНИМАЕМ ОПЛАТУ БЕЗНАЛИЧНЫМ ПЕРЕЧИСЛЕНИЕМ И НАЛИЧНЫМИ
        </p>

        {/* Контакты */}
        <p className="font-bold text-red-600 text-lg mb-2">
          МЫ ПОМОЖЕМ ВАМ В ВЫБОРЕ ЛУЧШИХ НОВОГОДНИХ ПОДАРКОВ!
        </p>
        <p className="text-gray-800">
          +996 (555) 300 555, +996 (774) 766 766
        </p>
        

        
      </div>
    </section>
  );
}
