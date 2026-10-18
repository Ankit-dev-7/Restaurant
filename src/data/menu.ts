export interface MenuItem {
    name: string;
    price: string;
    description?: string;
    isVeg?: boolean;
}

export interface MenuCategory {
    id: string;
    title: string;
    items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
    {
        id: 'curries',
        title: 'Non Veg. curry',
        items: [
            { name: 'Chicken Curry', price: 'NPR 375.00', isVeg: false},
            { name: 'Chicken Butter Masala', price: 'NPR 400.00', isVeg: false},
            { name: 'Chicken Sagwala (seasonal)', price: 'NPR 425.00', isVeg: false},
            { name: 'Chicken Do Pyaza', price: 'NPR 400.00', isVeg: false },
      { name: 'Chicken Dahiwala', price: 'NPR 400.00', isVeg: false },
      { name: 'Butter Chicken - Full', price: 'NPR 1,550.00', isVeg: false },
      { name: 'Butter Chicken - Half', price: 'NPR 800.00', isVeg: false },
      { name: 'Butter Chicken - Qtr', price: 'NPR 450.00', isVeg: false },
      { name: 'Kadai Chicken', price: 'NPR 400.00', isVeg: false },
      { name: 'Malai Chicken', price: 'NPR 450.00', isVeg: false },
      { name: 'Handi Chicken', price: 'NPR 400.00', isVeg: false },
      { name: 'Chicken Muglai', price: 'NPR 450.00', isVeg: false },
      { name: 'Chicken Rara', price: 'NPR 425.00', isVeg: false },
      { name: 'Achari Chicken', price: 'NPR 450.00', isVeg: false },
      { name: 'Chicken Takatak', price: 'NPR 450.00', isVeg: false },
      { name: 'Chicken Tikka Masala', price: 'NPR 450.00', isVeg: false },
      { name: 'Chicken Korma', price: 'NPR 475.00', isVeg: false },
      { name: 'Mutton Curry', price: 'NPR 500.00', isVeg: false },
      { name: 'Mutton Masala', price: 'NPR 525.00', isVeg: false },
    ],
  },
       {
    id: 'breads',
    title: 'Tandoori Roti & Naan',
    items: [
      { name: 'Tandoori Roti', price: 'NPR 30.00', isVeg: true },
      { name: 'Butter Roti', price: 'NPR 30.00', isVeg: true },
      { name: 'Plain Naan', price: 'NPR 40.00', isVeg: true },
      { name: 'Butter Naan', price: 'NPR 70.00', isVeg: true },
      { name: 'Lachchha Paratha', price: 'NPR 90.00', isVeg: true },
      { name: 'Aloo Paratha', price: 'NPR 80.00', isVeg: true },
      { name: 'Garlic Plain Naan', price: 'NPR 120.00', isVeg: true },
      { name: 'Garlic Butter Naan', price: 'NPR 150.00', isVeg: true },
      { name: 'Masala Naan', price: 'NPR 200.00', isVeg: true },
      { name: 'Paneer Naan', price: 'NPR 300.00', isVeg: true },
      { name: 'Chicken Keema Naan', price: 'NPR 300.00', isVeg: false },
    ],
  },
  {
    id: 'rice',
    title: 'Rice / Biryani / Pulau',
    items: [
      { name: 'Plain Rice', price: 'NPR 150.00', isVeg: true },
      { name: 'Jeera Rice', price: 'NPR 225.00', isVeg: true },
      { name: 'Veg. Fried Rice', price: 'NPR 250.00', isVeg: true },
      { name: 'Chicken Fried Rice', price: 'NPR 350.00', isVeg: false },
      { name: 'Egg Fried Rice', price: 'NPR 300.00', isVeg: false },
      { name: 'Mix Fried Rice', price: 'NPR 400.00', isVeg: false },
      { name: 'Mutton Biryani', price: 'NPR 550.00', isVeg: false },
      { name: 'Chicken Tikka Biryani', price: 'NPR 500.00', isVeg: false },
      { name: 'Chicken Biryani', price: 'NPR 450.00', isVeg: false },
      { name: 'Egg Biryani', price: 'NPR 375.00', isVeg: false },
      { name: 'Veg. Biryani', price: 'NPR 360.00', isVeg: true },
      { name: 'Veg. Pulau', price: 'NPR 325.00', isVeg: true },
    ],
  },
  {
    id: 'raita',
    title: 'Raita',
    items: [
      { name: 'Aaloo Raita', price: 'NPR 140.00', isVeg: true },
      { name: 'Mix Raita', price: 'NPR 160.00', isVeg: true },
      { name: 'Cucumber Raita', price: 'NPR 150.00', isVeg: true },
      { name: 'Onion Raita', price: 'NPR 150.00', isVeg: true },
      { name: 'Dahi (Sweet)', price: 'NPR 80.00', isVeg: true },
    ],
  },
  {
    id: 'drinks',
    title: 'Shake & Lassi',
    items: [
      { name: 'Oreo Milk Shake', price: 'NPR 300.00', isVeg: true },
      { name: 'Kitkat Milk Shake', price: 'NPR 300.00', isVeg: true },
      { name: 'Mango Milk Shake', price: 'NPR 300.00', isVeg: true },
      { name: 'Flavored Milk Shake', price: 'NPR 275.00', isVeg: true },
      { name: 'Banana Milk Shake', price: 'NPR 250.00', isVeg: true },
      { name: 'Mix Lassi', price: 'NPR 250.00', isVeg: true },
      { name: 'Mango Lassi', price: 'NPR 225.00', isVeg: true },
      { name: 'Banana Lassi', price: 'NPR 160.00', isVeg: true },
      { name: 'Plain Lassi', price: 'NPR 130.00', isVeg: true },
      { name: 'Fresh Lime', price: 'NPR 120.00', isVeg: true },
    ],
  },
        ];

        
    