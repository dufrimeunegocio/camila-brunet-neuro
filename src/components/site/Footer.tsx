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
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg text-white">Contato</h2>
          <span className="rule-wine mt-3" aria-hidden="true" />
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-wine-light" aria-hidden="true" />
              {contato.whatsapp ? (
                <a href={contato.whatsapp} className="hover:text-white">
                  WhatsApp
                </a>
              ) : (
                <span>WhatsApp: [inserir número]</span>
              )}
            </li>
            <li className="flex items-start gap-3">
              <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-wine-light" aria-hidden="true" />
              {contato.instagram ? (
                <a href={contato.instagram} className="hover:text-white">
                  Instagram
                </a>
              ) : (
                <span>Instagram: [inserir perfil]</span>
              )}
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-wine-light" aria-hidden="true" />
              {contato.email ? (
                <a href={`mailto:${contato.email}`} className="hover:text-white">
                  {contato.email}
                </a>
              ) : (
                <span>E-mail: [inserir e-mail]</span>
              )}
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-wine-light" aria-hidden="true" />
              <span>{contato.endereco || "Endereço: [inserir, se aplicável]"}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="space-y-1">
            <p>© {year} Camila Brunet — Neuropsicologia. Todos os direitos reservados.</p>
            <p className="opacity-70">
              Conteúdo informativo. Não substitui consulta profissional.
            </p>
          </div>
          <p className="font-medium text-white/90">Registro profissional: [Inserir CRP]</p>
        </div>
      </div>
    </footer>
  );
}
