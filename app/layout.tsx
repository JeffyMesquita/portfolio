import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const space_mono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jeffymesquita.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/og-image.png",
  },
  title: {
    default: "Jeferson Mesquita",
    template: "Jeferson Mesquita | %s",
  },
  description: "This is my personal portfolio",
  verification: {
    google: "google-site-verification=878787878",
  },
  robots: {
    index: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={space_mono.className}>{children}</body>
    </html>
  );
}
