import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem{
id: string;
name: string;
price: number;
quantity: number;
}

interface CartContextType{
    items: CartItem[];
    addItem: (dish: {id:string; name: string; price:number}) => void;
    removeItem:(id: string) => void;
    updateQuantity: (id: string, quantity:number) => void;
    clearCart: () => void;
    isCartOpen: boolean;
    setIsCartOpen:(open: boolean) => void;
    totalQuantity: number;
    subTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode}>= ({children}) => {
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

    const addItem = (dish: { id: string; name: string; price: number }) => {
        setItems((prev) => {
            const existing = prev.find((item) => item.id === dish.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...dish, quantity: 1 }];
        });
    };

    const removeItem = (id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) {
            removeItem(id);
            return;
        }
        setItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, quantity } : item))
        );
    };

    const clearCart = () => setItems([]);

    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const subTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
                subTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart =() =>{
    const context = useContext(CartContext);
    if(!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};


