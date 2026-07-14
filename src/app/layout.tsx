import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://caleosantos.com"),
  title: {
    default: "Caléo Meneses | Machine Learning & Agentic AI",
    template: "%s | Caléo Meneses",
  },
  description:
    "Machine Learning Specialist e Agentic AI Engineer. Agentes de IA, RAG, MCP e plataformas cloud-native prontas para produção.",
  alternates: {
    canonical: "/",
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
