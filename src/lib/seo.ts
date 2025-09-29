import { BRAND } from "./brand";

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing", 
  "name": "Turn 4 Detail",
  "alternateName": "SECTION 6 LLC",
  "url": "https://www.turn4detail.com/",
  "image": "https://www.turn4detail.com/og.jpg",
  "telephone": BRAND.phone,
  "email": BRAND.email,
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "11826 SE 218th Pl",
    "addressLocality": "Kent",
    "addressRegion": "WA",
    "postalCode": "98031",
    "addressCountry": "US"
  },
  "areaServed": ["Bellevue","Redmond","Kirkland","Seattle","Issaquah","Sammamish","Renton","Bothell"],
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "16:00" }
  ],
  "sameAs": [
    BRAND.instagram,
    BRAND.tiktok,
    BRAND.gReviews
  ].filter(Boolean),
  "brand": {
    "@type": "Brand",
    "name": "Turn 4 Detail"
  }
};
