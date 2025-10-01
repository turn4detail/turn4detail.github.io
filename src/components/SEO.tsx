import { useEffect } from "react";

type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  jsonLd?: object;
};

export default function SEO({
  title = "Turn 4 Detail – Quality Over Quantity",
  description = "Quality-first mobile & studio auto detailing, paint correction, and ceramic coatings in the Greater Seattle Area.",
  url = "https://www.turn4detail.com/",
  image = "https://www.turn4detail.com/og.jpg",
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const set = (name: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setProp = (property: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    set("description", description);

    setProp("og:title", title);
    setProp("og:description", description);
    setProp("og:url", url);
    setProp("og:image", image);

    set("twitter:title", title);
    set("twitter:description", description);
    set("twitter:image", image);

    // JSON-LD
    const id = "ld-json";
    const existing = document.getElementById(id);
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, url, image, jsonLd]);

  return null;
}
