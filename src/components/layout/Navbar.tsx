import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#beranda", label: "Beranda" },
    { href: "#layanan", label: "Layanan" },
    { href: "#tentang", label: "Tentang Kami" },
    { href: "#portofolio", label: "Portofolio" },
    { href: "#testimoni", label: "Testimoni" },
    { href: "#kontak", label: "Kontak" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-secondary py-2">
        <div className="container-section flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+6281234567890" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+62 812-3456-7890</span>
            </a>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Jakarta, Indonesia</span>
            </span>
          </div>
          <div className="text-muted-foreground">
            Senin - Sabtu: 08:00 - 17:00
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="container-section">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#beranda" className="flex items-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-industrial rounded-lg flex items-center justify-center">
                <span className="font-display text-xl md:text-2xl text-primary-foreground">BL</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-xl md:text-2xl tracking-wide">BENGKEL LAS</span>
                <p className="text-[10px] md:text-xs text-muted-foreground -mt-1">PROFESIONAL</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20jasa%20las%20Anda" target="_blank" rel="noopener noreferrer">
                  Hubungi Kami
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-2" asChild>
                <a href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20jasa%20las%20Anda" target="_blank" rel="noopener noreferrer">
                  WhatsApp Sekarang
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
