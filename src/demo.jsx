import Header from "./Header";
import Footer from "./Footer";
import DemoForm from "./demoForm";

export default function Demo() {

    return(
        <div className="min-h-screen bg-white/80 text-black overflow-hidden">
            <Header />
            <section className="pt-24 pb-32">
                <div className="space-y-6 flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mb-16 text-center">
                        Demandez votre démo personnalisée
                    </h1>
                        <DemoForm />
                </div>
            </section>
            <Footer />
        </div>
    )
}