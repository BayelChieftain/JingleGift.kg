export function formatWhatsAppMessage(cart) {
  if (cart.length === 0) return "";

  let message = "Здравствуйте! Хочу заказать:\n";
  cart.forEach(item => {
    message += `${item.name} x${item.qty} \n`;
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  message += `\nИтого: ${total} сом`;

  return encodeURIComponent(message);
}
