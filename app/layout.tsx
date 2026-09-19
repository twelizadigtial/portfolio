import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { personalData } from "@/data/portfolioData";

const CustomCursor = dynamic(
  () => import("@/components/ui/CustomCursor").then((mod) => mod.CustomCursor),
  { ssr: false }
);

const WhatsAppFloatingButton = dynamic(
  () =>
    import("@/components/ui/WhatsAppFloatingButton").then(
      (mod) => mod.WhatsAppFloatingButton
    ),
  { ssr: false }
);

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${personalData.name} | ${personalData.role}`,
  description: personalData.heroSubtitle,
  keywords: [
    "Chathushi Jayarathna",
    "Chathu Jayarathna",
    "Software Developer",
    "Web Developer",
    "Frontend Developer",
    "Full-Stack Developer",
    "UI/UX Designer",
    "React Developer",
    "Java Developer",
    "Sri Lanka Developer",
  ],
  authors: [{ name: personalData.name }],
  openGraph: {
    title: `${personalData.name} | Portfolio`,
    description: personalData.heroSubtitle,
    url: "https://chathu-jayarathna.github.io/Portfolioo/",
    siteName: `${personalData.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalData.name} | ${personalData.role}`,
    description: personalData.heroSubtitle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${jakarta.variable} ${jetbrainsMono.variable} font-sans bg-slate-950 text-slate-100 antialiased selection:bg-sky-500 selection:text-white`}>
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
