import { Fade } from "react-awesome-reveal";
import { ArrowRight, ArrowUpRight  } from "lucide-react";
import { Link } from "react-router-dom"; 
import DashboardImage from '../assets/dashboard.png';

export default function HeroSection() {
    return(    
                    <section className="relative pt-24 pb-32">
                        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-16 flex flex-col gap-32">
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex flex-col items-center justify-center">
                                    <Fade direction="up" triggerOnce duration={800}>
                                    <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-8 text-center mx-8 lg:mx-16" 
                                    >
                                        Atteignez {" "}
                                            les plus hauts standards
                                        {" "} téléphoniques grâce à l’IA
                                        
                                    </h1>
                                    </Fade>
                                    <Fade direction="up" triggerOnce duration={800} delay={200}>
                                    <p className="text-xl text-white max-w-xl text-center">
                                        Gagnez du temps, réduisez les coûts et améliorez chaque conversation grâce à une IA conçue pour performer.
                                    </p>
                                    </Fade>
                                </div>
                                <Fade direction="up" triggerOnce duration={800} delay={400}>
                                <div className="mt-16">
                                <Link to="/demo">
                                <button className="relative overflow-hidden flex items-center justify-center 
                                gap-3 text-sm font-medium h-11  whitespace-nowrap rounded-md cursor-pointer
                                bg-linear-to-r from-[#A068C1] to-[#BD3E69] px-8 py-2 
                                transition-all duration-300 transform  hover:scale-105 group">
                                    <ul className="relative h-6 overflow-hidden">
                                        <li className="flex items-center transform transition-transform duration-300 group-hover:-translate-y-full">
                                            prendre un rendez-vous
                                            <ArrowUpRight size={22} />
                                        </li>
                                        <li className="flex items-center transform transition-transform translate-y-0 duration-300 group-hover:-translate-y-full">
                                            prendre un rendez-vous
                                            <ArrowRight size={22} />
                                        </li>
                                    </ul> 
                                </button>
                                </Link>
                                </div>
                                </Fade>
                            </div>
                            <div className="hidden lg:block relative ">
                                <div className="fixed overflow-hidden pointer-events-none">
                                    <div className="absolute top-0.5 left-[5%] w-160 h-110 bg-[#A068C1] blur-3xl"></div>
                                    <div className="absolute top-0.5 right-[5%] w-160 h-110 bg-[#BD3E69] blur-3xl delay-1000"></div>
                                </div>
                                <div className=" flex items-center justify-center relative ">
                                <img src={DashboardImage} alt="dashboard" className="max-w-5xl rounded-2xl" />
                                </div>
                            </div>
                        </div>
                    </section>
    )
}