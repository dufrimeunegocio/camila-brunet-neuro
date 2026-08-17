import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { navLinks } from "./content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 shadow-[0_1px_0_0_var(--border)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <a href="#inicio" className="flex min-w-0 items-center gap-3" aria-label="Camila Brunet — Neuropsicologia, ir para o início">
          <img
            src={logo.url}
            alt="Logotipo Camila Brunet — Psicologia e Avaliação Neuropsicológica"
            className="h-9 w-auto shrink-0 object-contain"
            width={160}
            height={36}
          />
          <span className="hidden min-w-0 border-l border-border pl-3 leading-tight sm:block">
            <span className="block truncate font-display text-base text-navy">Camila Brunet</span>
            <span className="block truncate text-[11px] uppercase tracking-[0.18em] text-wine">
              Neuropsicologia
            </span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 xl:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-navy/80 transition-colors hover:text-wine after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-wine after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#avaliacao"
            className="rounded-md bg-wine px-5 py-2.5 text-sm font-medium text-white shadow-[0_6px_20px_-10px_var(--wine)] transition-all duration-300 hover:bg-wine-dark hover:shadow-[0_10px_24px_-10px_var(--wine)]"
          >
            Conhecer a avaliação
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-border text-navy transition-colors hover:border-wine hover:text-wine xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-border bg-background xl:hidden"
      >
        <nav aria-label="Navegação mobile" className="mx-auto max-w-7xl px-5 py-4">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/70 py-3.5 text-[15px] text-navy transition-colors hover:text-wine"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#avaliacao"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-md bg-wine px-5 py-3.5 text-center text-[15px] font-medium text-white"
          >
            Conhecer a avaliação
          </a>
        </nav>
      </div>
    </header>
  );
}
