import type { Metadata, Viewport } from "next";
import Script from "next/script";
import './globals.css'

export const viewport: Viewport = {
  themeColor: "#0D1117",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Maresia Bebidas | Distribuidora e Adega em Santos",
  description: "Referência em logística de bebidas B2B e varejo em Santos. Entrega de carga pesada e a melhor adega da Baixada Santista desde 2007.",
  keywords: ["Distribuidora de bebidas Santos", "Atacado de bebidas", "Logística B2B bebidas", "Maresia Bebidas", "Adega Santos"],
  authors: [{ name: "Luan Souza Dev" }],
  metadataBase: new URL("https://maresia-bebidas.com"),
  openGraph: {
    title: "Maresia Bebidas - Atacado e Varejo",
    description: "O melhor preço de bebidas da Baixada Santista direto para seu comércio ou evento.",
    url: "https://maresia-bebidas.com",
    siteName: "Maresia Bebidas",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://maresia-bebidas.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        {/* visitas do site (relatório mensal no painel da DVLS); data-secao nos blocos dá o nome de cada parte */}
        <Script src="https://api.leads.dvls.com.br/rastreio.js" data-site="c-maresia" strategy="afterInteractive" />
      </body>
    </html>
  );
}
