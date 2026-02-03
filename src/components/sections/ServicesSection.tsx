import { Fence, Home, Footprints, Sparkles, DoorOpen, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Fence,
      title: "Pagar Besi",
      description: "Pagar besi minimalis, klasik, dan custom sesuai desain. Tahan lama, anti karat, dengan finishing berkualitas tinggi.",
      keywords: "jasa las pagar besi, pagar besi minimalis, pagar besi custom",
    },
    {
      icon: Home,
      title: "Kanopi & Awning",
      description: "Kanopi carport, teras, dan atap baja ringan. Desain modern dengan material premium yang tahan cuaca.",
      keywords: "jasa las kanopi, kanopi minimalis, kanopi carport",
    },
    {
      icon: Footprints,
      title: "Tangga & Railing",
      description: "Tangga besi spiral, minimalis, dan railing balkon. Pengerjaan presisi dengan desain elegan dan kuat.",
      keywords: "tangga besi, railing tangga, tangga spiral",
    },
    {
      icon: Sparkles,
      title: "Las Stainless Steel",
      description: "Pengelasan stainless steel untuk kitchen set, handrail, dan dekorasi. Hasil halus dan tahan korosi.",
      keywords: "las stainless steel, stainless welding, kitchen set stainless",
    },
    {
      icon: DoorOpen,
      title: "Rolling Door & Folding Gate",
      description: "Rolling door garasi dan folding gate untuk ruko dan gudang. Sistem buka-tutup yang lancar dan aman.",
      keywords: "rolling door, folding gate, pintu garasi",
    },
    {
      icon: Wrench,
      title: "Fabrikasi Custom",
      description: "Fabrikasi logam custom untuk proyek konstruksi, industri, dan dekorasi. Sesuai spesifikasi kebutuhan Anda.",
      keywords: "fabrikasi logam, fabrikasi besi, custom metal work",
    },
  ];

  return (
    <section id="layanan" className="py-20 md:py-28 bg-secondary/50 metal-texture">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            LAYANAN KAMI
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            JASA LAS <span className="text-gradient">PROFESIONAL</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Bengkel las terpercaya dengan berbagai layanan pengelasan berkualitas tinggi untuk kebutuhan rumah, bisnis, dan industri Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="group bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 hover:shadow-glow transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-industrial rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Link */}
              <a
                href={`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Konsultasi
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Hidden SEO keywords */}
              <span className="sr-only">{service.keywords}</span>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="xl" asChild>
            <a href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20jasa%20las" target="_blank" rel="noopener noreferrer">
              Konsultasi Gratis Sekarang
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
