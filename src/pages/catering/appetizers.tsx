import Link from "next/link";
import { Layout } from "~/components/layout";
import { SEO } from "~/components/seo";
import { CateringMenuItems } from "~/data/menu";

export default function CategoryPage() {
  const appetizers = CateringMenuItems.filter(
    (item) => item.category === "Appetizers",
  );
  const categories = [
    ...new Set(CateringMenuItems.map((item) => item.category)),
  ];

  return (
    <>
      <SEO
        title="Indian Appetizers & Starters | Catering"
        description="Delicious vegetarian Indian appetizers and starters for catering events. Traditional chaats, samosas, and more for parties and events in Brampton and surrounding areas."
        keywords="Indian appetizers, vegetarian starters, Indian party food, chaats, samosas, pakoras, catering appetizers, Brampton"
        noIndex={true}
      />
      <Layout>
        <div className="mb-8">
          <Link href="/catering" className="text-orange-500 hover:underline">
            ← Back to Full Catering Menu
          </Link>
        </div>

        <h1 className="mb-4 text-2xl font-bold">
          Indian Appetizers & Starters
        </h1>

        <p className="mb-8 mt-4">
          Start your event with our exceptional Indian appetizers. From our
          signature chaats to traditional samosas and pakoras, these
          crowd-pleasing starters are perfect for cocktail parties, corporate
          events, and wedding receptions.
        </p>

        <div className="mb-8">
          <h2 className="mb-2 text-lg font-bold">Browse Categories:</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/catering/${category.toLowerCase()}`}
                className={`rounded-full px-3 py-1 ${
                  category === "Appetizers"
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
          {appetizers.map((item) => (
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
            Contact us to discuss your event and customize your appetizer
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
