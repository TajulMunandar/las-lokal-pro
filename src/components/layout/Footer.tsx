import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const services = [
    "Pagar Besi",
    "Kanopi & Awning",
    "Tangga & Railing",
    "Las Stainless Steel",
    "Rolling Door",
    "Fabrikasi Custom",
  ];

  const areas = [
    "Lhokseumawe",
    "Banda Aceh",
    "Langsa",
    "Bireuen",
    "Aceh Utara",
    "Aceh Timur",
    "Pidie",
    "Aceh Besar",
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container-section py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 flex items-center justify-center hover:rotate-180 transition-transform duration-500 cursor-pointer">
                <img src="/logo.png" alt="Bos Teralis Logo" className="w-11 h-11 object-contain" />
              </div>
              <div>
                <span className="font-display text-xl">BOS TERALIS</span>
                <p className="text-xs text-muted-foreground">SOLUSI PENGELASAN TERBAIK</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Bengkel las profesional terpercaya di Lhokseumawe. Melayani berbagai kebutuhan pengelasan dengan kualitas terbaik dan harga kompetitif di Aceh dan sekitarnya.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg mb-4">LAYANAN KAMI</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#layanan"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display text-lg mb-4">AREA LAYANAN</h4>
            <ul className="space-y-2">
              {areas.map((area, index) => (
                <li key={index}>
                  <span className="text-muted-foreground text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">KONTAK</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Telepon / WhatsApp</p>
                  <a href="tel:+6281234567890" className="hover:text-primary transition-colors">
                    +62 812-3456-7890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:info@bengkellasbos.com" className="hover:text-primary transition-colors">
                    info@bengkellasbos.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Alamat</p>
                  <p className="text-sm">
                    Jl. Cut Nyak Dhien No. 45,
                    <br />
                    Lhokseumawe, Aceh 24351
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-section py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2024 Bos Teralis. Hak cipta dilindungi undang-undang.
          </p>
          <div className="flex gap-6 text-sm">
            <span className="text-muted-foreground">
              Dibuat dengan <span className="text-red-500">❤</span> oleh{" "}
              <a
                href="https://developerdadakan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Developer Dadakan
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
