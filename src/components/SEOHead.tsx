import { useEffect } from "react";

const SEOHead = () => {
  useEffect(() => {
    // Set page title
    document.title = "Bos Teralis Lhokseumawe | Jasa Las Pagar, Kanopi, Tangga Terpercaya";

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Bos Teralis - Bengkel las profesional terpercaya di Lhokseumawe Aceh. Jasa las pagar besi, kanopi, tangga, rolling door & fabrikasi custom. Pengalaman 15+ tahun, garansi kualitas. Hubungi sekarang!");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Bos Teralis - Bengkel las profesional terpercaya di Lhokseumawe Aceh. Jasa las pagar besi, kanopi, tangga, rolling door & fabrikasi custom. Pengalaman 15+ tahun, garansi kualitas. Hubungi sekarang!";
      document.head.appendChild(meta);
    }

    // Add additional SEO meta tags
    const metaTags = [
      { name: "keywords", content: "bos teralis, bengkel las, jasa las, las pagar besi, las kanopi, las tangga, rolling door, fabrikasi logam, las stainless, jasa las lhokseumawe, bengkel las profesional, tukang las terdekat, aceh" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Bos Teralis" },
      { property: "og:title", content: "Bos Teralis Lhokseumawe | Jasa Las Terpercaya" },
      { property: "og:description", content: "Bos Teralis - Bengkel las profesional terpercaya di Lhokseumawe Aceh. Jasa las pagar besi, kanopi, tangga, rolling door & fabrikasi custom dengan pengalaman 15+ tahun." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "id_ID" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Bos Teralis Lhokseumawe" },
      { name: "twitter:description", content: "Jasa las berkualitas tinggi untuk pagar besi, kanopi, tangga, dan fabrikasi custom di Aceh." },
    ];

    metaTags.forEach((tag) => {
      const existingTag = document.querySelector(`meta[${tag.property ? "property" : "name"}="${tag.property || tag.name}"]`);
      if (!existingTag) {
        const meta = document.createElement("meta");
        if (tag.property) {
          meta.setAttribute("property", tag.property);
        } else {
          meta.name = tag.name;
        }
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = window.location.origin;
      document.head.appendChild(link);
    }

    // Add JSON-LD Schema
    const schemaScript = document.getElementById("schema-jsonld");
    if (!schemaScript) {
      const script = document.createElement("script");
      script.id = "schema-jsonld";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "#business",
            "name": "Bos Teralis",
            "description": "Bengkel las profesional terpercaya di Lhokseumawe Aceh dengan pengalaman 15+ tahun. Melayani jasa las pagar besi, kanopi, tangga, rolling door, dan fabrikasi logam custom.",
            "url": window.location.origin,
            "telephone": "+6281234567890",
            "email": "info@bengkellasbos.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jl. Cut Nyak Dhien No. 45",
              "addressLocality": "Lhokseumawe",
              "addressRegion": "Aceh",
              "postalCode": "24351",
              "addressCountry": "ID"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 5.18,
              "longitude": 97.15
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:00",
                "closes": "17:00"
              }
            ],
            "priceRange": "$$",
            "image": "",
            "sameAs": [
              "https://facebook.com/bos teralis",
              "https://instagram.com/bos teralis"
            ]
          },
          {
            "@type": "Service",
            "@id": "#pagar-besi",
            "name": "Jasa Las Pagar Besi",
            "description": "Pembuatan pagar besi minimalis, klasik, dan custom sesuai desain dengan finishing berkualitas tinggi.",
            "provider": { "@id": "#business" },
            "areaServed": {
              "@type": "City",
              "name": "Lhokseumawe"
            }
          },
          {
            "@type": "Service",
            "@id": "#kanopi",
            "name": "Jasa Las Kanopi",
            "description": "Pembuatan kanopi carport, teras, dan atap baja ringan dengan desain modern.",
            "provider": { "@id": "#business" }
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Berapa lama pengerjaan pagar besi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pengerjaan pagar besi biasanya memakan waktu 3-7 hari kerja tergantung kompleksitas desain dan panjang pagar."
                }
              },
              {
                "@type": "Question",
                "name": "Apakah ada garansi untuk pekerjaan las?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ya, kami memberikan garansi kualitas untuk semua pekerjaan las kami. Durasi garansi bervariasi tergantung jenis layanan."
                }
              },
              {
                "@type": "Question",
                "name": "Area mana saja yang dilayani?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kami melayani seluruh wilayah Aceh termasuk Lhokseumawe, Banda Aceh, Langsa, Bireuen, Aceh Utara, Aceh Timur, Pidie, dan Aceh Besar."
                }
              }
            ]
          }
        ]
      });
      document.head.appendChild(script);
    }
  }, []);

  return null;
};

export default SEOHead;
