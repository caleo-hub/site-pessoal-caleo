import { PortfolioPage } from "@/components/portfolio-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caléo Meneses | Machine Learning & Agentic AI",
  description:
    "Machine Learning Specialist and Agentic AI Engineer building AI agents, RAG systems, and production-ready cloud-native platforms.",
  alternates: {
    canonical: "/en",
    languages: {
      "pt-BR": "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Caléo Meneses | Machine Learning & Agentic AI",
    description:
      "Machine Learning Specialist and Agentic AI Engineer building AI agents, RAG systems, and production-ready cloud-native platforms.",
    url: "/en",
    siteName: "Caléo Meneses",
    type: "profile",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caléo Meneses | Machine Learning & Agentic AI",
    description:
      "Machine Learning Specialist and Agentic AI Engineer building AI agents, RAG systems, and production-ready cloud-native platforms.",
  },
};

export default function EnglishHomePage() {
  return <PortfolioPage locale="en" />;
}
