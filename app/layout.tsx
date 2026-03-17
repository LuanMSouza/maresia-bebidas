import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  title: "Maresia Bebidas | Distribuidora e Adega em Santos",
  description: "Referência em logística de bebidas B2B e varejo em Santos. Entrega de carga pesada e a melhor adega da Baixada Santista desde 2007.",
  keywords: ["Distribuidora de bebidas Santos", "Atacado de bebidas", "Logística B2B bebidas", "Maresia Bebidas", "Adega Santos"],
  authors: [{ name: "Luan Souza Dev" }],
  openGraph: {
    title: "Maresia Bebidas - Atacado e Varejo",
    description: "O melhor preço de bebidas da Baixada Santista direto para seu comércio ou evento.",
    url: "https://maresia-bebidas.com.br", // Substitua pelo seu domínio
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
      </body>
    </html>
  );
}
