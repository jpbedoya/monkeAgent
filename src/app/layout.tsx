import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MonkeAgent — Your AI Agent, Deployed in Minutes",
  description: "No terminal. No server setup. No DevOps. Your own AI running 24/7 on dedicated infrastructure — built by MonkeDAO on OpenClaw.",
  openGraph: {
    title: "MonkeAgent — Your Personal AI Assistant",
    description: "Deploy your own AI agent in minutes. No coding required.",
    url: "https://agent.monke.is",
    siteName: "MonkeAgent",
    images: [],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MonkeAgent — Your Personal AI Assistant",
    description: "Deploy your own AI agent in minutes. No coding required.",
    images: [],
  },
  icons: {
    icon: "/m-agent-logo-white.svg",
    apple: "/m-agent-logo-white.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
