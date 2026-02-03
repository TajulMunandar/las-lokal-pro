import { useState } from "react";
import { Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioFence from "@/assets/portfolio-fence.jpg";
import portfolioCanopy from "@/assets/portfolio-canopy.jpg";
import portfolioStairs from "@/assets/portfolio-stairs.jpg";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("semua");

  const filters = [
    { id: "semua", label: "Semua" },
    { id: "pagar", label: "Pagar Besi" },
    { id: "kanopi", label: "Kanopi" },
    { id: "tangga", label: "Tangga" },
  ];

  const projects = [
    {
      id: 1,
      image: portfolioFence,
      title: "Pagar Besi Minimalis Modern",
      category: "pagar",
      location: "Jakarta Selatan",
    },
    {
      id: 2,
      image: portfolioCanopy,
      title: "Kanopi Carport Premium",
      category: "kanopi",
      location: "Tangerang",
    },
    {
      id: 3,
      image: portfolioStairs,
      title: "Tangga Stainless Steel Elegan",
      category: "tangga",
      location: "Jakarta Barat",
    },
    {
      id: 4,
      image: portfolioFence,
      title: "Pagar Klasik Ornamen",
      category: "pagar",
      location: "Bekasi",
    },
    {
      id: 5,
      image: portfolioCanopy,
      title: "Kanopi Teras Rumah",
      category: "kanopi",
      location: "Depok",
    },
    {
      id: 6,
      image: portfolioStairs,
      title: "Railing Balkon Modern",
      category: "tangga",
      location: "Jakarta Utara",
    },
  ];

  const filteredProjects = activeFilter === "semua"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portofolio" className="py-20 md:py-28 bg-secondary/30">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            PORTOFOLIO
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            PROYEK <span className="text-gradient">TERBAIK</span> KAMI
          </h2>
          <p className="text-muted-foreground text-lg">
            Lihat hasil pengerjaan kami yang telah dipercaya oleh ratusan pelanggan di seluruh Jabodetabek.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-industrial text-primary-foreground shadow-glow"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button variant="hero" size="lg" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Eye className="w-5 h-5" />
                  Lihat Detail
                </Button>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-xl mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.location}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="xl" asChild>
            <a href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20melihat%20lebih%20banyak%20portofolio" target="_blank" rel="noopener noreferrer">
              Lihat Lebih Banyak
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
