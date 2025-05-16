import Link from "next/link";
import { Layout } from "~/components/layout";
import { SEO } from "~/components/seo";
import { Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact MVZ Kitchen restaurant in Brampton. Call, message, or visit us for authentic vegetarian Indian food experience."
        keywords="contact MVZ Kitchen, Indian restaurant Brampton, vegetarian restaurant contact, Indian food Brampton"
      />
      <Layout>
        <div className="grid gap-8">
          <h1 className="text-2xl font-bold">Contact Us</h1>

          <p className="text-lg">
            We&apos;re always happy to hear from our customers! Feel free to
            reach out through any of the following channels. For quick
            responses, WhatsApp is our preferred method of communication.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-bold">Get in Touch</h2>
              <div className="space-y-4">
                <p>
                  <span className="font-bold">Phone:</span>{" "}
                  <a href="tel:+13653780009" className="hover:underline">
                    +1 (365) 378-0009
                  </a>
                </p>
                <p>
                  <span className="font-bold">Email:</span>{" "}
                  <a
                    href="mailto:order@mvzkitchen.ca"
                    className="hover:underline"
                  >
                    order@mvzkitchen.ca
                  </a>
                </p>
                <p>
                  <span className="font-bold">WhatsApp:</span>{" "}
                  <a
                    href="https://wa.me/13653780009"
                    className="hover:underline"
                    target="_blank"
                  >
                    Message us directly
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold">Location</h2>
              <Link
                href="https://maps.app.goo.gl/9TqJAazS222w6H9v5"
                target="_blank"
                className="hover:underline"
              >
                <p>9280 Goreway Dr Unit C107</p>
                <p>Brampton, ON</p>
                <p>L6T 0C4</p>
              </Link>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold">Hours</h2>
              <div className="grid grid-cols-2 gap-2">
                <p className="contents">
                  <span className="font-bold">Mon - Fri</span> Closed
                </p>
                {/* <p className="contents">
                  <span className="font-bold">Wed - Fri</span> 3 PM to 9 PM
                </p> */}
                <p className="contents">
                  <span className="font-bold">Sat, Sun</span> 3 PM to 9 PM
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold">Social Media</h2>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/mvzkitchen/"
                  target="_blank"
                  className="hover:opacity-70"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com/people/Mvz-Kitchen/pfbid02j42XzQQ3n1bCXXr14YsP7XuQ7rgp9aYDXX76P1XM6fn1zLk4jmSjtt3R8TkXWj25l/"
                  target="_blank"
                  className="hover:opacity-70"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
