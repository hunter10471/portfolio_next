export default function aboutJson() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rafay Zia",
    jobTitle: "Full Stack Developer & React Specialist",
    url: "https://rafayzia.dev",
    sameAs: [
      "https://github.com/hunter10471",
      "https://linkedin.com/in/rafayzia",
      "https://twitter.com/rafayzia",
      "https://www.upwork.com/freelancers/~016187e6d333d1a266",
    ],
    image: "https://rafayzia.dev/me.jpg",
    description:
      "Full Stack Developer specializing in React, Next.js, and Node.js with 4+ years of experience. Completed 29+ successful projects with 5-star ratings.",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "NED University of Engineering & Technology",
      sameAs: "https://www.neduet.edu.pk/",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "Pakistan",
    },
    email: "rafayzia10@gmail.com",
    telephone: "+11234567890",
    birthPlace: "Abbottabad, Pakistan",
    birthDate: "2000",
    nationality: "Pakistani",
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
    skills: [
      "React & Next.js",
      "Node.js & Express",
      "TypeScript",
      "Tailwind CSS",
      "Database Design",
      "Docker & CI/CD",
      "Nest.js",
      "ORM (Prisma, TypeORM)",
    ],
  }
}
