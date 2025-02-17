import TeamSection from "../components/contact/team"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
export const metadata = {
  title: "Contact - Syed Minam Ur Rehman",
  description: "Contact Syed Minam Ur Rehman for hiring, projects, or collaborations.",
  icons: {
      icon: "/1.ico",
  },
  };
  export default function Contact() {
    return(
        <main>
            <Navbar/>
            <TeamSection/>
            <Footer/>
        </main>
    )
}