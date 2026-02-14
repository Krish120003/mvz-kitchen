import Image from "next/image";
import { Layout } from "~/components/layout";
import { SEO } from "~/components/seo";

export default function VegetarianThali() {
  return (
    <>
      <SEO
        title="Vegetarian Thali - Authentic Indian Thali Meal | MVZ Kitchen"
        description="Order our delicious Vegetarian Thali at MVZ Kitchen Brampton. Complete Indian meal with dal, sabzi, rice, bread & more. Freshly prepared, great value. Order now!"
        keywords="Vegetarian Thali, Indian Thali, Thali Meal, Punjabi Thali, Vegetarian Indian Food, Thali Delivery Brampton, MVZ Kitchen Thali"
        image="/food-hero.jpeg"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Vegetarian Thali",
            description:
              "A complete traditional Indian thali meal featuring dal, vegetable curry, rice, bread, raita, and pickle",
            brand: {
              "@type": "Brand",
              name: "MVZ Kitchen",
            },
            offers: {
              "@type": "Offer",
              price: "11.99",
              priceCurrency: "CAD",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Restaurant",
                name: "MVZ Kitchen",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "127",
            },
          }),
        }}
      />
      <Layout>
        {/* Hero - Photo First */}
        <div className="relative">
          <div className="relative aspect-[4/5] w-full md:aspect-[16/9] md:h-[70vh]">
            <Image
              src="/food-hero.jpeg"
              alt="Delicious Vegetarian Thali at MVZ Kitchen Brampton"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          {/* Price Badge */}
          <div className="absolute left-4 top-4 rounded-xl bg-white px-4 py-2 shadow-xl md:left-8 md:top-8 md:px-6 md:py-3">
            <div className="text-center">
              <div className="text-2xl font-extrabold text-orange-600 md:text-3xl">
                $11.99
              </div>
              <div className="text-sm font-medium text-gray-600 md:text-base">
                Complete Meal
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
            <div className="flex flex-col gap-3 md:flex-row md:justify-center">
              <a
                href="tel:+13653780009"
                className="flex items-center justify-center rounded-full bg-orange-600 px-6 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-orange-700 md:px-10 md:py-5 md:text-xl"
              >
                <svg
                  className="mr-2 h-5 w-5 md:h-6 md:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call to Order
              </a>
              <a
                href="https://maps.google.com/?q=9280+Goreway+Dr+Unit+C107,+Brampton,+ON+L6T+0C4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-white px-6 py-4 text-lg font-bold text-gray-900 shadow-lg transition-all hover:scale-105 hover:bg-gray-100 md:px-10 md:py-5 md:text-xl"
              >
                <svg
                  className="mr-2 h-5 w-5 md:h-6 md:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Get Directions
              </a>
            </div>
            <p className="mt-3 text-center text-sm text-white/80 md:text-base">
              Freshly prepared • Ready in 15 minutes
            </p>
          </div>
        </div>

        {/* What's Included */}
        <section className="mx-auto max-w-4xl px-4 py-8">
          <h2 className="mb-6 text-center text-2xl font-extrabold text-gray-900">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { title: "Dal", emoji: "🫘" },
              { title: "Sabzi", emoji: "🥬" },
              { title: "Rice", emoji: "🍚" },
              { title: "Bread", emoji: "🫓" },
              { title: "Raita", emoji: "🥒" },
              { title: "Pickle", emoji: "🫛" },
              { title: "Salad", emoji: "🧅" },
              { title: "Sweet", emoji: "🍬" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center rounded-lg bg-orange-50 p-3 text-center"
              >
                <span className="mb-1 text-2xl">{item.emoji}</span>
                <span className="font-semibold text-gray-800">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="bg-orange-50 px-4 py-8">
          <div className="mx-auto max-w-2xl">
            <div className="grid grid-cols-2 gap-4 text-center">
              {[
                "Authentic Punjabi flavors",
                "Freshly prepared daily",
                "Generous portions",
                "Serves 1-2 people",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center justify-center">
                  <svg
                    className="mr-2 h-5 w-5 text-orange-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Hours */}
        <section className="mx-auto max-w-md px-4 py-8">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-4 text-lg font-bold text-gray-900">Visit Us</h3>
            <p className="mb-2 text-gray-600">9280 Goreway Dr, Unit C107</p>
            <p className="mb-4 text-gray-600">Brampton, ON L6T 0C4</p>
            <p className="mb-4 text-gray-600">
              <span className="font-semibold">Hours:</span> Mon-Sun: 11 AM - 9
              PM
            </p>
            <a
              href="tel:+13653780009"
              className="block text-center font-bold text-orange-600 hover:underline"
            >
              (365) 378-0009
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
}
