import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telepon / WhatsApp",
      value: "+62 812-3456-7890",
      href: "tel:+6281234567890",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@bengkellasbos.com",
      href: "mailto:info@bengkellasbos.com",
    },
    {
      icon: MapPin,
      label: "Alamat",
      value: "Jl. Cut Nyak Dhien No. 45, Lhokseumawe, Aceh 24351",
      href: "https://maps.google.com/?q=Lhokseumawe",
    },
    {
      icon: Clock,
      label: "Jam Operasional",
      value: "Senin - Sabtu: 08:00 - 17:00",
      href: null,
    },
  ];

  return (
    <section id="kontak" className="py-20 md:py-28 bg-secondary/50">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            HUBUNGI KAMI
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            SIAP <span className="text-gradient">MELAYANI</span> ANDA
          </h2>
          <p className="text-muted-foreground text-lg">
            Konsultasi gratis untuk kebutuhan pengelasan Anda. Hubungi kami sekarang untuk mendapatkan penawaran terbaik.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div>
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors hover-lift cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-industrial rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors font-medium text-sm"
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="rounded-xl overflow-hidden border border-border h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.5!2d97.15!3d5.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLhokseumawe%2C%20Aceh!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Bos Teralis"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h3 className="font-display text-2xl mb-6">Kirim Pesan</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nama Lengkap <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Nomor Telepon <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="+62 812-3456-7890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="email@contoh.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Layanan yang Dibutuhkan <span className="text-primary">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Pilih Layanan</option>
                  <option value="pagar">Pagar Besi</option>
                  <option value="kanopi">Kanopi & Awning</option>
                  <option value="tangga">Tangga & Railing</option>
                  <option value="stainless">Las Stainless Steel</option>
                  <option value="rolling">Rolling Door & Folding Gate</option>
                  <option value="custom">Fabrikasi Custom</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Pesan <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Jelaskan kebutuhan proyek Anda..."
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full">
                Kirim Pesan
                <Send className="w-5 h-5" />
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Atau hubungi langsung via{" "}
              <a
                href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20jasa%20las%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
