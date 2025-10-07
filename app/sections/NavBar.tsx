"use client";
import Link from "next/link";
import Container from "../components/container/Container";
import React from "react";

const NAV_ITEMS = [
    { href: "#home", label: "ANA SAYFA", ariaLabel: "Scroll to Home Section" },
    { href: "#about", label: "HAKKIMDA", ariaLabel: "Scroll to About Section" },
    { href: "#work", label: "PROJELER", ariaLabel: "Scroll to Work Section" },
    { href: "#tools", label: "BECERİLER", ariaLabel: "Scroll to Tools Section" },
    { href: "#contact", label: "İLETİŞİM", ariaLabel: "Scroll to Contact Section" },
] as const;

const NavBar = () => {
    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const targetId = event.currentTarget.href.split("#")[1];
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                left: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-3 text-[#e4ded7] sm:bottom-10 sm:px-4">
            <div className="w-full max-w-lg">
                <Container
                    width="100%"
                    height="auto"
                    color="rgba(255, 255, 255, 0.1)"
                    borderRadius={12}
                    top="0px"
                    left="0px"
                    angle={0}
                >
                    <ul className="flex flex-wrap items-center justify-center gap-1 px-2 py-2 text-[11px] font-medium uppercase tracking-wide sm:gap-2 sm:text-[12px] md:text-[13px]">
                        {NAV_ITEMS.map(({ href, label, ariaLabel }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    data-blobity-magnetic="false"
                                    onClick={handleScroll}
                                    aria-label={ariaLabel}
                                    className="block rounded-md px-3 py-2 transition-colors duration-150 hover:bg-white/10 focus:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                                >
                                    <span className="whitespace-nowrap">{label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Container>
            </div>
        </nav>
    );
};

export default NavBar;
