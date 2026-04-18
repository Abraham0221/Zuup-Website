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
  title: "Zuup — You Ready?",
  description:
    "Zuup is the free app for athletes. Find, create, and join local sports events in seconds. Basketball, tennis, volleyball, and more — your game starts here.",
  keywords: [
    "Zuup",
    "sports app",
    "pickup games",
    "local sports events",
    "athlete community",
    "basketball app",
    "tennis app",
    "volleyball app",
  ],
  openGraph: {
    title: "Zuup — You Ready?",
    description:
      "The free app for athletes. Find and create sports events in seconds.",
    type: "website",
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
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
