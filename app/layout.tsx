import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nydia Tech — AI Automation Agency",
  description: "Automation, chatbots, data pipelines, and integrations for modern teams.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-bg text-foreground">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
