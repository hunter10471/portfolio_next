"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGithubactions,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiGraphql,
  SiRedux,
  SiJavascript,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
];

export default function TechRibbon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: [0, -1920],
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [isInView, controls]);

  return (
    <div
      className="w-full overflow-hidden bg-muted py-8 dark:bg-muted/30 mt-20"
      ref={containerRef}
    >
      <div className="container px-4 md:px-6 mb-4">
        <h3 className="text-center text-xl font-bold">My Tech Stack</h3>
      </div>

      <div className="relative w-full">
        <motion.div className="flex whitespace-nowrap" animate={controls}>
          {/* Double the technologies to create a seamless loop */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="mx-8 flex flex-col items-center justify-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background p-3 shadow-md dark:bg-muted">
                <tech.icon className="h-8 w-8" style={{ color: tech.color }} />
              </div>
              <span className="mt-2 text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
