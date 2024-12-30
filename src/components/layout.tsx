import clsx from "clsx";
import { ArrowRight, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const router = useRouter();

  const activePage: string = router.pathname;

  return (
    <>
      <main className="min-h-screen bg-[#f5ede4] p-4 md:px-8">
        <section className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col gap-2 lg:min-h-screen">
            {/* invisible selectable text */}

            <Link href={"/"} className="">
              <h1>
                <span className="select-none opacity-0" draggable={false}>
                  MV&apos;z Kitchenn
                </span>
                <Image
                  src="/logo_plain_orange.png"
                  alt="MV'z Kitchen written in orange as text"
                  width={1024}
                  height={1024}
                  draggable="false"
                  className="hidden h-32 lg:block lg:h-auto lg:w-full lg:pt-32"
                />
                <Image
                  src="/wider.png"
                  alt="MV'z Kitchen written in orange as text"
                  width={1024}
                  height={1024}
                  draggable="false"
                  className="-mb-12 -mt-8 w-full lg:hidden"
                />
              </h1>
            </Link>
            <ul className="grid select-none grid-cols-2 gap-2 pb-8 pt-4 font-bold underline lg:grid-cols-1 lg:gap-4 lg:pl-11 lg:text-2xl">
              <li>
                <Link
                  href="/menu"
                  className={clsx(
                    "group flex items-center justify-between gap-2 hover:underline lg:justify-normal",
                    activePage === "/menu"
                      ? "text-orange-500 decoration-orange-500"
                      : "",
                  )}
                  draggable="false"
                >
                  Menu{" "}
                  <ArrowRight className="transition-all group-hover:-rotate-45" />
                </Link>
              </li>
              <li>
                <Link
                  href="/catering"
                  className={clsx(
                    "group flex items-center justify-between gap-2 hover:underline lg:justify-normal",
                    activePage === "/catering" ? "text-orange-500" : "",
                  )}
                  draggable="false"
                >
                  Catering{" "}
                  <ArrowRight className="transition-all group-hover:-rotate-45" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={clsx(
                    "group flex items-center justify-between gap-2 hover:underline lg:justify-normal",
                    activePage === "/contact" ? "text-orange-500" : "",
                  )}
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
              <li>
                <a
                  href="https://wa.me/13653780009"
                  target="_blank"
                  className="group flex items-center justify-between gap-2 hover:underline lg:justify-normal"
                  draggable="false"
                >
                  WhatsApp{" "}
                  <Image
                    src="/whatsapp_black.svg"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="text-black transition-all group-hover:-rotate-6"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:py-8 lg:col-span-2">{children}</div>
        </section>
      </main>
      <footer className="flex grid-cols-12 flex-col gap-16 bg-neutral-900 p-4 text-white md:grid md:p-16">
        <div className="col-span-2 md:col-span-4">
          <div className="flex items-end gap-2">
            <div className="relative aspect-square h-16 w-16">
              <Image src={"/logo.png"} alt={"MV'z Kitchen Logo"} fill />
            </div>
            <div>
              <h2 className="text-lg font-semibold">MV&apos;z Kitchen</h2>
              <p className="text-wrap text-neutral-300">
                Serving flavour Indian food across the
                Kitchener-Waterloo-Cambridge region.
              </p>
            </div>
          </div>

          <ul className="mt-4 flex gap-4">
            {/* instagram, facebook, whatsapp */}
            <li className="relative h-8 w-8">
              <Link
                href="https://www.instagram.com/mvzkitchen/"
                target="_blank"
                className="flex h-full w-full items-center justify-center hover:underline"
              >
                <Instagram />
              </Link>
            </li>
            <li className="relative h-8 w-8">
              <Link
                href="https://www.facebook.com/people/Mvz-Kitchen/pfbid02j42XzQQ3n1bCXXr14YsP7XuQ7rgp9aYDXX76P1XM6fn1zLk4jmSjtt3R8TkXWj25l/?mibextid=LQQJ4d"
                target="_blank"
                className="flex h-full w-full items-center justify-center hover:underline"
              >
                <Facebook />
              </Link>
            </li>
            <li className="relative h-8 w-8">
              <Link
                href="https://wa.me/13653780009"
                target="_blank"
                className="hover:underline"
              >
                <Image src={"/whatsapp.svg"} alt={"Whatsapp"} fill />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 text-neutral-300">
          <h3 className="text-lg font-semibold">Address</h3>
          <Link
            href="https://maps.app.goo.gl/9TqJAazS222w6H9v5"
            target="_blank"
            className="hover:text-white hover:underline"
          >
            120 Pioneer Dr
            <br />
            Kitchener, ON
            <br />
            N2P 2C2
          </Link>
        </div>

        {/* contact */}
        <div className="col-span-3 text-neutral-300">
          <h3 className="text-lg font-semibold">Contact</h3>
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
        </div>

        {/* links */}

        <div className="col-span-3 text-neutral-300">
          <h3 className="text-lg font-semibold">Links</h3>
          <ul className="">
            <li>
              <Link href="/menu" className="hover:underline">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/catering" className="hover:underline">
                Catering
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <p className="col-span-12 text-left opacity-50">
          &copy; {new Date().getFullYear()} MV&apos;z Kitchen. All Rights
          Reserved.
        </p>
      </footer>
    </>
  );
}
