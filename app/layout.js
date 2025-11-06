import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
  weight: ["300", "400"],
  display: "optional",
  fallback: ["system-ui"],
});

export const metadata = {
  title: "Leads GHG",
  description:
    "Leading platform for greenhouse gas emission monitoring, carbon credit management, and climate-smart agriculture solutions. Track, monitor, and reduce your carbon footprint with our advanced digital tools.",
  keywords:
    "carbon emissions, GHG monitoring, climate smart agriculture, carbon credits, environmental monitoring, sustainability",
  authors: [{ name: "Digisaka Carbon" }],
  creator: "Digisaka Carbon",
  publisher: "Digisaka Carbon",
  metadataBase: new URL("https://digisakacarbon.com"),
  openGraph: {
    title: "Digisaka Carbon - GHG Emission Monitoring Platform",
    description:
      "Leading platform for greenhouse gas emission monitoring, carbon credit management, and climate-smart agriculture solutions.",
    url: "https://digisakacarbon.com",
    siteName: "Digisaka Carbon",
    type: "website",
    images: [
      {
        url: "/images/digisakaweb.png",
        width: 1200,
        height: 630,
        alt: "Digisaka Carbon Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digisaka Carbon - GHG Emission Monitoring Platform",
    description:
      "Leading platform for greenhouse gas emission monitoring, carbon credit management, and climate-smart agriculture solutions.",
    images: ["/images/digisakaweb.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/digisakaweb.png" />
        <meta name="theme-color" content="#10b981" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${figtree.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
