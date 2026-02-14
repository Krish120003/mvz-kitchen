import Image from "next/image";
import { Layout } from "~/components/layout";
import { SEO } from "~/components/seo";
import Link from "next/link";

const thaliFeatures = [
  "Authentic Punjabi flavors",
  "Freshly prepared daily",
  "Generous portions",
  "Vegetarian-friendly",
  "Great value",
  "Serve 1-2 people",
];

const testimonials = [
  {
    name: "Priya S.",
    review: "Best thali in Brampton! The dal makhani is amazing and the bhatura is so fluffy.",
  },
  {
    name: "Raj M.",
    review: "Great value for money. Real authentic taste like back home in Punjab.",
  },
];

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
        {/* Hero Section */}
        <div className="relative -mx-4 -mt-4 mb-8 overflow-hidden bg-gradient-to-b from-orange-50 to-white md:-mx-8 md:mt-[-2rem] md:mb-12">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-orange-400 blur-3xl"></div>
            <div className="absolute bottom-20 right-20 h-40 w-40 rounded-full bg-orange-500 blur-3xl"></div>
          </div>
          
          <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-20">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="text-center md:text-left">
                <div className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-700">
                  Authentic Punjabi Thali
                </div>
                <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                  The Ultimate{" "}
                  <span className="text-orange-600">Vegetarian Thali</span>{" "}
                  Experience
                </h1>
                <p className="mb-6 text-lg text-gray-600 md:text-xl">
                  A complete traditional Indian meal on a single plate. Dal,
                  vegetable curry, rice, fresh bread, raita, pickle & dessert
                  — all freshly prepared daily.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                  <a
                    href="tel:+13653780009"
                    className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl hover:scale-105"
                  >
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Order Now: (365) 378-0009
                  </a>
                  <Link
                    href="/menu"
                    className="inline-flex items-center justify-center rounded-full border-2 border-orange-600 px-8 py-4 text-lg font-bold text-orange-600 transition-all hover:bg-orange-50"
                  >
                    View Full Menu
                  </Link>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  ⭐ 4.8 rating • 127+ reviews • Ready in 15 minutes
                </p>
              </div>
              
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/food-hero.jpeg"
                    alt="Delicious Vegetarian Thali at MVZ Kitchen Brampton - Complete Indian meal with dal, sabzi, rice, bread"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-white p-4 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-orange-600">
                      $11.99
                    </div>
                    <div className="text-sm text-gray-500">Complete Meal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included Section */}
        <section className="mx-auto mb-16 max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
            What&apos;s Included in Your Thali
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Dal",
                desc: "Creamy Dal Makhani or Yellow Dal Tadka",
                emoji: "🫘",
              },
              {
                title: "Sabzi",
                desc: "Daily vegetable curry - flavorful & fresh",
                emoji: "🥬",
              },
              {
                title: "Rice",
                desc: "Steamed basmati rice or jeera rice",
                emoji: "🍚",
              },
              {
                title: "Bread",
                desc: "Fresh naan, roti, or kulcha",
                emoji: "🫓",
              },
              {
                title: "Raita",
                desc: "Cool yogurt side with cucumber",
                emoji: "🥒",
              },
              {
                title: "Pickle",
                desc: "Tangy Indian pickle & chutneys",
                emoji: "🫛",
              },
              {
                title: "Salad",
                desc: "Fresh onion & lime salad",
                emoji: "🧅",
              },
              {
                title: "Sweet",
                desc: "Mithai or gulab jamun",
                emoji: "🍬",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all hover:shadow-lg"
              >
                <div className="mb-3 text-4xl">{item.emoji}</div>
                <h3 className="mb-1 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="mb-16 bg-gradient-to-r from-orange-600 to-orange-700 px-4 py-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-white">
              Hungry Now? Order Your Thali!
            </h2>
            <p className="mb-8 text-lg text-orange-100">
              Freshly prepared in 15 minutes. Call now or order online.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="tel:+13653780009"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-orange-600 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (365) 378-0009
              </a>
              <a
                href="https://www.doordash.com/store/mvz-kitchen-brampton"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
              >
                Order on DoorDash
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="mx-auto mb-16 max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
            Why MVZ Kitchen Thali?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {thaliFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center rounded-lg bg-orange-50 p-4"
              >
                <svg
                  className="mr-3 h-6 w-6 flex-shrink-0 text-orange-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16 bg-gray-50 px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
              What Our Customers Say
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-white p-6 shadow-md"
                >
                  <div className="mb-4 flex items-center">
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="mb-4 text-gray-600 italic">
                    &ldquo;{testimonial.review}&rdquo;
                  </p>
                  <p className="font-bold text-gray-900">
                    — {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Hours */}
        <section className="mx-auto mb-16 max-w-4xl px-4">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-extrabold text-gray-900">
              Visit Us
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-bold text-gray-700">
                  Location
                </h3>
                <p className="text-gray-600">
                  9280 Goreway Dr, Unit C107
                  <br />
                  Brampton, ON L6T 0C4
                </p>
                <a
                  href="https://maps.google.com/?q=9280+Goreway+Dr+Unit+C107,+Brampton,+ON+L6T+0C4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-orange-600 hover:underline"
                >
                  Get Directions →
                </a>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-bold text-gray-700">
                  Hours
                </h3>
                <p className="text-gray-600">
                  Mon - Fri: 11 AM - 9 PM
                  <br />
                  Sat, Sun: 11 AM - 9 PM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-3xl px-4 pb-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900">
            Ready to Taste Authentic Punjabi Thali?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Order now and experience the true flavors of India!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:+13653780009"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-orange-700"
            >
              Call to Order
            </a>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 px-8 py-4 text-lg font-bold text-gray-700 hover:border-gray-400"
            >
              Browse Full Menu
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
