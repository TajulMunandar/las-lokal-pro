import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Fence, Home, Footprints, Sparkles, DoorOpen, Wrench, ArrowRight, CheckCircle, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Fence,
      title: "Pagar Besi",
      slug: "pagar-besi",
      description: "Pagar besi minimalis, klasik, dan custom sesuai desain. Tahan lama, anti karat, dengan finishing berkualitas tinggi.",
      features: ["Desain minimalis & klasik", "Material besi berkualitas", "Finishing anti karat", "Garansi 2 tahun"],
      keywords: "jasa las pagar besi, pagar besi minimalis, pagar besi custom lhokseumawe",
    },
    {
      icon: Home,
      title: "Kanopi & Awning",
      slug: "kanopi-awning",
      description: "Kanopi carport, teras, dan atap baja ringan. Desain modern dengan material premium yang tahan cuaca.",
      features: ["Desain modern & elegan", "Baja ringan berkualitas", "Tahan cuaca ekstrem", "Pemasangan cepat"],
      keywords: "jasa las kanopi, kanopi minimalis, kanopi carport lhokseumawe",
    },
    {
      icon: Footprints,
      title: "Tangga & Railing",
      slug: "tangga-railing",
      description: "Tangga besi spiral, minimalis, dan railing balkon. Pengerjaan presisi dengan desain elegan dan kuat.",
      features: ["Desain custom", "Pengerjaan presisi", "Material premium", "Finishing halus"],
      keywords: "tangga besi, railing tangga, tangga spiral lhokseumawe",
    },
    {
      icon: Sparkles,
      title: "Las Stainless Steel",
      slug: "las-stainless",
      description: "Pengelasan stainless steel untuk kitchen set, handrail, dan dekorasi. Hasil halus dan tahan korosi.",
      features: ["Stainless grade 304 & 316", "Hasil las halus", "Tahan korosi", "Multi fungsi"],
      keywords: "las stainless steel, stainless welding, kitchen set stainless lhokseumawe",
    },
    {
      icon: DoorOpen,
      title: "Rolling Door & Folding Gate",
      slug: "rolling-door",
      description: "Rolling door garasi dan folding gate untuk ruko dan gudang. Sistem buka-tutup yang lancar dan aman.",
      features: ["Sistem multi point lock", "Bahan tebal & kuat", "Operasi ringan", "Aman & terpercaya"],
      keywords: "rolling door, folding gate, pintu garasi lhokseumawe",
    },
    {
      icon: Wrench,
      title: "Fabrikasi Custom",
      slug: "fabrikasi-custom",
      description: "Fabrikasi logam custom untuk proyek konstruksi, industri, dan dekorasi. Sesuai spesifikasi kebutuhan Anda.",
      features: ["Desain sesuai kebutuhan", "Material beragam", "QC ketat", "Tepat waktu"],
      keywords: "fabrikasi logam, fabrikasi besi, custom metal work lhokseumawe",
    },
  ];

  const whyChooseUs = [
    { icon: Clock, title: "Pengalaman 15+ Tahun", desc: "Ahli dalam bidang pengelasan dan fabrikasi logam" },
    { icon: Shield, title: "Garansi Kualitas", desc: "Garansi untuk semua pekerjaan las kami" },
    { icon: CheckCircle, title: "Tim Profesional", desc: "Tukang las berpengalaman dan bersertifikat" },
  ];

  return (
    <>
      <Helmet>
        <title>Layanan Jasa Las Profesional Lhokseumawe | Bos Teralis</title>
        <meta name="description" content="Bos Teralis - Layanan jasa las profesional di Lhokseumawe Aceh: pagar besi, kanopi, tangga, stainless steel, rolling door & fabrikasi custom. Harga kompetitif, garansi kualitas. Hubungi sekarang!" />
        <meta name="keywords" content="jasa las, bengkel las, las profesional, pagar besi, kanopi, tangga, rolling door, fabrikasi custom, las stainless, lhokseumawe, aceh, bos teralis" />
        <meta property="og:title" content="Layanan Jasa Las Profesional Lhokseumawe" />
        <meta property="og:description" content="Layanan lengkap: pagar besi, kanopi, tangga, stainless steel, rolling door & fabrikasi custom. Profesional & berkualitas di Aceh." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://bengkellasbos.com/layanan" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-industrial text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container-section relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              LAYANAN <span className="text-yellow-400">JASA LAS</span> PROFESIONAL
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Bengkel las terpercaya di Lhokseumawe dengan layanan lengkap untuk kebutuhan rumah, bisnis, dan industri Anda.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="xl" variant="secondary" asChild>
                <a href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20jasa%20las" target="_blank" rel="noopener noreferrer">
                  Konsultasi Gratis
                </a>
              </Button>
              <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-black" asChild>
                <Link to="/portofolio">Lihat Portofolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container-section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              LAYANAN <span className="text-gradient">KAMI</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Kami menyediakan berbagai layanan pengelasan berkualitas tinggi dengan material terbaik dan pengerjaan profesional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <article
                key={index}
                className="group bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 hover:shadow-glow transition-all duration-500 animate-slide-up hover-lift cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-industrial rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="font-display text-2xl mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors" asChild>
                  <Link to={`/layanan/${service.slug}`}>
                    Detail Layanan <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>

                <span className="sr-only">{service.keywords}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="container-section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              MENGAPA <span className="text-gradient">MEMILIH KAMI</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Kami berkomitmen memberikan layanan terbaik dengan kualitas terjamin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors">
                <div className="w-16 h-16 bg-gradient-industrial rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-industrial text-white">
        <div className="container-section text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            BUTUH <span className="text-yellow-400">JASA LAS</span>?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan pengelasan Anda dengan tim profesional kami secara gratis
          </p>
          <Button size="xl" variant="secondary" asChild>
            <a href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20jasa%20las" target="_blank" rel="noopener noreferrer">
              Hubungi Kami via WhatsApp
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

export default ServicesPage;
