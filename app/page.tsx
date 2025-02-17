import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import ProfileCard from "./components/about";
import SnC from "./components/skills";
import Footer from "./components/footer";
import Head from "next/head";


export const metadata = {
  title: "Syed Minam Ur Rehman",
  description: "Syed Minam Ur Rehman's Portfolio showcasing his skills, projects, and achievements in coding, web development.",
  authors: [{ name: "Syed Minam Ur Rehman" }],
  icons: {
    icon: "/1.ico",
  },
  keywords: [
    "Syed Minam Ur Rehman",
    "portfolio",
    "web development",
    "coding",
    "projects",
    "achievements",
    "vercel",
    "Zarak"
  ],
  viewport: "width=device-width, initial-scale=1.0",
}
export default function Home() {
  return (
    <main>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta name="keywords" content="Syed Minam Ur Rehman, portfolio, web development, coding, projects, achievements, vercel, Zarak" />
        <meta name="author" content="Syed Minam Ur Rehman" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={metadata.icons.icon} />

      </Head>
    <main>
      <Navbar />
      <HeroSection />
      <ProfileCard />
      <SnC />
      <Footer />
    </main>
    </main>

  );
}
