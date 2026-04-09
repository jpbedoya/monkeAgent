import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "MonkeAgent — Your AI Agent, Deployed in Minutes",
  description: "No terminal. No server setup. No DevOps. Your own AI running 24/7 on dedicated infrastructure — built by MonkeDAO on OpenClaw.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
