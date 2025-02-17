import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PrivacyPolicy from "../components/privacy/4";
export const metadata = {
    title: "Privacy Policy - Syed Minam Ur Rehman",
    description: "Privacy Policy of Syed Minam Ur Rehman. Learn how your data is handled. ",
    icons: {
        icon: "/1.ico",
    },
    };
export default function Privacy() {
    return (
        <div>
            <Navbar/>
            <PrivacyPolicy/>
            <Footer/>
        </div>
    )
}