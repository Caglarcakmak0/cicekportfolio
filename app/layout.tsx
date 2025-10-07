import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { I18nProvider } from "./i18n/I18nProvider";
import LanguageToggle from "./components/i18n/LanguageToggle";

const syne = Inter({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.caglarcakmak.dev/"),
    title: "Çağlar Çakmak | Full-Stack Developer",
    description:
        "Full-stack geliştirici Çağlar Çakmak; TypeScript, React, Vue ve Next.js ile yüksek performanslı ürünler geliştiriyor. Nik YKS Koçluğu platformunun kurucusu.",
    generator: "Next.js",
    applicationName: "Çağlar Çakmak Portfolio",
    keywords: [
        "Çağlar Çakmak",
        "Full-Stack Developer",
        "TypeScript",
        "React",
        "Vue.js",
        "Next.js",
        "Express.js",
        "Node.js",
        "Nik YKS Koçluğu",
        "Pixa Software",
        "Frontend Developer",
        "Backend",
        "Yazılım Geliştirici",
        "Türkiye Yazılım",
        "Portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Çağlar Çakmak | Full-Stack Developer",
        description:
            "Full-stack geliştirici Çağlar Çakmak; TypeScript, React, Vue ve Next.js ile yüksek performanslı ürünler geliştiriyor. Nik YKS Koçluğu platformunun kurucusu.",
        url: "https://www.caglarcakmak.dev/",
        siteName: "Çağlar Çakmak Portfolio",
        images: [
            {
                url: "/metadata.jpg",
                width: 1200,
                height: 630,
                alt: "Çağlar Çakmak Portfolio Önizleme",
            },
        ],
        locale: "tr-TR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Çağlar Çakmak | Full-Stack Developer",
        description:
            "TypeScript, React, Vue ve Next.js ile ürünler geliştiren full-stack geliştirici. Nik YKS Koçluğu platformunun kurucusu.",
        images: ["/metadata.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

export const runtime = "edge";

type RootLayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="tr">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                <I18nProvider>
                    <LanguageToggle />
                    {children}
                </I18nProvider>
            </body>
        </html>
    );
}

