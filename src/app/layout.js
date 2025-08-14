import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Candy Shop",
  description: "Собери свою корзину сладостей",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <CartProvider>
          <Navbar />
          <main className="max-w-5xl mx-auto p-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}


