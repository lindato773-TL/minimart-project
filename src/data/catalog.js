export const CATALOG = {
  all: { label: "All", emoji: "🛒", color: "#1a6640" },
  fruits: {
    label: "Fruits", emoji: "🍎", color: "#e74c3c",
    items: [
      { id: "f1", name: "Red Apple", emoji: "🍎", price: 3.99, unit: "kg", origin: "Canada" },
      { id: "f2", name: "Banana", emoji: "🍌", price: 2.49, unit: "bunch", origin: "Ecuador" },
      { id: "f3", name: "Mango", emoji: "🥭", price: 4.99, unit: "kg", origin: "Cambodia" },
      { id: "f4", name: "Watermelon", emoji: "🍉", price: 6.99, unit: "piece", origin: "Local" },
      { id: "f5", name: "Strawberry", emoji: "🍓", price: 5.49, unit: "500g", origin: "Local" },
      { id: "f6", name: "Pineapple", emoji: "🍍", price: 4.29, unit: "piece", origin: "Philippines" },
      { id: "f7", name: "Grapes", emoji: "🍇", price: 6.49, unit: "kg", origin: "Chile" },
      { id: "f8", name: "Orange", emoji: "🍊", price: 3.29, unit: "kg", origin: "Spain" },
      { id: "f9", name: "Blueberry", emoji: "🫐", price: 7.99, unit: "300g", origin: "Canada" },
      { id: "f10", name: "Peach", emoji: "🍑", price: 4.79, unit: "kg", origin: "Georgia" },
      { id: "f11", name: "Lemon", emoji: "🍋", price: 2.99, unit: "bag", origin: "Italy" },
      { id: "f12", name: "Cherry", emoji: "🍒", price: 8.99, unit: "500g", origin: "Turkey" },
    ]
  },
  vegetables: {
    label: "Vegetables", emoji: "🥦", color: "#27ae60",
    items: [
      { id: "v1", name: "Broccoli", emoji: "🥦", price: 2.99, unit: "head", origin: "Local" },
      { id: "v2", name: "Carrot", emoji: "🥕", price: 1.99, unit: "kg", origin: "Local" },
      { id: "v3", name: "Tomato", emoji: "🍅", price: 3.49, unit: "kg", origin: "Local" },
      { id: "v4", name: "Bell Pepper", emoji: "🫑", price: 2.79, unit: "kg", origin: "Mexico" },
      { id: "v5", name: "Spinach", emoji: "🥬", price: 2.49, unit: "200g", origin: "Local" },
      { id: "v6", name: "Onion", emoji: "🧅", price: 1.49, unit: "kg", origin: "Local" },
      { id: "v7", name: "Garlic", emoji: "🧄", price: 2.29, unit: "head", origin: "China" },
      { id: "v8", name: "Corn", emoji: "🌽", price: 1.99, unit: "piece", origin: "Local" },
      { id: "v9", name: "Potato", emoji: "🥔", price: 2.49, unit: "2kg", origin: "Local" },
      { id: "v10", name: "Beetroot", emoji: "🫚", price: 2.99, unit: "500g", origin: "Local" },
      { id: "v11", name: "Avocado", emoji: "🥑", price: 3.99, unit: "piece", origin: "Mexico" },
      { id: "v12", name: "Mushroom", emoji: "🍄", price: 3.79, unit: "250g", origin: "Local" },
    ]
  },
  dairy: {
    label: "Dairy", emoji: "🥛", color: "#3498db",
    items: [
      { id: "d1", name: "Whole Milk", emoji: "🥛", price: 3.49, unit: "1L", origin: "Local" },
      { id: "d2", name: "Cheddar Cheese", emoji: "🧀", price: 6.99, unit: "300g", origin: "Canada" },
      { id: "d3", name: "Greek Yogurt", emoji: "🫙", price: 4.29, unit: "500g", origin: "Greece" },
      { id: "d4", name: "Butter", emoji: "🧈", price: 4.99, unit: "250g", origin: "France" },
      { id: "d5", name: "Eggs", emoji: "🥚", price: 5.49, unit: "12 pcs", origin: "Local" },
      { id: "d6", name: "Cream Cheese", emoji: "🧁", price: 3.99, unit: "200g", origin: "USA" },
    ]
  },
  meat: {
    label: "Meat", emoji: "🥩", color: "#c0392b",
    items: [
      { id: "m1", name: "Beef Steak", emoji: "🥩", price: 14.99, unit: "500g", origin: "Canada" },
      { id: "m2", name: "Chicken Breast", emoji: "🍗", price: 8.99, unit: "kg", origin: "Local" },
      { id: "m3", name: "Pork Ribs", emoji: "🍖", price: 10.99, unit: "kg", origin: "Local" },
      { id: "m4", name: "Salmon Fillet", emoji: "🐟", price: 16.99, unit: "500g", origin: "Norway" },
      { id: "m5", name: "Shrimp", emoji: "🍤", price: 12.99, unit: "500g", origin: "Cambodia" },
      { id: "m6", name: "Lamb Chops", emoji: "🫀", price: 18.99, unit: "500g", origin: "New Zealand" },
    ]
  },
  bakery: {
    label: "Bakery", emoji: "🥐", color: "#d35400",
    items: [
      { id: "b1", name: "Croissant", emoji: "🥐", price: 2.99, unit: "piece", origin: "France" },
      { id: "b2", name: "Sourdough Bread", emoji: "🍞", price: 5.49, unit: "loaf", origin: "Local" },
      { id: "b3", name: "Bagel", emoji: "🥯", price: 3.29, unit: "4 pcs", origin: "Local" },
      { id: "b4", name: "Muffin", emoji: "🧁", price: 3.49, unit: "piece", origin: "Local" },
      { id: "b5", name: "Baguette", emoji: "🥖", price: 2.49, unit: "piece", origin: "France" },
      { id: "b6", name: "Donut", emoji: "🍩", price: 1.99, unit: "piece", origin: "Local" },
    ]
  },
  snacks: {
    label: "Snacks", emoji: "🍿", color: "#8e44ad",
    items: [
      { id: "s1", name: "Popcorn", emoji: "🍿", price: 3.49, unit: "150g", origin: "USA" },
      { id: "s2", name: "Chips", emoji: "🥔", price: 2.99, unit: "200g", origin: "USA" },
      { id: "s3", name: "Chocolate Bar", emoji: "🍫", price: 2.49, unit: "100g", origin: "Belgium" },
      { id: "s4", name: "Gummy Bears", emoji: "🐻", price: 3.99, unit: "250g", origin: "Germany" },
      { id: "s5", name: "Mixed Nuts", emoji: "🥜", price: 7.99, unit: "300g", origin: "Mixed" },
      { id: "s6", name: "Honey", emoji: "🍯", price: 8.49, unit: "500g", origin: "Local" },
    ]
  },
};

export const ALL_ITEMS = Object.entries(CATALOG)
  .filter(([k]) => k !== "all")
  .flatMap(([cat, data]) => data.items.map(item => ({ ...item, category: cat })));

export const formatPrice = (n) => `$${n.toFixed(2)}`; 