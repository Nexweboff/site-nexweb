import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/manrope";
import "./globals.css";


export const metadata: Metadata = {
  title: "NexWeb — Agence de création de sites Internet",
  description: "NexWeb conçoit, développe, publie et maintient votre site Internet. Votre vision. Notre expertise.",
};

export const viewport: Viewport = { themeColor: "#080B12", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="antialiased">
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
