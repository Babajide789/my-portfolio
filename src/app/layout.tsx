import type { Metadata } from "next";
import "./globals.css";
import Header from "./../components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Babajide Yahaya | Frontend Developer Portfolio",
  description:
    "Explore the creative portfolio of Babajide Yahaya — a passionate Frontend Developer skilled in React, Next.js, Tailwind CSS, and UI/UX design.",
  keywords: [
    "Babajide Yahaya",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Web Developer",
    "Portfolio",
    "UI/UX Designer",
    "JavaScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Babajide Yahaya", url: "https://vercel.com/babajides-projects-ad363937/my-portfolio" }],
  metadataBase: new URL("https://vercel.com/babajides-projects-ad363937/my-portfolio"), // ← replace with your actual deployed URL (on vercel)
  openGraph: {
    title: "Babajide Yahaya | Frontend Developer Portfolio",
    description:
      "Explore the creative works and projects by Babajide Yahaya — modern, responsive web designs built with React and Next.js.",
    url: "https://vercel.com/babajides-projects-ad363937/my-portfolio",
    siteName: "Babajide Yahaya Portfolio",
    images: [
      {
        url: "/og-thumbnail.png", // ← put your thumbnail image here (should be in /public)
        width: 1200,
        height: 630,
        alt: "Babajide Yahaya Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Babajide Yahaya | Frontend Developer Portfolio",
    description:
      "Modern, responsive web designs and front-end projects by Babajide Yahaya.",
    images: ["/og-thumbnail.png"], // same thumbnail
    creator: "@OCIMS_J", // optional
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  );
}
