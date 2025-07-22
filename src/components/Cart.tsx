"use client";

import { useCart } from "@/contexts/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) return <p>Carrinho vazio.</p>;

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">Carrinho</h2>

      <ul className="space-y-2">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between items-center">
            <div>
              <p>{item.name}</p>
              <span className="text-sm text-gray-500">R$ {item.price.toFixed(2)}</span>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:underline"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-4 font-semibold">Total: R$ {total.toFixed(2)}</p>

      <button
        onClick={clearCart}
        className="mt-2 text-sm text-blue-600 hover:underline"
      >
        Limpar carrinho
      </button>
    </div>
  );
}
