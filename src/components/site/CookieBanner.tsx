import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6">
      <div className="mx-auto max-w-4xl animate-in fade-in slide-in-from-bottom-5 duration-700">
        <div className="flex flex-col items-center justify-between gap-4 rounded-lg border border-border bg-background/95 p-5 shadow-2xl backdrop-blur-md sm:flex-row sm:p-6">
          <div className="text-center sm:text-left">
            <p className="text-sm leading-relaxed text-navy/90">
              Utilizamos cookies para oferecer uma melhor experiência e analisar o tráfego do site. 
              Ao continuar navegando, você concorda com nossa{" "}
              <a href="#privacidade" className="font-medium text-wine underline underline-offset-2 hover:text-wine-dark">
                Política de Privacidade
              </a>.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              onClick={accept}
              className="rounded-md bg-wine px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-wine-dark"
            >
              Aceitar
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="rounded-md border border-border p-2.5 text-navy hover:bg-accent"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
