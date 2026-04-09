import type { Metadata } from "next";
import "./globals.css";

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
      <head>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
