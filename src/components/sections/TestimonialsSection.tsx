import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Pemilik Rumah",
      location: "Lhokseumawe",
      rating: 5,
      text: "Sangat puas dengan hasil kerja Bos Teralis. Pagar rumah saya terlihat sangat elegan dan finishingnya rapi. Tim juga sangat profesional dan tepat waktu.",
    },
    {
      id: 2,
      name: "Siti Rahayu",
      role: "Pengembang Properti",
      location: "Banda Aceh",
      rating: 5,
      text: "Sudah bekerja sama untuk beberapa proyek perumahan. Kualitas las sangat bagus dan harga bersaing. Recommended untuk proyek besar maupun kecil!",
    },
    {
      id: 3,
      name: "Ahmad Wijaya",
      role: "Kontraktor",
      location: "Langsa",
      rating: 5,
      text: "Bengkel las yang sangat profesional. Pengerjaan kanopi untuk klien saya selesai lebih cepat dari jadwal dan hasilnya memuaskan. Pasti akan pakai jasa mereka lagi.",
    },
    {
      id: 4,
      name: "Dewi Lestari",
      role: "Pemilik Ruko",
      location: "Bireuen",
      rating: 5,
      text: "Rolling door yang dipasang sudah 2 tahun masih berfungsi dengan baik. Pelayanannya ramah dan ada garansi. Terima kasih Bos Teralis!",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimoni" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container-section relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            TESTIMONI
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            APA KATA <span className="text-gradient">PELANGGAN</span> KAMI
          </h2>
          <p className="text-muted-foreground text-lg">
            Kepuasan pelanggan adalah prioritas utama kami. Berikut testimoni dari mereka yang telah mempercayakan proyek kepada kami.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-industrial rounded-full flex items-center justify-center z-10">
            <Quote className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Card */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 pt-12 text-center shadow-card hover-scale transition-transform cursor-default">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>

            {/* Text */}
            <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              "{testimonials[activeIndex].text}"
            </blockquote>

            {/* Author */}
            <div>
              <p className="font-display text-2xl text-gradient mb-1">
                {testimonials[activeIndex].name}
              </p>
              <p className="text-muted-foreground">
                {testimonials[activeIndex].role} • {testimonials[activeIndex].location}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-primary w-8"
                      : "bg-muted hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
