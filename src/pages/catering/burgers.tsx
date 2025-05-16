import Link from "next/link";
import { Layout } from "~/components/layout";
import { SEO } from "~/components/seo";
import { CateringMenuItems } from "~/data/menu";

export default function CategoryPage() {
  const burgers = CateringMenuItems.filter(
    (item) => item.category === "Burgers",
  );
  const categories = [
    ...new Set(CateringMenuItems.map((item) => item.category)),
  ];

  return (
    <>
      <SEO
        title="Vegetarian Indian Burgers | Catering"
        description="Unique vegetarian Indian-inspired burgers for catering events. Fusion dishes combining traditional Indian flavors with modern presentation for parties and events in Brampton."
        keywords="vegetarian Indian burgers, fusion food, party catering, Indian fusion, tikki burger, samosa burger, Brampton catering"
        noIndex={true}
      />
      <Layout>
        <div className="mb-8">
          <Link href="/catering" className="text-orange-500 hover:underline">
            ← Back to Full Catering Menu
          </Link>
        </div>

        <h1 className="mb-4 text-2xl font-bold">Indian-Inspired Burgers</h1>

        <p className="mb-8 mt-4">
          Add something unique to your event with our Indian-inspired vegetarian
          burgers. These fusion creations combine traditional Indian flavors
          with modern presentation, perfect for casual events, office parties,
          and gatherings where you want to offer something different yet
          familiar.
        </p>

        <div className="mb-8">
          <h2 className="mb-2 text-lg font-bold">Browse Categories:</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/catering/${category.toLowerCase()}`}
                className={`rounded-full px-3 py-1 ${
                  category === "Burgers"
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
          {burgers.map((item) => (
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
            Contact us to discuss your event and customize your burger
            selection:
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
