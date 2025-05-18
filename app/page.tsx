import Hero from "@/components/hero";
import TechRibbon from "@/components/tech-ribbon";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import SeoHeadings from "@/components/seo-headings";
import Script from "next/script";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <SeoHeadings />
      <Hero />
      <TechRibbon />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <div className="hidden">
        <Image src="/me.jpg" alt="Rafay Zia - Full Stack Developer" width={800} height={800} priority />
      </div>

      {/* Structured data for WebSite */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Rafay Zia - Full Stack Developer",
            url: "https://rafayzia.dev",
            description:
              "Portfolio website of Rafay Zia, a full stack developer specializing in React, Next.js, and Node.js",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://rafayzia.dev/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Structured data for Professional Service */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Rafay Zia - Full Stack Development Services",
            image: "https://rafayzia.dev/og-image.jpg",
            "@id": "https://rafayzia.dev",
            url: "https://rafayzia.dev",
            telephone: "+11234567890",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Karachi",
              addressRegion: "Sindh",
              addressCountry: "Pakistan",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 24.8607,
              longitude: 67.0011,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
            sameAs: [
              "https://github.com/",
              "https://linkedin.com/in/",
              "https://twitter.com/",
              "https://www.upwork.com/freelancers/~016187e6d333d1a266",
            ],
            priceRange: "$$",
            servesCuisine: "Web Development",
          }),
        }}
      />

      {/* Structured data for FAQPage */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What services does Rafay Zia offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Rafay Zia offers full stack development services specializing in React, Next.js, Node.js, and modern web technologies. Services include frontend development, backend development, database design, and responsive web application development.",
                },
              },
              {
                "@type": "Question",
                name: "How much experience does Rafay Zia have?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Rafay Zia has over 4 years of experience in web development, having completed 29+ projects on Upwork with 5-star ratings and maintaining a 96% job success score.",
                },
              },
              {
                "@type": "Question",
                name: "How can I hire Rafay Zia for my project?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can hire Rafay Zia through his Upwork profile at https://www.upwork.com/freelancers/~016187e6d333d1a266 or by contacting him directly through the contact form on his website.",
                },
              },
              {
                "@type": "Question",
                name: "What technologies does Rafay Zia work with?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Rafay Zia works with a wide range of technologies including React, Next.js, Node.js, Express, TypeScript, Tailwind CSS, MongoDB, PostgreSQL, MySQL, Docker, and CI/CD pipelines.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
