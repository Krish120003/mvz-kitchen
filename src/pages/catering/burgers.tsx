import Head from "next/head";
import Link from "next/link";
import { Layout } from "~/components/layout";
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
      <Head>
        <title>Indian Fusion Burgers | MV&apos;z Kitchen Catering</title>
        <meta
          name="description"
          content="Unique Indian fusion burgers for catering events. Spice-infused patties and innovative toppings perfect for corporate events and parties in Brampton."
        />
        <link rel="icon" href="/logo.png" />
        <meta
          property="og:title"
          content="Indian Fusion Burgers | MV'z Kitchen Catering"
        />
        <meta
          property="og:description"
          content="Discover our unique Indian fusion burgers for your next catered event"
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:url"
          content="https://mvzkitchen.com/catering/burgers"
        />
        <meta
          name="twitter:title"
          content="Indian Fusion Burgers | MV'z Kitchen Catering"
        />
        <meta
          name="twitter:description"
          content="Unique Indian fusion burgers for catering in Brampton region"
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Layout>
        <div className="mb-8">
          <Link href="/catering" className="text-orange-500 hover:underline">
            ← Back to Full Catering Menu
          </Link>
        </div>

        <h1 className="mb-4 text-2xl font-bold">Indian Fusion Burgers</h1>

        <p className="mb-8 mt-4">
          Add a unique twist to your event with our Indian fusion burgers. Each
          burger combines classic Western comfort food with authentic Indian
          spices and flavors. Perfect for corporate lunches, casual events, and
          parties that want something different. Available for catering across
          the Brampton region.
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
