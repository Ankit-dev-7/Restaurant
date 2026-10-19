import React, { useEffect } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC =() => {
    const{
        items,
        isCartOpen,
        setIsCartOpen,
        updateQuantity,
        removeItem,
    } = useCart();
    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

    useEffect(() => {
        const handleKeyDown =(e:KeyboardEvent) => {
            if (e.key === 'Escape' && isCartOpen) {
                setIsCartOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isCartOpen, setIsCartOpen]);

    if(!isCartOpen) return null;

    return(
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)} />

            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="w-screen max-w-md bg-[#0D0C0B] border-l border-[#39332F] text-[#F8F3EC] shadow-2xl flex flex-col">

                    <div className="p-6 border-b border-[#39332F] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <ShoppingBag className="w-5 h-5 text-[#E87532]" />
                            {React.createElement('h2', { className: 'font-serif text-xl font-bold tracking-wide' }, 'Your Order Selection')}
                            </div>
                            <button
                            onClick={() => setIsCartOpen(false)}
                            className="p-2 rounded-full text-[#B9B0A6] hover:text-[#F8F3EC] hover:bg-[#151311] transition-colors"
                            aria-label="Close cart">
                                <X className="w-5 h-5" />
                                </button>
                                </div>
                                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                    {items.length === 0 ? (
                                        <div className="text-center py-16">
                                            <ShoppingBag className="w-12 h-12 text-[#39332F] mx-auto mb-4" />
                                            <p className="text-[#B9B0A6] mb-6">Your order selection is currently empty.</p>
                                            <a
                                            href="#menu"
                                            onClick={() => setIsCartOpen(false)}
                                            className="inline-block px-6 py-2.5 rounded-full bg-[#E87532] text-[#F8F3EC] font-semibold text-sm hover:bg-[#B86F45] transition-colors"
                                            >
                                                Browse Menu 
                                            </a>
                                            </div>
                                    ): (
                                        items.map((item) => (
                                            <div
                                            key={item.id}
                                            className="p-4 rounded-xl bg-[#151311] border border-[#39332F] flex items-center justify-between gap-4">
                                                <div className="flex-1">
                                                    <h3 className="font-serif font-semibold text-[#F8F3EC] text-sm">{item.name}</h3>
                                                    <p className="text-xs text-[#E87532] mt-1 font-semibold">
                                                        NPR {item.price.toFixed(2)}
                                                    </p>
                                                    </div>

                                                    <div className="flex items-center gap-2 bg-[#0D0C0B] border border-[#39332F] rounded-lg p-1">
                                                        <button
                                                        onClick={() => updateQuantity(item.id, item.quantity-1)}
                                                        className="p-1 hover:text-[#E87532] transition-colors"
                                                        aria-label="Decrease quantity"
                                                        >
                                                            <Minus className="w-3.5 h-3.5"/>
                                                        </button>
                                                        <span className="text-xs font-semibold px-1 w-5 text-center">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:text-[#E87532] transition-colors"
                                                        aria-label="Increase quantity">
                                                            <Plus className="w-3.5 h-3.5" />
                                                        </button>
                                                        </div>

                                                        <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-[#B9B0A6] hover:text-red-400 transition-colors p-1"
                                                        aria-label="Remove item">
                                                            <Trash2 className="w-4 h-4"/>
                                                        </button>
</div>
                                        ))
                                    )}
                                </div>
{items.length > 0 && (
    <div className="p-6 border-t border-[#39332F] bg-[#151311]/80 space-y-4">
    <div className="flex justify-between items-center text-base">
    <span className="text-[#B9B0A6]">Total Subtotal</span>
    <span className="font-bold text-[#E87532] text-lg">
    NPR {subtotal.toFixed(2)}
    </span>
    </div>
    <p className="text-xs text-[#B9B0A6] text-center leading-relaxed">
    This selection is for review only. Direct order submission and payment processing are not supported online.
    </p>
    </div>
)}
          </div>
        </div>
    </div>                    
    );
};