import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { contato } from "./content";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!contato.whatsapp && !isVisible) return null;
  
  // Use a fallback or the actual URL
  const url = contato.whatsapp || "#contato";

  return (
    <a
      href={url}
      target={contato.whatsapp ? "_blank" : undefined}
      rel={contato.whatsapp ? "noopener noreferrer" : undefined}
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl sm:bottom-8 sm:right-8 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle className="h-7 w-7 fill-current" />
    </a>
  );
}
