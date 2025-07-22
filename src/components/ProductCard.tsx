/* eslint-disable @next/next/no-img-element */
import { Card, CardContent, CardTitle } from "./ui/card";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Card className="border hover:scale-103 transition-transform duration-300 m-3">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <CardContent>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <p className="font-bold mt-2">R$ {product.price.toFixed(2)}</p>
      </CardContent>
    </Card>
  );
}
