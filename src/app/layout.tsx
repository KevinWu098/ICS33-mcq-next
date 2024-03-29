import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ICS 33 MCQ",
    description:
        "Minimalistic ICS 33 MCQ Questions. Full credit and recognition goes to Bo, for providing the questions enabling this website.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.className, "bg-zinc-50")}>
                {children}
                <Footer />
                <GoogleAnalytics gaId="G-7G7TMR3DPC" />
            </body>
        </html>
    );
}
