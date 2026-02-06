"use client";

import { usePathname, useRouter } from "next/navigation";
import styles from "./LanguageSwitch.module.css";
import type { Locale } from "@/lib/i18n";
import { getCurrentLocaleFromPath, replaceLocaleInPath, setLangCookie } from "@/lib/locale";

export function LanguageSwitch() {
  const pathname = usePathname();
  const router = useRouter();

  if (!pathname) return null;

  const current = getCurrentLocaleFromPath(pathname);

  const goTo = (next: Locale) => {
    if (next === current) return;
    setLangCookie(next);
    const nextPath = replaceLocaleInPath(pathname, next);
    router.push(nextPath, { scroll: false });
  };

  return (
    <div className={styles.switch} role="group" aria-label="Language switch">
      <button
        type="button"
        onClick={() => goTo("en")}
        className={current === "en" ? styles.optionActive : styles.option}
        aria-pressed={current === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => goTo("it")}
        className={current === "it" ? styles.optionActive : styles.option}
        aria-pressed={current === "it"}
      >
        IT
      </button>
    </div>
  );
}
