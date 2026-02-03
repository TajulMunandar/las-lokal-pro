import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Award, Users, Clock, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: "15+", label: "Tahun Pengalaman" },
    { value: "500+", label: "Proyek Selesai" },
    { value: "98%", label: "Kepuasan Klien" },
    { value: "50+", label: "Tim Ahli" },
  ];

  const values = [
    {
      icon: Award,
      title: "Kualitas Terjamin",
      description: "Kami menggunakan material terbaik dan standar pengelasan internasional untuk hasil yang tahan lama."
    },
    {
      icon: Users,
      title: "Tim Profesional",
      description: "Tim tukang las berpengalaman dan bersertifikat dengan keahlian di berbagai jenis pengelasan."
    },
    {
      icon: Clock,
      title: "Tepat Waktu",
      description: "Kami berkomitmen menyelesaikan proyek sesuai jadwal yang disepakati tanpa kompromi kualitas."
    },
  ];

  const team = [
    {
      name: "Ahmad Santoso",
      role: "Head of Production",
      experience: "20 Tahun",
    },
    {
      name: "Budi Prasetyo",
      role: "Senior Welder",
      experience: "15 Tahun",
    },
    {
      name: "Sari Dewi",
      role: "Design Consultant",
      experience: "10 Tahun",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Tentang Kami | Bengkel Las Bos Lhokseumawe</title>
        <meta name="description" content="Bengkel las profesional terpercaya di Lhokseumawe Aceh dengan pengalaman 15+ tahun. Spesialis pagar besi, kanopi, tangga, dan fabrikasi custom. Tim ahli, kualitas terjamin." />
        <meta name="keywords" content="bengkel las, tentang kami, jasa las profesional, tukang las berpengalaman, fabrikasi logam lhokseumawe, aceh" />
        <meta property="og:title" content="Tentang Kami | Bengkel Las Bos" />
        <meta property="og:description" content="Tim profesional dengan 15+ tahun pengalaman dalam jasa las dan fabrikasi logam berkualitas tinggi di Aceh." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://bengkellasbos.com/tentang-kami" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-industrial text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container-section relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              TENTANG <span className="text-yellow-400">KAMI</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Bengkel las profesional terpercaya yang telah melayani ratusan klien di Lhokseumawe dan sekitarnya sejak 2008.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                TENTANG KAMI
              </span>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                BENGKEL LAS <span className="text-gradient">BOS</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Bengkel Las Bos adalah perusahaan jasa las yang berlokasi di Lhokseumawe, didirikan dengan visi memberikan layanan pengelasan berkualitas tinggi kepada masyarakat Aceh. Dengan pengalaman lebih dari 15 tahun, kami telah dipercaya untuk menangani berbagai proyek mulai dari hunian pribadi, komersial, hingga industri.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Kami специализируемся dalam berbagai layanan pengelasan termasuk pagar besi, kanopi, tangga, railing, rolling door, dan fabrikasi custom. Setiap proyek ditangani oleh tim ahli dengan peralatan modern dan material berkualitas tinggi.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="p-4 bg-card border border-border rounded-xl text-center">
                    <div className="font-display text-3xl text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button size="lg" asChild>
                <Link to="/kontak">
                  Hubungi Kami <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden bg-secondary/30">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <Award className="w-20 h-20 text-primary mx-auto mb-4" />
                    <h3 className="font-display text-2xl mb-2">15+ Tahun</h3>
                    <p className="text-muted-foreground">Pengalaman dalam industri pengelasan dan fabrikasi logam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-card">
        <div className="container-section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              NILAI <span className="text-gradient">KAMI</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Prinsip kerja yang kami peg teguh untuk memberikan layanan terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-8 bg-secondary/30 rounded-2xl hover:bg-secondary/50 transition-colors">
                <div className="w-14 h-14 bg-gradient-industrial rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              TIM <span className="text-gradient">KAMI</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Tim ahli yang siap membantu kebutuhan pengelasan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary/50 transition-colors">
                <div className="w-24 h-24 bg-secondary/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.experience} Pengalaman</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-industrial text-white">
        <div className="container-section text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            SIAP <span className="text-yellow-400">KERJASAMA</span>?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis mengenai kebutuhan pengelasan Anda
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="xl" variant="secondary" asChild>
              <a href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
            <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-black" asChild>
              <Link to="/kontak">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default AboutPage;
