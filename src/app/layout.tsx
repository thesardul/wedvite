import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description:
    "Join us for a day of love, laughter, and celebration on March 1, 2025! Explore our wedding website for all the details, including venue information, event schedule, RSVP, registry, and a glimpse into our journey together. We can't wait to share this special day with you!",
  keywords:
    "wedding, Sardul and Satyam wedding, March 1, 2025 wedding, wedding website, RSVP online, wedding details, wedding event, wedding registry, wedding celebrations",
  authors: [{ name: "Sardul", url: "https://thesardul.com/" }],
  openGraph: {
    title: "Sardul & Satyam's Wedding | March 1, 2025",
    description:
      "Celebrate Sardul & Satyam's special day on March 1, 2025! Discover wedding details, RSVP, and more on our official website.",
    url: "https://thesardul.com/",
    type: "website",
    images: [
      {
        url: "https://thesardul.com/wedding-image.jpg",
        alt: "Sardul and Satyam Wedding Banner",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sardul & Satyam's Wedding | March 1, 2025",
    description:
      "Celebrate our wedding day with us! RSVP, venue info, and more are available on our website.",
    images: ["https://thesardul.com/wedding-image.jpg"],
  },
  icons: {
    icon: "./favicon.png", // Path to your favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{`Sardul & Satyam (${new Intl.DateTimeFormat("de-DE", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }).format(new Date("2025-03-01"))})`}</title>

        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
