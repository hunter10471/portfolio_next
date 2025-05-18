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

// Sample projects data - you would replace this with your actual projects
const projects = [
  {
    id: 1,
    title: "Restaurant Dashboard",
    description:
      "A comprehensive dashboard for restaurant management, including order tracking, inventory management, and sales analytics.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Express", "Dashboard"],
    github: "https://github.com/",
    liveLink: "https://example.com",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Stock Management System",
    description:
      "An inventory and stock management application with real-time tracking, alerts, and reporting features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Dashboard"],
    github: "https://github.com/",
    liveLink: "https://example.com",
    category: "fullstack",
  },
  {
    id: 3,
    title: "Language Learning Portal",
    description:
      "An interactive platform for language learning with progress tracking, exercises, and community features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Express", "Education"],
    github: "https://github.com/",
    liveLink: "https://example.com",
    category: "fullstack",
  },
  {
    id: 4,
    title: "E-commerce Website",
    description:
      "A modern e-commerce platform with product catalog, shopping cart, and secure checkout functionality.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Supabase", "E-commerce"],
    github: "https://github.com/",
    liveLink: "https://example.com",
    category: "frontend",
  },
  {
    id: 5,
    title: "API Gateway Service",
    description:
      "A microservice gateway that handles routing, authentication, and rate limiting for a distributed system.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Node.js", "Express", "Docker", "Microservices", "API"],
    github: "https://github.com/",
    liveLink: null,
    category: "backend",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "A professional portfolio website built with Next.js and Tailwind CSS.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Portfolio"],
    github: "https://github.com/",
    liveLink: "https://example.com",
    category: "frontend",
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
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col overflow-hidden">
                      <div className="aspect-video overflow-hidden">
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
                href="https://github.com/"
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
