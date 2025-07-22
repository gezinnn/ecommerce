"use client";

import { useState } from "react";
import type { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function ProductClient({ product }: Props) {
  const [cart, setCart] = useState<Product[]>([]); // simulação

  const handleAddToCart = () => {
    setCart((prev) => [...prev, product]);
    console.log("Adicionado ao carrinho:", product.name);
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>

      <button onClick={handleAddToCart}>
        Adicionar ao carrinho
      </button>
    </div>
  );
}
