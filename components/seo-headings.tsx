"use client";

import { useEffect, useRef } from "react";

// This component ensures proper heading structure for SEO
export default function SeoHeadings() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // This is for screen readers only
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  return (
    <h1 ref={headingRef} className="sr-only" tabIndex={-1}>
      Rafay Zia - Full Stack Developer specializing in React, Next.js, and
      Node.js
    </h1>
  );
}
