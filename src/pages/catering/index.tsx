import Head from "next/head";
import { Layout } from "~/components/layout";

import { CateringMenuItems } from "~/data/menu";

export default function Menu() {
  const itemsGroupedByCategory = CateringMenuItems.reduce(
    (acc: { [key: string]: typeof CateringMenuItems }, item) => {
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
        <title>MV'z Kitchen | Indian Catering Menu</title>
        <meta name="description" content="MV'z Kitchen Catering Services" />
        <link rel="icon" href="/logo.png" />

        <meta property="og:title" content="MV'z Kitchen | Catering Menu" />
        <meta property="og:description" content="MV'z Kitchen Catering Menu" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://mvzkitchen.com/catering" />

        <meta name="twitter:title" content="MV'z Kitchen | Catering Menu" />
        <meta name="twitter:description" content="MV'z Kitchen Catering Menu" />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Layout>
        <h1 className="text-2xl font-bold">Catering Menu</h1>
        <p className="mt-4">
          Elevate your events with MV'z Kitchen's exceptional Indian catering
          services. Our menu offers a diverse selection of traditional Indian
          dishes, snacks, and street food, all crafted with the freshest
          ingredients. Whether you're hosting a wedding, corporate event, or
          private party, our catering service brings the authentic taste of
          Indian cuisine to your special occasion. Let us make your event
          memorable with the rich and vibrant flavors of India.
          <br />
        </p>
        <div className="mt-8">
          <h2 className="text-lg font-extrabold">Contact Us</h2>
          <p className="mt-2">Phone: +1 (365) 378-0009</p>
          <p>Email: order@mvzkitchen.ca</p>
        </div>
        <hr className="my-8 border border-black" />
        <ol className="">
          {Object.entries(itemsGroupedByCategory).map(
            ([category, items], index) => (
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
                {index !== Object.entries(itemsGroupedByCategory).length - 1 ? (
                  <hr className="my-8 border border-black/5" />
                ) : null}
              </li>
            ),
          )}
        </ol>
      </Layout>
    </>
  );
}
