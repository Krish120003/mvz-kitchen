import Head from "next/head";
import { useRouter } from "next/router";
import { MVZMenuItems, MVZMenuCategories } from "~/data/menuData";
import { MAIN_LOCATION, SERVICE_LOCATIONS } from "~/data/locationData";

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  noIndex?: boolean;
  children?: React.ReactNode;
};

type MenuItem = {
  name: string;
  description: string;
  category: string;
  price?: string;
};

const defaultSEO = {
  siteName: "MVZ Kitchen",
  description:
    "MVZ Kitchen Official Website. Authentic vegetarian Indian cuisine in Brampton. Save money ordering directly here. Fast service. Friendly team. Top rated.",
  keywords:
    "Vegetarian Indian Food, Indian Cuisine, Punjabi Food, Chaat, Indo-Chinese, Dahi Bhalla, Chat Papdi, Pani Puri, Chana Masala, Dal Makhani, Momos, Tandoori",
  url: "https://mvzkitchen.ca",
  image: "/logo.png",
};

export const SEO = ({
  title,
  description = defaultSEO.description,
  keywords,
  image = defaultSEO.image,
  type = "website",
  noIndex = false,
  children,
}: SEOProps) => {
  const router = useRouter();
  const metaTitle = title
    ? `${title} | ${defaultSEO.siteName}`
    : `${defaultSEO.siteName} | Best Vegetarian Indian Food in Brampton`;
  const metaKeywords = keywords ?? defaultSEO.keywords;
  const url = `${defaultSEO.url}${router.asPath}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Robots Tag */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${defaultSEO.url}${image}`} />
      <meta property="og:site_name" content={defaultSEO.siteName} />

      {/* Favicon */}
      <link rel="icon" href="/logo.png" />

      {/* Additional Head Content */}
      {children}
    </Head>
  );
};

type Location = {
  name: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  };
  geo: {
    longitude: number;
    latitude: number;
  };
  url: string;
};

type RestaurantJSONLDProps = {
  locations?: Location[];
};

export const RestaurantJSONLD = ({
  locations: _ = [],
}: RestaurantJSONLDProps) => {
  // Default fallback values for essential fields
  const phone = MAIN_LOCATION.phone ?? "+1 (365) 378-0009";
  const email = MAIN_LOCATION.email ?? "order@mvzkitchen.ca";
  const addressStreet =
    MAIN_LOCATION.address?.street ?? "9280 Goreway Dr Unit C107";
  const addressCity = MAIN_LOCATION.address?.city ?? "Brampton";
  const addressRegion = MAIN_LOCATION.address?.province ?? "ON";
  const addressPostalCode = MAIN_LOCATION.address?.postalCode ?? "L6T 0C4";

  // Generate opening hours from MAIN_LOCATION data
  const openingHoursSpecification = Object.entries(
    MAIN_LOCATION.openingHours ?? {},
  )
    .filter(([_, hours]) => hours !== "Closed") // Filter out closed days
    .map(([day, hours]) => {
      // Parse opening hours format: "3:00 PM - 9:00 PM" into 24-hour format
      const [start = "", end = ""] = (hours ?? "").split(" - ");

      // Simple conversion to 24-hour format
      const formatTime = (timeStr: string) => {
        if (timeStr.includes("PM")) {
          const [hourStr = "12"] = timeStr.replace(" PM", "").split(":");
          const hour = parseInt(hourStr, 10);
          return hour === 12
            ? timeStr.replace(" PM", "")
            : timeStr.replace(`${hour}`, `${hour + 12}`).replace(" PM", "");
        }
        return timeStr.replace(" AM", "");
      };

      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [day], // Put each day in its own specification for clarity
        opens: formatTime(start),
        closes: formatTime(end),
      };
    });

  // Generate menu items for hasMenu property
  const menuItemsByCategory: Record<string, MenuItem[]> = {};

  // Group menu items by category
  MVZMenuItems.forEach((item) => {
    if (!menuItemsByCategory[item.category]) {
      menuItemsByCategory[item.category] = [];
    }
    menuItemsByCategory[item.category]!.push(item);
  });

  // Create menu sections
  const menuSections = MVZMenuCategories.map((category) => {
    const items = menuItemsByCategory[category] ?? [];

    return {
      "@type": "MenuSection",
      name: category,
      description: `Our selection of ${category.toLowerCase()}`,
      hasMenuItem: items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        offers: {
          "@type": "Offer",
          price: item.price ?? "0.00",
          priceCurrency: "CAD",
        },
        suitableForDiet: "https://schema.org/VegetarianDiet",
      })),
    };
  }).filter((section) => (section.hasMenuItem?.length ?? 0) > 0);

  // Create the full JSON-LD schema based on the requirements
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "MVZ Kitchen",
    alternateName: "MVZ Kitchen Brampton",
    description:
      "MVZ Kitchen offers authentic vegetarian Indian cuisine in Brampton. We serve a variety of chaats, momos, Indo-Chinese specialties, and traditional Indian mains, all prepared with authentic recipes and fresh ingredients.",
    url: "https://mvzkitchen.ca/",
    logo: "https://mvzkitchen.ca/logo.png",
    telephone: phone,
    email: email,
    address: {
      "@type": "PostalAddress",
      streetAddress: addressStreet,
      addressLocality: addressCity,
      addressRegion: addressRegion,
      postalCode: addressPostalCode,
      addressCountry: "CA",
    },
    servesCuisine: ["Indian", "Vegetarian", "Punjabi", "Indo-Chinese"],
    menu: "https://mvzkitchen.ca/menu",
    acceptsReservations: "https://mvzkitchen.ca/contact",
    openingHoursSpecification: openingHoursSpecification,
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/mvzkitchen",
      "https://www.instagram.com/mvzkitchen",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: phone,
        contactType: "Customer Service",
        areaServed: "CA",
        availableLanguage: ["English", "Hindi", "Punjabi"],
      },
      {
        "@type": "ContactPoint",
        telephone: phone,
        contactType: "Reservations",
        areaServed: "CA",
        availableLanguage: ["English", "Hindi", "Punjabi"],
      },
    ],
    hasMenu: {
      "@type": "Menu",
      name: "MVZ Kitchen Main Menu",
      description: "Our delicious selection of vegetarian Indian dishes.",
      hasMenuSection: menuSections,
    },
    // Add service locations as locations served
    areaServed: SERVICE_LOCATIONS.map((location) => ({
      "@type": "City",
      name: location.name,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

type MenuJSONLDProps = {
  menuItems: MenuItem[];
};

export const MenuJSONLD = ({ menuItems }: MenuJSONLDProps) => {
  // Create menu by category
  const menuSections: Record<
    string,
    Array<{
      "@type": string;
      name: string;
      description: string;
      offers?: {
        "@type": string;
        price: string;
        priceCurrency: string;
      };
      suitableForDiet?: string;
    }>
  > = {};

  menuItems.forEach((item: MenuItem) => {
    if (!menuSections[item.category]) {
      menuSections[item.category] = [];
    }
    menuSections[item.category]!.push({
      "@type": "MenuItem",
      name: item.name,
      description: item.description,
      offers: {
        "@type": "Offer",
        price: item.price ?? "0.00",
        priceCurrency: "CAD",
      },
      suitableForDiet: "https://schema.org/VegetarianDiet",
    });
  });

  const menuSectionArray = Object.keys(menuSections).map((category) => ({
    "@type": "MenuSection",
    name: category,
    description: `Our selection of ${category.toLowerCase()}`,
    hasMenuItem: menuSections[category],
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "MVZ Kitchen Menu",
    description: "Authentic Vegetarian Indian Food Menu",
    inLanguage: "en-US",
    hasMenuSection: menuSectionArray,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://mvzkitchen.ca/menu",
    },
    publisher: {
      "@type": "Restaurant",
      name: "MVZ Kitchen",
      logo: "https://mvzkitchen.ca/logo.png",
      url: "https://mvzkitchen.ca",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

type MenuItemJSONLDProps = {
  item: MenuItem;
};

export const MenuItemJSONLD = ({ item }: MenuItemJSONLDProps) => {
  // Convert price from string to number with 2 decimal places
  const priceValue = item.price ? parseFloat(item.price).toFixed(2) : "0.00";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    name: item.name,
    description: item.description,
    offers: {
      "@type": "Offer",
      price: priceValue,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
    },
    suitableForDiet: "https://schema.org/VegetarianDiet",
    menuAddOn: [
      {
        "@type": "MenuItem",
        name: "Side Options",
        description: "Add optional sides to your order",
        offers: [
          {
            "@type": "Offer",
            name: "Naan",
            price: "0.99",
            priceCurrency: "CAD",
          },
          {
            "@type": "Offer",
            name: "Rice",
            price: "1.99",
            priceCurrency: "CAD",
          },
        ],
      },
    ],
    nutrition: {
      "@type": "NutritionInformation",
      suitableForDiet: "https://schema.org/VegetarianDiet",
    },
    servesCuisine: "Indian",
    isPartOf: {
      "@type": "Menu",
      name: "MVZ Kitchen Menu",
      url: "https://mvzkitchen.ca/menu",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mvzkitchen.ca/item/${item.name.toLowerCase().replace(/\s+/g, "-")}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
