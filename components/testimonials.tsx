"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ExternalLink,
  Calendar,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

// Helper function to format dates
const formatDate = (dateString: string) => {
  const [month, day, year] = dateString.split(" ");
  return `${month} ${year}`;
};

// Parse date ranges and extract start and end dates
const parseProjectDates = (dateRange: string) => {
  const [startDate, endDate] = dateRange.split(" - ");
  return {
    start: formatDate(startDate),
    end: formatDate(endDate),
  };
};

// Testimonial data
const testimonials = [
  {
    id: 1,
    title: "Back-end Node.JS Developer",
    date: "Apr 22, 2024 - Mar 18, 2025",
    text: "Rafay is always a joy to work with. I have sung his praises in previous comments and he's always continued to be my trusted developer.",
    amount: "1,572.00",
    clientInitial: "JD",
    clientName: "John D.",
  },
  {
    id: 2,
    title: "Backend developer, Node.JS + MySQL",
    date: "Apr 28, 2023 - Feb 2, 2025",
    text: "Rafay is an exceptional developer, highly skilled and a joy to work with. Rafay has been a real asset to the project and will always go the extra mile to ensure the project is completed to the highest standard.",
    amount: "1,225.33",
    clientInitial: "MK",
    clientName: "Michael K.",
  },
  {
    id: 3,
    title: "Looking for full-time full stack developer",
    date: "Nov 10, 2024 - Nov 27, 2024",
    text: "Great freelancer and communicator but not suitable for full-time gigs. I would hire again on project-based work.",
    amount: "326.62",
    clientInitial: "TS",
    clientName: "Thomas S.",
  },
  {
    id: 4,
    title: "NextJS Project Cleanup to Match Figma Design",
    date: "Aug 3, 2024 - Nov 13, 2024",
    text: "He does great work. I really appreciate his communication skills and quality of work.",
    amount: "700.00",
    clientInitial: "AR",
    clientName: "Alex R.",
  },
  {
    id: 5,
    title: "Remove Bugs From Map Integration",
    date: "Oct 29, 2024 - Oct 29, 2024",
    text: "Rafay did an incredible job! He not only built a fantastic map but also fixed a bug in record time. His technical skills are outstanding, and his quick response and attention to detail made the whole process smooth and efficient.",
    amount: "180.00",
    clientInitial: "LM",
    clientName: "Laura M.",
  },
  {
    id: 6,
    title: "Web Developer with Design Skills for Interactive Gym Location Map",
    date: "Oct 19, 2024 - Oct 23, 2024",
    text: "Working with Rafay has been an absolute pleasure! He built a custom map for my website and it is absolutely perfect. Not only does it look great and is super responsive, but he also added some extra features that I didn't even think of. His communication was excellent throughout the project.",
    amount: "525.00",
    clientInitial: "FG",
    clientName: "Frank G.",
  },
  {
    id: 7,
    title: "Website redesign, new logo and Linkedin + FB banners",
    date: "Aug 28, 2024 - Sep 3, 2024",
    text: "Rafay is always a joy to work with and understands the project requirements. His suggestions are always valuable and I love collaborating with him each time! Would absolutely recommend for anyone looking for quality freelancers to work with.",
    amount: "80.00",
    clientInitial: "JW",
    clientName: "Jessica W.",
  },
  {
    id: 8,
    title: "Add Font Controls to existing React Fabric Image Editor App",
    date: "Aug 15, 2024 - Aug 17, 2024",
    text: "I had the pleasure of working with Rafay on updating our React Image Editor, and I couldn't be more satisfied with the results. The project involved adding various text formatting options, including moving the font family selection to a dropdown, integrating all Google Font families, and adding controls for font style, size, line height, letter spacing, text alignment, and more. Rafay executed everything flawlessly, paying close attention to detail and ensuring that all mockups were followed precisely. Communication was excellent throughout the project, and the final deliverable was exactly what we needed. I highly recommend Rafay and look forward to working with them again on future projects.",
    amount: "260.00",
    clientInitial: "BT",
    clientName: "Brian T.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Get current testimonial
  const currentTestimonial = testimonials[activeIndex];

  // Parse the date range
  const { start, end } = parseProjectDates(currentTestimonial.date);

  return (
    <section id="testimonials" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Client Testimonials
              </h2>
              <Image
                src="/upwork-logo-full.png"
                alt="Upwork"
                width={150}
                height={150}
              />
            </div>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Don't just take my word for it. Here's what clients are saying
              about my work on{" "}
              <Link
                href="https://www.upwork.com/freelancers/~016187e6d333d1a266"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center"
              >
                Upwork
                <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
              .
            </p>
          </motion.div>

          <div className="w-full max-w-4xl mx-auto mt-8">
            <div className="relative">
              <div className="overflow-hidden">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: direction * 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -200 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full"
                >
                  <Card className="border-2 border-muted">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0 flex flex-col items-center">
                          <Avatar className="h-16 w-16 border-2 border-primary">
                            <AvatarFallback className="bg-primary/10 text-primary font-bold">
                              {currentTestimonial.clientInitial}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>

                        <div className="flex-1 space-y-4">
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <h3 className="text-xl font-bold">
                                {currentTestimonial.title}
                              </h3>
                            </div>
                            <p className="text-muted-foreground text-left">
                              {currentTestimonial.text}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-4 pt-2 border-t">
                            <div className="flex items-center gap-0.5">
                              <DollarSign className="h-4 w-4 text-green-600" />
                              <p className="font-medium text-green-600">
                                {currentTestimonial.amount}
                              </p>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <p className="text-sm text-muted-foreground">
                                {start !== end ? `${start} - ${end}` : start}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <div className="flex justify-center mt-6 gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex items-center gap-1">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > activeIndex ? 1 : -1);
                        setActiveIndex(index);
                      }}
                      className={`h-2 w-2 rounded-full transition-all ${
                        index === activeIndex ? "bg-primary w-4" : "bg-muted"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link
                  href="https://www.upwork.com/freelancers/~016187e6d333d1a266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Image
                    src="/upwork-logo.png"
                    alt="Upwork"
                    width={20}
                    height={20}
                  />
                  View My Upwork Profile
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Structured data for Reviews */}
      <Script
        id="testimonials-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://rafayzia.dev/#testimonials",
            name: "Rafay Zia - Client Testimonials",
            description:
              "Client testimonials for Rafay Zia, a full stack developer specializing in React, Next.js, and Node.js",
            mainEntity: {
              "@type": "Person",
              name: "Rafay Zia",
              jobTitle: "Full Stack Developer",
              description:
                "Full Stack Developer specializing in React, Next.js, and Node.js with 2+ years of experience.",
              url: "https://rafayzia.dev",
              sameAs: [
                "https://github.com/",
                "https://linkedin.com/in/",
                "https://www.upwork.com/freelancers/~016187e6d333d1a266",
              ],
            },
          }),
        }}
      />
    </section>
  );
}
