import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Instagram, Facebook } from "lucide-react";

import Image from "next/image";
import { Layout } from "~/components/layout";

export function Header() {
  return (
    <></>
    // <header className="flex items-center justify-between p-4">
    //   <div></div>
    //   {/* <Image
    //     src="/logo.png"
    //     alt="MV'z Kitchen Logo"
    //     width={100}
    //     height={100}
    //   ></Image> */}
    //   <div className="flex gap-4 pr-8 text-xl font-bold">
    //     <Link href="#">bunch</Link>
    //     <Link href="#">of</Link>
    //     <Link href="#">links</Link>
    //   </div>
    // </header>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        {/* TODO: UPDATE META TAGS */}
        <title>
          MV'z Kitchen | Best Indian Food in the Kitchener-Waterloo-Cambridge
          Region
        </title>
        <meta name="description" content="" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <Image
          src="/HeroCropped.png"
          alt="A group of customers outside the MV'z Kitchen Food Truck in Kitchener, Ontario"
          width={2402}
          height={1407}
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
            <div className="grid grid-cols-2">
              <p className="contents">
                <span className="font-bold">Mon, Tues</span> Closed
              </p>
              {/* <p className="contents">
                <span className="font-bold">Tues</span> Closed
              </p> */}
              <p className="contents">
                <span className="font-bold">Wed - Fri</span> 3 PM to 9 PM
              </p>
              {/*<p className="contents">
                 <span className="font-bold">Thurs</span> 3 PM to 9 PM
              </p>
              <p className="contents">
                <span className="font-bold">Fri</span> 3 PM to 9 PM
              </p> */}
              <p className="contents">
                <span className="font-bold">Sat, Sun</span> 1 PM to 9 PM
              </p>
              {/* <p className="contents">
                <span className="font-bold">Sun</span> 1 PM to 9 PM
              </p> */}
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
