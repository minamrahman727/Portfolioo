 "use client";
import { HoverCard } from "@radix-ui/react-hover-card";
import { HoverCardTrigger, HoverCardContent } from "@radix-ui/react-hover-card";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    // Fade in the tagline after the component mounts
    const timer = setTimeout(() => setShowTagline(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-neutral-900 to-neutral-700 transition-colors duration-500">
      <HoverCard>
        <HoverCardTrigger asChild>
          <h1 className="text-6xl font-bold text-neutral-100 cursor-pointer transition-transform duration-300 hover:scale-105 hover:text-gray-400">
            Syed Minam Ur Rehman
          </h1>
        </HoverCardTrigger>
        <HoverCardContent className="mt-2 bg-neutral-800 border border-neutral-600 text-white rounded-lg p-6 shadow-lg transition-opacity duration-300">
          <h2 className="text-sm font-mono">
            Passionate Frontend Developer
          </h2>
        </HoverCardContent>
      </HoverCard>

      <h6
        className={`text-sm font-bold text-neutral-300 mt-6 transition-opacity duration-500 ${
          showTagline ? "opacity-100" : "opacity-0"
        }`}
      >
Front-end React Developer      </h6>
    </div>
  );
}
