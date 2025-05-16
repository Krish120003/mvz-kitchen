import Link from "next/link";
import { Layout } from "~/components/layout";
import { SEO } from "~/components/seo";
import { CateringMenuItems } from "~/data/menu";

export default function Menu() {
  const itemsGroupedByCategory = CateringMenuItems.reduce(
    (acc: Record<string, typeof CateringMenuItems>, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category]!.push(item);
      return acc;
    },
    {},
  );

  const categories = [
    ...new Set(CateringMenuItems.map((item) => item.category)),
  ];

  return (
    <>
      <SEO
        title="Indian Catering Services in Brampton"
        description="MVZ Kitchen offers exceptional vegetarian Indian catering services for corporate events, weddings, and private parties. Serving authentic Indian cuisine in Brampton and surrounding areas."
        keywords="Indian catering Brampton, vegetarian catering, Indian food catering, corporate catering, wedding catering, Indian event food"
        noIndex={true}
      />
      <Layout>
        <h1 className="text-2xl font-bold">Catering Menu</h1>
        <div className="mt-4">
          Elevate your events with MVZ Kitchen&apos;s exceptional Indian
          catering services. Our menu offers a diverse selection of traditional
          Indian dishes, snacks, and street food, all crafted with the freshest
          ingredients. Let us make your event memorable with the rich and
          vibrant flavors of India.
          <br />
          <br />
          We cater for:
          <ul className="ml-8 list-disc">
            <li>Live Events</li>
            <li>Corporate Events</li>
            <li>Weddings</li>
            <li>Take away orders</li>
            <li>Delivery</li>
          </ul>
        </div>

        <div className="mb-8 mt-8">
          <h2 className="mb-2 text-lg font-bold">Browse Categories:</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/catering/${category.toLowerCase()}`}
                className="rounded-full bg-orange-100 px-3 py-1 hover:bg-orange-200"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

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
