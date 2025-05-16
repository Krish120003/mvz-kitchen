import Head from "next/head";
import { useRouter } from "next/router";

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

type MenuSection = {
  [category: string]: {
    "@type": string;
    name: string;
    description: string;
  }[];
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
  const metaKeywords = keywords || defaultSEO.keywords;
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

export const RestaurantJSONLD = ({ locations = [] }: RestaurantJSONLDProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MVZ Kitchen",
    logo: "https://mvzkitchen.ca/logo.png",
    url: "https://mvzkitchen.ca/",
    keywords: [
      "Vegetarian Indian Food",
      "Indian Cuisine",
      "Punjabi Food",
      "Chaat",
      "Indo-Chinese",
      "Dahi Bhalla",
      "Chat Papdi",
      "Pani Puri",
      "Chana Masala",
      "Dal Makhani",
      "Paneer Dishes",
      "Momos",
      "Tandoori",
      "Naan",
      "Lunch",
      "Dinner",
      "Takeout",
      "Delivery",
    ],
    subOrganization: [
      {
        "@type": "Restaurant",
        name: "MVZ Kitchen Brampton",
        telephone: "+1 (365) 378-0009",
        email: "order@mvzkitchen.ca",
        hasMenu: "https://mvzkitchen.ca/menu",
        servesCuisine: "Indian, Vegetarian",
        address: {
          "@type": "PostalAddress",
          streetAddress: "9280 Goreway Dr Unit C107",
          addressLocality: "Brampton",
          addressRegion: "ON",
          postalCode: "L6T 0C4",
          addressCountry: "CA",
        },
        geo: {
          "@type": "GeoCoordinates",
          longitude: -79.64221,
          latitude: 43.7477,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday"],
            opens: "15:00",
            closes: "21:00",
          },
        ],
        url: "https://mvzkitchen.ca/",
      },
    ],
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
    });
  });

  const menuSectionArray = Object.keys(menuSections).map((category) => ({
    "@type": "MenuSection",
    name: category,
    hasMenuItem: menuSections[category],
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "MVZ Kitchen Menu",
    description: "Authentic Vegetarian Indian Food Menu",
    hasMenuSection: menuSectionArray,
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
