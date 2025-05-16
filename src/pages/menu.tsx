import Head from "next/head";
import { Layout } from "~/components/layout";

import { FoodTruckMenuItems } from "~/data/menu";

export default function Menu() {
  const itemsGroupedByCategory = FoodTruckMenuItems.reduce(
    (acc: Record<string, typeof FoodTruckMenuItems>, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category]!.push(item);
      return acc;
    },
    {},
  );

  return (
    <>
      <Head>
        <title>MV&apos;z Kitchen | Indian Restaurant Menu</title>
        <meta name="description" content="MV'z Kitchen Restaurant serves " />
        <link rel="icon" href="/logo.png" />

        <meta property="og:title" content="MV'z Kitchen | Menu" />
        <meta property="og:description" content="MV'z Kitchen Menu" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://mvzkitchen.com/menu" />

        <meta name="twitter:title" content="MV'z Kitchen | Menu" />
        <meta name="twitter:description" content="MV'z Kitchen Menu" />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Layout>
        <h1 className="text-2xl font-bold">Restaurant Menu</h1>
        <p className="mt-4">
          Experience the best Indian food in Brampton with MV&apos;z Kitchen.
          Our menu features a wide variety of traditional Indian dishes, snacks,
          and street food, all prepared with the freshest ingredients. Whether
          you&apos;re craving classic Indian curries, flavorful biryanis, or
          delicious Indian snacks, our food truck brings the authentic taste of
          Indian restaurant s to you. Join us and indulge in the rich and
          vibrant flavors of India.
        </p>
        <hr className="my-8 border border-black" />
        <ol className="space-y-8">
          {Object.entries(itemsGroupedByCategory).map(([category, items]) => (
            <li key={category}>
              <h2 className="text-xl font-light">{category}</h2>
              <ul className="grid grid-cols-2 gap-4">
                {items.map((item) => (
                  <li key={item.name}>
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Layout>
    </>
  );
}
