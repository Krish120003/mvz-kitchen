import type { GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "~/components/layout";
import { SEO, MenuItemJSONLD } from "~/components/seo";
import { MVZMenuItems } from "~/data/menuData";
import Link from "next/link";

type ItemPageProps = {
  item: (typeof MVZMenuItems)[0];
  relatedItems: typeof MVZMenuItems;
};

export default function ItemPage({ item, relatedItems }: ItemPageProps) {
  return (
    <>
      <SEO
        title={`${item.name} | MVZ Kitchen's Best Vegetarian Indian Dish`}
        description={`${item.description} Order our delicious ${item.name} at MVZ Kitchen in Brampton, or enjoy it for takeout or delivery.`}
        keywords={`${item.name}, vegetarian, Indian food, Brampton, ${item.category}, MVZ Kitchen`}
      />
      <MenuItemJSONLD item={item} />
      <Layout>
        <div className="mb-6">
          <Link
            href={`/category/${encodeURIComponent(item.category.toLowerCase().replace(/\s+/g, "-"))}`}
            className="inline-block rounded-lg bg-orange-50 px-4 py-2 text-orange-600 hover:bg-orange-100"
          >
            &larr; Back to {item.category}
          </Link>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold text-orange-800">
                {item.name}
              </h1>
              {/* <div className="my-3 font-medium text-orange-600">
                ${item.price}
              </div> */}

              <div className="my-4">
                <h2 className="text-lg font-semibold">Description</h2>
                <p className="mt-2 text-gray-700">{item.description}</p>
              </div>

              <div className="my-6">
                <h2 className="text-lg font-semibold">About this Dish</h2>
                <p className="mt-2 text-gray-700">
                  Our {item.name} is freshly prepared using traditional recipes
                  and the finest ingredients. This authentic dish is a favorite
                  among our customers and represents the true flavors of Indian
                  cuisine. Each dish is carefully prepared by our chefs to
                  ensure consistency and authentic taste.
                </p>
              </div>

              <div className="rounded-lg bg-orange-50 p-4">
                <h2 className="text-lg font-semibold text-orange-800">
                  Order Now
                </h2>
                <p className="mb-4 text-gray-700">
                  Experience the authentic taste of our {item.name}. Available
                  for dine-in, takeout or delivery.
                </p>
                <div className="flex gap-3">
                  <a
                    href="tel:+13653780009"
                    className="rounded-full bg-orange-600 px-5 py-2 font-medium text-white hover:bg-orange-700"
                  >
                    Call to Order
                  </a>
                  <Link
                    href="/contact"
                    className="rounded-full border border-orange-600 px-5 py-2 font-medium text-orange-600 hover:bg-orange-50"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative mb-4 h-60 w-full overflow-hidden rounded-lg bg-orange-100 md:h-80">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center text-orange-600">
                    <div className="text-2xl font-bold">{item.name}</div>
                    <div className="text-sm">{item.category}</div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-semibold">Category</h3>
                <Link
                  href={`/category/${encodeURIComponent(item.category.toLowerCase().replace(/\s+/g, "-"))}`}
                  className="text-orange-600 hover:underline"
                >
                  {item.category}
                </Link>

                <h3 className="mt-3 font-semibold">Price</h3>
                <p>${item.price}</p>

                <h3 className="mt-3 font-semibold">Dietary Information</h3>
                <p>Vegetarian</p>
              </div>
            </div>
          </div>
        </div>

        {relatedItems.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-4 text-2xl font-bold">You May Also Like</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedItems.map((relatedItem) => (
                <Link
                  key={relatedItem.name}
                  href={`/item/${encodeURIComponent(relatedItem.name.toLowerCase().replace(/\s+/g, "-"))}`}
                  className="rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md"
                >
                  <h3 className="font-bold">{relatedItem.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                    {relatedItem.description}
                  </p>
                  <div className="mt-2 text-orange-600">
                    {/* ${relatedItem.price} */}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12">
          <Link
            href="/menu"
            className="inline-block rounded-lg bg-orange-50 px-4 py-2 text-orange-600 hover:bg-orange-100"
          >
            View Full Menu &rarr;
          </Link>
        </div>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate paths for all menu items
  const paths = MVZMenuItems.map((item) => ({
    params: { item: item.name.toLowerCase().replace(/\s+/g, "-") },
  }));

  return {
    paths,
    fallback: false, // Show 404 for non-existent items
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const itemSlug = params?.item as string;

  // Find the menu item
  const menuItem = MVZMenuItems.find(
    (item) => item.name.toLowerCase().replace(/\s+/g, "-") === itemSlug,
  );

  if (!menuItem) {
    return { notFound: true };
  }

  // Get related items from the same category, excluding the current item
  const relatedItems = MVZMenuItems.filter(
    (item) =>
      item.category === menuItem.category && item.name !== menuItem.name,
  ).slice(0, 3); // Limit to 3 related items

  return {
    props: {
      item: menuItem,
      relatedItems,
    },
  };
};
