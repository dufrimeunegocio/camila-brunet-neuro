import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { contato, navLinks } from "./content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <img
            src={logo.url}
            alt="Logotipo Camila Brunet — Neuropsicologia"
            className="h-14 w-auto object-contain brightness-0 invert"
            loading="lazy"
            width={220}
            height={56}
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Avaliação neuropsicológica conduzida com escuta, rigor técnico e atenção à história de
            cada pessoa.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="font-display text-lg text-white">Navegação</h2>
          <span className="rule-wine mt-3" aria-hidden="true" />
          <ul className="mt-5 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className=\"transition-colors hover:text-white focus-visible:text-white\">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-6">
          <h2 className="font-display text-lg text-white">Redes Sociais</h2>
          <span className="rule-wine" aria-hidden="true" />
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3 group">
              <Instagram className="h-5 w-5 shrink-0 text-wine-light transition-transform group-hover:scale-110" aria-hidden="true" />
              <a 
                href={contato.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-colors hover:text-white"
              >
                {contato.instagramHandle}
              </a>
            </li>
          </ul>
          <div className="mt-4 pt-6 border-t border-white/10">
             <p className="text-xs text-white/50 leading-relaxed italic">
               Atendimento online para todo o Brasil.
             </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="space-y-1">
            <p className="text-white/70">© {year} Camila Brunet — Neuropsicologia. Todos os direitos reservados.</p>
          </div>
          <p className="font-medium text-white/90">Registro profissional: {contato.crp}</p>
        </div>
      </div>
    </footer>
  );
}
