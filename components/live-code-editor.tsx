"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, CopyIcon, CheckIcon } from "lucide-react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css"; // or any other theme

// Define the different states for our component demo
const demoStates = [
  {
    title: "Basic Component",
    description: "Starting with a simple card component",
    code: `// Creating a responsive UI component
const ResponsiveCard = ({ title, content, image }) => {
  return (
    <div className="card">
      <div className="card-badge">New</div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
      <button>Learn More</button>
    </div>
  );
};`,
    preview: {
      title: "Basic Feature",
      content: "A simple responsive component",
      image: "/bottle.jpg",
      cardClass: "card",
      textClass: "",
      buttonClass: "",
      buttonColor: "#e5e7eb",
      textColor: "#333",
      showBadge: true,
    },
  },
  {
    title: "Adding Hover Effects",
    description: "Enhancing with interactive hover states",
    code: `// Creating a responsive UI component
const ResponsiveCard = ({ title, content, image }) => {
  return (
    <div className="card card-hover">
      <div className="card-badge">Popular</div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div className="card-rating">
        <span>★★★★☆</span> <small>(4.2)</small>
      </div>
      <p className="text-gray-600">{content}</p>
      <button className="btn-primary">Learn More</button>
    </div>
  );
};`,
    preview: {
      title: "Interactive Feature",
      content: "With smooth hover animations",
      image: "/bottle.jpg",
      cardClass: "card card-hover",
      textClass: "text-gray-600",
      buttonClass: "btn-primary",
      buttonColor: "#3b82f6",
      textColor: "#666",
      showBadge: true,
      showRating: true,
    },
  },
  {
    title: "Enhanced Shadows",
    description: "Adding depth with enhanced shadows",
    code: `// Creating a responsive UI component
const ResponsiveCard = ({ title, content, image }) => {
  return (
    <div className="card card-hover card-shadow">
      <div className="card-badge card-badge-success">Featured</div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div className="card-rating">
        <span>★★★★★</span> <small>(4.8)</small>
      </div>
      <p className="text-gray-600">{content}</p>
      <div className="card-tags">
        <span className="tag">Premium</span>
        <span className="tag">New</span>
      </div>
      <button className="btn-success">Learn More</button>
    </div>
  );
};`,
    preview: {
      title: "Enhanced Feature",
      content: "With depth and visual hierarchy",
      image: "/bottle.jpg",
      cardClass: "card card-hover card-shadow",
      textClass: "text-gray-600",
      buttonClass: "btn-success",
      buttonColor: "#10b981",
      textColor: "#666",
      showBadge: true,
      badgeType: "success",
      showRating: true,
      rating: 5,
      showTags: true,
    },
  },
  {
    title: "Adding Borders",
    description: "Refining with border styling",
    code: `// Creating a responsive UI component
const ResponsiveCard = ({ title, content, image }) => {
  return (
    <div className="card card-hover card-shadow card-border">
      <div className="card-badge card-badge-warning">Limited</div>
      <div className="card-ribbon">20% OFF</div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div className="card-rating">
        <span>★★★★☆</span> <small>(4.3)</small>
      </div>
      <p className="text-gray-600">{content}</p>
      <div className="card-tags">
        <span className="tag">Premium</span>
        <span className="tag">Limited</span>
      </div>
      <div className="card-price">
        <span className="price-old">$99</span>
        <span className="price-current">$79</span>
      </div>
      <button className="btn-warning">Learn More</button>
    </div>
  );
};`,
    preview: {
      title: "Premium Feature",
      content: "With border styling and premium look",
      image: "/bottle.jpg",
      cardClass: "card card-hover card-shadow card-border",
      textClass: "text-gray-600",
      buttonClass: "btn-warning",
      buttonColor: "#f59e0b",
      textColor: "#666",
      showBadge: true,
      badgeType: "warning",
      showRating: true,
      rating: 4.3,
      showTags: true,
      showRibbon: true,
      showPrice: true,
    },
  },
  {
    title: "Dark Mode Version",
    description: "Creating a dark mode alternative",
    code: `// Creating a responsive UI component
const ResponsiveCard = ({ title, content, image }) => {
  return (
    <div className="card card-hover card-shadow card-border card-dark">
      <div className="card-badge card-badge-danger">Hot Deal</div>
      <div className="card-ribbon card-ribbon-dark">30% OFF</div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div className="card-rating">
        <span>★★★★★</span> <small>(4.9)</small>
      </div>
      <p className="text-gray-400">{content}</p>
      <div className="card-tags card-tags-dark">
        <span className="tag">Premium</span>
        <span className="tag">Exclusive</span>
      </div>
      <div className="card-price">
        <span className="price-old">$129</span>
        <span className="price-current">$89</span>
      </div>
      <div className="card-actions">
        <button className="btn-danger">Buy Now</button>
        <button className="btn-outline">Add to Cart</button>
      </div>
    </div>
  );
};`,
    preview: {
      title: "Pro Feature",
      content: "With dark mode and accent colors",
      image: "/bottle.jpg",
      cardClass: "card card-hover card-shadow card-border card-dark",
      textClass: "text-gray-400",
      buttonClass: "btn-danger",
      buttonColor: "#ef4444",
      textColor: "#aaa",
      showBadge: true,
      badgeType: "danger",
      showRating: true,
      rating: 4.9,
      showTags: true,
      showRibbon: true,
      ribbonDark: true,
      showPrice: true,
      showDualButtons: true,
    },
  },
];

export function LiveCodeEditor() {
  const [currentStateIndex, setCurrentStateIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [lineNumbers, setLineNumbers] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const currentState = demoStates[currentStateIndex];
  const nextState = demoStates[(currentStateIndex + 1) % demoStates.length];

  // Initialize displayed code with empty string on first render
  useEffect(() => {
    // Initialize with the comment line first
    setDisplayedCode("// Creating a responsive UI component\n");
    setTypingIndex("// Creating a responsive UI component\n".length);
  }, []);

  // Function to update the preview
  const updatePreview = () => {
    if (!previewRef.current) return;

    const state = showPreview ? nextState.preview : currentState.preview;

    // Create a styled preview
    const previewContent = `
      <style>
        .card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          width: 100%;
          position: relative;
        }
        .card-hover:hover { 
          transform: translateY(-5px); 
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.12); 
        }
        .card-shadow {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        }
        .card-border {
          border: 2px solid #e5e7eb;
        }
        .card-dark {
          background: #1f2937;
          color: white;
          border-color: #374151;
        }
        .card img {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }
        .card h2 {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 1.25rem 1.25rem 0.5rem;
          color: ${state.cardClass.includes("card-dark") ? "white" : "#333"};
        }
        .card p {
          margin: 0 1.25rem 1.25rem;
          color: ${state.textColor};
          line-height: 1.5;
        }
        .card button {
          margin: 0 1.25rem 1.25rem;
          padding: 0.625rem 1.25rem;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          background-color: ${state.buttonColor};
          color: ${state.buttonColor === "#e5e7eb" ? "#333" : "white"};
          transition: all 0.2s ease;
        }
        .btn-primary:hover { background-color: #2563eb; }
        .btn-success:hover { background-color: #059669; }
        .btn-warning:hover { background-color: #d97706; }
        .btn-danger:hover { background-color: #dc2626; }
        .btn-outline {
          background: transparent;
          border: 1px solid #e5e7eb;
          color: ${state.cardClass.includes("card-dark") ? "white" : "#333"};
        }
        .card-dark .btn-outline {
          border-color: #4b5563;
        }
        .card-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: #3b82f6;
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 500;
          z-index: 10;
        }
        .card-badge-success { background: #10b981; }
        .card-badge-warning { background: #f59e0b; }
        .card-badge-danger { background: #ef4444; }
        .card-ribbon {
          position: absolute;
          top: 15px;
          right: -30px;
          background: #3b82f6;
          color: white;
          padding: 0.25rem 2rem;
          transform: rotate(45deg);
          font-size: 0.75rem;
          font-weight: 500;
          z-index: 10;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .card-ribbon-dark {
          background: #ef4444;
        }
        .card-rating {
          margin: 0 1.25rem 0.75rem;
          color: #f59e0b;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .card-rating small {
          color: ${
            state.cardClass.includes("card-dark") ? "#9ca3af" : "#6b7280"
          };
        }
        .card-tags {
          display: flex;
          gap: 0.5rem;
          margin: 0 1.25rem 1rem;
          flex-wrap: wrap;
        }
        .card-tags .tag {
          background: #f3f4f6;
          color: #374151;
          padding: 0.125rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.75rem;
        }
        .card-tags-dark .tag {
          background: #374151;
          color: #e5e7eb;
        }
        .card-price {
          margin: 0 1.25rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .price-old {
          text-decoration: line-through;
          color: ${
            state.cardClass.includes("card-dark") ? "#9ca3af" : "#6b7280"
          };
          font-size: 0.875rem;
        }
        .price-current {
          font-weight: 600;
          font-size: 1.125rem;
          color: ${state.cardClass.includes("card-dark") ? "white" : "#111827"};
        }
        .card-actions {
          display: flex;
          gap: 0.5rem;
          margin: 0 1.25rem 1.25rem;
        }
        .card-actions button {
          margin: 0;
          flex: 1;
        }
      </style>
      <div class="${state.cardClass}">
        ${
          state.showBadge
            ? `<div class="card-badge ${
                state.badgeType ? "card-badge-" + state.badgeType : ""
              }">${
                state.badgeType === "success"
                  ? "Featured"
                  : state.badgeType === "warning"
                  ? "Limited"
                  : state.badgeType === "danger"
                  ? "Hot Deal"
                  : "New"
              }</div>`
            : ""
        }
        ${
          state.showRibbon
            ? `<div class="card-ribbon ${
                state.ribbonDark ? "card-ribbon-dark" : ""
              }">${state.ribbonDark ? "30% OFF" : "20% OFF"}</div>`
            : ""
        }
        <img src="${state.image}" alt="${state.title}" />
        <h2>${state.title}</h2>
        ${
          state.showRating
            ? `<div class="card-rating">
          <span>${"★".repeat(Math.floor(state.rating || 4))}${
                state.rating && !Number.isInteger(state.rating) ? "☆" : ""
              }${"☆".repeat(5 - Math.ceil(state.rating || 4))}</span>
          <small>(${state.rating || 4.0})</small>
        </div>`
            : ""
        }
        <p ${state.textClass ? `class="${state.textClass}"` : ""}>${
      state.content
    }</p>
        ${
          state.showTags
            ? `<div class="card-tags ${
                state.cardClass.includes("card-dark") ? "card-tags-dark" : ""
              }">
          <span class="tag">Premium</span>
          <span class="tag">${
            state.badgeType === "warning"
              ? "Limited"
              : state.badgeType === "danger"
              ? "Exclusive"
              : "New"
          }</span>
        </div>`
            : ""
        }
        ${
          state.showPrice
            ? `<div class="card-price">
          <span class="price-old">${state.ribbonDark ? "$129" : "$99"}</span>
          <span class="price-current">${state.ribbonDark ? "$89" : "$79"}</span>
        </div>`
            : ""
        }
        ${
          state.showDualButtons
            ? `<div class="card-actions">
          <button class="${state.buttonClass}">Buy Now</button>
          <button class="btn-outline">Add to Cart</button>
        </div>`
            : `<button ${
                state.buttonClass ? `class="${state.buttonClass}"` : ""
              }>Learn More</button>`
        }
      </div>
    `;

    previewRef.current.innerHTML = previewContent;
  };

  // Effect for typing animation
  useEffect(() => {
    if (!isTyping) return;

    const targetCode = currentState.code;

    if (typingIndex < targetCode.length) {
      const typingTimer = setTimeout(() => {
        setDisplayedCode(targetCode.substring(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      }, 15); // Fast typing speed

      return () => clearTimeout(typingTimer);
    } else {
      // Typing complete, show preview after a short delay
      const previewTimer = setTimeout(() => {
        setShowPreview(true);
        updatePreview();

        // After showing preview, prepare for next state
        const nextStateTimer = setTimeout(() => {
          setIsTyping(false);

          // Move to next state after preview is shown
          const nextStateDelay = setTimeout(() => {
            setCurrentStateIndex((prev) => (prev + 1) % demoStates.length);
            setTypingIndex(0);
            setDisplayedCode("");
            setIsTyping(true);
            setShowPreview(false);
          }, 2000);

          return () => clearTimeout(nextStateDelay);
        }, 1500);

        return () => clearTimeout(nextStateTimer);
      }, 500);

      return () => clearTimeout(previewTimer);
    }
  }, [typingIndex, isTyping, currentState, currentStateIndex]);

  // Update line numbers whenever code changes
  useEffect(() => {
    const lines = displayedCode.split("\n");
    setLineNumbers(
      Array.from({ length: lines.length }, (_, i) =>
        `${i + 1}`.padStart(2, "0")
      )
    );
  }, [displayedCode]);

  // Update preview when needed
  useEffect(() => {
    updatePreview();
  }, [showPreview, currentStateIndex]);

  // Add smooth scrolling for long code
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.scrollTop = editorRef.current.scrollHeight;
    }
  }, [displayedCode]);

  // Copy code to clipboard
  const copyCode = () => {
    navigator.clipboard.writeText(currentState.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Completely rewritten code formatting function with better HTML/JSX handling
  const formatCode = (code: string) => {
    if (!code) return "";
    return Prism.highlight(code, Prism.languages.jsx, "jsx");
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl border border-gray-700">
        {/* Code editor background */}
        <div className="absolute inset-0 bg-gray-900 p-0">
          <div className="flex items-center justify-between p-3 border-b border-gray-700 bg-gray-800">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs text-gray-400 font-mono flex items-center gap-2">
              <span className="bg-gray-700 px-2 py-0.5 rounded text-xs">
                {currentState.title}
              </span>
              <span>ResponsiveCard.jsx</span>
            </div>
            <button
              onClick={copyCode}
              className="text-gray-400 hover:text-gray-200 transition-colors p-1 rounded-md hover:bg-gray-700"
            >
              {copied ? (
                <CheckIcon className="h-3.5 w-3.5" />
              ) : (
                <CopyIcon className="h-3.5 w-3.5" />
              )}
            </button>
          </div>

          <div
            ref={editorRef}
            className="flex h-[calc(100%-80px)] overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
          >
            {/* Line numbers */}
            <div className="py-4 px-2 text-xs bg-gray-800 text-gray-500 font-mono select-none border-r border-gray-700 text-right">
              {lineNumbers.map((num, i) => (
                <div key={i} className="leading-tight">
                  {num}
                </div>
              ))}
            </div>

            {/* Code content */}
            <div className="p-4 text-xs md:text-sm overflow-auto w-full">
              <pre className="font-mono text-gray-300 whitespace-pre-wrap leading-tight">
                <div
                  dangerouslySetInnerHTML={{
                    __html: formatCode(displayedCode),
                  }}
                />
                <span className="inline-block w-2 h-5 bg-blue-400 opacity-70 animate-pulse">
                  &nbsp;
                </span>
              </pre>
            </div>
          </div>

          {/* Terminal-like output at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-gray-700 bg-gray-800">
            {/* Progress bar */}
            <div className="relative h-0.5 w-full bg-gray-700">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: "0%" }}
                animate={{
                  width: isTyping
                    ? `${(typingIndex / currentState.code.length) * 100}%`
                    : "100%",
                }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            <div className="p-2 text-xs text-green-400 font-mono flex items-center">
              <Terminal className="h-3.5 w-3.5 mr-2" />
              <span>
                {isTyping && typingIndex < currentState.code.length
                  ? `${currentState.description}...`
                  : showPreview
                  ? "Preview updated ✓"
                  : "Ready"}
              </span>

              {/* Status indicator */}
              <div className="ml-auto flex items-center gap-2">
                <span className="text-gray-400">
                  {isTyping
                    ? "Typing..."
                    : showPreview
                    ? "Preview mode"
                    : "Idle"}
                </span>
                <div
                  className={`h-2 w-2 rounded-full ${
                    isTyping
                      ? "bg-yellow-400"
                      : showPreview
                      ? "bg-blue-400"
                      : "bg-green-400"
                  } animate-pulse`}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating UI preview */}
        <AnimatePresence>
          {showPreview && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.5,
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-full max-w-xs mx-auto z-10">
                {/* Frosted glass effect - UPDATED */}
                <div
                  className="absolute inset-0 bg-gray-900/70 backdrop-blur-[8px] rounded-lg"
                  style={{
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                ></div>

                {/* Preview content */}
                <div className="relative p-4 z-20" ref={previewRef}>
                  {/* Preview content will be injected here */}
                </div>

                {/* Feature label */}
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                >
                  {showPreview ? nextState.title : currentState.title}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-6 right-4 backdrop-blur-lg rounded-lg p-3 shadow-xl border border-gray-700 z-20"
        >
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-1">
              <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                29
              </div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
            <div className="p-1 border-x border-gray-700">
              <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                96%
              </div>
              <div className="text-xs text-gray-400">Success</div>
            </div>
            <div className="p-1">
              <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                $15k
              </div>
              <div className="text-xs text-gray-400">Earned</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
