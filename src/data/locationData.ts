export type LocationInfo = {
  name: string;
  title: string;
  description: string;
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  address?: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    googleMapsUrl: string;
  };
  phone?: string;
  email?: string;
  openingHours?: Record<string, string>;
  distance?: string;
  deliveryTime?: string;
  isMainLocation: boolean;
  nearbyNeighborhoods?: string[];
};

export const MAIN_LOCATION: LocationInfo = {
  name: "Brampton",
  title: "MVZ Kitchen in Brampton - Authentic Vegetarian Indian Food",
  description:
    "Experience the finest vegetarian Indian food at MVZ Kitchen in Brampton. Our restaurant offers a wide variety of authentic Indian dishes, from chaats and momos to traditional mains and Indo-Chinese specialties.",
  meta: {
    title: "MVZ Kitchen | Best Vegetarian Indian Restaurant in Brampton",
    description:
      "MVZ Kitchen official location in Brampton. Authentic vegetarian Indian cuisine with chaats, momos, Indo-Chinese specialties, and more. Dine-in, takeout, and delivery available.",
    keywords:
      "vegetarian Indian restaurant Brampton, Indian food Brampton, authentic Indian cuisine, chaats, momos, paneer dishes, delivery, takeout",
  },
  address: {
    street: "9280 Goreway Dr Unit C107",
    city: "Brampton",
    province: "ON",
    postalCode: "L6T 0C4",
    googleMapsUrl:
      "https://maps.google.com/?q=9280+Goreway+Dr+Unit+C107,+Brampton,+ON+L6T+0C4",
  },
  phone: "+1 (365) 378-0009",
  email: "order@mvzkitchen.ca",
  openingHours: {
    Monday: "11:00 AM - 9:00 PM",
    Tuesday: "11:00 AM - 9:00 PM",
    Wednesday: "11:00 AM - 9:00 PM",
    Thursday: "11:00 AM - 9:00 PM",
    Friday: "11:00 AM - 9:00 PM",
    Saturday: "11:00 AM - 9:00 PM",
    Sunday: "11:00 AM - 9:00 PM",
  },
  isMainLocation: true,
  nearbyNeighborhoods: [
    "Heart Lake",
    "Springdale",
    "Bramalea",
    "Fletcher's Creek",
    "Gore Meadows",
  ],
};

export const SERVICE_LOCATIONS: LocationInfo[] = [
  {
    name: "Mississauga",
    title: "MVZ Kitchen - Vegetarian Indian Food Delivery in Mississauga",
    description:
      "We deliver our authentic vegetarian Indian cuisine to Mississauga. Enjoy our chaats, momos, and traditional Indian dishes delivered fresh to your doorstep in Mississauga.",
    meta: {
      title: "MVZ Kitchen | Vegetarian Indian Food Delivery in Mississauga",
      description:
        "Order MVZ Kitchen's authentic vegetarian Indian food for delivery in Mississauga. Enjoy chaats, momos, Indo-Chinese, and traditional Indian mains delivered to your doorstep.",
      keywords:
        "vegetarian Indian food delivery Mississauga, Indian restaurant delivery, chaats delivery, momos, Indian takeout Mississauga",
    },
    distance: "15-25 minutes",
    deliveryTime: "30-45 minutes",
    isMainLocation: false,
    nearbyNeighborhoods: [
      "Malton",
      "Meadowvale",
      "Heartland",
      "Streetsville",
      "Port Credit",
    ],
  },
  {
    name: "Etobicoke",
    title: "MVZ Kitchen - Vegetarian Indian Food Delivery in Etobicoke",
    description:
      "Order our authentic vegetarian Indian cuisine for delivery in Etobicoke. From delicious chaats to flavorful main dishes, we deliver our best Indian food to all areas in Etobicoke.",
    meta: {
      title: "MVZ Kitchen | Vegetarian Indian Food Delivery in Etobicoke",
      description:
        "Get MVZ Kitchen's authentic vegetarian Indian food delivered to your home in Etobicoke. Enjoy chaats, momos, and traditional Indian cuisine with convenient delivery.",
      keywords:
        "vegetarian Indian food Etobicoke, Indian delivery service, authentic Indian cuisine, chaats, momos delivery, Indian takeout Etobicoke",
    },
    distance: "20-30 minutes",
    deliveryTime: "35-55 minutes",
    isMainLocation: false,
    nearbyNeighborhoods: [
      "Rexdale",
      "Humber Bay",
      "The Kingsway",
      "Mimico",
      "Islington-City Centre West",
    ],
  },
  {
    name: "Vaughan",
    title: "MVZ Kitchen - Vegetarian Indian Food Delivery in Vaughan",
    description:
      "MVZ Kitchen delivers authentic vegetarian Indian cuisine to Vaughan and surrounding areas. Enjoy our wide selection of chaats, momos, and traditional Indian dishes delivered to your doorstep.",
    meta: {
      title: "MVZ Kitchen | Vegetarian Indian Food Delivery in Vaughan",
      description:
        "Order MVZ Kitchen's authentic vegetarian Indian food for delivery in Vaughan. Enjoy chaats, momos, and traditional favorites delivered fresh to your home.",
      keywords:
        "vegetarian Indian food Vaughan, Indian delivery service, authentic Indian cuisine, chaats, momos delivery, Indian takeout Vaughan",
    },
    distance: "20-30 minutes",
    deliveryTime: "35-50 minutes",
    isMainLocation: false,
    nearbyNeighborhoods: [
      "Woodbridge",
      "Maple",
      "Concord",
      "Kleinburg",
      "Thornhill",
    ],
  },
];

// All available locations including main location and service areas
export const ALL_LOCATIONS = [MAIN_LOCATION, ...SERVICE_LOCATIONS];
