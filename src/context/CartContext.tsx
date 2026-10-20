import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, selectedCustomizations as SelectedCustomizations } from '../types';

interface CartContextType {
  items: CartItem[];
  addItem: (dish: { id: string; name: string; price: number }, customizations?: SelectedCustomizations, customUnitPrice?: number) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalQuantity: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
const generateCartItemId = (dishId: string, customizations?: SelectedCustomizations) => {
  if (!customizations) return `${dishId}_default`;
  const sizeKey = customizations.size?.id || 'std';
  const spiceKey = customizations.spiceLevel || 'none';
  const extrasKey = customizations.extras ? customizations.extras.map(e => e.id).sort().join(',') : 'none';
  return `${dishId}_${sizeKey}_${spiceKey}_${extrasKey}`;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('tandoori_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('tandoori_cart', JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [items]);

  const addItem = (
    dish: { id: string; name: string; price: number },
    customizations?: SelectedCustomizations,
    customUnitPrice?: number) => {
    const unitPrice = customUnitPrice !== undefined ? customUnitPrice : dish.price;
    const cartItemId = generateCartItemId(dish.id, customizations);

    setItems((prev) => {
      const existing = prev.find((item) => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: dish.id,
          cartItemId,
          name: dish.name,
          basePrice: dish.price,
          unitPrice,
          quantity: 1,
          customizations: customizations ?? ({} as SelectedCustomizations),
        },
      ];
    });
  };

  const removeItem = (cartItemId: string) => {
    setItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(cartItemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.cartItemId === cartItemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setItems([]);

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalQuantity,
        subtotal,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};