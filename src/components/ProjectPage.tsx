import { Link } from "@tanstack/react-router";
import { useState } from "react";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

const projectPaths = {
  fenomen: "/projects/fenomen",
  albion: "/projects/albion",
  legend: "/projects/legend",
  mirai: "/projects/mirai",
} as const;

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-1.5">
          <span className="font-display text-3xl tracking-tight text-foreground">BUTA</span>
          <span className="eyebrow text-[0.6rem] text-muted-foreground">group</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm text-foreground/80">
          <Link to="/" hash="projects" className="hover:text-primary transition-colors">Проекты</Link>
          <Link to="/" hash="philosophy" className="hover:text-primary transition-colors">Философия</Link>
          <Link to="/" hash="contact" className="hover:text-primary transition-colors">Контакты</Link>
        </nav>
        <a href="tel:3888" className="flex items-center gap-3 text-sm">
          <span className="hidden sm:inline text-muted-foreground">Единый номер</span>
          <span className="font-display text-2xl text-primary tracking-wider">3888</span>
        </a>
      </div>
    </header>
  );
}

function Gallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/10] overflow-hidden bg-card">
        <img
          src={images[active]}
          alt={`BUTA ${name} — фото ${active + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
          width={1600}
          height={1000}
        />
        <div className="absolute bottom-5 right-5 font-display text-parchment/80 text-sm">
          {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            className={`relative aspect-[4/3] overflow-hidden transition-all ${
              i === active ? "ring-1 ring-primary opacity-100" : "opacity-60 hover:opacity-100"
            }`}
            aria-label={`Фото ${i + 1}`}
          >
            <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export function ProjectPage({ project }: { project: Project }) {
  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
            <Link to="/" className="hover:text-primary transition-colors">BUTA Group</Link>
            <span>·</span>
            <Link to="/" hash="projects" className="hover:text-primary transition-colors">Проекты</Link>
            <span>·</span>
            <span className="text-primary">{project.name}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 fade-up">
              <p className="eyebrow mb-6">— {project.tier} · {project.id}</p>
              <h1 className="font-display text-[clamp(3.5rem,9vw,9rem)] leading-[0.95]">
                BUTA <span className="italic text-primary">{project.name}</span>
              </h1>
              <p className="mt-8 max-w-xl text-xl text-muted-foreground italic font-display">
                {project.tagline}
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <div className="eyebrow mb-3">от</div>
              <div className="font-display text-5xl lg:text-6xl text-primary">{project.price}</div>
              <div className="hairline w-32 my-6 lg:ml-auto" />
              <div className="text-sm text-muted-foreground">{project.location}</div>
              <div className="text-xs uppercase tracking-widest text-primary/80 mt-2">{project.status}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery + description */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8">
            <Gallery images={project.gallery} name={project.name} />
          </div>
          <div className="lg:col-span-4">
            <p className="eyebrow mb-6">— О проекте</p>
            <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
              {project.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="hairline my-10" />
            <a
              href="tel:3888"
              className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-primary hover:gap-5 transition-all"
            >
              Записаться на показ
              <span className="w-10 h-px bg-current" />
            </a>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <p className="eyebrow mb-6">— Ключевые параметры</p>
              <h2 className="font-display text-5xl lg:text-6xl leading-[1.02]">
                Технические
                <span className="block italic text-primary">детали.</span>
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {project.specs.map((s) => (
              <div key={s.label} className="bg-card p-8">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{s.label}</div>
                <div className="font-display text-2xl lg:text-3xl text-foreground leading-tight">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other projects */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="eyebrow mb-6">— Другие проекты</p>
          <h2 className="font-display text-4xl lg:text-5xl mb-12">
            Посмотрите ещё <span className="italic text-primary">три истории</span>.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={projectPaths[p.slug]}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-5">
                  <img
                    src={p.cover}
                    alt={`BUTA ${p.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-3xl">
                    BUTA <span className="italic text-primary">{p.name}</span>
                  </h3>
                  <span className="font-display text-sm whitespace-nowrap">{p.price}</span>
                </div>
                <div className="hairline my-4" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.location}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-card">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <p className="eyebrow mb-8">— Поговорим</p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] max-w-4xl mx-auto">
            Хотите увидеть <span className="italic text-primary">{project.name}</span> вживую?
          </h2>
          <div className="hairline w-40 mx-auto my-10" />
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <a href="tel:3888" className="px-10 py-5 bg-primary text-primary-foreground text-sm uppercase tracking-[0.3em] hover:bg-gold-deep transition-colors">
              Позвонить · 3888
            </a>
            <a href="mailto:hello@buta.group" className="px-10 py-5 border border-border text-sm uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-colors">
              Заказать звонок
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-widest text-muted-foreground">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-xl text-foreground normal-case tracking-tight">BUTA</span>
            <span>group · est. 2014</span>
          </div>
          <div>© 2026 BUTA Group. Все права защищены.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition">Instagram</a>
            <a href="#" className="hover:text-primary transition">YouTube</a>
            <a href="#" className="hover:text-primary transition">Telegram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}