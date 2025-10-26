import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "./_components/footer";
import "./globals.css";
import { Header } from "./_components/header";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Projeto Elisa",
  description: "Plataforma digital para prevenção e recuperação de pessoas com dependência em apostas, combinando IA conversacional via WhatsApp, encaminhamento a unidades de apoio presenciais, simulação de relatório clínico e landing page de cadastro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased bg-zinc-50 text-zinc-950`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            forcedTheme="light"
            disableTransitionOnChange
          >
          
        
            {children}
            <Footer />
          </ThemeProvider>
       
      </body>
    </html>
  );
}
