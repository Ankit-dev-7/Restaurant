export interface CustomizationOption{
    id:string;
    name: string;
    priceDelta: number;
}

export interface DishCustomizationConfig {
    sizes?: CustomizationOption [];
    spicelevels?: string[];
    extras?: CustomizationOption[];
}

export interface MenuItem{
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image?: boolean;
    customization?: DishCustomizationConfig;
}

export interface SelectCustomizations {
    size?: {id: string; name: string; priceDelta: number};
    spiceLevel?: string;
    extras?: {id: string; name: string; priceDelta: number} [];
}

export interface selectedCustomizations {
    size?:{ id:string; name: string; priceDelta: number };
    spiceLevel?: string;
    extras?: {id: string; name:string; priceDelta: number}[];
}

export interface CartItem {
    id: string;
    cartItemId: string;
    name: string;
    basePrice: number;
    unitPrice: number;
    quantity: number;
    customizations: selectedCustomizations;
}
