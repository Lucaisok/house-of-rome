import "./globals.css";
import type { Metadata } from "next";
import { Nunito, Playfair_Display } from "next/font/google";

const nunito = Nunito({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
    variable: "--font-nunito",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
    variable: "--font-playfair",
});

export const metadata: Metadata = {
    title: "House of Rome",
    description: "Apartments in Rome",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
            <body className={`${nunito.variable} ${playfair.variable}`}>
                {children}
            </body>
        </html>
    );
}
