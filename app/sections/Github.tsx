"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useI18n } from "../i18n/I18nProvider";

// Dynamically import to avoid SSR issues and relax types
const GitHubCalendar = dynamic<any>(
  () => import("react-github-calendar").then((m) => m.default as any),
  { ssr: false }
);

const Github = () => {
  const { t } = useI18n();
  const username = "CaglarCakmak0"; // Update if your GitHub handle changes

  // Theme must provide arrays for light/dark with 5 colors (levels 0-4)
  const theme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  } as const;

  return (
    <section
      id="github"
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] py-16 md:py-20 lg:py-20"
    >
      <div className="mx-auto w-[90%] lg:max-w-[1212.8px]">
        <h2 className="mb-6 text-center text-[32px] font-semibold text-[#e4ded7] md:mb-10 md:text-[42px] lg:text-[56px]">
          {t("github.title")}
        </h2>

        <div className="flex w-full justify-center overflow-x-auto rounded-lg bg-[#0b0d12] p-4 md:p-6">
          {/* @ts-ignore library types are loose */}
          <GitHubCalendar
            username={username}
            blockSize={13}
            blockMargin={4}
            fontSize={14}
            colorScheme="dark"
            theme={theme as any}
          />
        </div>
      </div>
    </section>
  );
};

export default Github;
