import Header from "./Header";
import Footer from "./Footer";
import DemoForm from "./demoForm";
import { Check } from "lucide-react";

export default function Demo() {

    const rules = [
        {
            icon: Check,
            Text: "Parlez-lui de manière naturelle"
        },
        {
            icon: Check,
            Text: "N'hésitez pas à poser toutes vos questions"
        },
        {
            icon: Check,
            Text: "Saisissez l'occasion de prendre un rendez-vous pour une démonstration personnalisée et discutez de vos besoins spécifiques avec notre équipe."
        },
        {
            icon: Check,
            Text: "Dans un souci d'amélioration de la qualité et de lutte contre les incivilités, cet appel est enregistré."
        }
    ]

    return(
        <div className="min-h-screen bg-black/90 text-white overflow-hidden">
            <Header />
            <section className="py-24">
                <div className="space-x-6 flex flex-col lg:flex-row space-y-6 justify-between mx-12">
                    <div className="max-w-xl">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-8 tracking-tight ">
                                Faites-vous appeler 
                                <br />
                                par Mazia
                            </h1>
                            <p className="text-white/60 text-lg">Renseignez vos coordonnées et notre agent conversationnel vous rappellera  pour vous présenter nos solutions et répondre à toutes vos questions.</p>
                        </div>
                        <div className="space-y-6 p-8 ">
                                {rules.map((item,i) => {
                                    const Icon = item.icon;
                                    return(
                                        <div 
                                        key={i}
                                        className="flex gap-6 items-start">
                                            <div className="mt-1.5 h-4 w-4 text-white bg-white/60 border border-white rounded-full flex items-center justify-center p-0.5">
                                                <Icon size={14} />
                                            </div>
                                            <p className="text-white/60"> {item.Text} </p>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                        <DemoForm />
                </div>
            </section>
            <Footer />
        </div>
    )
}