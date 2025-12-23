import { Fade } from "react-awesome-reveal";
import { ArrowRight, ArrowUpRight  } from "lucide-react";
import DashboardImage from '../assets/dashboard.png';

export default function HeroSection() {
    return(    
                    <section className="relative pt-24 pb-32">
                        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-16 flex flex-col gap-32">
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex flex-col items-center justify-center">
                                    <Fade direction="up" triggerOnce duration={800}>
                                    <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center mx-8 lg:mx-16 tracking-tight space-y-1" 
                                    >
                                        Atteignez {" "}
                                        <span className="bg-linear-to-r from-white to-white/70 bg-clip-text text-transparent"> les plus hauts standards</span>   
                                        {" "} téléphoniques grâce à l’IA
                                        
                                    </h1>
                                    </Fade>
                                    <Fade direction="up" triggerOnce duration={800} delay={200}>
                                    <p className="text-lg tracking-tight text-white/60 max-w-xl text-center">
                                        Gagnez du temps, réduisez les coûts et améliorez chaque conversation grâce à une IA conçue pour performer.
                                    </p>
                                    </Fade>
                                </div>
                                <Fade direction="up" triggerOnce duration={800} delay={400}>
                                <div className="mt-16 flex gap-4 items-center justify-center">
                                <a
                                href="/demo"
                                className="relative overflow-hidden flex items-center justify-center 
                                gap-3 text-sm font-medium h-11  whitespace-nowrap rounded-[30px] cursor-pointer
                                bg-linear-to-r from-[#A068C1] to-[#BD3E69] px-8 py-2 
                                transition-all duration-300 transform  hover:scale-105 group">
                                    Essayez Mazia
                                </a>

                                <a
                                href="https://calendly.com/marwakouachkhia/demo-mazia-agent-ia-pour-les-appels"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative border border-white/60 overflow-hidden flex items-center justify-center 
                                gap-3 text-sm font-medium  whitespace-nowrap rounded-[30px] cursor-pointer
                                px-8 py-2 h-11  bg-[#1a1a1a] text-white 
                                transition-all duration-400 transform  hover:scale-105 group boton-elegante">
                                    <ul className="relative h-6 overflow-hidden">
                                        <li className="flex items-center transform transition-transform duration-300 group-hover:-translate-y-full">
                                            Prendre rendez-vous
                                            <ArrowUpRight size={22} />
                                        </li>
                                        <li className="flex items-center transform transition-transform translate-y-0 duration-300 group-hover:-translate-y-full">
                                            Prendre rendez-vous
                                            <ArrowRight size={22} />
                                        </li>
                                    </ul> 
                                </a>
                                </div>
                                </Fade>
                            </div>
                            <div className="hidden lg:block relative">
                                <div className="overflow-hidden pointer-events-none">
                                    <div className="absolute top-0.5 left-[5%] w-160 h-100 bg-[#A068C1] blur-3xl animate-pulse"></div>
                                    <div className="absolute top-0.5 right-[5%] w-160 h-100 bg-[#BD3E69] blur-3xl delay-1000 animate-pulse"></div>
                                </div>
                                <div className="relative  flex items-center justify-center">
                                <img src={DashboardImage} alt="dashboard" className="max-w-4xl rounded-2xl" />
                                </div>
                            </div>
                        </div>
                    </section>
    )
}