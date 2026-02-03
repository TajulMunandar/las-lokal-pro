import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Pagar Rumah Minimalis",
      category: "pagar",
      image: "portfolio-fence.jpg",
      description: "Pagar besi minimalis dengan finishing cat duco untuk hunian modern di Lhokseumawe.",
      location: "Lhokseumawe",
      year: "2024",
      keywords: "pagar minimalis, pagar besi, pagar rumah modern",
    },
    {
      id: 2,
      title: "Kanopi Carport",
      category: "kanopi",
      image: "portfolio-canopy.jpg",
      description: "Kanopi carport baja ringan dengan atap polycarbonat untuk proteksi kendaraan.",
      location: "Banda Aceh",
      year: "2024",
      keywords: "kanopi carport, kanopi baja ringan, kanopi rumah",
    },
    {
      id: 3,
      title: "Tangga Spiral",
      category: "tangga",
      image: "portfolio-stairs.jpg",
      description: "Tangga besi spiral dengan railing stainless untuk rumah bertingkat.",
      location: "Langsa",
      year: "2023",
      keywords: "tangga spiral, tangga besi, railing stainless",
    },
    {
      id: 4,
      title: "Pagar Klasik",
      category: "pagar",
      image: "portfolio-fence.jpg",
      description: "Pagar besi klasik dengan motif ornamental untuk villa.",
      location: "Bireuen",
      year: "2023",
      keywords: "pagar klasik, pagar ornamental, pagar besi klasik",
    },
    {
      id: 5,
      title: "Kanopi Teras",
      category: "kanopi",
      image: "portfolio-canopy.jpg",
      description: "Kanopi teras dengan desain modern menggunakan baja hollow dan atap spandek.",
      location: "Aceh Utara",
      year: "2024",
      keywords: "kanopi teras, kanopi modern, baja hollow",
    },
    {
      id: 6,
      title: "Railing Balkon",
      category: "tangga",
      image: "portfolio-stairs.jpg",
      description: "Railing balkon kaca dengan pegangan stainless.",
      location: "Aceh Timur",
      year: "2024",
      keywords: "railing balkon, railing kaca, railing stainless",
    },
  ];

  const categories = [
    { id: "all", label: "Semua" },
    { id: "pagar", label: "Pagar" },
    { id: "kanopi", label: "Kanopi" },
    { id: "tangga", label: "Tangga" },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Portofolio Jasa Las | Bos Teralis Lhokseumawe</title>
        <meta name="description" content="Portofolio proyek jasa las kami: pagar besi, kanopi, tangga, railing & fabrikasi custom. Lihat hasil kerja kami di Aceh dan sekitarnya." />
        <meta name="keywords" content="portofolio las, hasil kerja las, proyek las, pagar besi, kanopi, tangga, lhokseumawe, aceh, bos teralis" />
        <meta property="og:title" content="Portofolio Jasa Las | Bos Teralis" />
        <meta property="og:description" content="Lihat portofolio proyek kami - pagar besi, kanopi, tangga, dan fabrikasi custom dengan kualitas terbaik di Aceh." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://bengkellasbos.com/portofolio" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-industrial text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container-section relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              PORTOFOLIO <span className="text-yellow-400">KAMI</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Hasil karya terbaik kami dalam berbagai proyek pengelasan dan fabrikasi logam
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container-section">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeFilter === cat.id ? "default" : "outline"}
                onClick={() => setActiveFilter(cat.id)}
                className="min-w-[100px]"
              >
                <Filter className="w-4 h-4 mr-2" />
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 animate-scale-in hover-lift cursor-pointer"
                style={{ animationDelay: `${project.id * 0.1}s` }}
              >
                <div className="aspect-video bg-secondary/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-muted-foreground">{project.category.toUpperCase()}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                      {project.category.toUpperCase()}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-display text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span>{project.location}</span>
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors" asChild>
                    <a href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20proyek%20Anda" target="_blank" rel="noopener noreferrer">
                      Konsultasi Proyek Similar
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>

                <span className="sr-only">{project.keywords}</span>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Tidak ada proyek dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container-section">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="font-display text-4xl md:text-5xl text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Proyek Selesai</div>
            </div>
            <div className="p-6">
              <div className="font-display text-4xl md:text-5xl text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Tahun Pengalaman</div>
            </div>
            <div className="p-6">
              <div className="font-display text-4xl md:text-5xl text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Klien Puas</div>
            </div>
            <div className="p-6">
              <div className="font-display text-4xl md:text-5xl text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Tim Ahli</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-industrial text-white">
        <div className="container-section text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            PUNYA <span className="text-yellow-400">PROYEK</span>?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan proyek pengelasan Anda dengan tim ahli kami
          </p>
          <Button size="xl" variant="secondary" asChild>
            <a href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20proyek" target="_blank" rel="noopener noreferrer">
              Konsultasi via WhatsApp
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default PortfolioPage;
