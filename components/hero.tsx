"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Server,
} from "lucide-react";
import Link from "next/link";
import { LiveCodeEditor } from "./live-code-editor";

// Animated skill icon
const SkillIcon = ({
  icon: Icon,
  label,
  delay,
}: {
  icon: any;
  label: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay,
      }}
      className="flex flex-col items-center justify-center"
    >
      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="w-4 h-4 md:w-6 md:h-6" />
      </div>
      <span className="mt-2 text-xs md:text-sm font-medium">{label}</span>
    </motion.div>
  );
};

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Only apply transforms on non-mobile devices
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, isMobile ? 1 : 0]
  );
  const y = useTransform(scrollYProgress, [0, 0.2], [0, isMobile ? 0 : 100]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, isMobile ? 1 : 0.9]
  );

  const [typedText, setTypedText] = useState("");
  const phrases = [
    "Full Stack Developer",
    "React Specialist",
    "Node.js Expert",
    "UI/UX Enthusiast",
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const typeWriter = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        setTypingSpeed(50); // Faster when deleting
      } else {
        setTypedText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        setTypingSpeed(100); // Normal speed when typing
      }

      // Handle deletion and phrase switching
      if (!isDeleting && charIndex === currentPhrase.length) {
        setIsDeleting(true);
        setTypingSpeed(1000); // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timer = setTimeout(typeWriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, phrases, typingSpeed]);

  return (
    <section className="relative w-full h-full xl:h-[calc(100vh-90px)] flex items-center lg:overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          style={{ opacity, y, scale }}
          className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center"
        >
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary font-medium text-sm"
              >
                2+ Years of Professional Experience
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
                Rafay Zia
              </h1>
              <div className="h-8 md:h-10 mb-4">
                <span className="text-xl md:text-2xl text-primary font-medium">
                  {typedText}
                  <span className="animate-blink">|</span>
                </span>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="max-w-[600px] text-muted-foreground text-lg md:text-xl"
              >
                Crafting exceptional digital experiences with modern web
                technologies. Specializing in{" "}
                <span className="text-primary font-medium">React</span>,
                <span className="text-primary font-medium"> Next.js</span>, and
                <span className="text-primary font-medium"> Node.js</span>.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <Button size="lg" className="rounded-full" asChild>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Hire Me
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full"
                asChild
              >
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View Projects
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex gap-4 mt-4"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <Link
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <Link
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5" />
                  <span className="sr-only">Portfolio</span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-wrap gap-6 mt-6"
            >
              <SkillIcon icon={Code} label="Frontend" delay={1.1} />
              <SkillIcon icon={Server} label="Backend" delay={1.2} />
              <SkillIcon icon={Database} label="Database" delay={1.3} />
            </motion.div>
          </motion.div>

          {/* Right column - Visual elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <LiveCodeEditor />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center">
        <span className="text-sm text-muted-foreground mb-2">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
}
