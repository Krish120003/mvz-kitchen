import type { GetStaticPaths, GetStaticProps } from "next";
import type { LocationInfo } from "~/data/locationData";
import { Layout } from "~/components/layout";
import { SEO, RestaurantJSONLD } from "~/components/seo";
import { ALL_LOCATIONS } from "~/data/locationData";
import { MVZMenuItems, MVZMenuCategories } from "~/data/menuData";
import Link from "next/link";
import { env } from "~/env";

type LocationPageProps = {
  locationInfo: LocationInfo;
  popularItems: typeof MVZMenuItems;
};

export default function LocationPage({
  locationInfo,
  popularItems,
}: LocationPageProps) {
  const isMainLocation = locationInfo.isMainLocation;

  // Create a Location object for the RestaurantJSONLD component
  const locationData = {
    name: locationInfo.name,
    telephone: locationInfo.phone ?? "+1 (365) 378-0009",
    address: {
      streetAddress:
        locationInfo.address?.street ?? "9280 Goreway Dr Unit C107",
      addressLocality: locationInfo.address?.city ?? "Brampton",
      addressRegion: locationInfo.address?.province ?? "ON",
      postalCode: locationInfo.address?.postalCode ?? "L6T 0C4",
    },
    geo: {
      longitude: isMainLocation ? -79.64221 : 0,
      latitude: isMainLocation ? 43.7477 : 0,
    },
    url: `https://mvzkitchen.ca/location/${locationInfo.name.toLowerCase()}`,
  };

  return (
    <>
      <SEO
        title={locationInfo.meta.title}
        description={locationInfo.meta.description}
        keywords={locationInfo.meta.keywords}
      />
      <RestaurantJSONLD locations={[locationData]} />
      <Layout>
        <div className="mb-6">
          <Link href="/" className="text-orange-600 hover:underline">
            &larr; Back to Home
          </Link>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
          <h1 className="text-3xl font-bold text-orange-800">
            {locationInfo.title}
          </h1>

          <div className="my-6">
            <p className="text-gray-700">{locationInfo.description}</p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {isMainLocation ? (
              <>
                <div>
                  <h2 className="mb-4 text-xl font-bold">
                    Restaurant Information
                  </h2>

                  <div className="mb-4 rounded-lg bg-orange-50 p-4">
                    <h3 className="font-semibold">Address</h3>
                    <p>{locationInfo.address?.street}</p>
                    <p>
                      {locationInfo.address?.city},{" "}
                      {locationInfo.address?.province}{" "}
                      {locationInfo.address?.postalCode}
                    </p>
                    <p className="mt-2">
                      <a
                        href={locationInfo.address?.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline"
                      >
                        Get Directions
                      </a>
                    </p>
                  </div>

                  <div className="mb-4 rounded-lg bg-orange-50 p-4">
                    <h3 className="font-semibold">Contact</h3>
                    <p>
                      <a
                        href={`tel:${locationInfo.phone}`}
                        className="hover:underline"
                      >
                        {locationInfo.phone}
                      </a>
                    </p>
                    <p>
                      <a
                        href={`mailto:${locationInfo.email}`}
                        className="hover:underline"
                      >
                        {locationInfo.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-xl font-bold">Hours of Operation</h2>
                  <div className="rounded-lg bg-orange-50 p-4">
                    {locationInfo.openingHours &&
                      Object.entries(locationInfo.openingHours).map(
                        ([day, hours]) => (
                          <div key={day} className="mb-2 flex justify-between">
                            <span className="font-semibold">{day}</span>
                            <span>{hours}</span>
                          </div>
                        ),
                      )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h2 className="mb-4 text-xl font-bold">
                    Delivery Information
                  </h2>
                  <div className="rounded-lg bg-orange-50 p-4">
                    <div className="mb-3">
                      <h3 className="font-semibold">
                        Distance from Restaurant
                      </h3>
                      <p>{locationInfo.distance}</p>
                    </div>

                    <div className="mb-3">
                      <h3 className="font-semibold">Estimated Delivery Time</h3>
                      <p>{locationInfo.deliveryTime}</p>
                    </div>

                    <div className="mt-4">
                      <a
                        href="tel:+13653780009"
                        className="rounded-full bg-orange-600 px-5 py-2 font-medium text-white hover:bg-orange-700"
                      >
                        Call to Order
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-xl font-bold">
                    Serving Areas in {locationInfo.name}
                  </h2>
                  <div className="rounded-lg bg-orange-50 p-4">
                    <div className="flex flex-wrap gap-2">
                      {locationInfo.nearbyNeighborhoods?.map((neighborhood) => (
                        <span
                          key={neighborhood}
                          className="rounded-full bg-white px-3 py-1 text-sm text-orange-800"
                        >
                          {neighborhood}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-sm">
                      We deliver to all neighborhoods in {locationInfo.name}.
                      Delivery times may vary based on distance and traffic
                      conditions.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="my-10">
          <h2 className="mb-6 text-2xl font-bold">
            Popular Menu Items in {locationInfo.name}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {popularItems.map((item) => (
              <Link
                key={item.name}
                href={`/item/${encodeURIComponent(item.name.toLowerCase().replace(/\s+/g, "-"))}`}
                className="rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md"
              >
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="mt-2 line-clamp-2 text-gray-600">
                  {item.description}
                </p>
                <div className="mt-3 font-medium text-orange-600">
                  {/* ${item.price} */}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/menu" className="text-orange-600 hover:underline">
              View Full Menu →
            </Link>
          </div>
        </div>

        <div className="my-10">
          <h2 className="mb-6 text-2xl font-bold">Our Menu Categories</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {MVZMenuCategories.slice(0, 8).map((category) => (
              <Link
                key={category}
                href={`/category/${encodeURIComponent(category.toLowerCase().replace(/\s+/g, "-"))}`}
                className="rounded-lg bg-orange-50 p-4 text-center shadow-sm hover:shadow-md"
              >
                <div className="font-bold text-orange-800">{category}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="my-10 rounded-lg bg-orange-50 p-6">
          <h2 className="mb-4 text-2xl font-bold">
            Order Authentic Indian Food in {locationInfo.name}
          </h2>
          <p className="mb-4">
            Experience the best vegetarian Indian cuisine in {locationInfo.name}
            . Our menu features authentic chaats, momos, Indo-Chinese
            specialties, and traditional main courses.
            {!isMainLocation &&
              " We deliver directly to your doorstep in " +
                locationInfo.name +
                "."}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+13653780009"
              className="rounded-full bg-orange-600 px-5 py-2 font-medium text-white hover:bg-orange-700"
            >
              Call to Order
            </a>
            <Link
              href="/menu"
              className="rounded-full border border-orange-600 px-5 py-2 font-medium text-orange-600 hover:bg-orange-50"
            >
              View Menu
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate paths for all locations
  const paths = ALL_LOCATIONS.map((location) => ({
    params: { location: location.name.toLowerCase() },
  }));

  return {
    paths: env.NEXT_PUBLIC_HIDE_ADDRESS ? [] : paths,
    fallback: false, // Show 404 for non-existent locations
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const locationSlug = params?.location as string;

  // Find the location information
  const locationInfo = ALL_LOCATIONS.find(
    (location) => location.name.toLowerCase() === locationSlug.toLowerCase(),
  );

  if (!locationInfo) {
    return { notFound: true };
  }

  // Get popular menu items (different way to select based on location)
  // For now, just select the first 6 items from different categories
  const selectedCategories = [
    "Chaat Items",
    "Momos",
    "Mains",
    "Indo-Chinese",
    "Chaap & Tikka",
    "Wraps",
  ];
  const popularItems = selectedCategories
    .map((category) => {
      const categoryItems = MVZMenuItems.filter(
        (item) => item.category === category,
      );
      return categoryItems[0]; // Get the first item from each category
    })
    .filter(Boolean); // Remove any undefined items

  return {
    props: {
      locationInfo,
      popularItems,
    },
  };
};
