import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Instagram, Facebook } from "lucide-react";

import Image from "next/image";

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

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="min-h-screen bg-[#f5ede4] p-4 md:px-8">
        {" "}
        {/* bg-[#e3f1ff]*/}
        {children}
      </main>
    </>
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
        <section className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col gap-2 lg:min-h-screen">
            <Image
              src="/logo_plain_orange.png"
              alt="MV'z Kitchen Logo"
              width={1024}
              height={1024}
              draggable="false"
              className="hidden h-32 lg:block lg:h-auto lg:w-full lg:pt-32"
            />
            <Image
              src="/wider.png"
              alt="MV'z Kitchen Logo"
              width={1024}
              height={1024}
              draggable="false"
              className="-mb-12 -mt-8 w-full lg:hidden"
            />
            <ul className="grid select-none grid-cols-2 gap-2 p-4 font-bold lg:grid-cols-1 lg:gap-4 lg:pl-11 lg:text-2xl">
              <li>
                <Link
                  href="/menu"
                  className="group flex items-center justify-between gap-2 hover:underline lg:justify-normal"
                  draggable="false"
                >
                  Menu{" "}
                  <ArrowRight className="transition-all group-hover:-rotate-45" />
                </Link>
              </li>
              <li>
                <Link
                  href="/catering"
                  className="group flex items-center justify-between gap-2 hover:underline lg:justify-normal"
                  draggable="false"
                >
                  Catering{" "}
                  <ArrowRight className="transition-all group-hover:-rotate-45" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group flex items-center justify-between gap-2 hover:underline lg:justify-normal"
                  draggable="false"
                >
                  Contact{" "}
                  <ArrowRight className="transition-all group-hover:-rotate-45" />
                </Link>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mvzkitchen/"
                  target="_blank"
                  className="group flex items-center justify-between gap-2 hover:underline lg:justify-normal"
                  draggable="false"
                >
                  Instagram{" "}
                  <Instagram className="transition-all group-hover:-rotate-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/Mvz-Kitchen/pfbid02j42XzQQ3n1bCXXr14YsP7XuQ7rgp9aYDXX76P1XM6fn1zLk4jmSjtt3R8TkXWj25l/?mibextid=LQQJ4d"
                  target="_blank"
                  className="group flex items-center justify-between gap-2 hover:underline lg:justify-normal"
                  draggable="false"
                >
                  Facebook{" "}
                  <Facebook className="transition-all group-hover:-rotate-6" />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:py-8 lg:col-span-2">
            <Image
              src="/HeroCropped.png"
              alt="MV'z Kitchen Logo"
              width={2402}
              height={1407}
            />

            <p className="font-bold md:text-2xl">
              Experience the freshest Indian food in Kitchener, Waterloo, and
              Cambridge. Join us to savor a fusion of traditional flavors and
              modern twists, bringing the vibrant tastes of Indian restaurants
              to you.
            </p>
            <hr className="my-8 border border-black" />
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-2">
              <div>
                <h2 className="text-lg font-extrabold">Hours</h2>
                <br />
                <div className="grid grid-cols-2">
                  <p className="contents">
                    <span className="font-bold">Mon</span> Closed
                  </p>
                  <p className="contents">
                    <span className="font-bold">Tues</span> Closed
                  </p>
                  <p className="contents">
                    <span className="font-bold">Wed</span> 3 PM to 9 PM
                  </p>
                  <p className="contents">
                    <span className="font-bold">Thurs</span> 3 PM to 9 PM
                  </p>
                  <p className="contents">
                    <span className="font-bold">Fri</span> 3 PM to 9 PM
                  </p>
                  <p className="contents">
                    <span className="font-bold">Sat</span> 1 PM to 9 PM
                  </p>
                  <p className="contents">
                    <span className="font-bold">Sun</span> 1 PM to 9 PM
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-extrabold">Location</h2>
                <br />
                <p>120 Pioneer Drive</p>
                <p>Kitchener, ON</p>
                <p>N2P 2Y6</p>
              </div>
              <div>
                <h2 className="text-lg font-extrabold">Contact</h2>
                <br />
                <p>+1 (365) 378-0009</p>
                <p>order@mvzkitchen.ca</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
