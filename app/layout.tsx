import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

// SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://rafayzia.dev"),
  title: {
    default: "Rafay Zia | Full Stack Developer & React Specialist",
    template: "%s | Rafay Zia - Full Stack Developer",
  },
  description:
    "Experienced full stack developer specializing in React, Next.js, and Node.js with 2+ years of experience. View my portfolio of 29+ successful projects with 5-star ratings.",
  keywords: [
    "Rafay",
    "rafay",
    "Rafay Zia",
    "rafay zia",
    "Zia",
    "zia",
    "Upwork",
    "upwork",
    "Freelancer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer Pakistan",
    "Upwork Developer",
    "Freelance Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Rafay Zia", url: "https://rafayzia.dev" }],
  creator: "Rafay Zia",
  publisher: "Rafay Zia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rafayzia.dev",
    title: "Rafay Zia | Full Stack Developer & React Specialist",
    description:
      "Experienced full stack developer specializing in React, Next.js, and Node.js with 2+ years of experience. View my portfolio of 29+ successful projects with 5-star ratings.",
    siteName: "Rafay Zia - Full Stack Developer",
    images: [
      {
        url: "https://rafayzia.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rafay Zia - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafay Zia | Full Stack Developer & React Specialist",
    description:
      "Experienced full stack developer specializing in React, Next.js, and Node.js with 2+ years of experience. View my portfolio of 29+ successful projects with 5-star ratings.",
    images: ["https://rafayzia.dev/og-image.jpg"],
    creator: "@rafayzia",
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Profile image for Google Knowledge Graph */}
        <link rel="image_src" href="/me.jpg" />
        <meta property="og:image" content="https://rafayzia.dev/me.jpg" />
        <meta property="og:image:alt" content="Rafay Zia - Full Stack Developer" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content="Rafay" />
        <meta property="profile:last_name" content="Zia" />
        <meta property="profile:username" content="rafayzia" />
        <meta property="profile:gender" content="male" />
        <meta property="og:title" content="Rafay Zia | Full Stack Developer & React Specialist" />
        <meta property="og:site_name" content="Rafay Zia" />
        <meta name="author" content="Rafay Zia" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>

        {/* Structured data for Person */}
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rafay Zia",
              url: "https://rafayzia.dev",
              jobTitle: "Full Stack Developer & React Specialist",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              sameAs: [
                "https://github.com/hunter10471",
                "https://linkedin.com/in/rafayzia",
                "https://twitter.com/rafayzia",
                "https://www.upwork.com/freelancers/~016187e6d333d1a266",
              ],
              image: "https://rafayzia.dev/me.jpg",
              description:
                "Full Stack Developer specializing in React, Next.js, and Node.js with 2+ years of experience.",
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "Web Development",
                "Frontend Development",
                "Backend Development",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "NED University of Engineering & Technology",
              },
            }),
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        <Image
          src="/me.jpg"
          alt="Rafay Zia - Full Stack Developer & React Specialist"
          width={800}
          height={800}
          priority
        />
      </body>
    </html>
  );
}
