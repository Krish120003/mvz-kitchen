import { Layout } from "~/components/layout";
import { SEO, MenuJSONLD, RestaurantJSONLD } from "~/components/seo";
import { MVZMenuItems, MVZMenuCategories } from "~/data/menuData";
import Link from "next/link";

export default function Menu() {
  const itemsGroupedByCategory = MVZMenuItems.reduce(
    (acc: Record<string, typeof MVZMenuItems>, item) => {
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
      <SEO
        title="Indian Restaurant Menu"
        description="Order delicious vegetarian Indian food for takeout or delivery from MVZ Kitchen in Brampton. Featuring chaats, Indo-Chinese, tandoori specialties, momos, and more."
        keywords="vegetarian Indian food, Brampton, Indian restaurant menu, Chaat, Momos, Indo-Chinese, Soya Chaap, Paneer, Vegetarian menu"
      />
      <RestaurantJSONLD />
      <MenuJSONLD menuItems={MVZMenuItems} />
      <Layout>
        <h1 className="text-2xl font-bold">Restaurant Menu</h1>
        <p className="mt-4">
          Experience the best vegetarian Indian food in Brampton with MVZ
          Kitchen. Our menu features a wide variety of traditional Indian
          dishes, from authentic chaats and savory snacks to delicious
          indo-chinese specialties and flavorful main courses. All our dishes
          are prepared with the freshest ingredients and authentic spices to
          bring you the true taste of India.
        </p>
        <hr className="my-8 border border-black" />

        {/* Category Navigation */}
        <div className="mb-8 flex flex-wrap gap-2">
          {MVZMenuCategories.map((category) => (
            <Link
              key={category}
              href={`/category/${encodeURIComponent(category.toLowerCase().replace(/\s+/g, "-"))}`}
              className="rounded-md bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800 hover:bg-orange-200"
            >
              {category}
            </Link>
          ))}
        </div>

        <ol className="space-y-12">
          {MVZMenuCategories.map((category) => {
            const categoryItems = itemsGroupedByCategory[category] ?? [];

            return (
              <li
                key={category}
                id={category.toLowerCase().replace(/\s+/g, "-")}
              >
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-orange-800">
                    {category}
                  </h2>
                  <Link
                    href={`/category/${encodeURIComponent(category.toLowerCase().replace(/\s+/g, "-"))}`}
                    className="text-sm text-orange-600 hover:underline"
                  >
                    View All {category} →
                  </Link>
                </div>
                <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {categoryItems.slice(0, 4).map((item) => (
                    <li
                      key={item.name}
                      className="rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md"
                    >
                      <Link
                        href={`/item/${encodeURIComponent(item.name.toLowerCase().replace(/\s+/g, "-"))}`}
                        className="block h-full"
                      >
                        <div className="flex justify-between">
                          <h3 className="text-lg font-bold">{item.name}</h3>
                          <div className="font-bold text-orange-600">
                            ${item.price}
                          </div>
                        </div>
                        <p className="mt-2 text-gray-600">{item.description}</p>
                        <div className="mt-3 text-sm text-orange-600 hover:underline">
                          View Details →
                        </div>
                      </Link>
                    </li>
                  ))}
                  {categoryItems.length > 4 && (
                    <Link
                      href={`/category/${encodeURIComponent(category.toLowerCase().replace(/\s+/g, "-"))}`}
                      className="block"
                    >
                      <li className="flex items-center justify-center rounded-lg border border-dashed border-gray-300 p-8 text-center hover:bg-orange-50">
                        <span className="text-orange-600 hover:underline">
                          View {categoryItems.length - 4} more{" "}
                          {category.toLowerCase()} items →
                        </span>
                      </li>
                    </Link>
                  )}
                </ul>
              </li>
            );
          })}
        </ol>
      </Layout>
    </>
  );
}
