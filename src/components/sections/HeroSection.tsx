import { ArrowRight, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-welding.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Clock, value: "15+", label: "Tahun Pengalaman" },
    { icon: Award, value: "1000+", label: "Proyek Selesai" },
    { icon: Shield, value: "100%", label: "Garansi Kualitas" },
  ];

  return (
    <section id="beranda" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Bengkel Las Profesional - Jasa Las Terbaik"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 spark-overlay" />
      </div>

      {/* Content */}
      <div className="container-section relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Bengkel Las Terpercaya #1 di Lhokseumawe</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            AHLI LAS
            <br />
            <span className="text-gradient">PROFESIONAL</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Solusi terbaik untuk kebutuhan pengelasan Anda. Kami menyediakan jasa las berkualitas tinggi untuk pagar besi, kanopi, tangga, dan fabrikasi logam custom dengan pengerjaan profesional.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20jasa%20las" target="_blank" rel="noopener noreferrer">
                Konsultasi Gratis
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#layanan">
                Lihat Layanan
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <stat.icon className="w-5 h-5 text-primary hidden sm:block" />
                  <span className="font-display text-2xl md:text-4xl text-gradient">{stat.value}</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
