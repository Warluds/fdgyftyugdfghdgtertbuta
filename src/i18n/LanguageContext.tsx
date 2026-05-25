import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { LANGS, translations, type Lang } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof translations)[Lang];
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "buta_lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored && translations[stored]) {
        setLangState(stored);
        return;
      }
      const nav = navigator.language.slice(0, 2).toLowerCase();
      const map: Record<string, Lang> = { ru: "ru", kk: "kk", en: "en", tr: "tr", zh: "zh" };
      if (map[nav]) setLangState(map[nav]);
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used within LanguageProvider");
  return ctx;
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useT();
  const [open, setOpen] = useState(false);
  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/80 hover:text-primary transition-colors"
        aria-label="Language"
      >
        <span>{current.short}</span>
        <span className="text-primary">▾</span>
      </button>
      {open && (
        <ul className="absolute right-0 mt-3 min-w-[140px] bg-navy-deep border border-white/10 backdrop-blur-md py-2 z-50">
          {LANGS.map((l) => (
            <li key={l.code}>
              <button
                onMouseDown={(e) => {
                  e.preventDefault();
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${
                  l.code === lang ? "text-primary" : "text-white/70 hover:text-primary"
                }`}
              >
                <span className="inline-block w-7 opacity-60">{l.short}</span>
                <span>{l.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}