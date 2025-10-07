"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import tr from "./translations/tr.json";
import en from "./translations/en.json";

type Language = "tr" | "en";

type Dict = Record<string, any>;

function getByPath(obj: Dict, path: string) {
  return path.split(".").reduce((acc: any, key: string) => (acc ? acc[key] : undefined), obj);
}

const dictionaries: Record<Language, Dict> = { tr, en };

type I18nContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("tr");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("lang") as Language)) || "tr";
    setLangState(saved);
    if (typeof document !== "undefined") document.documentElement.lang = saved;
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  const t = (key: string) => {
    const dict = dictionaries[lang];
    const value = getByPath(dict, key);
    return (value ?? key) as string;
  };

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

