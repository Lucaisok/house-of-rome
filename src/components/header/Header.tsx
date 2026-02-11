"use client";
import { useEffect, useState } from "react";
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

    const handleChange = (event: MediaQueryListEvent) => {
        if (event.matches) setMobileMenuOpen(false);
    };

    useEffect(() => {
        const media = window.matchMedia("(min-width: 768px)");

        if (media.matches) setMobileMenuOpen(false);

        media.addEventListener("change", handleChange);
        return () => media.removeEventListener("change", handleChange);
    }, []);

    return (
        <header className={`${styles.header}${mobileMenuOpen ? ` ${styles.headerOpen}` : ""}`}>
            <nav className={styles.nav}>
                <div className={styles.row}>
                    {/* Logo */}
                    <div className={styles.logoWrap}>
                        <Link href={routes.home} className={styles.logo}>
                            <Home className={styles.logoIcon} aria-hidden="true" />
                            <span className={styles.logoText}>{t.home.title}</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className={styles.desktopNav}>
                        <LanguageSwitch />
                        <Link href={routes.apartments} className={styles.link}>
                            {t.nav.apartments}
                        </Link>
                        <Link href={routes.about} className={styles.link}>
                            {t.nav.about}
                        </Link>
                        <NavButton href={routes.about} className={styles.cta}>
                            {t.nav.book}
                        </NavButton>
                    </div>

                    {/* Mobile menu button */}
                    <div className={styles.mobileOnly}>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={styles.mobileButton}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} strokeWidth={2.3} /> : <Menu size={24} strokeWidth={2.3} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className={styles.mobileNav}>
                        <div className={styles.mobileList}>
                            <div className={styles.mobileLangWrap}>
                                <LanguageSwitch />
                            </div>
                            <Link href={routes.apartments} className={styles.link}>
                                {t.nav.apartments}
                            </Link>
                            <Link href={routes.about} className={styles.link}>
                                {t.nav.about}
                            </Link>
                            <NavButton href={routes.about} className={styles.mobileCta}>
                                {t.nav.book}
                            </NavButton>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};