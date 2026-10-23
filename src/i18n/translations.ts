import { SignatureDishes } from "../components/SignatureDishes";

export type Language ='en' | 'ne';
export interface Translations {
    nav:{
        home: string;
        menu:string;
        signatureDishes:string;
        gallery: string;
        reviews: string;
        offers:string;
        contact:string;
        qrCode:string;
    };
    hero:{
        subtitle:string;
        title:string;
        titleHighlight:string;
        description:string;
        exploreMenu: string;
        locationHours:string;
    };
    menu:{
        title:string;
        subtitle: string;
        searchPlaceholder:string;
        allCategories:string;
        vegOnly:string;
        addToCart:string;
        customize:string;
        downloadPdf:string;
        printMenu:string;
    };
    cart:{
        title:string;
        empty:string;
        subtotal: string;
        checkout: string;
        portion:string;
        spiceLevel:string;
        extras:string;
        remove: string;
    };
    qrModal:{
        title: string;
        instruction:string;
        downloadPng:string;
        printCard:string;
        close: string;
    };
}
export const translations: Record<Language, Translations> ={
    en:{
        nav:{
            home:'Home',
            menu:'Menu',
            signatureDishes:'Signature Dishes',
            gallery:'Gallery',
            reviews:'Reviews',
            offers:'Offers',
            contact:'Contact',
            qrCode:'QR Menu',
        },
        hero:{
            subtitle:'AUTHENTIC TANDOORI & FINE NEPALI CUISINE',
            title:'SAVOR THE RICH FLAVORS OF',
            titleHighlight: 'TRADITION',
            description:'Experience masterfully grilled tandoori specialties, aromatic curries, and freshly baked breads prepared with authentic spices and timeless passion.',
            exploreMenu:'Explore our Menu',
            locationHours:'Location & Hours',
        },
        menu:{
            title:'OUR EXQUISITE MENU',
            subtitle:'Handcrafted dishes prepared in traditional tandoor clay ovens and clay pots.',
            searchPlaceholder:'search dishes...',
            allCategories: 'All categories',
            vegOnly:'Vegetarian only',
            addToCart:'Add to Cart',
            customize:'Customize',
            downloadPdf:'Download PDF Menu',
            printMenu:'Print Menu',
        },
        cart:{
            title:'Your Order',
            empty:'Your cart is currently empty.',
            subtotal:'Subtotal',
            checkout:'Proceed to Checkout',
            portion:'Portion',
            spiceLevel:'Spice Level',
            extras:'Extras',
            remove:'Remove',
        },
        qrModal:{
            title:'Scan to View Our Menu',
            instruction:'Point your smartphone camera at this QR code to view our online menu and directly on your phone.',
            downloadPng:'download QR Code',
            printCard:'Print QR card',
            close:'Close',
        },
    },
    ne: {
    nav: {
      home: 'गृह',
      menu: 'मेनु',
      signatureDishes: 'विशेष परिकार',
      gallery: 'ग्यालरी',
      reviews: 'समीक्षा',
      offers: 'अफरहरू',
      contact: 'सम्पर्क',
      qrCode: 'क्युआर मेनु',
    },
    hero: {
      subtitle: 'प्रामाणिक तन्दुरी र उत्कृष्ट नेपाली परिकार',
      title: 'परम्परागत स्वादको',
      titleHighlight: 'आनन्द लिनुहोस्',
      description: 'माटोको तन्दुरमा पकाइएका स्वादिष्ट तन्दुरी, सुगन्धित करी र ताजा रोटीको अनुभव लिनुहोस्।',
      exploreMenu: 'मेनु हेर्नुहोस्',
      locationHours: 'स्थान र समय',
    },
    menu: {
      title: 'हाम्रो उत्कृष्ट मेनु',
      subtitle: 'परम्परागत माटोको तन्दुर र भाँडामा तयार पारिएका परिकारहरू।',
      searchPlaceholder: 'परिकार खोज्नुहोस्...',
      allCategories: 'सबै वर्गहरू',
      vegOnly: 'शाकाहारी मात्र',
      addToCart: 'कार्टमा थप्नुहोस्',
      customize: 'अनुकूलन गर्नुहोस्',
      downloadPdf: 'पिडिएफ मेनु डाउनलोड',
      printMenu: 'मेनु प्रिन्ट गर्नुहोस्',
    },
    cart: {
      title: 'तपाईंको अर्डर',
      empty: 'तपाईंको कार्ट खाली छ।',
      subtotal: 'जम्मा रकम',
      checkout: 'अर्डर अगाडि बढाउनुहोस्',
      portion: 'मात्रा',
      spiceLevel: 'पिरो तह',
      extras: 'थप वस्तुहरू',
      remove: 'हटाउनुहोस्',
    },
    qrModal: {
      title: 'हाम्रो मेनु हेर्न स्क्यान गर्नुहोस्',
      instruction: 'आफ्नो फोनमा मेनु हेर्नको लागि यो क्युआर कोड स्क्यान गर्नुहोस्।',
      downloadPng: 'क्युआर कोड डाउनलोड',
      printCard: 'क्युआर कार्ड प्रिन्ट',
      close: 'बन्द गर्नुहोस्',
    },
  },
};
export const getStoredLanguage =(): Language => {
    try{
        const saved= localStorage.getItem('tandoori_lang');
        return saved === 'ne' ? 'ne' : 'en';
    } catch{
        return 'en';
    }
};
export const setStoredLanguage =(lang: Language): void=>{
    try{
        localStorage.setItem('tandoori_lang', lang);
    } catch{

    }
};
