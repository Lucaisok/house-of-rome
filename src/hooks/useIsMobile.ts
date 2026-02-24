import { useEffect, useState } from "react";

/**
 * Returns true if the screen width is less than 640px (mobile breakpoint).
 */
export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 640);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return isMobile;
}
