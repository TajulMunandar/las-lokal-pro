import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl. Cut Nyak Dhien No. 45, Lhokseumawe, Aceh 24351",
      link: "https://maps.google.com",
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 812-3456-7890",
      link: "tel:+6281234567890",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@bengkellasbos.com",
      link: "mailto:info@bengkellasbos.com",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Sabtu: 08:00 - 17:00",
      link: null,
    },
  ];

  const serviceAreas = [
    "Lhokseumawe", "Banda Aceh", "Langsa", "Bireuen",
    "Aceh Utara", "Aceh Timur", "Pidie", "Aceh Besar",
  ];

  return (
    <>
      <Helmet>
        <title>Hubungi Kami | Bos Teralis Lhokseumawe</title>
        <meta name="description" content="Hubungi Bos Teralis untuk konsultasi jasa las di Lhokseumawe Aceh. Alamat Jl. Cut Nyak Dhien No. 45, telepon 0812-3456-7890, email info@bengkellasbos.com. Jam operasional Senin-Sabtu 08:00-17:00." />
        <meta name="keywords" content="hubungi bengkel las, kontak las profesional, jasa las lhokseumawe, telepon bengkel las, alamat las aceh, bos teralis" />
        <meta property="og:title" content="Hubungi Kami | Bos Teralis" />
        <meta property="og:description" content="Konsultasi gratis untuk kebutuhan pengelasan Anda. Hubungi kami melalui telepon, WhatsApp, atau email di Lhokseumawe Aceh." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://bengkellasbos.com/kontak" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-industrial text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container-section relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              HUBUNGI <span className="text-yellow-400">KAMI</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Siap membantu kebutuhan pengelasan Anda. Konsultasikan sekarang juga!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                INFORMASI <span className="text-gradient">KONTAK</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Hubungi kami untuk konsultasi gratis mengenai kebutuhan pengelasan Anda. Tim kami siap merespons dengan cepat.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link || "#"}
                    target={item.link?.startsWith("http") ? "_blank" : undefined}
                    rel={item.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors hover-lift cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-industrial rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Service Areas */}
              <div className="mt-12">
                <h3 className="font-display text-xl mb-4">Area Layanan</h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary/50 text-muted-foreground rounded-full text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h2 className="font-display text-2xl md:text-3xl mb-6">
                KIRIM <span className="text-gradient">PESAN</span>
              </h2>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nama Lengkap
                    </label>
                    <Input
                      id="name"
                      placeholder="Masukkan nama Anda"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Nomor WhatsApp
                    </label>
                    <Input
                      id="phone"
                      placeholder="0812-3456-7890"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email (Opsional)
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@anda.com"
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">
                    Layanan Yang Diinginkan
                  </label>
                  <select
                    id="service"
                    className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Pilih layanan...</option>
                    <option value="pagar">Pagar Besi</option>
                    <option value="kanopi">Kanopi & Awning</option>
                    <option value="tangga">Tangga & Railing</option>
                    <option value="stainless">Las Stainless Steel</option>
                    <option value="rolling">Rolling Door & Folding Gate</option>
                    <option value="custom">Fabrikasi Custom</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Jelaskan kebutuhan Anda..."
                    className="min-h-[120px] bg-background"
                  />
                </div>

                <Button size="lg" className="w-full" asChild>
                  <a
                    href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Kirim via WhatsApp
                  </a>
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Dengan mengirim pesan, Anda menyetujui kebijakan privasi kami.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-card">
        <div className="container-section">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              LOKASI <span className="text-gradient">KAMI</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Kunjungi bengkel kami untuk berkonsultasi langsung
            </p>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden bg-secondary/30 border border-border">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl mb-2">Jl. Cut Nyak Dhien No. 45</h3>
                <p className="text-muted-foreground mb-4">Lhokseumawe, Aceh 24351</p>
                <Button asChild>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buka di Google Maps <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ContactPage;
