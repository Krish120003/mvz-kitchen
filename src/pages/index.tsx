import Head from "next/head";

import Image from "next/image";
import { Layout } from "~/components/layout";

export default function Home() {
  return (
    <>
      <Head>
        {/* TODO: UPDATE META TAGS */}
        <title>
          MV&apos;z Kitchen | Best Indian Food in the
          Kitchener-Waterloo-Cambridge Region
        </title>
        <meta
          property="og:title"
          content="MV'z Kitchen - Best Indian Food in KW Region"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Indian food, Kitchener, Waterloo, Cambridge, food truck, vegetarian, tandoori, indian restaurant, indian snacks"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://mvzkitchen.ca" />
        <meta name="description" content="" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <div className="relative mb-8 h-48 scale-110 overflow-hidden object-cover md:hidden">
          <Image
            src="/hero.jpeg"
            alt="A group of customers outside the MV'z Kitchen Food Truck in Kitchener, Ontario"
            className="object-cover"
            fill
          />
        </div>
        <Image
          src="/HeroCropped.png"
          alt="A group of customers outside the MV'z Kitchen Food Truck in Kitchener, Ontario"
          width={2402}
          height={1407}
          className="hidden w-full md:block"
        />

        <p className="font-bold md:text-2xl">
          Experience the freshest Indian food in Kitchener, Waterloo, and
          Cambridge. Join us to savor a fusion of traditional flavors and modern
          twists, bringing the vibrant tastes of Indian restaurants to you.
        </p>
        <hr className="my-8 border border-black" />
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-2">
          <div>
            <h2 className="text-lg font-extrabold">Hours</h2>
            <br />
            <div className="grid grid-cols-1 gap-2">
              <p className="grid grid-cols-2 border-b border-black">
                <span className="font-bold">Mon, Tues</span> Closed
              </p>

              <p className="grid grid-cols-2 border-b border-black">
                <span className="font-bold">Wed - Fri</span> 3 PM to 9 PM
              </p>

              <p className="grid grid-cols-2 border-b border-black">
                <span className="font-bold">Sat, Sun</span> 1 PM to 9 PM
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-extrabold">Location</h2>
            <br />
            <p>120 Pioneer Drive</p>
            <p>Kitchener, ON</p>
            <p>N2P 2C2</p>
          </div>
          <div>
            <h2 className="text-lg font-extrabold">Contact</h2>
            <br />
            <p>+1 (365) 378-0009</p>
            <p>order@mvzkitchen.ca</p>
          </div>
        </div>
      </Layout>
    </>
  );
}
