import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Momentum: Monthly Progress - Simple Daily Progress Tracker",
  description: "Track your monthly progress with one-tap daily check-ins. No streaks. No pressure. Just clear signals of progress.",
  keywords: ["progress tracker", "habit tracker", "daily check-in", "productivity", "momentum", "monthly progress"],
  icons: {
    icon: '/app-icon.webp',
    apple: '/app-icon.webp',
  },
  openGraph: {
    title: "Momentum: Monthly Progress",
    description: "Simple Daily Progress Tracker - Track your monthly progress with one-tap daily check-ins",
    type: "website",
    images: ['/app-icon.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
