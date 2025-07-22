import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">Minha Loja</div>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#" className="text-sm font-medium">
            Home
          </a>
          <a href="#" className="text-sm font-medium">
            Produtos
          </a>
          <a href="#" className="text-sm font-medium">
            Ofertas
          </a>
          <a href="#" className="text-sm font-medium">
            Lançamento
          </a>
        </nav>
        <button className="relative">
          <ShoppingCart className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
