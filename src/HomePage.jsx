<<<<<<< HEAD
import { Slide } from "react-awesome-reveal";
=======
import { Fade, Slide } from "react-awesome-reveal";
>>>>>>> ab6a4755b3fe39da22eaf68b273e5d2499ea2fac
import Header from "./Header";
import BenefitsSection from "./HomeComponents/BenefitsSection";
import HeroSection from "./HomeComponents/heroSection";
import UsageExamples from "./HomeComponents/UsageExamples";
<<<<<<< HEAD
import Footer from "./Footer";
=======
>>>>>>> ab6a4755b3fe39da22eaf68b273e5d2499ea2fac



export default function HomePage() {

    return(
        <div className="min-h-screen bg-black/90 text-white overflow-hidden">
            <Header />
            <HeroSection />
            <Slide triggerOnce direction="up">
            <BenefitsSection />
            </Slide>
            <UsageExamples />
<<<<<<< HEAD
            <Footer />
=======
>>>>>>> ab6a4755b3fe39da22eaf68b273e5d2499ea2fac
        </div>
    )
}