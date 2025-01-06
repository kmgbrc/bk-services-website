import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

export default function CartIcon() {
  const { items, toggleCart } = useCartStore();
  
  return (
    <button 
      onClick={toggleCart}
      className="relative p-2 hover:text-[var(--accent)] transition-colors"
    >
      <ShoppingCart className="w-6 h-6" />
      {items.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-[var(--accent)] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {items.length}
        </span>
      )}
    </button>
  );
}