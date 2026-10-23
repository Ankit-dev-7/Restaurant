export interface CustomizationOption{
  id:string;
  name:string;
  priceDelta: number;
} 
export interface DishCustomizationConfig {
  sizes?: CustomizationOption[];
  spiceLevels?: string[];
  extras?: CustomizationOption[];
}
export interface MenuItem{
  id:string;
  name: string;
  price: string;
  numericPrice: number;
  description?: string;
  isVeg: boolean;
  customization?: DishCustomizationConfig;
}
export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}
export const menuCategories: MenuCategory[] =[
  {
    id:'curries',
    title:'Non Veg. curry',
    items:[
      {
        id:'chicken-curry',
        name:'Chicken Curry',
        price:'NPR 375.00',
        numericPrice: 375,
        isVeg: false,
        customization: { spiceLevels:['Mild', 'Medium', 'Spicy']}
      },
      {
        id:'chicken-butter-masala',
        name:'Chicken Butter Masala',
        price: 'NPR 400.00',
        numericPrice: 400,
        isVeg: false,
        customization:{ spiceLevels:['Mild','Medium','Spicy']}
      },
      {
        id:'chicken-sagwala',
        name:'Chicken sagwala (seasonal)',
        price:'NPR 425.00',
        numericPrice: 425,
        isVeg: false
      },
      {
        id:'chicken-do-pyaza',
        name:'Chicken Do Pyaza',
        price:'NPR 400.00',
        numericPrice:400,
        isVeg:false
      },
      {
        id: 'chicken-dahiwala',
        name: 'Chicken Dahiwala',
        price: 'NPR 400.00',
        numericPrice: 400,
        isVeg: false
      },
      {
        id: 'butter-chicken-full',
        name: 'Butter Chicken - Full',
        price: 'NPR 1,550.00',
        numericPrice: 1550,
        isVeg: false,
        customization: {
          spiceLevels: ['Mild', 'Medium', 'Spicy'],
          extras: [{ id: 'extra-gravy', name: 'Extra Makhani Gravy', priceDelta: 150 }]
        }
      },
      {
        id: 'butter-chicken-half',
        name: 'Butter Chicken - Half',
        price: 'NPR 800.00',
        numericPrice: 800,
        isVeg: false,
        customization: {
          spiceLevels: ['Mild', 'Medium', 'Spicy']
        }
      },
      {
        id: 'butter-chicken-qtr',
        name: 'Butter Chicken - Qtr',
        price: 'NPR 450.00',
        numericPrice: 450,
        isVeg: false
      },
      {
        id: 'kadai-chicken',
        name: 'Kadai Chicken',
        price: 'NPR 400.00',
        numericPrice: 400,
        isVeg: false
      },
      {
        id: 'malai-chicken',
        name: 'Malai Chicken',
        price: 'NPR 450.00',
        numericPrice: 450,
        isVeg: false
      },
      {
        id: 'handi-chicken',
        name: 'Handi Chicken',
        price: 'NPR 400.00',
        numericPrice: 400,
        isVeg: false
      },
      {
        id: 'chicken-muglai',
        name: 'Chicken Muglai',
        price: 'NPR 450.00',
        numericPrice: 450,
        isVeg: false
      },
      {
        id: 'chicken-rara',
        name: 'Chicken Rara',
        price: 'NPR 425.00',
        numericPrice: 425,
        isVeg: false
      },
      {
        id: 'achari-chicken',
        name: 'Achari Chicken',
        price: 'NPR 450.00',
        numericPrice: 450,
        isVeg: false
      },
      {
        id: 'chicken-takatak',
        name: 'Chicken Takatak',
        price: 'NPR 450.00',
        numericPrice: 450,
        isVeg: false
      },
      {
        id: 'chicken-tikka-masala',
        name: 'Chicken Tikka Masala',
        price: 'NPR 450.00',
        numericPrice: 450,
        isVeg: false
      },
      {
        id: 'chicken-korma',
        name: 'Chicken Korma',
        price: 'NPR 475.00',
        numericPrice: 475,
        isVeg: false
      },
      {
        id: 'mutton-curry',
        name: 'Mutton Curry',
        price: 'NPR 500.00',
        numericPrice: 500,
        isVeg: false
      },
      {
        id: 'mutton-masala',
        name: 'Mutton Masala',
        price: 'NPR 525.00',
        numericPrice: 525,
        isVeg: false
      },
    ],
  },
  {
    id: 'breads',
    title: 'Tandoori Roti & Naan',
    items: [
      { id: 'tandoori-roti', name: 'Tandoori Roti', price: 'NPR 30.00', numericPrice: 30, isVeg: true },
      { id: 'butter-roti', name: 'Butter Roti', price: 'NPR 30.00', numericPrice: 30, isVeg: true },
      { id: 'plain-naan', name: 'Plain Naan', price: 'NPR 40.00', numericPrice: 40, isVeg: true },
      { 
        id: 'butter-naan', 
        name: 'Butter Naan', 
        price: 'NPR 70.00', 
        numericPrice: 70, 
        isVeg: true,
        customization: {
          extras: [{ id: 'extra-butter', name: 'Extra Butter Brush', priceDelta: 20 }]
        }
      },
      { id: 'lachchha-paratha', name: 'Lachchha Paratha', price: 'NPR 90.00', numericPrice: 90, isVeg: true },
      { id: 'aloo-paratha', name: 'Aloo Paratha', price: 'NPR 80.00', numericPrice: 80, isVeg: true },
      { 
        id: 'garlic-plain-naan', 
        name: 'Garlic Plain Naan', 
        price: 'NPR 120.00', 
        numericPrice: 120, 
        isVeg: true,
        customization: {
          extras: [{ id: 'extra-garlic', name: 'Extra Garlic & Herbs', priceDelta: 30 }]
        }
      },
      { 
        id: 'garlic-butter-naan', 
        name: 'Garlic Butter Naan', 
        price: 'NPR 150.00', 
        numericPrice: 150, 
        isVeg: true,
        customization: {
          extras: [{ id: 'cheese-stuffing', name: 'Melted Cheese Stuffing', priceDelta: 80 }]
        }
      },
      { id: 'masala-naan', name: 'Masala Naan', price: 'NPR 200.00', numericPrice: 200, isVeg: true },
      { id: 'paneer-naan', name: 'Paneer Naan', price: 'NPR 300.00', numericPrice: 300, isVeg: true },
      { id: 'chicken-keema-naan', name: 'Chicken Keema Naan', price: 'NPR 300.00', numericPrice: 300, isVeg: false },
    ],
  },
  {
    id: 'rice',
    title: 'Rice / Biryani / Pulau',
    items: [
      { id: 'plain-rice', name: 'Plain Rice', price: 'NPR 150.00', numericPrice: 150, isVeg: true },
      { id: 'jeera-rice', name: 'Jeera Rice', price: 'NPR 225.00', numericPrice: 225, isVeg: true },
      { id: 'veg-fried-rice', name: 'Veg. Fried Rice', price: 'NPR 250.00', numericPrice: 250, isVeg: true },
      { id: 'chicken-fried-rice', name: 'Chicken Fried Rice', price: 'NPR 350.00', numericPrice: 350, isVeg: false },
      { id: 'egg-fried-rice', name: 'Egg Fried Rice', price: 'NPR 300.00', numericPrice: 300, isVeg: false },
      { id: 'mix-fried-rice', name: 'Mix Fried Rice', price: 'NPR 400.00', numericPrice: 400, isVeg: false },
      { id: 'mutton-biryani', name: 'Mutton Biryani', price: 'NPR 550.00', numericPrice: 550, isVeg: false, customization: { spiceLevels: ['Mild', 'Medium', 'Spicy'] } },
      { id: 'chicken-tikka-biryani', name: 'Chicken Tikka Biryani', price: 'NPR 500.00', numericPrice: 500, isVeg: false, customization: { spiceLevels: ['Mild', 'Medium', 'Spicy'] } },
      { id: 'chicken-biryani', name: 'Chicken Biryani', price: 'NPR 450.00', numericPrice: 450, isVeg: false, customization: { spiceLevels: ['Mild', 'Medium', 'Spicy'] } },
      { id: 'egg-biryani', name: 'Egg Biryani', price: 'NPR 375.00', numericPrice: 375, isVeg: false },
      { id: 'veg-biryani', name: 'Veg. Biryani', price: 'NPR 360.00', numericPrice: 360, isVeg: true },
      { id: 'veg-pulau', name: 'Veg. Pulau', price: 'NPR 325.00', numericPrice: 325, isVeg: true },
    ],
  },
  {
    id: 'raita',
    title: 'Raita',
    items: [
      { id: 'aaloo-raita', name: 'Aaloo Raita', price: 'NPR 140.00', numericPrice: 140, isVeg: true },
      { id: 'mix-raita', name: 'Mix Raita', price: 'NPR 160.00', numericPrice: 160, isVeg: true },
      { id: 'cucumber-raita', name: 'Cucumber Raita', price: 'NPR 150.00', numericPrice: 150, isVeg: true },
      { id: 'onion-raita', name: 'Onion Raita', price: 'NPR 150.00', numericPrice: 150, isVeg: true },
      { id: 'dahi-sweet', name: 'Dahi (Sweet)', price: 'NPR 80.00', numericPrice: 80, isVeg: true },
    ],
  },
  {
    id: 'drinks',
    title: 'Shake & Lassi',
    items: [
      { id: 'oreo-shake', name: 'Oreo Milk Shake', price: 'NPR 300.00', numericPrice: 300, isVeg: true },
      { id: 'kitkat-shake', name: 'Kitkat Milk Shake', price: 'NPR 300.00', numericPrice: 300, isVeg: true },
      { id: 'mango-shake', name: 'Mango Milk Shake', price: 'NPR 300.00', numericPrice: 300, isVeg: true },
      { id: 'flavored-shake', name: 'Flavored Milk Shake', price: 'NPR 275.00', numericPrice: 275, isVeg: true },
      { id: 'banana-shake', name: 'Banana Milk Shake', price: 'NPR 250.00', numericPrice: 250, isVeg: true },
      { id: 'mix-lassi', name: 'Mix Lassi', price: 'NPR 250.00', numericPrice: 250, isVeg: true },
      { 
        id: 'mango-lassi', 
        name: 'Mango Lassi', 
        price: 'NPR 225.00', 
        numericPrice: 225, 
        isVeg: true,
        customization: {
          sizes: [
            { id: 'regular', name: 'Regular Glass', priceDelta: 0 },
            { id: 'large', name: 'Large Pitcher', priceDelta: 120 }
          ]
        }
      },
      { id: 'banana-lassi', name: 'Banana Lassi', price: 'NPR 160.00', numericPrice: 160, isVeg: true },
      { id: 'plain-lassi', name: 'Plain Lassi', price: 'NPR 130.00', numericPrice: 130, isVeg: true },
      { id: 'fresh-lime', name: 'Fresh Lime', price: 'NPR 120.00', numericPrice: 120, isVeg: true },
    ],
  },
];






















































































    