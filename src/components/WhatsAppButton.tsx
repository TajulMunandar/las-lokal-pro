import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "6281234567890";
  const message = encodeURIComponent("Halo, saya tertarik dengan jasa las Anda. Bisa konsultasi?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat via WhatsApp"
    >
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-[hsl(142_70%_49%)] animate-ping opacity-40" />
      
      {/* Button */}
      <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[hsl(142_70%_49%)] shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-foreground" />
      </div>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hidden md:block">
        WhatsApp Sekarang
      </span>
    </a>
  );
};

export default WhatsAppButton;
