import Link from "next/link";
import { Layout } from "~/components/layout";
import { SEO } from "~/components/seo";
import { CateringMenuItems } from "~/data/menu";

export default function CategoryPage() {
  const paranthas = CateringMenuItems.filter(
    (item) => item.category === "Paranthas",
  );
  const categories = [
    ...new Set(CateringMenuItems.map((item) => item.category)),
  ];

  return (
    <>
      <SEO
        title="Indian Paranthas & Breads | Catering"
        description="Fresh, handmade Indian paranthas and breads for catering. Traditional and stuffed varieties available for events in Brampton and surrounding areas."
        keywords="Indian paranthas, stuffed paranthas, Indian breads, naan, roti, catering bread, vegetarian catering, Brampton"
        noIndex={true}
      />
      <Layout>
        <div className="mb-8">
          <Link href="/catering" className="text-orange-500 hover:underline">
            ← Back to Full Catering Menu
          </Link>
        </div>

        <h1 className="mb-4 text-2xl font-bold">Indian Breads & Paranthas</h1>

        <p className="mb-8 mt-4">
          Complete your Indian feast with our freshly made breads and paranthas.
          Each parantha is handcrafted to perfection, from traditional plain
          paranthas to specialty stuffed varieties. Perfect accompaniments for
          curries and main courses at your next catered event.
        </p>

        <div className="mb-8">
          <h2 className="mb-2 text-lg font-bold">Browse Categories:</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/catering/${category.toLowerCase()}`}
                className={`rounded-full px-3 py-1 ${
                  category === "Paranthas"
                    ? "bg-orange-500 text-white"
                    : "bg-orange-100 hover:bg-orange-200"
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {paranthas.map((item) => (
            <li
              key={item.name}
              className="rounded-lg border border-orange-100 p-4 hover:border-orange-200"
            >
              <h3 className="mb-2 text-lg font-bold">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <h2 className="mb-4 text-lg font-extrabold">Book Your Catering</h2>
          <p>
            Contact us to discuss your event and customize your bread selection:
          </p>
          <p className="mt-2">
            Phone:{" "}
            <a
              href="tel:+13653780009"
              className="text-orange-500 hover:underline"
            >
              +1 (365) 378-0009
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:order@mvzkitchen.ca"
              className="text-orange-500 hover:underline"
            >
              order@mvzkitchen.ca
            </a>
          </p>
        </div>
      </Layout>
    </>
  );
}
