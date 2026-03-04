import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Su Latt — Strategic AI & Analytics",
  description:
    "A decade of engineering intelligence across healthcare, financial services, and global enterprise — now pioneering GenAI governance frameworks and agentic systems for regulated industries.",
  openGraph: {
    title: "Su Latt — Strategic AI & Analytics",
    description:
      "AI governance, predictive systems, and enterprise analytics across Fortune 500 healthcare, pharma, and financial services.",
    siteName: "Su Latt",
    type: "website",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
