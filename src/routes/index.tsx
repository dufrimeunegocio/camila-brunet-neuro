import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import {
  diferenciais,
  dominios,
  etapas,
  faq,
  servicosSecundarios,
  sinais,
} from "@/components/site/content";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { CookieBanner } from "@/components/site/CookieBanner";
import heroFoto from "@/assets/camila-hero.png.asset.json";
import sobreFoto from "@/assets/camila-sobre.png.asset.json";

const TITLE = "Camila Brunet | Neuropsicologia — Avaliação Neuropsicológica";
const DESCRIPTION =
  "Avaliação neuropsicológica com olhar individualizado e acolhedor. Compreenda seu funcionamento cognitivo com a neuropsicóloga Camila Brunet.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["Psychologist", "ProfessionalService"],
              name: "Camila Brunet — Neuropsicologia",
              description: DESCRIPTION,
              medicalSpecialty: "Psychiatric",
              knowsAbout: [
                "Avaliação neuropsicológica",
                "Neuropsicóloga",
                "Avaliação neuropsicológica infantil",
                "Avaliação neuropsicológica de adultos",
                "Avaliação cognitiva",
                "Neuropsicologia",
                "Avaliação de atenção",
                "Avaliação de memória",
                "Avaliação das funções executivas",
              ],
              founder: { "@type": "Person", name: "Camila Brunet", jobTitle: "Neuropsicóloga" },
            },
            {
              "@type": "FAQPage",
              mainEntity: faq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
});

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-wine">
      <span className="h-px w-8 bg-wine" aria-hidden="true" />
      {children}
    </p>
  );
}

function Index() {
  return (
    <div className="min-h-dvh bg-background selection:bg-wine/10 selection:text-wine">
      <Header />
      <WhatsAppButton />
      <CookieBanner />

      <main id="conteudo">
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden bg-offwhite pt-28 lg:pt-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full border border-wine/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 bottom-24 h-64 w-64 rounded-full border border-navy/10"
          />
          <div className="mx-auto grid max-w-7xl items-end gap-10 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <Reveal className="pb-14 lg:pb-24">
              <SectionLabel>Neuropsicologia</SectionLabel>
              <h1 className="mt-6 max-w-xl text-[2.15rem] leading-[1.12] text-navy sm:text-5xl lg:text-[3.4rem]">
                Avaliação Neuropsicológica com olhar{" "}
                <span className="text-wine">individualizado</span> e acolhedor
              </h1>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                Compreender como você pensa, aprende, se comporta e se relaciona com o mundo é um
                passo importante para encontrar caminhos mais adequados para cada necessidade.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contato"
                  className="rounded-md bg-wine px-7 py-4 text-center text-[15px] font-medium text-white shadow-[0_10px_30px_-14px_var(--wine)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-wine-dark"
                >
                  Agendar avaliação
                </a>
                <a
                  href="#sobre"
                  className="rounded-md border border-navy/20 px-7 py-4 text-center text-[15px] font-medium text-navy transition-all duration-300 hover:border-navy hover:bg-navy hover:text-white"
                >
                  Conheça meu trabalho
                </a>
              </div>
              <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
                {["Escuta", "Rigor técnico", "Clareza"].map((item) => (
                  <div key={item}>
                    <dt className="font-display text-lg text-navy">{item}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground">Em todo o processo</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={120} className="relative flex justify-center lg:justify-end">
              <div
                aria-hidden="true"
                className="absolute bottom-0 h-[78%] w-[86%] rounded-t-[14rem] bg-navy/5"
              />
              <img
                src={heroFoto.url}
                alt="Camila Brunet, neuropsicóloga, sorrindo com um tablet nas mãos"
                className="relative w-full max-w-md object-contain"
                width={1024}
                height={1536}
                fetchPriority="high"
              />
            </Reveal>
          </div>
        </section>

        {/* IDENTIFICAÇÃO */}
        <section className="relative overflow-hidden bg-background py-20 lg:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-wine/10 to-transparent"
          />
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="max-w-2xl">
              <SectionLabel>Quando buscar</SectionLabel>
              <h2 className="mt-6 text-[1.75rem] leading-tight text-navy sm:text-4xl">
                Nem sempre é fácil entender o que está acontecendo.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                Alguns sinais do dia a dia podem levantar dúvidas sobre o funcionamento cognitivo e
                emocional. A avaliação neuropsicológica é um processo de investigação e compreensão
                — não uma resposta pronta.
              </p>
            </Reveal>

            <ul className="mt-12 grid gap-x-8 gap-y-px sm:grid-cols-2 lg:grid-cols-3">
              {sinais.map((sinal, i) => (
                <Reveal as="li" key={sinal} delay={i * 45}>
                  <div className="group flex items-start gap-4 border-b border-border py-5 transition-colors hover:border-wine/40">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-wine transition-transform duration-300 group-hover:scale-150"
                      aria-hidden="true"
                    />
                    <span className="text-[15px] leading-snug text-navy/85">{sinal}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* O QUE É */}
        <section id="avaliacao" className="bg-offwhite py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="max-w-2xl">
              <SectionLabel>Entenda o processo</SectionLabel>
              <h2 className="mt-6 text-[1.75rem] leading-tight text-navy sm:text-4xl">
                O que é uma avaliação neuropsicológica?
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                É um processo estruturado que busca compreender diferentes aspectos do funcionamento
                cognitivo, comportamental e emocional, considerando a história e as particularidades
                de cada pessoa.
              </p>
            </Reveal>

            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {dominios.map((d, i) => (
                <Reveal as="li" key={d.titulo} delay={i * 60}>
                  <article className="group h-full rounded-lg border border-border bg-background p-7 shadow-[0_1px_2px_rgba(16,42,67,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-wine/30 hover:shadow-[0_18px_40px_-30px_rgba(16,42,67,0.45)]">
                    <span
                      className="block h-px w-8 bg-wine transition-all duration-300 group-hover:w-14"
                      aria-hidden="true"
                    />
                    <h3 className="mt-5 text-xl text-navy">{d.titulo}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="max-w-2xl">
              <SectionLabel>Etapas</SectionLabel>
              <h2 className="mt-6 text-[1.75rem] leading-tight text-navy sm:text-4xl">
                Como funciona a avaliação
              </h2>
            </Reveal>

            <ol className="mt-14 space-y-0 border-l border-border pl-6 sm:pl-10">
              {etapas.map((e, i) => (
                <Reveal as="li" key={e.numero} delay={i * 70}>
                  <div className="relative grid gap-3 py-7 sm:grid-cols-[auto_1fr] sm:gap-10">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[calc(1.5rem+4.5px)] top-9 h-2 w-2 rounded-full bg-wine ring-4 ring-background sm:-left-[calc(2.5rem+4.5px)]"
                    />
                    <span className="font-display text-2xl text-wine sm:w-16">{e.numero}</span>
                    <div className="max-w-xl">
                      <h3 className="text-xl text-navy">{e.titulo}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                        {e.texto}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="bg-offwhite py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="max-w-2xl">
              <SectionLabel>Atuação</SectionLabel>
              <h2 className="mt-6 text-[1.75rem] leading-tight text-navy sm:text-4xl">
                Serviços em Neuropsicologia
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <article className="mt-12 grid gap-8 rounded-xl border border-wine/20 bg-background p-8 sm:p-12 lg:grid-cols-[1.1fr_1fr]">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-wine">
                    Serviço principal
                  </p>
                  <h3 className="mt-4 text-3xl text-navy sm:text-4xl">
                    Avaliação Neuropsicológica
                  </h3>
                  <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                    Processo conduzido de forma individualizada, a partir da demanda apresentada,
                    com investigação de aspectos cognitivos, comportamentais e emocionais e
                    devolutiva clara ao final.
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                    [Inserir descrição completa do serviço de avaliação neuropsicológica]
                  </p>
                </div>
                <ul className="grid content-start gap-3 sm:grid-cols-2">
                  {dominios.map((d) => (
                    <li
                      key={d.titulo}
                      className="rounded-md border border-border px-4 py-3 text-sm text-navy/85"
                    >
                      {d.titulo}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {servicosSecundarios.map((s, i) => (
                <Reveal as="li" key={s.titulo} delay={i * 60}>
                  <article className="h-full rounded-lg border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-wine/30">
                    <h3 className="text-lg leading-snug text-navy">{s.titulo}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.texto}</p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="relative bg-background py-20 lg:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-1/2 top-0 h-40 w-px bg-wine/10 lg:right-8"
          />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
            <Reveal className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-4 -top-4 hidden h-40 w-40 border-l border-t border-wine/40 sm:block"
              />
              <img
                src={sobreFoto.url}
                alt="Retrato de Camila Brunet, neuropsicóloga, em seu consultório"
                className="relative w-full rounded-lg object-cover"
                loading="lazy"
                width={1080}
                height={1440}
              />
            </Reveal>

            <Reveal delay={100}>
              <SectionLabel>Sobre</SectionLabel>
              <h2 className="mt-6 text-[1.75rem] leading-tight text-navy sm:text-4xl">
                Conheça Camila Brunet
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                Um trabalho construído a partir da escuta, do cuidado com cada história e do rigor
                técnico em todas as etapas da avaliação neuropsicológica.
              </p>
              <dl className="mt-9 space-y-5">
                {[
                  ["Formação", "[Inserir formação profissional]"],
                  ["Especialização", "[Inserir especializações]"],
                  ["Registro profissional", "[Inserir número de registro profissional]"],
                  ["Experiência", "[Inserir experiência profissional]"],
                  ["Abordagem de trabalho", "[Inserir abordagem de trabalho]"],
                  ["Áreas de atuação", "[Inserir áreas de atuação]"],
                ].map(([label, value]) => (
                  <div key={label} className="border-b border-border pb-4">
                    <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-wine">
                      {label}
                    </dt>
                    <dd className="mt-1.5 text-[15px] text-navy/85">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* DIFERENCIAL */}
        <section className="bg-offwhite py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="max-w-3xl">
              <SectionLabel>Forma de trabalho</SectionLabel>
              <h2 className="mt-6 text-[1.75rem] leading-tight text-navy sm:text-4xl">
                Cada pessoa tem uma história. A avaliação também deve considerar isso.
              </h2>
            </Reveal>
            <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {diferenciais.map((d, i) => (
                <Reveal as="li" key={d.titulo} delay={i * 60}>
                  <div className="h-full bg-background p-8 transition-colors duration-300 hover:bg-navy hover:text-white/80 group">
                    <span className="font-display text-sm text-wine group-hover:text-wine-light">
                      0{i + 1}
                    </span>
                    <h3 className="mt-4 text-xl text-navy group-hover:text-white">{d.titulo}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-white/70">
                      {d.texto}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-background py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <Reveal>
              <SectionLabel>Dúvidas frequentes</SectionLabel>
              <h2 className="mt-6 text-[1.75rem] leading-tight text-navy sm:text-4xl">
                Perguntas frequentes sobre a avaliação
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                Informações gerais para ajudar na compreensão do processo. Dúvidas específicas podem
                ser esclarecidas no primeiro contato.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <Accordion type="single" collapsible className="w-full">
                {faq.map((item, i) => (
                  <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
                    <AccordionTrigger className="text-left font-sans text-[15px] font-medium text-navy hover:text-wine hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contato" className="relative overflow-hidden bg-navy py-20 lg:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10"
          />
          <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
            <span className="mx-auto block h-px w-10 bg-wine-light" aria-hidden="true" />
            <h2 className="mt-8 text-[1.75rem] leading-tight text-white sm:text-4xl">
              Quer entender melhor suas dificuldades e possibilidades?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
              Entre em contato para conhecer o processo de avaliação neuropsicológica e entender
              qual pode ser o melhor caminho para sua necessidade.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <a
                href="#contato"
                className="w-full rounded-md bg-wine px-8 py-4 text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-wine-light sm:w-auto"
              >
                Agendar avaliação
              </a>
              <p className="text-xs text-white/50">
                Canais de contato: [inserir WhatsApp, e-mail e demais canais]
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
