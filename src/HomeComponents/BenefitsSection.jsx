import { benefits } from "../data/BenefitsData";
import { Slide } from "react-awesome-reveal";
import GradientIcon from "../components/GradientIcon";

export default function BenefitsSection() {

    return(
        <section className="relative pt-24 pb-32">
            <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-16">
                <div className="flex items-center justify-center mb-20">
                  <div className="space-y-4">
                    <h2 className="text-lg text-center uppercase text-white/60 mb-4">Pourquoi choisir Mazia ?</h2>
                    <h2 className="text-2xl text-white font-medium mb-8 text-center">
                        Les bénéfices essentiels de Mazia pour transformer votre entreprise
                    </h2>
                    <p className="text-xl mb-6 text-center text-gray-50/50">
                    Mazia n’est pas seulement un outil d’automatisation : c’est un véritable levier stratégique qui révolutionne la gestion des appels commerciaux et l’expérience client.
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="h-78 md:h-69 lg:h-80 p-8 text-left relative z-10 rounded-lg shadow-sm 
                  bg-white border border-white/10 transition-all duration-500
                  overflow-hidden flex flex-col justify-center hover:scale-95"
                >
                  <div className="flex justify-start mb-6 text-black">
                    <GradientIcon Icon={Icon} id={i} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 bg-linear-to-r from-[#A068C1] to-[#BD3E69] text-transparent bg-clip-text">{item.title}</h3>
                  <p className="text-black/70">{item.description}</p>
                </div>
              );
            })}
          </div>
          </div>
        </div>
          </section>
    )
}