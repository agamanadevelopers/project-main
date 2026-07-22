import type { Metadata, Viewport } from "next";
import { Archivo, Noto_Sans_Kannada } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { buildJsonLd } from "@/lib/jsonld";
import { Providers } from "@/components/Providers";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

// Kannada web font so the ಕನ್ನಡ experience is consistent on every device.
const notoKannada = Noto_Sans_Kannada({
  variable: "--font-kannada",
  subsets: ["kannada"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Agamana Projects — Your Trusted Project Partner in Karnataka",
    template: "%s | Agamana Projects",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "land development Karnataka",
    "residential project partner",
    "plotted development",
    "layout design",
    "project planning",
    "real estate branding",
    "project marketing Karnataka",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  category: "Real Estate",
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "Agamana Projects — Your Trusted Project Partner",
    description: site.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Agamana Projects — You have the land. We'll help you build the project.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agamana Projects — Your Trusted Project Partner",
    description: site.shortDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#f2f3ee",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = buildJsonLd();
  return (
    <html lang="en-IN" className={`${archivo.variable} ${notoKannada.variable}`}>
      <head>
        {/* No-JS fallback: ensure reveal content is visible without hydration */}
        <noscript>
          <style>{`.will-reveal,.reveal-stagger>*,.word-reveal span span{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-paper antialiased">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-teal focus:px-5 focus:py-2.5 focus:text-sm focus:text-lime"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
