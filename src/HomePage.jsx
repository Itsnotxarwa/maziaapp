import Header from "./Header";
import BenefitsSection from "./HomeComponents/BenefitsSection";
import HeroSection from "./HomeComponents/heroSection";
import QuestionsSection from "./HomeComponents/QuestionsSection";
import Footer from "./Footer";
import FeaturesSection from "./HomeComponents/FeaturesSection";



export default function HomePage() {

    return(
        <div className="min-h-screen bg-black/90 text-white overflow-hidden">
            <Header />
            <HeroSection />
            <BenefitsSection />
            <FeaturesSection />
            <QuestionsSection />
            <Footer />
        </div>
    )
}