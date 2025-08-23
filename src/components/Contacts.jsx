// components/Contacts.jsx
export default function Contacts() {
  return (
    <section className="bg-red-900 text-center text-white py-12 relative overflow-hidden">
      {/* Декор снежинки можно добавить через absolute bg-icons */}
      
      <h2 className="text-3xl font-bold mb-6">Контакты</h2>
      
      <p className="text-lg mb-2">
        ул. Московская 189., <br /> пер. ул. Турусбекова
      </p>

      <div className="mt-6">
        <p className="text-lg font-semibold">Новогодний колл-центр</p>
        <p className="mt-2">WhatsApp</p>
        <p className="text-xl font-bold mt-2">+996 (555) 300 555</p>
        <p className="text-xl font-bold">+996 (774) 766 766</p>
      </div>

      <p className="text-yellow-300 mt-8 font-semibold">
        Заказывайте легко, через наш сайт
      </p>

      <a
        href="https://www.podarki.kg"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-2 text-2xl font-extrabold text-white hover:text-yellow-400 transition"
      >
        www.podarki.kg
      </a>
    </section>
  );
}
