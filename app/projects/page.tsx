export const metadata = {
    title: "Projects - Syed Minam Ur Rehman",
    description: "Explore the projects of Syed Minam Ur Rehman, showcasing skills, projects, and achievements in coding, web development, and more.",
    'icons': {
      'icon': '/1.ico',
    },
  }
  import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Projects from "../components/projects/proj"

  export default function Project(){
    return(
        <main>
<Navbar/>
<Projects/>


<Footer/>
        </main>
    )
  }