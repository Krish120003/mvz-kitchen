import Image from "next/image";
import { Layout } from "~/components/layout";
import { SEO, RestaurantJSONLD } from "~/components/seo";
import { MVZFeaturedItems, MVZMenuCategories } from "~/data/menuData";
import Link from "next/link";
import { env } from "~/env";

interface Testimonal {
  name: string;
  review: string;
}

interface TestimonialItemProps extends React.HTMLAttributes<HTMLDivElement> {
  testimonial: Testimonal;
}

function TestimonialItem({testimonial, className, ...props}: TestimonialItemProps) {
  return (
    <div className={`rounded-lg bg-white p-4 shadow-md border  ${className} flex justify-between flex-col`} {...props}>
      <p className="text-sm text-gray-700">
        {'"'}{testimonial.review}{'"'}
      </p>

      <div><p className="mt-2 font-bold">{testimonial.name}</p>⭐⭐⭐⭐⭐</div>
    </div>
  );
}


const testimonials: Testimonal[] = [
  {
    name: "Har Preet",
    review: "Tried noodle burger and it was so crispy and delicious. The lemon mojito was super refreshing, and the dahi puri was the perfect mix of sweet, tangy, and crunchy. Really enjoyed every bite.",
  },
  {
    name: "Jainish Patel",
    review: "I recently tried the Tawa Soya Chaap and Kulcha from MV’Z Kitchen, and it was absolutely delicious! The soya chaap was perfectly marinated—flavorful, juicy, and had just the right amount of spice. The portion size was generous, and everything was served hot and fresh.",
  },
  {
    name: "Sunny Singh",
    review: "Amazing staff and great customer care with exceptional food, I have been to this place first time and I found they do really care about their customers experience. Recommended",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Best Vegetarian Indian Food in Brampton"
        description="MVZ Kitchen Official Website. Authentic vegetarian Indian cuisine in Brampton. Save money ordering directly here. Fast service. Friendly team. Top rated."
        keywords="Vegetarian Indian Food, Brampton, Indian Restaurant, Chaats, Momos, Indo-Chinese, Takeout, Delivery"
      />
      <RestaurantJSONLD />
      <Layout>
        <div className="relative mb-8 h-48 scale-110 overflow-hidden object-cover md:hidden">
          <Image
            src="/food-hero.jpeg"
            alt="Authentic Vegetarian Indian Food at MVZ Kitchen Brampton"
            className="object-cover"
            fill
          />
          <div className="absolute -right-2 top-4 z-10 rotate-12">
            <div className="relative">
              <div className="relative rounded-full bg-red-600 px-4 py-2 font-extrabold text-white shadow-[0_10px_20px_rgba(0,0,0,0.7)]">
                <div className="text-center text-xs">OPEN NOW!</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/food-hero.jpeg"
            alt="Authentic Vegetarian Indian Food at MVZ Kitchen Brampton"
            width={2402}
            height={1407}
            className="hidden w-full md:block rounded-lg pb-4"
          />
          <div className="absolute right-8 top-12 z-10 hidden rotate-12 md:block">
            <div className="relative">
              <div className="relative rounded-full bg-red-600 px-6 py-3 font-extrabold text-white shadow-[0_15px_30px_rgba(0,0,0,0.7)]">
                <div className="text-center text-sm">OPEN NOW!</div>
              </div>
            </div>
          </div>
        </div>

        <p className="font-bold md:text-2xl">
          Experience the freshest vegetarian Indian food in Brampton. Join us to
          savor a fusion of traditional flavors and modern twists, bringing the
          vibrant tastes of authentic Indian cuisine to you.
        </p>

        <div className="pt-4">
          <h2 className="mb-4 text-xl font-extrabold ">Testimonials</h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialItem
                key={index}
                testimonial={testimonial}
                className="mb-4"
                style={{
                  transform: `rotate(${((index * 5) % 11) - 5}deg)`,
                }}
              />
            ))}
          </div>
        </div>


        {/* Featured Items Section */}
        <div className="my-10">
          <h2 className="mb-4 text-xl font-extrabold">Featured Specialties</h2>
          <div className="flex flex-wrap gap-3">
            {MVZFeaturedItems.map((item) => (
              <Link
                key={item}
                href={`/item/${encodeURIComponent(item.toLowerCase().replace(/\s+/g, "-"))}`}
                className="rounded-full bg-orange-100 px-4 py-2 font-medium text-orange-800 hover:bg-orange-200"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/menu"
              className="rounded-full bg-orange-100 px-4 py-2 font-medium text-orange-600 hover:bg-orange-200"
            >
              View Full Menu →
            </Link>
          </div>
        </div>

        {/* Menu Categories Section */}
        <div className="my-10">
          <h2 className="mb-4 text-xl font-extrabold">Our Menu Categories</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {MVZMenuCategories.slice(0, 8).map((category) => (
              <Link
                key={category}
                href={`/category/${encodeURIComponent(category.toLowerCase().replace(/\s+/g, "-"))}`}
                className="rounded-lg bg-orange-50 p-4 text-center shadow-sm transition-all hover:bg-orange-100 hover:shadow-md"
              >
                <div className="text-lg font-bold text-orange-800">
                  {category}
                </div>
                <div className="mt-1 text-sm text-orange-600">View All</div>
              </Link>
            ))}
          </div>
          {MVZMenuCategories.length > 8 && (
            <div className="mt-4 text-center">
              <Link
                href="/menu"
                className="inline-block rounded-lg bg-orange-100 px-6 py-3 text-orange-600 hover:bg-orange-200"
              >
                See All Categories →
              </Link>
            </div>
          )}
        </div>

        {/* Locations Section */}
        <div className="my-10">
          <h2 className="mb-4 text-xl font-extrabold">
            Serving Brampton & Nearby Areas
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {["Brampton", "Mississauga", "Etobicoke", "Vaughan"].map((city) => (
              <Link
                key={city}
                href={`/location/${encodeURIComponent(city.toLowerCase())}`}
                className="rounded-lg bg-orange-50 p-4 text-center shadow-sm transition-all hover:bg-orange-100 hover:shadow-md"
              >
                <div className="text-lg font-bold text-orange-800">{city}</div>
                <div className="mt-1 text-sm text-orange-600">Order Now</div>
              </Link>
            ))}
          </div>
        </div>

        <hr className="my-8 border border-black" />
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-2">
          <div>
            <h2 className="text-lg font-extrabold">Hours</h2>
            <br />
            <div className="grid grid-cols-1 gap-2">
              <p className="grid grid-cols-2 border-b border-black">
                <span className="font-bold">Mon - Fri</span> 11 AM to 9 PM
              </p>

              {/* <p className="grid grid-cols-2 border-b border-black">
                <span className="font-bold">Wed - Fri</span> 3 PM to 9 PM
              </p> */}

              <p className="grid grid-cols-2 border-b border-black">
                <span className="font-bold">Sat, Sun</span> 11 AM to 9 PM
              </p>
            </div>
          </div>
          {!env.NEXT_PUBLIC_HIDE_ADDRESS && (
            <div>
              <h2 className="text-lg font-extrabold">Location</h2>
              <br />
              <p>9280 Goreway Dr Unit C107</p>
              <p>Brampton, ON</p>
              <p>L6T 0C4</p>
              <p className="mt-3">
                <a
                  href="https://maps.google.com/?q=9280+Goreway+Dr+Unit+C107,+Brampton,+ON+L6T+0C4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:underline"
                >
                  Get Directions
                </a>
              </p>
            </div>
          )}
          <div>
            <h2 className="text-lg font-extrabold">Contact</h2>
            <br />
            <p>
              <a href="tel:+13653780009" className="hover:underline">
                +1 (365) 378-0009
              </a>
            </p>
            <p>
              <a href="mailto:order@mvzkitchen.ca" className="hover:underline">
                order@mvzkitchen.ca
              </a>
            </p>
            <p className="mt-3">
              <Link href="/contact" className="text-orange-600 hover:underline">
                Send us a message
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
