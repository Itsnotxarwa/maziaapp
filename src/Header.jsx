import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {

    return(
        <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/80">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <Link to="/">
                            <div>
                                <h1 className="text-white font-bold text-lg tracking-tighter">Mazia</h1>
                            </div>
                            </Link>
                            <div>
                        </div>
                            <div className="hidden md:flex items-center space-x-4">
                                <button 
                                onClick={() => window.open("/connecter", "_blank")}
                                className="text-sm font-medium h-10 text-white border border-white/20 
                                hover:bg-white/10 backdrop-blur-sm rounded-lg whitespace-nowrap px-4 py-2 cursor-pointer">
                                    Se connecter
                                </button>
                                <Link 
                                className="group relative text-sm font-medium h-9 text-white whitespace-nowrap rounded-lg 
                                bg-linear-to-r from-[#A068C1] to-[#BD3E69] px-4 py-2 
                                transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                                >
                                    <ul className="h-6 relative overflow-hidden">
                                        <li className="flex items-center transform transition-transform duration-300 group-hover:-translate-y-full">
                                            Nous contacter <ArrowUpRight size={18} />
                                        </li>
                                        <li className="flex items-center transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-full">
                                            Nous contacter <ArrowRight size={18} />
                                        </li>
                                    </ul>
                                </Link>
                            </div>
        
                            <div className="md:hidden">
                                <Link to="/contact" data-testid="contact-btn"
                                >
                                <button className="group relative text-sm font-medium h-9 text-white whitespace-nowrap rounded-lg 
                                bg-linear-to-r from-[#A068C1] to-[#BD3E69] px-4 py-2 hover:scale-105
                                transform transition-transform duration-300 cursor-pointer">
                                    <ul className="h-6 relative overflow-hidden">
                                        <li className="flex items-center transform transition-transform duration-300 group-hover:-translate-y-full">
                                            Nous contacter <ArrowUpRight size={18} />
                                        </li>
                                        <li className="flex items-center transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-full">
                                            Nous contacter <ArrowRight size={18} />
                                        </li>
                                    </ul>
                                </button>
                                </Link>
                            </div>
        
                        </div>
                    </div>
        </header>
    )
}