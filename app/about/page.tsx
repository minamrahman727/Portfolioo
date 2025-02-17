import Navbar from "../components/navbar"
import AboutMe from "../components/abotme"
import Footer from "../components/footer"
export const metadata = {
    title: "About - Syed Minam Ur Rehman",
    description: "Learn more about Syed Minam Ur Rehman.",
    icons: {
        icon: "/1.ico",
    },
    };
  
export default function About() {
    return (
        <main>
            <Navbar />
            <AboutMe/>
            <Footer/>
        </main>
    )
  }
  