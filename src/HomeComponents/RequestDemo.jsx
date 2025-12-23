import { Fade } from "react-awesome-reveal";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function RequestDemo() {
    return(
        <section className="relative py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="flex flex-col items-center justify-center">
                            <Fade triggerOnce direction="up" duration={1000} delay={200}>
                            <h2 className="mb-12 font-bold text-3xl text-white sm:text-4xl 
                            md:text-5xl lg:text-6xl leading-tight">
                                Transformez vos appels dès aujourd’hui
                            </h2>
                            </Fade>
                            <Fade triggerOnce direction="up" duration={1000} delay={400}>
                            <p className="text-lg max-w-2xl text-center text-white/60 mb-12">
                                Gagnez du temps, automatisez vos interactions et offrez une expérience client
                                professionnelle avec Mazia. Demandez votre démonstration gratuite et découvrez comment
                                l’IA peut simplifier vos appels.
                            </p>
                            </Fade>
                            <Fade triggerOnce cascade direction="up" duration={1000} delay={600} >
                            <button
                            className="group relative text-sm font-medium h-12 text-white whitespace-nowrap rounded-lg 
                            bg-linear-to-r from-[#A068C1] to-[#BD3E69] px-8 py-2 
                            transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                                <ul className="h-6 relative overflow-hidden">
                                        <li className="flex items-center transform transition-transform duration-300 group-hover:-translate-y-full">
                                            Demandez votre démo maintenant <ArrowUpRight size={18} />
                                        </li>
                                        <li className="flex items-center transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-full">
                                            Demandez votre démo maintenant <ArrowRight size={18} />
                                        </li>
                                    </ul>
                            </button>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
    )
}