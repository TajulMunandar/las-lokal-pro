import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Star, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const TestimonialsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Pemilik Rumah",
      location: "Lhokseumawe",
      rating: 5,
      project: "Pagar Besi",
      quote: "Sangat puas dengan hasil kerja Bos Teralis. Pagar rumah saya terlihat sangat elegan dan finishingnya rapi. Proses pengerjaan juga tepat waktu. Highly recommended!",
      date: "Januari 2024",
    },
    {
      id: 2,
      name: "Siti Aminah",
      role: "Pengusaha",
      location: "Banda Aceh",
      rating: 5,
      project: "Kanopi Carport",
      quote: "Kanopi carport yang mereka buat sangat kokoh dan estetis. Tim kerjanya profesional dan komunikatif. Saya tidak perlu khawatir mengawasi proses karena semua berjalan sesuai rencana.",
      date: "Desember 2023",
    },
    {
      id: 3,
      name: "Ahmad Fauzi",
      role: "Developer Properti",
      location: "Langsa",
      rating: 5,
      project: "Fabrikasi Custom",
      quote: "Sudah kerjasama beberapa proyek untuk kebutuhan railing dan pagar di proyek kami. Kualitas selalu konsisten dan harga bersaing. Partner yang bisa dipercaya.",
      date: "November 2023",
    },
    {
      id: 4,
      name: "Dewi Lestari",
      role: "Arsitek",
      location: "Bireuen",
      rating: 5,
      project: "Tangga Spiral",
      quote: "Sebagai arsitek, saya picky dengan detail. Bos Teralis mampu merealisasikan desain tangga spiral dengan presisi. Hasilnya sesuai dengan visi arsitektur yang saya rancang.",
      date: "Oktober 2023",
    },
    {
      id: 5,
      name: "Hendra Wijaya",
      role: "Pemilik Toko",
      location: "Aceh Utara",
      rating: 5,
      project: "Rolling Door",
      quote: "Rolling door untuk ruko saya bekerja dengan sangat lancar. Tidak ada suara aneh dan mekanisme lock-nya aman. Servis juga mudah dihubungi jika ada kendala.",
      date: "September 2023",
    },
    {
      id: 6,
      name: "Ratna Dewi",
      role: "Ibu Rumah Tangga",
      location: "Aceh Timur",
      rating: 5,
      project: "Kanopi Teras",
      quote: "Awalnya ragu karena tidak punya pengalaman dengan bengkel las. Tapi mereka sangat patient menjelaskan berbagai opsi. Hasil kanopi teras keluarga kami bagus sekali!",
      date: "Agustus 2023",
    },
  ];

  const stats = [
    { value: "4.9/5", label: "Rating Rata-rata" },
    { value: "200+", label: "Ulasan Positif" },
    { value: "98%", label: "Klien Kembali" },
    { value: "500+", label: "Proyek Selesai" },
  ];

  return (
    <>
      <Helmet>
        <title>Testimoni Klien | Bos Teralis Lhokseumawe</title>
        <meta name="description" content="Testimoni dan ulasan dari klien yang puas dengan jasa las kami. Pagar besi, kanopi, tangga, rolling door & fabrikasi custom. 98% klien puas di Aceh." />
        <meta name="keywords" content="testimoni las, ulasan klien, review bengkel las, rating jasa las, klien puas lhokseumawe, aceh, bos teralis" />
        <meta property="og:title" content="Testimoni Klien | Bos Teralis" />
        <meta property="og:description" content="Baca apa yang klien kami katakan tentang kualitas layanan kami. 98% klien puas dan kembali menggunakan jasa kami di Aceh." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://bengkellasbos.com/testimoni" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-industrial text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container-section relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              TESTIMONI <span className="text-yellow-400">KLIEN</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Apa yang dikatakan klien kami tentang pengalaman bekerja sama dengan kami
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container-section">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="font-display text-3xl md:text-4xl text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container-section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              ULASAN <span className="text-gradient">KLIEN</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Kami berkomitmen memberikan layanan terbaik. Berikut testimoni dari klien yang telah menggunakan jasa kami.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <article
                key={item.id}
                className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 hover:shadow-glow transition-all duration-500"
              >
                <Quote className="w-10 h-10 text-primary/30 mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{item.quote}"
                </p>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">{item.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded">
                      {item.project}
                    </span>
                    <span>{item.location}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-industrial text-white">
        <div className="container-section text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            JADI <span className="text-yellow-400">KLIEN</span> KAMI
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Rasakan sendiri kualitas layanan kami. Konsultasikan kebutuhan pengelasan Anda sekarang
          </p>
          <Button size="xl" variant="secondary" asChild>
            <a href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi" target="_blank" rel="noopener noreferrer">
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

export default TestimonialsPage;
