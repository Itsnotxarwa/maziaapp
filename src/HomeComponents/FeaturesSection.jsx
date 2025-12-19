import { ArrowRight, PhoneIncoming, PhoneOutgoing, Settings } from "lucide-react";
import TranscriptionCardVisual from "../components/TranscriptionCardVisual";


export default function FeaturesSection() {

    return(
        <section className="relative pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-16">
                            <div className="flex items-center justify-center mb-20">
                                <div className="space-y-4">
                                <h2 className="font-medium text-3xl md:text-4xl text-white mb-8 text-center tracking-tight">Mazia au service de votre entreprise</h2>
                                <p className="text-lg text-center text-white/60 mb-6 leading-tight tracking-tight">
                                Mazia combine l’intelligence vocale, la compréhension du langage naturel et des flux conversationnels optimisés pour gérer tous vos appels.
                                </p>
                                </div>
                            </div>
                            <div className="flex-1 grid lg:grid-cols-2 md:grid-cols-2 gap-4">
                                    <div className="border border-white/20 border-dashed group flex flex-col justify-between space-y-6 text-left p-6">
                                        <div className="w-full">
                                            <h3 className="text-sm text-white font-semibold tracking-tighter">Gérez tous vos appels entrants et sortants en un seul endroit.</h3>
                                        </div>
                                        <div className="mt-4 text-left space-y-4 w-full">
                                            <div>
                                                <h4 className="font-medium text-white">Appels entrants</h4>
                                                <p className="text-white/60 text-sm">Support client, informations, prise de rendez-vous</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-white">Appels sortants</h4>
                                                <p className="text-white/60 text-sm">Qualification de prospects, relances, notifications</p>
                                            </div>
                                            <div className="flex space-x-2 text-white text-2xl border-t border-white/40 pt-4">
                                                <PhoneIncoming size={14} /> 
                                                <PhoneOutgoing size={14} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="max-w-3xl border border-white/20 border-dashed group flex flex-col space-y-6 text-left p-6">
                                        <div className="w-full">
                                            <h3 className="text-sm text-white font-semibold tracking-tighter">Transcriptions & rapports</h3>
                                            <p className="text-white/60 text-sm leading-snug">
                                                Chaque interaction est enregistrée et analysée
                                            </p>
                                        </div>
                                            <TranscriptionCardVisual />
                                    </div>
                                    <div className="max-w-3xl border border-white/20 border-dashed group flex flex-col space-y-6 items-start text-left p-6">
                                    <div className="w-full">
                                        <div className="flex items-center justify-center bg-linear-to-tr w-12 h-12 from-[#A068C1] to-[#BD3E69] rounded-full p-0.5">
                                                <Settings />
                                        </div>
                                    </div>
                                        <div className="w-full">
                                            <h3 className="text-sm text-white font-semibold tracking-tighter">Personnalisation</h3>
                                            <p className="text-white/60 text-sm leading-snug">
                                                Scripts et flux adaptables à votre activité
                                            </p>
                                        </div>
                                        <div className=" w-full">
                                            <div className="loader">
                                                <div className="line" /></div>
                                            </div>
                                    </div>
                                    <div className="max-w-3xl mx-auto flex flex-col items-start justify-center text-left space-y-6 h-full">
                                        <div className="space-y-4">
                                            <p className="text-lg text-white/60 max-w-2xl tracking-tighter">Automatisez vos appels et suivez les performances en temps réel.</p>
                                        </div>
                                        <div>
                                            <a href="" className="group flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-xl font-medium transition-all text-sm cursor-pointer">
                                                Essayez Mazia et transformez la gestion de vos appels
                                                <ArrowRight size={18} className="transition duration-300 group-hover:translate-x-2" />
                                            </a>
                                        </div>
                                    </div>
                            </div>
                </div>
            </section>
    )
}