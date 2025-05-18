import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Rafay Zia - Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(to bottom, #ffffff, #f5f5f5)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 48,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: "bold",
            color: "#3b82f6",
            marginBottom: 24,
          }}
        >
          Rafay Zia
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#333",
            marginBottom: 48,
          }}
        >
          Full Stack Developer & React Specialist
        </div>
        <div
          style={{
            display: "flex",
            gap: 24,
            marginBottom: 48,
          }}
        >
          {["React", "Next.js", "Node.js", "TypeScript"].map((tech) => (
            <div
              key={tech}
              style={{
                background: "#3b82f6",
                color: "white",
                padding: "12px 24px",
                borderRadius: 12,
                fontSize: 24,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#666",
          }}
        >
          rafayzia.dev
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
