"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Home, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import Link from "next/link";
import { LanguageSwitch } from "../languageSwitch/LanguageSwitch";
import styles from "./Header.module.css";
import { siteContent } from "@/content/global";
import { Locale } from "@/lib/i18n";
import { NavButton } from "../navButton/NavButton";
import { localizedRoutes } from "@/lib/routes";
import { useIsMobile } from "@/hooks/useIsMobile";
import { apartments } from "@/content/apartments";

interface HeaderProps {
    locale: Locale;
}

export const Header = ({ locale }: HeaderProps) => {
    const t = siteContent[locale];
    const r = localizedRoutes(locale);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [apartmentsOpen, setApartmentsOpen] = useState(false);
    const pathname = usePathname();
    const isMobile = useIsMobile();
    // Accept /, /it, /en, etc. as home, and also apartments/[slug] pages
    const isHomeOrApartment =
        /^\/(|[a-zA-Z-]{2,5})$/.test(pathname) ||
        /^\/(|[a-zA-Z-]{2,5})\/apartments\/[\w-]+$/.test(pathname);

    // Active state detection
    const isHomePage = /^\/(|[a-zA-Z-]{2,5})$/.test(pathname);
    const isApartmentsPage = pathname.includes('/apartments');
    const isApartmentsListingPage = /^\/(|[a-zA-Z-]{2,5})\/apartments$/.test(pathname);
    const isContactsPage = pathname.includes('/contacts');

    // Extract current apartment slug from pathname
    const currentApartmentSlug = pathname.match(/\/apartments\/([\w-]+)/)?.[1];

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
        setApartmentsOpen(false);
    }, [pathname]);

    // Close apartments dropdown when mobile menu closes
    useEffect(() => {
        if (!mobileMenuOpen) {
            setApartmentsOpen(false);
        }
    }, [mobileMenuOpen]);

    return (
        <header className={`${styles.header}${mobileMenuOpen ? ` ${styles.headerOpen}` : ""}`}
            style={{ borderBottom: (isMobile && isHomeOrApartment) ? "none" : "1px solid rgba(0, 0, 0, 0.1)" }}>
            <nav className={styles.nav}>
                <div className={styles.row}>
                    {/* Desktop Layout */}
                    <div className={styles.logoWrap}>
                        <Link href={r.home} className={styles.logo}>
                            <Home className={styles.logoIcon} aria-hidden="true" style={{ color: '#171717' }} />
                            <span className={styles.logoText}>{t.home.title}</span>
                        </Link>
                    </div>
                    <div className={styles.desktopNav}>
                        <LanguageSwitch />
                        <Link href={r.contacts} className={`${styles.link} ${isContactsPage ? styles.linkActive : ''}`}>
                            {t.nav.about}
                        </Link>
                        <div
                            className={styles.desktopDropdown}
                            onMouseEnter={() => setApartmentsOpen(true)}
                            onMouseLeave={() => setApartmentsOpen(false)}
                        >
                            <button className={`${styles.apartmentsToggleDesktop} ${isApartmentsPage ? styles.apartmentsToggleDesktopActive : ''}`}>
                                <span>{t.nav.apartments}</span>
                                {apartmentsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
                            {apartmentsOpen && (
                                <div className={styles.desktopApartmentsList}>
                                    <Link
                                        href={r.apartments}
                                        className={`${styles.desktopApartmentLinkAll} ${isApartmentsListingPage ? styles.desktopApartmentLinkAllActive : ''}`}
                                    >
                                        All Apartments
                                    </Link>
                                    {apartments.map(apt => (
                                        <Link
                                            key={apt.slug}
                                            href={r.apartment(apt.slug)}
                                            className={`${styles.desktopApartmentLink} ${currentApartmentSlug === apt.slug ? styles.desktopApartmentLinkActive : ''}`}
                                        >
                                            {apt.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        <NavButton href={r.book} className={styles.cta}>
                            {t.nav.book}
                        </NavButton>
                    </div>
                    {/* Mobile Layout: Home icon, title, burger */}
                    <div className={styles.mobileHeaderRow}>
                        <Link href={r.home} className={styles.logo} aria-label={t.home.title}>
                            <Home className={styles.logoIcon} aria-hidden="true" style={{ color: isHomeOrApartment ? '#fff' : '#171717' }} />
                        </Link>
                        {mobileMenuOpen ? (
                            <span className={isHomeOrApartment ? styles.mobileTitleInternal : styles.mobileTitle}>{t.home.title}</span>
                        ) : (
                            !isHomeOrApartment && <span className={styles.mobileTitle}>{t.home.title}</span>
                        )}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={styles.mobileButton}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} strokeWidth={2.3} style={{ color: isHomeOrApartment ? '#fff' : '#171717' }} /> : <Menu size={24} strokeWidth={2.3} style={{ color: isHomeOrApartment ? '#fff' : '#171717' }} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className={styles.mobileNav}>
                        <div className={styles.mobileNavGrid}>
                            <div className={styles.mobileList}>
                                <div className={styles.mobileTopRow}>
                                    <Link href={r.home} className={`${styles.link} ${styles.mobileHomeLink} ${isHomePage ? styles.linkActive : ''}`}>
                                        {t.nav.home}
                                    </Link>
                                    <div className={styles.mobileLangWrap}>
                                        <LanguageSwitch />
                                    </div>
                                </div>
                                <Link href={r.contacts} className={`${styles.link} ${isContactsPage ? styles.linkActive : ''}`}>
                                    {t.nav.about}
                                </Link>
                                <Link href={r.privacyPolicy} className={styles.link}>
                                    {t.nav.privacyPolicy}
                                </Link>
                                <div className={styles.apartmentsSection}>
                                    <button
                                        onClick={() => setApartmentsOpen(!apartmentsOpen)}
                                        className={`${styles.apartmentsToggle} ${isApartmentsPage ? styles.apartmentsToggleActive : ''}`}
                                    >
                                        <span>{t.nav.apartments}</span>
                                        {apartmentsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                    </button>
                                    {apartmentsOpen && (
                                        <div className={styles.apartmentsList}>
                                            <Link
                                                href={r.apartments}
                                                className={`${styles.apartmentLinkAll} ${isApartmentsListingPage ? styles.apartmentLinkAllActive : ''}`}
                                            >
                                                {t.global.allApartments}
                                            </Link>
                                            {apartments.map(apt => (
                                                <Link
                                                    key={apt.slug}
                                                    href={r.apartment(apt.slug)}
                                                    className={`${styles.apartmentLink} ${currentApartmentSlug === apt.slug ? styles.apartmentLinkActive : ''}`}
                                                >
                                                    {apt.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <NavButton href={r.book} className={styles.mobileCta}>
                                    {t.nav.book}
                                </NavButton>
                            </div>

                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};