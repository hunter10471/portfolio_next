"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-12 text-center">
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

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center md:items-end"
            >
              <Card>
                <CardContent className="p-6 text-left">
                  <Image
                    src="/me.jpg"
                    alt="Rafay Zia"
                    width={192}
                    height={192}
                    className="object-cover rounded-full mx-auto"
                  />
                  <h3 className="text-2xl font-bold mb-4 mt-8">My Journey</h3>
                  <p className="text-muted-foreground mb-4">
                    Born in 2000 in Abbottabad, Pakistan, I'm currently based in
                    Karachi. I graduated with a degree in{" "}
                    <span className="font-bold text-primary">
                      Computer Science
                    </span>{" "}
                    from NED University of Engineering & Technology (NEDUET).
                  </p>
                  <p className="text-muted-foreground mb-4">
                    With over 4 years of experience in web development, I've
                    worked on a diverse range of projects from small business
                    websites to complex enterprise applications. I've completed{" "}
                    <span className="font-bold text-primary">
                      29 jobs on Upwork with 5-star ratings
                    </span>{" "}
                    and maintain a{" "}
                    <span className="font-bold text-primary">
                      96% job success score
                    </span>
                    , having earned over{" "}
                    <span className="font-bold text-primary">$15,000</span>.
                  </p>
                  <p className="text-muted-foreground">
                    I specialize in building full-stack applications using
                    modern technologies and best practices. My experience
                    includes working with long-term clients on restaurant
                    dashboards, stock management applications, and language
                    learning portals.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">What I Do</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Frontend Development
                      </h4>
                      <div className="flex justify-center flex-wrap gap-2">
                        <Badge>React</Badge>
                        <Badge>Next.js</Badge>
                        <Badge>Tailwind CSS</Badge>
                        <Badge>TypeScript</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Backend Development
                      </h4>
                      <div className="flex justify-center flex-wrap gap-2">
                        <Badge>Node.js</Badge>
                        <Badge>Nest.js</Badge>
                        <Badge>Express</Badge>
                        <Badge>REST APIs</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Database & DevOps</h4>
                      <div className="flex justify-center flex-wrap gap-2">
                        <Badge>MongoDB</Badge>
                        <Badge>PostgreSQL</Badge>
                        <Badge>MySQL</Badge>
                        <Badge>Docker</Badge>
                        <Badge>CI/CD</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
