import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CursorFollower } from "@/components/CursorFollower";
import { SmoothScroll } from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexusAI | Enterprise Grade AI Solutions",
  description:
    "Transform your business with NexusAI. We deliver precision-engineered, secure, and scalable AI solutions for Fintech, Healthcare, and Retail leaders.",
  keywords: [
    "AI",
    "Enterprise AI",
    "Machine Learning",
    "Fintech",
    "Healthcare",
    "Retail",
    "Cybersecurity",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll />
          <CursorFollower />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
