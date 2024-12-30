type MenuItem = {
  name: string;
  description: string;
  category: string;
};

export const FoodTruckMenuItems: MenuItem[] = [
  {
    name: "Chat Papri",
    description:
      "A crispy, savory snack made with puffed puri, potatoes, chickpeas, and chutneys.",
    category: "Snacks",
  },
  {
    name: "Dahi Puri",
    description:
      "Hollow puri filled with a mixture of potatoes, chickpeas, and yogurt.",
    category: "Snacks",
  },
  {
    name: "Dahi Bhalla",
    description:
      "Fried lentil balls soaked in yogurt, tamarind chutney, and spices.",
    category: "Snacks",
  },
  {
    name: "Pani Puri",
    description:
      "Hollow puri filled with a spiced water and a mixture of potatoes, chickpeas, and chutneys.",
    category: "Snacks",
  },
  {
    name: "Samosa Chana Chat",
    description: "Crispy samosas served with chickpeas, chutneys, and spices.",
    category: "Snacks",
  },
  {
    name: "Noodle Burger",
    description: "A unique burger made with noodles as the patty.",
    category: "Main Course",
  },
  {
    name: "Tandoori Soya Chaap",
    description:
      "Grilled marinated soy protein, a popular vegetarian alternative to meat.",
    category: "Main Course",
  },
  {
    name: "Stuff Chana Kulcha",
    description: "A stuffed Indian bread filled with spiced chickpeas.",
    category: "Main Course",
  },
  {
    name: "Chana Kulcha",
    description: "A plain Indian bread served with a side of spiced chickpeas.",
    category: "Main Course",
  },
  {
    name: "Chaap Kulcha",
    description: "A stuffed Indian bread filled with marinated soy protein.",
    category: "Main Course",
  },
  {
    name: "Aloo Tikki Burger",
    description: "A veggie burger made with potato patties.",
    category: "Main Course",
  },
  {
    name: "Chana (Chickpea) Rice",
    description: "Rice cooked with spiced chickpeas.",
    category: "Main Course",
  },
  {
    name: "Rajma (Kidney Beans) Rice",
    description: "Rice cooked with spiced kidney beans.",
    category: "Main Course",
  },
  {
    name: "Dal Makhani with Plain Paratha",
    description: "Creamy lentils served with a plain Indian bread.",
    category: "Main Course",
  },
  {
    name: "Stuffed Parantha (Naan)",
    description: "A stuffed Indian flatbread served with butter and yogurt.",
    category: "Main Course",
  },
  {
    name: "Orange Juice",
    description: "Freshly squeezed orange juice.",
    category: "Drinks",
  },
  {
    name: "Mix Fruit Juice",
    description: "A blend of orange, apple, pineapple, and carrot juices.",
    category: "Drinks",
  },
  {
    name: "Pepsi",
    description: "A carbonated soft drink.",
    category: "Drinks",
  },
  {
    name: "Water Bottle",
    description: "Bottled water.",
    category: "Drinks",
  },
  {
    name: "Keser Milk Bodam",
    description: "A sweet, saffron-flavored milk drink.",
    category: "Drinks",
  },
];

export const CateringMenuItems: MenuItem[] = [
  // Page 1
  {
    name: "Dahi Bhalla",
    description: "Yogurt and lentil fritters",
    category: "Appetizers",
  },
  {
    name: "Chat Papdi",
    description:
      "A crispy, savory snack made with puffed puri, potatoes, chickpeas, and chutneys.",
    category: "Appetizers",
  },
  {
    name: "Dahi Puri",
    description:
      "Hollow puri filled with a mixture of potatoes, chickpeas, and yogurt.",
    category: "Appetizers",
  },
  {
    name: "Pani Puri",
    description:
      "Hollow puri filled with a spiced water and a mixture of potatoes, chickpeas, and chutneys.",
    category: "Appetizers",
  },
  {
    name: "Samosa Chana Chat",
    description: "Crispy samosas served with chickpeas, chutneys, and spices.",
    category: "Appetizers",
  },
  {
    name: "Desi Ghee Aloo Tikki Chat",
    description:
      "Potato patties cooked in ghee, served with chickpeas and chutneys.",
    category: "Appetizers",
  },
  {
    name: "Steamed Momos",
    description: "Steamed dumplings filled with vegetables or meat.",
    category: "Appetizers",
  },
  {
    name: "Fried Momos",
    description: "Pan-fried dumplings filled with vegetables or meat.",
    category: "Appetizers",
  },
  {
    name: "Fries",
    description: "French fries",
    category: "Appetizers",
  },
  {
    name: "Masala Fries",
    description: "French fries seasoned with Indian spices.",
    category: "Appetizers",
  },
  {
    name: "Loaded Fries",
    description: "French fries topped with cheese, bacon, and other toppings.",
    category: "Appetizers",
  },
  {
    name: "Poutine",
    description: "French fries topped with cheese curds and gravy.",
    category: "Appetizers",
  },
  {
    name: "Cheese Fingers",
    description: "Deep-fried cheese sticks.",
    category: "Appetizers",
  },
  {
    name: "Hara Bhara Kabab",
    description: "Vegetable patties made with spinach and other greens.",
    category: "Appetizers",
  },
  {
    name: "Veg Cheese Cutlet",
    description: "Vegetable cutlets with cheese filling.",
    category: "Appetizers",
  },
  {
    name: "Bread Cheese Corn Roll",
    description: "Bread rolls filled with cheese and corn.",
    category: "Appetizers",
  },
  {
    name: "Rajma Rice",
    description: "Rice cooked with kidney beans.",
    category: "Mains",
  },
  {
    name: "Chana Rice",
    description: "Rice cooked with chickpeas.",
    category: "Mains",
  },
  {
    name: "Pav Bhaji",
    description: "A spicy vegetable curry served with bread rolls.",
    category: "Mains",
  },
  {
    name: "Chana Kulcha",
    description: "Indian bread filled with spiced chickpeas.",
    category: "Mains",
  },
  {
    name: "Stuffed Chana Kulcha",
    description: "Indian bread filled with spiced chickpeas.",
    category: "Mains",
  },
  {
    name: "Tandoori Soya Chaap",
    description: "Grilled marinated soy protein.",
    category: "Mains",
  },
  {
    name: "Tava Soya Chaap + Kulcha",
    description: "Soya chaap cooked on a tava (griddle) served with kulcha.",
    category: "Mains",
  },
  {
    name: "Tava Soya Chaap + Lachha P.",
    description: "Soya chaap cooked on a tava served with lachha paratha.",
    category: "Mains",
  },
  {
    name: "Soya Chaap Rolls",
    description: "Soya chaap wrapped in roti.",
    category: "Mains",
  },
  {
    name: "Paneer Rolls",
    description: "Paneer (Indian cheese) wrapped in roti.",
    category: "Mains",
  },
  {
    name: "Aloo Tikki Burger",
    description: "A veggie burger made with potato patties.",
    category: "Burgers",
  },
  {
    name: "Noodle Burger",
    description: "A unique burger made with noodles as the patty.",
    category: "Burgers",
  },
  {
    name: "Fully Loaded Burger",
    description: "A burger with all the fixings.",
    category: "Burgers",
  },
  {
    name: "Plain Parantha + Dal Makhani",
    description: "Plain Indian flatbread served with creamy lentils.",
    category: "Paranthas",
  },
  {
    name: "Stuffed Parantha + Plain Dahi",
    description: "Stuffed Indian flatbread served with plain yogurt.",
    category: "Paranthas",
  },
  {
    name: "Stuffed Parantha + Dal Makhani",
    description: "Stuffed Indian flatbread served with creamy lentils.",
    category: "Paranthas",
  },
  // Page 2
  {
    name: "Dal Makhani",
    description: "Creamy lentils cooked with butter and cream.",
    category: "Mains",
  },
  {
    name: "Yellow Dal Tadka",
    description: "Yellow lentils tempered with spices.",
    category: "Mains",
  },
  {
    name: "Rajma",
    description: "Kidney beans cooked in a spicy gravy.",
    category: "Mains",
  },
  {
    name: "Chana Masala",
    description: "Chickpeas cooked in a spicy tomato-based sauce.",
    category: "Mains",
  },
  {
    name: "Black Chana",
    description: "Black chickpeas cooked in a spicy gravy.",
    category: "Mains",
  },
  {
    name: "Kadhi Pakora",
    description: "Vegetable fritters in a yogurt-based curry.",
    category: "Mains",
  },
  {
    name: "Jeera Aloo",
    description: "Potatoes cooked with cumin seeds.",
    category: "Mains",
  },
  {
    name: "Aloo Mutter",
    description: "Potatoes cooked with peas.",
    category: "Mains",
  },
  {
    name: "Aloo Methi",
    description: "Potatoes cooked with fenugreek leaves.",
    category: "Mains",
  },
  {
    name: "Aloo Gobi",
    description: "Potatoes and cauliflower cooked in a spicy sauce.",
    category: "Mains",
  },
  {
    name: "Mix Veg",
    description: "A mixed vegetable curry.",
    category: "Mains",
  },
  {
    name: "Baingan Bharta",
    description: "Roasted eggplant mashed and cooked with spices.",
    category: "Mains",
  },
  {
    name: "Shahi Paneer",
    description: "Paneer cooked in a rich creamy sauce.",
    category: "Mains",
  },
  {
    name: "Kadhai Paneer",
    description: "Paneer cooked with onions, tomatoes, and bell peppers.",
    category: "Mains",
  },
  {
    name: "Paneer Butter M.",
    description: "Paneer cooked in a butter-based sauce.",
    category: "Mains",
  },
  {
    name: "Matar Paneer",
    description: "Paneer cooked with peas.",
    category: "Mains",
  },
  {
    name: "Palak Paneer",
    description: "Paneer cooked in a spinach-based sauce.",
    category: "Mains",
  },
  {
    name: "Paneer Bhurji",
    description: "Scrambled paneer.",
    category: "Mains",
  },
  {
    name: "Malai Kofta",
    description: "Vegetable balls in a creamy sauce.",
    category: "Mains",
  },
  {
    name: "Mushroom Mutter",
    description: "Mushrooms cooked with peas.",
    category: "Mains",
  },
];
