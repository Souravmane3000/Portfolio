import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sourav Mane — AI Engineer",
  description:
    "AI Engineer building intelligent agents, agentic workflows, RAG systems, automation and production AI applications.",
  openGraph: {
    title: "Sourav Mane — AI Engineer",
    description:
      "AI Engineer building intelligent agents, agentic workflows, RAG systems, automation and production AI applications.",
    type: "website",
    siteName: "Sourav Mane",
  },
  twitter: {
    card: "summary",
    title: "Sourav Mane — AI Engineer",
    description:
      "AI Engineer building intelligent agents, agentic workflows, RAG systems, automation and production AI applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
