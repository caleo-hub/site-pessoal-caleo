import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caléo Meneses | Machine Learning & Agentic AI",
  description:
    "Machine Learning Specialist e Agentic AI Engineer. Agentes de IA, RAG, MCP e plataformas cloud-native prontas para produção.",
  metadataBase: new URL("https://github.com/caleo-hub"),
  openGraph: {
    title: "Caléo Meneses | Machine Learning & Agentic AI",
    description: "Sistemas de IA úteis, seguros, observáveis e prontos para produção.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
