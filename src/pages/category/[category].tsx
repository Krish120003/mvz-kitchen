import { GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "~/components/layout";
import { SEO, MenuJSONLD } from "~/components/seo";
import { MVZMenuItems, MVZMenuCategories } from "~/data/menuData";
import Image from "next/image";
import Link from "next/link";

type CategoryPageProps = {
  category: string;
  items: typeof MVZMenuItems;
  otherCategories: string[];
};

export default function CategoryPage({
  category,
  items,
  otherCategories,
}: CategoryPageProps) {
  // Format category name for SEO and display
  const formattedCategory = category.replace(/-/g, " ");
  const categoryTitle = formattedCategory
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return (
    <>
      <SEO
        title={`${categoryTitle} Menu | Best Vegetarian Indian ${categoryTitle} in Brampton`}
        description={`Authentic vegetarian ${categoryTitle.toLowerCase()} at MVZ Kitchen in Brampton. Order our delicious ${formattedCategory} dishes including ${items
          .slice(0, 3)
          .map((item) => item.name)
          .join(", ")} and more.`}
        keywords={`vegetarian Indian food, Brampton, ${formattedCategory}, ${items.map((item) => item.name).join(", ")}`}
      />
      <MenuJSONLD menuItems={items} />
      <Layout>
        <div className="mb-6">
          <Link
            href="/menu"
            className="inline-block rounded-lg bg-orange-50 px-4 py-2 text-orange-600 hover:bg-orange-100"
          >
            &larr; Back to Full Menu
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-orange-800">{categoryTitle}</h1>

        <p className="my-4">
          Experience the finest vegetarian {formattedCategory.toLowerCase()} at
          MVZ Kitchen. Our {formattedCategory.toLowerCase()} selection features
          traditional recipes prepared with fresh ingredients and authentic
          spices to bring you the true taste of India.
        </p>

        <div className="my-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              href={`/item/${encodeURIComponent(item.name.toLowerCase().replace(/\s+/g, "-"))}`}
              key={item.name}
              className="rounded-lg border border-gray-200 p-5 shadow-sm transition-all hover:border-orange-200 hover:shadow-md"
            >
              <div className="flex justify-between">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <div className="font-bold text-orange-600">${item.price}</div>
              </div>
              <p className="mt-2 text-gray-600">{item.description}</p>
              <div className="mt-4 text-sm text-orange-600 hover:underline">
                View Details
              </div>
            </Link>
          ))}
        </div>

        <hr className="my-8 border border-gray-200" />

        <div className="mt-10">
          <h2 className="mb-4 text-xl font-bold">Explore Other Categories</h2>
          <div className="flex flex-wrap gap-3">
            {otherCategories.map((cat) => (
              <Link
                key={cat}
                href={`/category/${encodeURIComponent(cat.toLowerCase().replace(/\s+/g, "-"))}`}
                className="rounded-full bg-orange-100 px-4 py-2 font-medium text-orange-800 hover:bg-orange-200"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate paths for all menu categories
  const paths = MVZMenuCategories.map((category) => ({
    params: { category: category.toLowerCase().replace(/\s+/g, "-") },
  }));

  return {
    paths,
    fallback: false, // Show 404 for non-existent categories
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category as string;

  // Convert slug format back to original category name for data lookup
  const formattedCategory = category.replace(/-/g, " ");
  const originalCategory = MVZMenuCategories.find(
    (cat) => cat.toLowerCase() === formattedCategory.toLowerCase(),
  );

  if (!originalCategory) {
    return { notFound: true };
  }

  // Get items for this category
  const categoryItems = MVZMenuItems.filter(
    (item) => item.category.toLowerCase() === originalCategory.toLowerCase(),
  );

  // Get other categories for navigation
  const otherCategories = MVZMenuCategories.filter(
    (cat) => cat !== originalCategory,
  );

  return {
    props: {
      category,
      items: categoryItems,
      otherCategories,
    },
  };
};
