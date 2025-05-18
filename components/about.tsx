"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              About Me
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              I'm a passionate full stack developer with a focus on creating
              efficient, scalable, and user-friendly web applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-12 lg:grid-cols-12 mt-8">
            {/* Profile section - 5 columns on md, 4 on lg */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-5 lg:col-span-4"
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="relative w-72 h-72 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                      <Image
                        src="/me.jpg"
                        alt="Rafay Zia - Full Stack Developer"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">My Journey</h3>
                    <p className="text-muted-foreground mb-4 text-center">
                      Born in 2000 in Abbottabad, Pakistan, I'm currently based
                      in Karachi. I graduated with a degree in{" "}
                      <span className="font-medium">Computer Science</span> from
                      NED University of Engineering & Technology (NEDUET).
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      <Link
                        href="https://www.upwork.com/freelancers/~016187e6d333d1a266"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <Button variant="outline" size="lg" className="gap-2">
                          <Image
                            src="/upwork-logo.png"
                            alt="Upwork"
                            width={30}
                            height={30}
                          />
                          Hire Me on Upwork
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience section - 7 columns on md, 8 on lg */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-7 lg:col-span-8"
            >
              <Card className="h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="space-y-4 flex-1 flex flex-col justify-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-3">
                        Professional Experience
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        With over 4 years of experience in web development, I've
                        worked on a diverse range of projects from small
                        business websites to complex enterprise applications.
                        I've completed{" "}
                        <Link
                          href="https://www.upwork.com/freelancers/~016187e6d333d1a266"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-primary hover:underline inline-flex items-center"
                        >
                          29 jobs on Upwork
                        </Link>{" "}
                        with 5-star ratings and maintain a{" "}
                        <span className="font-bold text-primary">
                          96% job success score
                        </span>
                        , having earned over{" "}
                        <span className="font-bold text-primary">$15,000</span>.
                      </p>
                    </div>
                    <div className="space-y-5">
                      <div>
                        <h5 className="font-medium mb-2">
                          Frontend Development
                        </h5>
                        <div className="flex justify-center flex-wrap gap-2">
                          <Badge>React</Badge>
                          <Badge>Next.js</Badge>
                          <Badge>Tailwind CSS</Badge>
                          <Badge>TypeScript</Badge>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">
                          Backend Development
                        </h5>
                        <div className="flex justify-center flex-wrap gap-2">
                          <Badge>Node.js</Badge>
                          <Badge>Nest.js</Badge>
                          <Badge>Express</Badge>
                          <Badge>REST APIs</Badge>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Database & DevOps</h5>
                        <div className="flex justify-center flex-wrap gap-2">
                          <Badge>MongoDB</Badge>
                          <Badge>PostgreSQL</Badge>
                          <Badge>MySQL</Badge>
                          <Badge>Docker</Badge>
                          <Badge>CI/CD</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t">
                    <p className="text-muted-foreground">
                      I specialize in building full-stack applications using
                      modern technologies and best practices. My experience
                      includes working with long-term clients on restaurant
                      dashboards, stock management applications, and language
                      learning portals.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Stats cards - 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 w-full max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-primary/10 rounded-lg p-6 text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">29</div>
              <div className="text-sm text-muted-foreground">
                Completed Projects
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-primary/10 rounded-lg p-6 text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">96%</div>
              <div className="text-sm text-muted-foreground">
                Job Success Score
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-primary/10 rounded-lg p-6 text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">$15k+</div>
              <div className="text-sm text-muted-foreground">
                Earned on Upwork
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
