import { CheckCircle, Users, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const features = [
    "Tim tukang las bersertifikat dan berpengalaman",
    "Material berkualitas tinggi dengan garansi",
    "Harga transparan tanpa biaya tersembunyi",
    "Pengerjaan tepat waktu sesuai jadwal",
    "Layanan after-sales dan maintenance",
    "Desain custom sesuai keinginan Anda",
  ];

  const values = [
    {
      icon: Target,
      title: "Presisi",
      description: "Pengerjaan detail dengan standar kualitas tinggi",
    },
    {
      icon: Users,
      title: "Profesional",
      description: "Tim berpengalaman yang terlatih dan bersertifikat",
    },
    {
      icon: Zap,
      title: "Efisien",
      description: "Pengerjaan cepat tanpa mengorbankan kualitas",
    },
  ];

  return (
    <section id="tentang" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent" />
      </div>

      <div className="container-section relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              TENTANG KAMI
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              BENGKEL LAS <span className="text-gradient">TERPERCAYA</span> SEJAK 2009
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Kami adalah bengkel las profesional yang telah melayani ribuan pelanggan di Lhokseumawe dan sekitarnya di Aceh. Dengan pengalaman lebih dari 15 tahun, kami berkomitmen memberikan hasil pengelasan berkualitas tinggi dengan harga yang kompetitif.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" asChild>
              <a href="#kontak">
                Hubungi Kami
              </a>
            </Button>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 flex items-start gap-5 hover:border-primary/50 transition-colors animate-fade-in-right hover-lift cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-14 h-14 bg-gradient-industrial rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}

            {/* Stats Card */}
            <div className="bg-gradient-industrial rounded-xl p-8 text-primary-foreground hover-scale transition-transform cursor-default">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-display text-4xl mb-1">15+</p>
                  <p className="text-sm opacity-90">Tahun</p>
                </div>
                <div>
                  <p className="font-display text-4xl mb-1">1000+</p>
                  <p className="text-sm opacity-90">Proyek</p>
                </div>
                <div>
                  <p className="font-display text-4xl mb-1">500+</p>
                  <p className="text-sm opacity-90">Klien</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
