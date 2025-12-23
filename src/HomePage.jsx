import Header from "./Header";
import BenefitsSection from "./HomeComponents/BenefitsSection";
import HeroSection from "./HomeComponents/heroSection";
import QuestionsSection from "./HomeComponents/QuestionsSection";
import Footer from "./Footer";
import FeaturesSection from "./HomeComponents/FeaturesSection";
import { Slide } from "react-awesome-reveal";
import UsageExamples from "./HomeComponents/UsageExamples";
import RequestDemo from "./HomeComponents/RequestDemo";



export default function HomePage() {

    return(
        <div className="min-h-screen bg-black/90 text-white overflow-hidden">
            <Header />
            <HeroSection />
            <BenefitsSection />
            <Slide triggerOnce direction="up">
            <FeaturesSection />
            </Slide>
            <UsageExamples />
            <QuestionsSection />
            <RequestDemo />
            <Footer />
        </div>
    )
}