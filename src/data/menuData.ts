export type MenuItem = {
  name: string;
  description: string;
  category: string;
  price?: string;
};

export const MVZMenuItems: MenuItem[] = [
  // Chaat Items
  {
    name: "Dahi Bhalla",
    description:
      "Fried lentil balls soaked in yogurt, topped with sweet chutney and spices.",
    category: "Chaat Items",
    price: "8.99",
  },
  {
    name: "Chat Papdi",
    description:
      "A crispy, savoury snack made with puffed puri, potatoes, chickpeas, and chutneys.",
    category: "Chaat Items",
    price: "8.99",
  },
  {
    name: "Dahi Puri",
    description:
      "Hollow puri filled with a mixture of potatoes, chickpeas, and yogurt.",
    category: "Chaat Items",
    price: "8.99",
  },
  {
    name: "Desi Ghee Tava Aloo Tikki",
    description:
      "Crispy potato patties with chutney, fresh yogurt, pomogranate, and spices.",
    category: "Chaat Items",
    price: "8.99",
  },
  {
    name: "Pani Puri",
    description:
      "Puri with a spiced water and a mixture of potatoes, chickpeas, and chutneys.",
    category: "Chaat Items",
    price: "8.99",
  },
  {
    name: "Samosa Chana Chat",
    description:
      "Crispy samosas served with chickpea gravy, chutneys, and spices",
    category: "Chaat Items",
    price: "8.99",
  },
  {
    name: "Bhalla Papdi Chat",
    description:
      "Puri Filled with a spicy water and mixture of potatoes, chickpeas, and chutneys.",
    category: "Chaat Items",
    price: "8.99",
  },

  // Snacks
  {
    name: "Rajma Rice",
    description: "Rice served with a rich and savoury kidney bean curry.",
    category: "Snacks",
    price: "8.99",
  },
  {
    name: "Chana Rice",
    description: "Rice served with chana masala (chickpea curry).",
    category: "Snacks",
    price: "8.99",
  },
  {
    name: "Kadhi Rice",
    description: "Rice served with spicy indian curry with some pakore",
    category: "Snacks",
    price: "8.99",
  },
  {
    name: "Pav Bhaji",
    description: "A spicy vegetable curry served with buttered bread rolls",
    category: "Snacks",
    price: "8.99",
  },
  {
    name: "Chana Kulcha",
    description: "Plain Indian bread served with a side of spiced chickpeas.",
    category: "Snacks",
    price: "8.99",
  },
  {
    name: "Stuffed Chana Kulcha",
    description:
      "Stuffed Indian bread filled with a mixture of spiced chickpeas",
    category: "Snacks",
    price: "8.99",
  },
  {
    name: "Daily Thali",
    description: "A thali selection from dal and today's selection of mains",
    category: "Snacks",
    price: "11.99",
  },

  // Burgers
  {
    name: "Aloo Tikki Burger",
    description: "A burger loaded with potato patties, paneer and veggies.",
    category: "Burgers",
    price: "8.99",
  },
  {
    name: "Noodle Burger",
    description:
      "A Indo Chinese burger loaded with noodles, potato patty and veggies.",
    category: "Burgers",
    price: "8.99",
  },
  {
    name: "Samosa Burger",
    description: "A burger loaded with samosa and veggies.",
    category: "Burgers",
    price: "8.99",
  },

  // Wraps
  {
    name: "Soya Chaap Wrap",
    description:
      "Grilled soya chaap strips with veggies and tangy sauce in a wrap",
    category: "Wraps",
    price: "8.99",
  },
  {
    name: "Paneer Wrap",
    description:
      "Marinated paneer cubes, fresh veggies and sauce wrapped in flatbread",
    category: "Wraps",
    price: "8.99",
  },
  {
    name: "Mushroom Wrap",
    description:
      "Sautéed mushrooms with peppers and greens in a soft tortilla wrap",
    category: "Wraps",
    price: "8.99",
  },

  // Indo-Chinese
  {
    name: "Noodles",
    description: "Stir fried noodles tossed with vegetables and savory sauce",
    category: "Indo-Chinese",
    price: "8.99",
  },
  {
    name: "Manchurian",
    description: "Crispy vegetable balls coated in a spicy Indo Chinese sauce",
    category: "Indo-Chinese",
    price: "8.99",
  },
  {
    name: "Spring Rolls",
    description:
      "Golden fried rolls stuffed with mixed veggies and served with dip",
    category: "Indo-Chinese",
    price: "8.99",
  },
  {
    name: "Cheese Chilli",
    description: "Crispy cheese cubes tossed in a sweet and spicy chilli sauce",
    category: "Indo-Chinese",
    price: "8.99",
  },
  {
    name: "Honey Chilli Potato",
    description: "Fried potato strips glazed in a sticky honey chilli sauce",
    category: "Indo-Chinese",
    price: "8.99",
  },
  {
    name: "Honey Chilli Gobi",
    description:
      "Crispy cauliflower florets coated in sweet and spicy chilli glaze",
    category: "Indo-Chinese",
    price: "8.99",
  },
  {
    name: "Honey Chilli Fries",
    description:
      "Hot fries drizzled with honey chilli sauce and garnished herbs",
    category: "Indo-Chinese",
    price: "8.99",
  },

  // Momos
  {
    name: "Steamed Momos",
    description:
      "Soft dumplings filled with spiced vegetables, steamed to perfection",
    category: "Momos",
    price: "8.99",
  },
  {
    name: "Fried Momo",
    description:
      "Golden fried dumplings with crunchy exterior and savory filling",
    category: "Momos",
    price: "8.99",
  },
  {
    name: "Kurkure Momos",
    description: "Crispy dumplings covered with spicy flavours and filling",
    category: "Momos",
    price: "8.99",
  },
  {
    name: "Tandoori Momos",
    description: "Chargrilled dumplings marinated in spicy tandoori sauce",
    category: "Momos",
    price: "8.99",
  },
  {
    name: "Chilli Momos",
    description: "Pan fried dumplings tossed in tangy chili indian sauce",
    category: "Momos",
    price: "8.99",
  },

  // Chaap & Tikka
  {
    name: "Malai Chaap",
    description: "Tender soya chaap soaked in creamy yogurt and mild spices",
    category: "Chaap & Tikka",
    price: "8.99",
  },
  {
    name: "Tandoori Chaap",
    description: "Soya chaap pieces grilled in smoky tandoori masala",
    category: "Chaap & Tikka",
    price: "8.99",
  },
  {
    name: "Achari Chaap",
    description: "Chaap marinated in tangy pickling spices and grilled",
    category: "Chaap & Tikka",
    price: "8.99",
  },
  {
    name: "Hariyali Chaap",
    description: "Herb marinated chaap grilled with fresh mint and cilantro",
    category: "Chaap & Tikka",
    price: "8.99",
  },

  // Sides
  {
    name: "Green Salad",
    description: "Fresh mixed greens and vegetables",
    category: "Sides",
    price: "0.99",
  },
  {
    name: "Macaroni Salad",
    description: "Creamy pasta salad with vegetables",
    category: "Sides",
    price: "0.99",
  },
  {
    name: "Raita",
    description: "Yogurt with cucumber and mild spices",
    category: "Sides",
    price: "0.99",
  },
  {
    name: "White Butter",
    description: "Freshly churned butter",
    category: "Sides",
    price: "0.99",
  },
  {
    name: "Papad",
    description: "Crispy lentil wafer",
    category: "Sides",
    price: "0.99",
  },
  {
    name: "Mint Chutney",
    description: "Fresh mint and cilantro sauce",
    category: "Sides",
    price: "0.99",
  },
  {
    name: "Sweet Chutney",
    description: "Tangy tamarind and date sauce",
    category: "Sides",
    price: "0.99",
  },

  // Mains
  {
    name: "Dal Makhani",
    description: "Creamy black lentils cooked with butter and aromatic spices",
    category: "Mains",
    price: "10.99",
  },
  {
    name: "Yellow Dal Tadka",
    description: "Yellow lentils tempered with mustard seeds and curry leaves",
    category: "Mains",
    price: "10.99",
  },
  {
    name: "Shahi Paneer",
    description: "Paneer cubes in a rich, creamy tomato-based gravy with nuts",
    category: "Mains",
    price: "10.99",
  },
  {
    name: "Kadhai Paneer",
    description: "Paneer cooked with bell peppers and onions in kadhai masala",
    category: "Mains",
    price: "10.99",
  },
  {
    name: "Chana Masala",
    description: "Tender chickpeas cooked in a mild, creamy white gravy",
    category: "Mains",
    price: "10.99",
  },
  {
    name: "Aloo Gobi",
    description: "Potatoes and cauliflower stir-fried with cumin and turmeric",
    category: "Mains",
    price: "10.99",
  },
  {
    name: "Soya Chaap Gravy",
    description: "Marinated soya nuggets served in a tangy tomato curry",
    category: "Mains",
    price: "10.99",
  },
  {
    name: "Baingan Bharta",
    description: "Smoky roasted eggplant mashed with onions and spices",
    category: "Mains",
    price: "10.99",
  },
  {
    name: "Matar Paneer",
    description: "Potato, peas, and paneer cooked in a lightly spiced gravy",
    category: "Mains",
    price: "10.99",
  },
  {
    name: "Malai Kofta",
    description: "Soft paneer vegetable dumplings in creamy cashew sauce",
    category: "Mains",
    price: "10.99",
  },
  {
    name: "Bhindi Do Pyaza",
    description: "Okra cooked with double onions and traditional spices",
    category: "Mains",
    price: "10.99",
  },
  {
    name: "Mushroom Do Pyaza",
    description: "Mushrooms stir-fried with onions in a savory masala",
    category: "Mains",
    price: "10.99",
  },
  {
    name: "Mix Veg",
    description: "Assorted seasonal vegetables cooked in flavorful spices",
    category: "Mains",
    price: "10.99",
  },
  {
    name: "Palak Paneer",
    description: "Spinach puree cooked with paneer and mild aromatic spices",
    category: "Mains",
    price: "10.99",
  },
  {
    name: "Methi Malai Mutter",
    description: "Fenugreek greens and peas in a creamy tomato sauce",
    category: "Mains",
    price: "10.99",
  },
  {
    name: "Cheese Chilli",
    description: "Crispy paneer tossed with peppers in a spicy chili sauce",
    category: "Mains",
    price: "10.99",
  },
  {
    name: "Paneer Bhurji",
    description:
      "Scrambled paneer or egg cooked with onions, tomatoes, and spices",
    category: "Mains",
    price: "10.99",
  },

  // Breads
  {
    name: "Plain Naan",
    description: "Soft leavened flatbread baked in tandoor",
    category: "Breads",
    price: "0.99",
  },
  {
    name: "Butter Naan",
    description: "Tandoor-baked naan brushed with melted butter",
    category: "Breads",
    price: "0.99",
  },
  {
    name: "Garlic Naan",
    description: "Naan topped with minced garlic baked in tandoor",
    category: "Breads",
    price: "0.99",
  },
  {
    name: "Garlic Chilli Naan",
    description: "Naan with garlic and chili flakes baked in tandoor",
    category: "Breads",
    price: "0.99",
  },
  {
    name: "Tava Roti",
    description: "Unleavened wheat flatbread cooked on a hot griddle",
    category: "Breads",
    price: "0.99",
  },
  {
    name: "Tandoori Roti",
    description: "Whole wheat flatbread baked directly in tandoor oven",
    category: "Breads",
    price: "0.99",
  },
  {
    name: "Missi Roti",
    description: "Mixed gram and wheat flour flatbread with spices",
    category: "Breads",
    price: "0.99",
  },
];

// List of menu categories for filtering/navigation
export const MVZMenuCategories = [
  "Chaat Items",
  "Snacks",
  "Burgers",
  "Wraps",
  "Indo-Chinese",
  "Momos",
  "Chaap & Tikka",
  "Sides",
  "Mains",
  "Breads",
];

// Menu featured items for homepage/marketing
export const MVZFeaturedItems = [
  "Dahi Bhalla",
  "Pani Puri",
  "Tandoori Momos",
  "Malai Chaap",
  "Dal Makhani",
  "Shahi Paneer",
];
