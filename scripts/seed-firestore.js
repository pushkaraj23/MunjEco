/**
 * Firestore seed script for MunjEco Global products
 * Run: node scripts/seed-firestore.js
 * Add documents manually in Firebase Console > Firestore > products
 */

const sampleProducts = [
  {
    name: "Bamboo Pen",
    slug: "bamboo-pen",
    category: "pens",
    description:
      "Premium bamboo pen with silver metal accents. Available with or without stylus. Custom engraving available. Ideal for corporate gifting.",
    specifications: {
      Material: "Natural bamboo",
      Options: "With / Without Stylus",
      Engraving: "Custom text available",
    },
    images: ["https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=800"],
    featured: true,
    createdAt: new Date(),
  },
  {
    name: "Bamboo Ring Pen",
    slug: "bamboo-ring-pen",
    category: "pens",
    description:
      "Corporate gifting pen with bamboo barrel and silver ring accents. Eco-friendly, reusable, biodegradable.",
    specifications: {
      Material: "Bamboo + metal accents",
      Use: "Corporate gifting",
      Finish: "Natural lacquer",
    },
    images: ["https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=800"],
    featured: true,
    createdAt: new Date(),
  },
  {
    name: "Bamboo Ink Pen",
    slug: "bamboo-ink-pen",
    category: "pens",
    description:
      "Executive ink pen. Premium bamboo body with gold accents. Fountain pen quality for everyday elegance.",
    specifications: {
      Material: "Bamboo + gold accents",
      Type: "Executive ink pen",
      Nib: "Silver",
    },
    images: ["https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=800"],
    featured: true,
    createdAt: new Date(),
  },
  {
    name: "Bamboo Diary",
    slug: "bamboo-diary",
    category: "stationery",
    description:
      "Spiral-bound bamboo diary with matching pen. Customize logo or text engravings. Perfect for corporate gifting.",
    specifications: {
      Material: "Bamboo covers",
      Binding: "Spiral",
      Customization: "Logo / text engraving",
    },
    images: ["https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800"],
    featured: true,
    createdAt: new Date(),
  },
  {
    name: "Bamboo Pencil",
    slug: "bamboo-pencil",
    category: "stationery",
    description:
      "Premium bamboo pencil with replaceable tip. Sustainable alternative for everyday writing.",
    specifications: {
      Material: "Natural bamboo",
      Feature: "Replaceable tip",
      Finish: "Natural",
    },
    images: ["https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800"],
    featured: false,
    createdAt: new Date(),
  },
  {
    name: "Bamboo Bottle",
    slug: "bamboo-bottle",
    category: "drinkware",
    description:
      "Triple-layer bamboo exterior with stainless steel interior. Capacity options: 500ml, 450ml, 350ml.",
    specifications: {
      Capacity: "500 / 450 / 350 ml",
      Outer: "Triple layer bamboo",
      Inner: "Stainless steel",
    },
    images: ["https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800"],
    featured: true,
    createdAt: new Date(),
  },
  {
    name: "Bamboo Cup",
    slug: "bamboo-cup",
    category: "drinkware",
    description:
      "Bamboo thermal mug. Triple-layer bamboo exterior, stainless steel interior. 300ml capacity.",
    specifications: {
      Capacity: "300 ml",
      Outer: "Triple layer bamboo",
      Inner: "Stainless steel",
    },
    images: ["https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800"],
    featured: false,
    createdAt: new Date(),
  },
];

console.log("Sample Firestore structure for 'products' collection:\n");
console.log(JSON.stringify(sampleProducts, null, 2));
console.log("\n---\nTo seed Firestore:");
console.log("1. Go to Firebase Console > Firestore Database");
console.log("2. Create collection 'products'");
console.log("3. Add documents with the structure above");
console.log("4. For createdAt, use Firestore Timestamp (or Server Timestamp)");
console.log("\nEnquiries collection will be created automatically when users submit forms.");
