import { Slide } from "react-awesome-reveal";
import Header from "./Header";
import BenefitsSection from "./HomeComponents/BenefitsSection";
import HeroSection from "./HomeComponents/heroSection";
import UsageExamples from "./HomeComponents/UsageExamples";
import QuestionsSection from "./HomeComponents/QuestionsSection";
import Footer from "./Footer";



export default function HomePage() {

    return(
        <div className="min-h-screen bg-black/90 text-white overflow-hidden">
            <Header />
            <HeroSection />
            <Slide triggerOnce direction="up">
            <BenefitsSection />
            </Slide>
            <UsageExamples />
            <QuestionsSection />
            <Footer />
        </div>
    )
}