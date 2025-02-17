"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Custom hook to check if element is visible in viewport
function useOnScreen(ref: React.RefObject<Element | null>, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, "-50px");

  // Use alternating animations based on the index
  const animationClass = isVisible
    ? index % 2 === 0
      ? "fadeInLeft"
      : "fadeInRight"
    : "opacity-0";

  return (
    <Link href={project.link} target="_blank" rel="noopener noreferrer">
      <div
        ref={ref}
        style={{ animationDelay: `${index * 0.1}s` }}
        className={`bg-neutral-700 rounded-lg overflow-hidden transform transition 
          duration-300 shadow-lg hover:scale-105 hover:shadow-2xl ${animationClass}`}
      >
        {project.featured && (
            <div className="absolute top-2 right-2 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full text-teal-50 px-3 py-1 text-xs font-semibold shadow-teal-200 shadow-md drop-shadow-lg transform -rotate-12">
              Featured
            </div>
        )}
        <Image
          height="192"
          width="340"
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-gray-400 text-sm mt-2">{project.description}</p>
        </div>
      </div>
    </Link>
  );
}

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Daud Rauf Butt",
    role: "CEO & Founder, Veloix",
    feedback:
      "Minam is a talented React developer who delivers polished, user-friendly interfaces.",
      
  },
  {
    name: "M.Ayan Israr",
    role: "Frontend Developer",
    feedback:
      "Minam is a skilled React developer with a great collaborative approach.",
  },
  {
    name: "Syed Muhammad Hasan",
    role: "React Developer",
    feedback:
      "Minam excels in React and UX, delivering seamless, high-performance solutions.",
  },
  {
    name: "Syed Shafiq Ur Rehman",
    role: "A.M Finance, Landi Renzo Pakistan",
    feedback:
      "Minam is a dedicated developer who consistently produces quality work under pressure.",
  },
  {
    name: "Syed Abdul Rehman",
    role: "CEO, Standard construction",
    feedback:
      "Minam’s front-end work is always responsive, interactive, and visually appealing.",
  },
  {
    name: "Syed Tauseef Ur Rehman",
    role: "Teacher, The Generation School Maymar",
    feedback:
      "Minam is a skilled and reliable developer, especially with Frameworks he work on.",
  },

];

export default function Projects() {
  const projects: Project[] = [
    {
      title: "MGC (official Page)",
      description:
        "The official website of MGC Karachi, showcasing services, achievements, and updates about the organization.",
      image: "/projects/mgc.jpg",
      link: "https://mgckarachi.vercel.app/",
      featured: true,
    },
    {
      title: "ZEX Expense Tracker",
      description:
        "A user-friendly tool to track and manage your daily expenses efficiently.",
      image: "/projects/zexc.jpg",
      link: "https://zexpencia.vercel.app/",
    },
    {
      title: "ZEX Pressure Converter",
      description: "Quickly convert pressure units with accuracy and ease",
      image: "/projects/pc.jpg",
      link: "https://zexpc.vercel.app/",
    },
    {
      title: "ZEX Currency Converter",
      description:
        "Simplify global transactions by converting currencies effortlessly",
      image: "/projects/cc.jpg",
      link: "https://zexcc.vercel.app/",
    },
    {
      title: "ZEX Time Converter",
      description: "Convert time across multiple formats.",
      image: "/projects/tc.jpg",
      link: "https://zextc.vercel.app/",
    },
    {
      title: "ZEX Power Converter",
      description: "Convert power measurements with ease.",
      image: "/projects/ppc.jpg",
      link: "https://zexpower.vercel.app/",
    },
    {
      title:"Zarak Inventory",
      description:"Streamline your operations with real-time updates, AI-powered insights, and an intuitive user interface. Welcome to the next generation of inventory management.",
      image:"/projects/inventory.jpg",
      link:"https://inventory-zarak.vercel.app/",
      featured:true,

    },
    {
      title: "ZEX POS terminal",
      description: "A point-of-sale terminal for managing sales and inventory.",
      image: "/projects/POS.jpg",
      link: "https://pos-coral-nine.vercel.app/",
    },
    {
      title: "Animated Accordion",
      description: "A simple accordion with smooth animations.",
      image: "/projects/acc.jpg",
      link: "https://films-woad.vercel.app/",
    },
    {
      title: "ZEX Angle Converter",
      description: "Easily convert angles to different units.",
      image: "/projects/ac.jpg",
      link: "https://angleconverter.vercel.app/",
    },
    {
      title: "ZEX Document Library",
      description: "library of books various Programming languages.",
      image: "/projects/doc.jpg",
      link: "https://zex-docs.vercel.app/",
    },
    {
      title: "Gemini chatbot",
      description:
        "Gemini Chatbot is an advance chatbot application powered by gemii API,",
      image: "/projects/chat.png",
      link: "https://chatbot-minam.vercel.app/",
      featured: true,
    },
    {
      title: "Number guessing game",
      description:
        "an interactive game in which user has 3 attempts to guess the correct number between 1-10",
      image: "/projects/number.jpg",
      link: "https://numbergame-minam.vercel.app/",
    },
    {
      title: "antashari character generator",
      description: "a minimal interface to play game Called antshari",
      image: "/projects/ant.jpg",
      link: "https://antashari.vercel.app/",
    },
    {
      title: "Zarak landing page",
      description: "a minimal landing page for Zarak Global",
      image: "/projects/zarakha.jpg",
      link: "https://zarakha.vercel.app/",
    },
    {
      title: "Kashmala Portfolio",
      description: "A minimal, stylish portfolio for Kashmala",
      image: "/projects/kashmala.jpg",
      link: "https://kashmala.vercel.app/",
      featured: true,
    },
    {
      title: "World Clocks",
      description: "A simple page showing time of various zones",
      image: "/projects/wc.jpg",
      link: "https://worldcl.vercel.app/",
    },
    {
      title: "clock",
      description: "a simple page showing current time",
      image: "/projects/clock.jpg",
      link: "#",
    },
    {
      title: "stop watch",
      description: "a simple page of stop watch",
      image: "/projects/clock.jpg",
      link: "https://stpwtch.vercel.app/",
    },
    {
      title: "Timer",
      description: "a simple page of timer",
      image: "/projects/timer.jpg",
      link: "https://timersea.vercel.app/",
    },
    {
      title: "Routemapper",
      description: "explore BRTS, busses and chinchi routes in Karachi",
      image: "/projects/routes.png",
      link: "https://routemapper.vercel.app/",
      featured: true,
    }
    // ... rest of your projects
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [sortMethod, setSortMethod] = useState("alphabetical");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortMethod === "featuredFirst") {
      if (a.featured === b.featured) {
        return a.title.localeCompare(b.title);
      }
      return a.featured ? -1 : 1;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return (
    <section className="bg-gradient-to-b from-neutral-900 to-neutral-700 text-white py-10 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <p className="text-gray-400 text-sm">A showcase of my work</p>
      </div>
      <div className="container mx-auto mb-6 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-sm">
            Sort By:
          </label>
          <select
            id="sort"
            value={sortMethod}
            onChange={(e) => setSortMethod(e.target.value)}
            className="p-2 rounded-md bg-neutral-800 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="alphabetical">Alphabetical</option>
            <option value="featuredFirst">Featured First</option>
          </select>
        </div>
      </div>
      {sortedProjects.length > 0 ? (
        <div className="container mx-auto mb-10">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sortedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-400">No projects found.</p>
      )}

      {/* Testimonials section */}
      <div className="container mx-auto mt-12">
        <h2 className="text-2xl font-bold text-center mb-6">Testimonials</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-neutral-800 rounded-lg p-6 shadow-lg">
              <p className="italic text-base text-gray-300 mb-4">
                &quot;{testimonial.feedback}&quot;
              </p>
              <p className="text-base font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .fadeInUp {
          opacity: 1;
          animation: fadeInUp 0.5s ease-out forwards;
        }
        .fadeInLeft {
          opacity: 1;
          animation: fadeInLeft 0.5s ease-out forwards;
        }
        .fadeInRight {
          opacity: 1;
          animation: fadeInRight 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
