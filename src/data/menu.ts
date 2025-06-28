type MenuItem = {
  name: string;
  description: string;
  category: string;
  image?: string;
  imageAlt?: string;
  aboutTheDish?: string;
};

export const FoodTruckMenuItems: MenuItem[] = [
  {
    name: "Chat Papri",
    description:
      "A crispy, savory snack made with puffed puri, potatoes, chickpeas, and chutneys.",
    category: "Snacks",
  },
  {
    name: "Aloo Tikki Burger",
    description: "A burger loaded with potato patties, paneer and veggies.",
    category: "Main Course",
  },
  {
    name: "Noodle Burger",
    description:
      "A Indo-Chinese burger loaded with noodles, potato patty and veggies.",
    category: "Main Course",
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
      "Fried lentil balls soaked in yogurt, topped with sweet chutney and spices.",
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
    description:
      "Crispy samosas served with chickpea gravy, chutneys, and spices.",
    category: "Snacks",
  },
  {
    name: "Tandoori Soya Chaap",
    description:
      "Grilled marinated soy protein, a popular vegetarian alternative to meat.",
    category: "Main Course",
  },
  {
    name: "Tava Chaap Kulcha",
    description:
      "Tandoori marinated soy protein and gravy and served with soft Indian kulcha bread.",
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
    name: "Chana Rice",
    description: "Rice served with chickpea curry.",
    category: "Main Course",
  },
  {
    name: "Rajma Rice",
    description: "Rice served with bean curry.",
    category: "Main Course",
  },
  {
    name: "Dal Makhani with Plain Paratha",
    description: "Creamy lentils served with a plain Indian bread.",
    category: "Main Course",
  },
  {
    name: "Dal Makhani with Stuffed Paratha",
    description: "Creamy lentils served with a potato-stuffed Indian bread.",
    category: "Main Course",
  },
  {
    name: "Orange Juice",
    description: "Freshly squeezed orange juice.",
    category: "Drinks",
  },
  {
    name: "Mix Fruit Juice",
    description: "A blend of orange, apple, and pineapple juices.",
    category: "Drinks",
  },
  {
    name: "Pop",
    description: "A carbonated soft drink.",
    category: "Drinks",
  },
  {
    name: "Water Bottle",
    description: "Bottled water.",
    category: "Drinks",
  },
  {
    name: "Keser Milk Badam",
    description: "A sweet, saffron-flavored milk drink.",
    category: "Drinks",
  },
  {
    name: "Pav Bhaji",
    description: "A spicy vegetable curry served with buttered bread rolls.",
    category: "Main Course",
  },
  {
    name: "Steamed Momos",
    description:
      "Steamed dumplings filled with vegetables and aromatic spices.",
    category: "Snacks",
  },
  {
    name: "Fried Momos",
    description: "Crispy fried dumplings filled with vegetables and spices.",
    category: "Snacks",
  },
  {
    name: "Mango Lassi",
    description: "A sweet yogurt-based drink blended with mango pulp.",
    category: "Drinks",
  },
  {
    name: "Desi Ghee Tava Aloo Tikki",
    description:
      "Crispy potato patties cooked in clarified butter served with sweet chutney, fresh yogurt, pomogranate, and spices.",
    category: "Snacks",
  },
];

export const CateringMenuItems: MenuItem[] = [
  // Page 1
  {
    name: "Dahi Bhalla",
    description:
      "Fried lentil balls soaked in yogurt, topped with sweet chutney and spices.",
    category: "Appetizers",
  },
  {
    name: "Chat Papdi",
    description:
      "A crispy, savory snack made with puffed puri, potatoes, chickpeas, topped with yogurt and chutneys.",
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
    name: "Desi Ghee Tava Aloo Tikki",
    description:
      "Crispy potato patties cooked in clarified butter served with sweet chutney, fresh yogurt, cruncy red onions, radish,  pomogranate, and spices.",
    category: "Appetizers",
  },
  {
    name: "Steamed Momos",
    description: "Steamed dumplings filled with vegetables.",
    category: "Appetizers",
  },
  {
    name: "Fried Momos",
    description: "Pan-fried dumplings filled with vegetables.",
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
  // {
  //   name: "Loaded Fries",
  //   description: "French fries topped with cheese, bacon, and other toppings.",
  //   category: "Appetizers",
  // },
  {
    name: "Poutine",
    description: "French fries topped with cheese curds and vegetarian gravy.",
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
  // ============================================================
  {
    name: "Rajma",
    description: "Kidney beans cooked in a spicy gravy.",
    category: "Mains",
  },
  {
    name: "Chana Masala",
    description: "Chickpeas cooked in a spicy sauce.",
    category: "Mains",
  },

  // {
  //   name: "Plain Parantha + Dal Makhani",
  //   description: "Plain Indian flatbread served with creamy lentils.",
  //   category: "Paranthas",
  // },
  // {
  //   name: "Stuffed Parantha + Plain Dahi",
  //   description: "Stuffed Indian flatbread served with plain yogurt.",
  //   category: "Paranthas",
  // },
  // {
  //   name: "Stuffed Parantha + Dal Makhani",
  //   description: "Stuffed Indian flatbread served with creamy lentils.",
  //   category: "Paranthas",
  // },
  {
    name: "Plain Parantha",
    description: "Plain Indian flatbread.",
    category: "Paranthas",
  },
  // {
  //   name: "Stuffed Parantha",
  //   description: "Stuffed Indian flatbread.",
  //   category: "Paranthas",
  // },
  {
    name: "Aloo Parantha",
    description: "Indian bread stuffed with spiced potatoes.",
    category: "Paranthas",
  },
  {
    name: "Gobi Parantha",
    description: "Indian bread stuffed with spiced cauliflower.",
    category: "Paranthas",
  },
  {
    name: "Paneer Parantha",
    description: "Indian bread stuffed with spiced paneer.",
    category: "Paranthas",
  },
  // {
  //   name: "Mooli Parantha",
  //   description: "Indian bread stuffed with radish.",
  //   category: "Paranthas",
  // },
  {
    name: "Lachha Parantha",
    description: "Layered Indian bread.",
    category: "Paranthas",
  },
  {
    name: "Missi Roti",
    description: "Indian bread made with gram flour.",
    category: "Paranthas",
  },
  {
    name: "Butter Naan",
    description: "Leavened Indian bread cooked in a tandoor.",
    category: "Paranthas",
  },
  {
    name: "Garlic Naan",
    description: "Leavened Indian bread with garlic.",
    category: "Paranthas",
  },
  {
    name: "Plain Naan",
    description: "Leavened Indian bread.",
    category: "Paranthas",
  },
  {
    name: "Kulcha",
    description: "Leavened Indian bread.",
    category: "Paranthas",
  },
  {
    name: "Stuffed Kulcha",
    description: "Leavened Indian bread stuffed with spiced potatoes.",
    category: "Paranthas",
  },
  {
    name: "Puri",
    description: "Deep-fried Indian bread with a puffed texture.",
    category: "Paranthas",
  },
  {
    name: "Bhature",
    description:
      "A fluffy, soft deep-fried Indian bread made with maida flour and yogurt.",
    category: "Paranthas",
  },
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
    description: "Potatoes and cauliflower cooked to a spicy dish.",
    category: "Mains",
  },
  {
    name: "Mix Veg",
    description:
      "A colorful blend of seasonal vegetables sautéed with Indian spices.",
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
    name: "Paneer Butter Masala",
    description: "Paneer cooked in a buttery tomato-based sauce.",
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
  {
    name: "Mushroom do Pyaza",
    description: "Mushrooms cooked with onions.",
    category: "Mains",
  },
  {
    name: "Pav Bhaji",
    description: "A spicy vegetable curry served with bread rolls.",
    category: "Mains",
  },
  {
    name: "Chana Bhatura",
    description:
      "Fluffy deep-fried bread served with spiced chickpeas (chana masala), also known as Chole Bhature.",
    category: "Mains",
    image: "/chana-bhatura.png",
    imageAlt:
      "Traditional Chana Bhatura (Chole Bhature) - golden puffy fried bread served alongside flavorful spiced chickpea curry, authentic North Indian street food dish",
    aboutTheDish:
      "Chana Bhatura, also known as Chole Bhature, is a beloved North Indian dish that combines two culinary masterpieces. The bhatura is a deep-fried, pillow-soft bread made from refined flour and yogurt, creating its signature puffy texture and golden color. Paired with rich, aromatic chole (chana masala) - chickpeas slow-cooked in a blend of traditional spices including cumin, coriander, and garam masala. This iconic combination has been a street food favorite across Punjab and North India for generations, representing the perfect balance of textures and flavors that make Indian cuisine so special. Whether you call it Chana Bhatura or Chole Bhature, this hearty dish delivers authentic taste and satisfying comfort food experience.",
  },
  {
    name: "Chana Kulcha",
    description: "Indian bread served with spiced chickpeas.",
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
    description:
      "Soya chaap gravy cooked on a tava (griddle) served with kulcha.",
    category: "Mains",
  },
  {
    name: "Tava Soya Chaap + Lachha Paratha",
    description:
      "Soya chaap gravy cooked on a tava served with lachha paratha.",
    category: "Mains",
  },
  {
    name: "Soya Chaap Rolls",
    description: "Soya chaap wrapped in roti with onions and peppers.",
    category: "Mains",
  },
  {
    name: "Paneer Rolls",
    description:
      "Paneer (Indian cheese) wrapped in roti with onions and peppers.",
    category: "Mains",
  },
  {
    name: "Aloo Tikki Burger",
    description: "A veggie burger made with potato patties.",
    category: "Burgers",
  },
  {
    name: "Noodle Burger",
    description: "A unique burger made with noodles and the patty.",
    category: "Burgers",
  },
  {
    name: "Fully Loaded Burger",
    description:
      "A burger loaded with everything - noodles, paneer, and potato patty.",
    category: "Burgers",
  },
];
