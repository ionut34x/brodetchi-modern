// SAMPLE PRODUCTS DATA
// Replace this with real data from your database
const productsData = [
    {
        id: 1,
        name: "Pâine Integrală Tradițională",
        category: "pain",
        price: 8.50,
        description: "Pâine integral făcută după rețeta tradițională cu sare și apă mineralizată",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=500&fit=crop",
        popular: true
    },
    {
        id: 2,
        name: "Croissant Unt Clasic",
        category: "viennoiserie",
        price: 12.00,
        description: "Croissant crocant cu unt autentoc, cu 72 straturi de aluat stratificat",
        image: "https://images.unsplash.com/photo-1585518419759-47bde3c59ce7?w=500&h=500&fit=crop",
        popular: true
    },
    {
        id: 3,
        name: "Prăjitura Ciocolată",
        category: "cake",
        price: 45.00,
        description: "Prăjitură din ciocolată belgiană cu mousse de ciocolată neagră și ganache",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop",
        popular: true
    },
    {
        id: 4,
        name: "Brioșă Coco",
        category: "viennoiserie",
        price: 6.50,
        description: "Brioșă moale cu cocos proaspăt și glazură de zahăr",
        image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&h=500&fit=crop",
        popular: false
    },
    {
        id: 5,
        name: "Baget Țară",
        category: "pain",
        price: 7.00,
        description: "Baget tradițional cu crustă crocantă și interior pufos",
        image: "https://images.unsplash.com/photo-1599599810694-d3fc7d5c9b1d?w=500&h=500&fit=crop",
        popular: false
    },
    {
        id: 6,
        name: "Tort Fructe Sezonale",
        category: "cake",
        price: 55.00,
        description: "Tort elegant decorat cu fructe proaspete și crem diplomat",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&h=500&fit=crop",
        popular: false
    },
    {
        id: 7,
        name: "Bomboane Handmade",
        category: "candy",
        price: 25.00,
        description: "Set de bomboane artizanale cu arome naturale și fine de ciocolată",
        image: "https://images.unsplash.com/photo-1599599810694-d3fc7d5c9b1d?w=500&h=500&fit=crop",
        popular: true
    },
    {
        id: 8,
        name: "Pain au Chocolat",
        category: "viennoiserie",
        price: 5.50,
        description: "Aluat foliat cu batonașe de ciocolată neagră selectă",
        image: "https://images.unsplash.com/photo-1599599810694-d3fc7d5c9b1d?w=500&h=500&fit=crop",
        popular: false
    },
    {
        id: 9,
        name: "Pâine Semințe",
        category: "pain",
        price: 10.00,
        description: "Pâine cu semințe diverse - floare soarelui, dovleac, in",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=500&fit=crop",
        popular: false
    },
    {
        id: 10,
        name: "Eclair Vanilia",
        category: "candy",
        price: 8.00,
        description: "Eclair cu crem de vanilie și glazură de ciocolată",
        image: "https://images.unsplash.com/photo-1599599810694-d3fc7d5c9b1d?w=500&h=500&fit=crop",
        popular: false
    },
    {
        id: 11,
        name: "Prăjitura Afrodita",
        category: "cake",
        price: 50.00,
        description: "Prăjitură cu iaurt grec și pistachio. Gust delicat și sofisticat",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop",
        popular: false
    },
    {
        id: 12,
        name: "Macarons Colorați",
        category: "candy",
        price: 30.00,
        description: "Set de 6 macarons cu arome naturale - frambuază, pistachio, lamaie",
        image: "https://images.unsplash.com/photo-1599599810694-d3fc7d5c9b1d?w=500&h=500&fit=crop",
        popular: true
    }
];

// SAMPLE LOCATIONS DATA
const locationsData = [
    {
        id: 1,
        name: "Brodetchi - Centru",
        address: "Strada Pușkin 10, Chișinău",
        phone: "+373 22 XXXXXX",
        hours: "Luni - Duminică: 6:00 - 21:00"
    },
    {
        id: 2,
        name: "Brodetchi - Botanica",
        address: "Bulevardul Ștefan cel Mare 50, Chișinău",
        phone: "+373 22 XXXXXX",
        hours: "Luni - Duminică: 6:00 - 21:00"
    },
    {
        id: 3,
        name: "Brodetchi - Ciocana",
        address: "Strada Independenței 75, Chișinău",
        phone: "+373 22 XXXXXX",
        hours: "Luni - Duminică: 6:00 - 20:00"
    },
    {
        id: 4,
        name: "Brodetchi - Rîșcani",
        address: "Str. Vasile Alecsandri 35, Chișinău",
        phone: "+373 22 XXXXXX",
        hours: "Luni - Duminică: 6:00 - 20:00"
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { productsData, locationsData };
}