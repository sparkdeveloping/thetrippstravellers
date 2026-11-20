import "./globals.css";
import "./experience.css";
import "./fitting.css";
export const metadata = {
  title: "The Tripps Travellers — The Journey to Their Roora",
  description:
    "The journey to Natalie and Jordan’s roora. Travel to Zimbabwe November 26–December 6, 2027 and celebrate with their families on December 1.",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/assets/mark.svg",
  },
  openGraph: {
    title: "The Tripps Travellers — The Journey to Their Roora",
    description:
      "Every mile brings us closer to Natalie and Jordan’s roora. Zimbabwe, December 1, 2027.",
    type: "website",
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#102c44",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/assets/display.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="/assets/departure.webp" as="image" />
      </head>
      <body>{children}</body>
    </html>
  );
}
