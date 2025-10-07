"use client";
import React from "react";
import { useI18n } from "../../i18n/I18nProvider";

const LanguageToggle: React.FC = () => {
  const { lang, setLang, t } = useI18n();
  const next = lang === "tr" ? "en" : "tr";

  return (
    <button
      aria-label={t("toggle.label")}
      onClick={() => setLang(next)}
      className="fixed right-4 z-[300] rounded-full border border-[#32394a] bg-[#0b0d12]/85 px-3 py-1 text-xs font-semibold text-[#e4ded7] shadow-[0_0_15px_rgba(0,0,0,0.35)] backdrop-blur-lg hover:bg-[#141824] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39d353] md:right-6 md:px-5 md:py-2 md:text-sm"
      style={{ top: "calc(env(safe-area-inset-top, 0px) + 1rem)" }}
      role="switch"
      aria-checked={lang === "en"}
      data-blobity
      data-blobity-magnetic="false"
      data-blobity-radius="12"
    >
      {lang.toUpperCase()} • {next.toUpperCase()}
    </button>
  );
};

export default LanguageToggle;
