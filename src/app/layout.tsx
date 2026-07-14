import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://caleosantos.com"),
  title: {
    default: "Caléo Meneses | Machine Learning & Agentic AI",
    template: "%s | Caléo Meneses",
  },
  description:
    "Machine Learning Specialist e Agentic AI Engineer. Agentes de IA, RAG, MCP e plataformas cloud-native prontas para produção.",
  authors: [{ name: "Caléo Meneses", url: "https://caleosantos.com" }],
  creator: "Caléo Meneses",
  publisher: "Caléo Meneses",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Caléo Meneses | Machine Learning & Agentic AI",
    description:
      "Machine Learning Specialist e Agentic AI Engineer. Agentes de IA, RAG, MCP e plataformas cloud-native prontas para produção.",
    url: "/",
    siteName: "Caléo Meneses",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caléo Meneses | Machine Learning & Agentic AI",
    description:
      "Machine Learning Specialist e Agentic AI Engineer. Agentes de IA, RAG, MCP e plataformas cloud-native prontas para produção.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const locale = requestHeaders.get("x-site-locale") === "en" ? "en" : "pt-BR";

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
