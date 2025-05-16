import { GetServerSideProps } from "next";
import { MVZMenuCategories, MVZMenuItems } from "~/data/menuData";
import { ALL_LOCATIONS } from "~/data/locationData";

const SITE_URL = "https://mvzkitchen.ca";

function generateSiteMap(
  categories: string[],
  menuItems: { name: string; category: string }[],
  locations: { name: string }[],
) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Core Pages -->
     <url>
       <loc>${SITE_URL}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${SITE_URL}/menu</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${SITE_URL}/contact</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     
     <!-- Category Pages -->
     ${categories
       .map((category) => {
         const slug = category.toLowerCase().replace(/\s+/g, "-");
         return `
       <url>
         <loc>${SITE_URL}/category/${slug}</loc>
         <lastmod>${new Date().toISOString()}</lastmod>
         <changefreq>weekly</changefreq>
         <priority>0.8</priority>
       </url>`;
       })
       .join("")}
     
     <!-- Menu Item Pages -->
     ${menuItems
       .map((item) => {
         const slug = item.name.toLowerCase().replace(/\s+/g, "-");
         return `
       <url>
         <loc>${SITE_URL}/item/${slug}</loc>
         <lastmod>${new Date().toISOString()}</lastmod>
         <changefreq>weekly</changefreq>
         <priority>0.7</priority>
       </url>`;
       })
       .join("")}
     
     <!-- Location Pages -->
     ${locations
       .map((location) => {
         const slug = location.name.toLowerCase();
         return `
       <url>
         <loc>${SITE_URL}/location/${slug}</loc>
         <lastmod>${new Date().toISOString()}</lastmod>
         <changefreq>monthly</changefreq>
         <priority>0.8</priority>
       </url>`;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will handle the XML generation
  // This component won't actually be used
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Generate the XML sitemap
  const sitemap = generateSiteMap(
    MVZMenuCategories,
    MVZMenuItems,
    ALL_LOCATIONS,
  );

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
