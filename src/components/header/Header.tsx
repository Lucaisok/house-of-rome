"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Home, Menu, X } from 'lucide-react';
import Link from "next/link";
import { LanguageSwitch } from "../languageSwitch/LanguageSwitch";
import styles from "./Header.module.css";
import { siteContent } from "@/content/global";
import { Locale } from "@/lib/i18n";
import { NavButton } from "../navButton/NavButton";
import { routes } from "@/lib/routes";

interface HeaderProps {
    locale: Locale;
}

export const Header = ({ locale }: HeaderProps) => {
    const t = siteContent[locale];
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    // Accept /, /it, /en, etc. as home, and also apartments/[slug] pages
    const isHome =
        /^\/(|[a-zA-Z-]{2,5})$/.test(pathname) ||
        /^\/(|[a-zA-Z-]{2,5})\/apartments\/[\w-]+$/.test(pathname);

    const handleChange = (event: MediaQueryListEvent) => {
        if (event.matches) setMobileMenuOpen(false);
    };

    useEffect(() => {
        const media = window.matchMedia("(min-width: 768px)");
        if (media.matches) setMobileMenuOpen(false);
        media.addEventListener("change", handleChange);
        return () => media.removeEventListener("change", handleChange);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header className={`${styles.header}${mobileMenuOpen ? ` ${styles.headerOpen}` : ""}`}
            style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.1)" }}>
            <nav className={styles.nav}>
                <div className={styles.row}>
                    {/* Desktop Layout */}
                    <div className={styles.logoWrap}>
                        <Link href={routes.home} className={styles.logo}>
                            <Home className={styles.logoIcon} aria-hidden="true" style={{ color: '#171717' }} />
                            <span className={styles.logoText}>{t.home.title}</span>
                        </Link>
                    </div>
                    <div className={styles.desktopNav}>
                        <LanguageSwitch />
                        <Link href={routes.apartments} className={styles.link}>
                            {t.nav.apartments}
                        </Link>
                        <Link href={routes.contacts} className={styles.link}>
                            {t.nav.about}
                        </Link>
                        <NavButton href={routes.contacts} className={styles.cta}>
                            {t.nav.book}
                        </NavButton>
                    </div>
                    {/* Mobile Layout: Home icon, title, burger */}
                    <div className={styles.mobileHeaderRow}>
                        <Link href={routes.home} className={styles.logo} aria-label={t.home.title}>
                            <Home className={styles.logoIcon} aria-hidden="true" style={{ color: isHome ? '#fff' : '#171717' }} />
                        </Link>
                        {!isHome && <span className={styles.mobileTitle}>{t.home.title}</span>}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={styles.mobileButton}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} strokeWidth={2.3} style={{ color: isHome ? '#fff' : '#171717' }} /> : <Menu size={24} strokeWidth={2.3} style={{ color: isHome ? '#fff' : '#171717' }} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className={styles.mobileNav}>
                        {isHome && <span className={styles.mobileTitleInternal}>{t.home.title}</span>}
                        <div className={styles.mobileList}>
                            <div className={styles.mobileLangWrap}>
                                <LanguageSwitch />
                            </div>
                            <Link href={routes.home} className={styles.link}>
                                {t.nav.home}
                            </Link>
                            <Link href={routes.apartments} className={styles.link}>
                                {t.nav.apartments}
                            </Link>
                            <Link href={routes.contacts} className={styles.link}>
                                {t.nav.about}
                            </Link>
                            <NavButton href={routes.contacts} className={styles.mobileCta}>
                                {t.nav.book}
                            </NavButton>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};