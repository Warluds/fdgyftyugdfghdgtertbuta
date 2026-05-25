import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-architecture.jpg";
import philosophyImg from "@/assets/philosophy.jpg";
import logoImg from "@/assets/buta-logo.png";
import { projects } from "@/data/projects";
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
        <a href="#" className="flex items-center" aria-label="BUTA Group">
          <img src={logoImg} alt="BUTA Group" className="h-10 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-foreground/80">
          <a href="#projects" className="hover:text-primary transition-colors">{t.nav.projects}</a>
          <a href="#philosophy" className="hover:text-primary transition-colors">{t.nav.philosophy}</a>
          <a href="#commercial" className="hover:text-primary transition-colors">{t.nav.commercial}</a>
          <a href="#contact" className="hover:text-primary transition-colors">{t.nav.contact}</a>
        </nav>
        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          <a href="tel:3888" className="group flex items-center gap-3 text-sm">
            <span className="hidden sm:inline text-muted-foreground">{t.nav.phoneLabel}</span>
            <span className="font-display text-2xl text-primary tracking-wider">3888</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useT();
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="BUTA Group" className="w-full h-full object-cover slow-zoom" width={1920} height={1280} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-40 pb-24 min-h-screen flex flex-col justify-between">
        <div className="fade-up max-w-4xl">
          <p className="eyebrow mb-8">{t.hero.eyebrow}</p>
          <h1 className="font-display text-[clamp(3.5rem,9vw,9rem)] leading-[0.95] text-parchment">
            {t.hero.titleA}
            <span className="block italic text-primary">{t.hero.titleB}</span>
          </h1>
          <p className="mt-10 max-w-xl text-lg text-foreground/80 leading-relaxed">{t.hero.sub}</p>
        </div>
        <div className="fade-up grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 mt-20 border border-border/40">
          {t.hero.stats.map((s) => (
            <div key={s.v} className="bg-background/60 backdrop-blur-sm px-6 py-8">
              <div className="font-display text-4xl md:text-5xl text-primary">{s.k}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 right-8 z-10 text-xs uppercase tracking-[0.3em] text-muted-foreground rotate-90 origin-bottom-right">
        {t.hero.side}
      </div>
    </section>
  );
}

function Philosophy() {
  const { t } = useT();
  return (
    <section id="philosophy" className="relative py-32 lg:py-48">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-8">{t.philosophy.eyebrow}</p>
          <h2 className="font-display text-5xl lg:text-7xl leading-[1.02]">
            {t.philosophy.titleA}
            <span className="block italic text-primary mt-2">{t.philosophy.titleB}</span>
          </h2>
          <div className="hairline my-10 w-32" />
          <p className="text-muted-foreground leading-relaxed text-lg max-w-md">{t.philosophy.body}</p>
          <div className="mt-12 grid grid-cols-3 gap-8">
            {t.philosophy.pillars.map((x) => (
              <div key={x.t}>
                <div className="font-display text-2xl text-primary italic">{x.t}.</div>
                <div className="text-xs text-muted-foreground mt-2 leading-relaxed">{x.d}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 lg:pl-12">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img src={philosophyImg} alt="BUTA Interiors" loading="lazy" width={1600} height={1100} className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs uppercase tracking-widest text-parchment">
              <span>{t.philosophy.interiors}</span>
              <span>{t.philosophy.city}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const { t } = useT();
  return (
    <section id="projects" className="relative py-32 lg:py-40 bg-card">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">{t.projects.eyebrow}</p>
            <h2 className="font-display text-5xl lg:text-7xl leading-[1.02]">
              {t.projects.titleA}
              <span className="block italic text-primary">{t.projects.titleB}</span>
            </h2>
          </div>
          <a href="#" className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-foreground hover:text-primary transition-colors">
            {t.projects.onMap}
            <span className="w-10 h-px bg-current group-hover:w-16 transition-all" />
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-20">
          {projects.map((p, i) => {
            const d = t.projectsData[p.slug];
            return (
              <Link key={p.id} to={projectPaths[p.slug]} className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}>
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <img src={p.cover} alt={`BUTA ${p.name}`} loading="lazy" width={1280} height={1600} className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105" />
                  <div className="absolute top-5 left-5 px-3 py-1.5 text-[0.65rem] tracking-[0.25em] uppercase border border-parchment/40 text-parchment backdrop-blur-sm bg-navy-deep/30">
                    {d.tier}
                  </div>
                  <div className="absolute top-5 right-5 font-display text-parchment/60 text-sm">— {p.id}</div>
                  <div className="absolute bottom-5 right-5 text-[0.65rem] uppercase tracking-[0.3em] text-parchment opacity-0 group-hover:opacity-100 transition-opacity">
                    {t.projects.open}
                  </div>
                </div>
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="font-display text-4xl lg:text-5xl group-hover:text-primary transition-colors">
                    BUTA <span className="italic text-primary">{p.name}</span>
                  </h3>
                  <div className="text-right font-display text-xl text-foreground whitespace-nowrap">{d.price}</div>
                </div>
                <div className="hairline my-5" />
                <div className="flex flex-wrap justify-between text-xs uppercase tracking-widest text-muted-foreground gap-4">
                  <span>{d.location}</span>
                  <span className="text-primary/80">{d.status}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Commercial() {
  const { t } = useT();
  return (
    <section id="commercial" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="border-t border-border pt-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-6">{t.commercial.eyebrow}</p>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight">
              {t.commercial.titleA}
              <span className="block italic text-primary">{t.commercial.titleB}</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg text-muted-foreground leading-relaxed">{t.commercial.body}</p>
            <div className="mt-10 grid grid-cols-2 gap-px bg-border">
              {t.commercial.stats.map(([k, v]) => (
                <div key={v} className="bg-background p-6">
                  <div className="font-display text-3xl text-primary">{k}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useT();
  return (
    <section id="contact" className="relative py-32 lg:py-48 bg-card">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <p className="eyebrow mb-8">{t.contact.eyebrow}</p>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl mx-auto">{t.contact.title}</h2>
        <div className="hairline w-40 mx-auto my-12" />
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <a href="tel:3888" className="px-10 py-5 bg-primary text-primary-foreground text-sm uppercase tracking-[0.3em] hover:bg-gold-deep transition-colors">
            {t.contact.callBtn}
          </a>
          <a href="mailto:hello@buta.group" className="px-10 py-5 border border-border text-sm uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-colors">
            {t.contact.requestBtn}
          </a>
        </div>
        <p className="mt-16 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t.contact.address}</p>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useT();
  return (
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
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Projects />
        <Commercial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}