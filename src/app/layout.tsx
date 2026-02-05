import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "House of Rome",
    description: "Apartments in Rome",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}