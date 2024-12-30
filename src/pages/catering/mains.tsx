import Head from "next/head";
import Link from "next/link";
import { Layout } from "~/components/layout";
import { CateringMenuItems } from "~/data/menu";

export default function CategoryPage() {
  const mains = CateringMenuItems.filter((item) => item.category === "Mains");
  const categories = [
    ...new Set(CateringMenuItems.map((item) => item.category)),
  ];

  return (
    <>
      <Head>
        <title>Indian Main Courses | MV&apos;z Kitchen Catering</title>
        <meta
          name="description"
          content="Authentic Indian main courses for catering - from rich curries to biryanis. Perfect for your next event in Kitchener-Waterloo region."
        />
        <link rel="icon" href="/logo.png" />

        <meta
          property="og:title"
          content="Indian Main Courses | MV'z Kitchen Catering"
        />
        <meta
          property="og:description"
          content="Explore our selection of authentic Indian main courses for your next catered event."
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:url"
          content="https://mvzkitchen.com/catering/mains"
        />

        <meta
          name="twitter:title"
          content="Indian Main Courses | MV'z Kitchen Catering"
        />
        <meta
          name="twitter:description"
          content="Authentic Indian main courses for catering in KW region"
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

        <h1 className="mb-4 text-2xl font-bold">Indian Main Courses</h1>

        <p className="mb-8 mt-4">
          Complete your event menu with our exquisite selection of Indian main
          courses. From aromatic biryanis to rich curries, our dishes are
          perfect for corporate events, weddings, and private parties in the
          Kitchener-Waterloo-Cambridge region. Each dish is prepared with
          authentic spices and premium ingredients.
        </p>

        <div className="mb-8">
          <h2 className="mb-2 text-lg font-bold">Browse Categories:</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/catering/${category.toLowerCase()}`}
                className={`rounded-full px-3 py-1 ${
                  category === "Mains"
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
          {mains.map((item) => (
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
            Contact us to discuss your event and customize your main course
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
