import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ToastProvider } from "@/context/ToastContext";
import Header from "@/components/Header";

export const metadata = {
  title: "Candy Shop",
  description: "Собери свою корзину сладостей",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <ToastProvider>
          <CartProvider>
            <Header />
            <main className="max-w-5xl mx-auto p-4">{children}</main>
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}



