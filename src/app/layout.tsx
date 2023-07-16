import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApplicationThemeContextProvider } from "./context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatbot AI",
  description: "Chatbot utilizando a Vercel AI criado por Henrique Martins",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ApplicationThemeContextProvider>
          {children}
        </ApplicationThemeContextProvider>
      </body>
    </html>
  );
}
