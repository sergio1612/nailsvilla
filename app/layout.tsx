import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins, Allura, Niconne } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const allura = Allura({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const niconne = Niconne({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nails Villa by Rutika | Ahmedabad Nail Services",
  description:
    "Home-based Ahmedabad nail services by Nails Villa by Rutika, founded by owner Rutika Chauhan on 10 April 2021. Gel polish, extensions, overlays, refills, removals, nail art, and home service on request.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${poppins.variable} ${allura.variable} ${niconne.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
