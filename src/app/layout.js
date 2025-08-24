
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ToastProvider } from "@/context/ToastContext";

export const metadata = {
  title: "JingleGift KG",
  description: "Собери свою корзину сладостей",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <ToastProvider>
          <CartProvider>

            <main className="max-w-5xl mx-auto p-4">{children}</main>
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}



