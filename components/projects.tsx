"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

const projects = [
  {
    id: 1,
    title: "Estate Elevate - Real Estate Platform",
    description:
      "A modern real estate platform built with Next.js 14, featuring property listings, user authentication, real-time chat, and interactive maps. Includes advanced search, property management, favorites system, and real-time notifications.",
    image: "/estate-ss.png",
    tags: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "Pusher", "Real-time Chat", "Maps"],
    github: "https://github.com/hunter10471/Estate-Elevate",
    liveLink: "https://estate-elevate.vercel.app",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Ace The AI Interview Coach",
    description:
      "An AI-powered interview preparation platform with personalized coaching, real-time feedback, and comprehensive progress tracking. Features practice sessions, performance analytics, and interactive interview simulations.",
    image: "/ai-ss.png",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "AI", "Interview Prep"],
    github: "https://github.com/hunter10471/Ace-TheAI",
    liveLink: "https://ace-the-ai.vercel.app",
    category: "frontend",
  },
  {
    id: 3,
    title: "Financial Stock Analysis Platform",
    description:
      "A comprehensive stock market analysis platform with advanced screening capabilities, real-time charts, and detailed financial metrics. Features stock screener, watchlist management, and interactive data visualization.",
    image: "/stock-ss.png",
    tags: ["Next.js 14", "TypeScript", "Chart.js", "Algolia", "Firebase", "Financial Data"],
    github: "",
    liveLink: "https://tweevest.com",
    category: "fullstack",
  },
  {
    id: 4,
    title: "Language Learning Web Application",
    description:
      "A comprehensive, full-stack language learning platform with interactive flashcards, vocabulary management, and assessment tools. Features spaced repetition, progress tracking, and mobile-responsive design.",
    image: "/language-learning-ss.png",
    tags: ["Next.js 13+", "TypeScript", "Tailwind CSS", "Framer Motion", "Flashcards", "Education"],
    github: "",
    liveLink: "https://dev.linguahub.com/vocabulary",
    category: "fullstack",
  },
  {
    id: 5,
    title: "Restaurant Management System Backend",
    description:
      "Enterprise-grade RESTful API backend service for restaurant management with order processing, inventory management, payment integration, and real-time features. Built with Node.js, Express, and TypeScript.",
    image: "/api-ss.png",
    tags: ["Node.js", "Express", "TypeScript", "MySQL", "Socket.IO", "Stripe", "AWS S3"],
    github: "",
    liveLink: "http://194.164.91.243:5000/api-docs/#/",
    category: "backend",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features dark/light mode, interactive animations, project filtering, and a live code editor component.",
    image: "/portfolio-ss.png",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui", "Portfolio"],
    github: "github.com/hunter10471/portfolio_next",
    liveLink: "https://rafayzia.dev",
    category: "frontend",
  },
  {
    id: 7,
    title: "API Gateway Service",
    description:
      "A microservice gateway that handles routing, authentication, and rate limiting for a distributed system. Currently under development.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Node.js", "Express", "Docker", "Microservices", "API", "Under Development"],
    github: "",
    liveLink: "",
    category: "backend",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Projects
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              A selection of my recent work across various domains and
              technologies.
            </p>
          </motion.div>

          <Tabs
            defaultValue="all"
            className="w-full max-w-4xl"
            onValueChange={setActiveTab}
          >
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col overflow-hidden">
                      <div className="aspect-[3/2] overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">
                          {project.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        {project.github && (
                          <Button variant="outline" size="sm" asChild>
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              GitHub
                            </Link>
                          </Button>
                        )}
                        {project.liveLink && (
                          <Button size="sm" asChild>
                            <Link
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </Link>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12">
            <Button variant="outline" asChild>
              <Link
                href="https://github.com/hunter10471"
                target="_blank"
                rel="noopener noreferrer"
              >
                View More on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Structured data for each project */}
      <Script
        id="projects-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: projects.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "SoftwareApplication",
                name: project.title,
                description: project.description,
                applicationCategory: "WebApplication",
                operatingSystem: "Any",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                },
                screenshot: project.image,
                author: {
                  "@type": "Person",
                  name: "Rafay Zia",
                  url: "https://rafayzia.dev",
                },
              },
            })),
          }),
        }}
      />
    </section>
  );
}
