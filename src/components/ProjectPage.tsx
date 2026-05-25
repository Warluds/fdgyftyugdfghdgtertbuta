import { Link } from "react-router-dom";
import { useState } from "react";
import type { ProjectVisual } from "@/data/projects";
import { projects } from "@/data/projects";
import logoImg from "@/assets/buta-logo.png";
import { useT, LanguageSwitcher } from "@/i18n/LanguageContext";

const projectPaths = {
  fenomen: "/projects/fenomen",
  albion: "/projects/albion",
  legend: "/projects/legend",
  mirai: "/projects/mirai",
} as const;

function Nav() {
  const { t } = useT();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-navy-deep/80 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="BUTA Group">
          <img src={logoImg} alt="BUTA Group" className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm text-foreground/80">
          <Link to="/#projects" className="hover:text-primary transition-colors">{t.nav.projects}</Link>
          <Link to="/#philosophy" className="hover:text-primary transition-colors">{t.nav.philosophy}</Link>
          <Link to="/#contact" className="hover:text-primary transition-colors">{t.nav.contact}</Link>
        </nav>
        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          <a href="tel:3888" className="flex items-center gap-3 text-sm">
            <span className="hidden sm:inline text-muted-foreground">{t.nav.phoneLabel}</span>
            <span className="font-display text-2xl text-primary tracking-wider">3888</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Gallery({ images, name }: { images: string[]; name: string }) {
  const { t } = useT();
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
            aria-label={t.page.photoOf(i + 1, images.length)}
          >
            <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export function ProjectPage({ project }: { project: ProjectVisual }) {
  const { t } = useT();
  const d = t.projectsData[project.slug];
  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
            <Link to="/" className="hover:text-primary transition-colors">{t.page.crumbHome}</Link>
            <span>·</span>
            <Link to="/#projects" className="hover:text-primary transition-colors">{t.page.crumbProjects}</Link>
            <span>·</span>
            <span className="text-primary">{project.name}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 fade-up">
              <p className="eyebrow mb-6">— {d.tier} · {project.id}</p>
              <h1 className="font-display text-[clamp(3.5rem,9vw,9rem)] leading-[0.95]">
                BUTA <span className="italic text-primary">{project.name}</span>
              </h1>
              <p className="mt-8 max-w-xl text-xl text-muted-foreground italic font-display">
                {d.tagline}
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <div className="eyebrow mb-3">{t.page.from}</div>
              <div className="font-display text-5xl lg:text-6xl text-primary">{d.price}</div>
              <div className="hairline w-32 my-6 lg:ml-auto" />
              <div className="text-sm text-muted-foreground">{d.location}</div>
              <div className="text-xs uppercase tracking-widest text-primary/80 mt-2">{d.status}</div>
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
            <p className="eyebrow mb-6">{t.page.about}</p>
            <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
              {d.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="hairline my-10" />
            <a
              href="tel:3888"
              className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-primary hover:gap-5 transition-all"
            >
              {t.page.bookVisit}
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
              <p className="eyebrow mb-6">{t.page.specsEyebrow}</p>
              <h2 className="font-display text-5xl lg:text-6xl leading-[1.02]">
                {t.page.specsTitleA}
                <span className="block italic text-primary">{t.page.specsTitleB}</span>
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {d.specs.map((s) => (
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
          <p className="eyebrow mb-6">{t.page.othersEyebrow}</p>
          <h2 className="font-display text-4xl lg:text-5xl mb-12">
            {t.page.othersTitleA} <span className="italic text-primary">{t.page.othersTitleB}</span>.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {others.map((p) => {
              const od = t.projectsData[p.slug];
              return (
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
                  <span className="font-display text-sm whitespace-nowrap">{od.price}</span>
                </div>
                <div className="hairline my-4" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{od.location}</div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-card">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <p className="eyebrow mb-8">{t.page.ctaEyebrow}</p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] max-w-4xl mx-auto">
            {t.page.ctaTitleA} <span className="italic text-primary">{project.name}</span> {t.page.ctaTitleB}
          </h2>
          <div className="hairline w-40 mx-auto my-10" />
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <a href="tel:3888" className="px-10 py-5 bg-primary text-primary-foreground text-sm uppercase tracking-[0.3em] hover:bg-gold-deep transition-colors">
              {t.contact.callBtn}
            </a>
            <a href="mailto:hello@buta.group" className="px-10 py-5 border border-border text-sm uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-colors">
              {t.contact.requestBtn}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 bg-navy-deep text-white/70">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-widest text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="BUTA Group" className="h-8 w-auto" />
            <span>{t.footer.est}</span>
          </div>
          <div>{t.footer.rights}</div>
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