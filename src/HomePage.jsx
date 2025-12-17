import Header from "./Header";
import HeroSection from "./HomeComponents/heroSection"



export default function HomePage() {

    return(
        <div className="min-h-screen bg-black/90 text-white overflow-hidden">
        {/* <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F2C14E]/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4EE2EC]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#6967FB]/10 via-transparent to-transparent rounded-full"></div>
            </div> */}
            <Header />
            <HeroSection />
        </div>
    )
}