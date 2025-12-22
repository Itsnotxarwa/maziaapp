import { ArrowRight } from 'lucide-react';

export default function Footer() {
    return(
        <footer className="border-t border-white/10 backdrop-blur-xl bg-black/80 z-50 relative pt-16 pb-8 px-2 w-full">
            <div className='absolute inset-0 bg-linear-to-b  to-transparent from-white/10'></div>
            <div className='-translate-x-1/2 pointer-events-none absolute bottom-0 left-1/2'>
            <span className='select-none font-bold text-[8rem] tracking-tighter sm:text-[10rem] 
            md:text-[12rem] lg:text-[14rem] text-white/10'>MAZIA</span>
            </div>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2">
                    <div className='space-y-6'>
                        <h1 className="text-white text-4xl font-bold tracking-tighter hover:opacity-90 transition-opacity">Mazia</h1>
                        <p className='text-lg tracking-tighter leading-relaxed max-w-md text-white/60'>Optimisez votre standard téléphonique : des IA qui saisissent chaque opportunité.</p>
                    </div>
                    <div className='space-y-4 max-w-xs shrink-0'>
                        <h3 className='text-lg font-medium text-white tracking-tighter mb-4'>Prenez contact</h3>
                        <p className='text-sm tracking-tighter text-white/60'>Rejoignez des personnes qui utilisent des agents d’IA pour répondre aux appels des clients.</p>
                        <form className='space-y-2 relative z-50'>
                            <div className='flex gap-1'>
                                <input 
                                type="email" 
                                className="flex w-full border py-1 shadow-sm md:text-sm h-10 flex-1 
                                rounded-lg bg-transparent px-4 text-sm tracking-tighter
                                border-white/40 focus:ring-2 focus:ring-white/10 focus:outline-none focus:border-white  
                                placeholder:text-white/40"
                                placeholder='Entrez votre adresse e-mail' />
                                <button 
                                type='submit' 
                                className='group flex items-center rounded-lg justify-center h-10 w-10 bg-white text-black hover:bg-white/90'>
                                    <ArrowRight size={20} className=' transition-transform group-hover:translate-x-1' />
                                </button>
                            </div>
                            <p className='text-xs text-white/40 tracking-tighter'>Nous vous répondrons sous 24 heures.</p>
                        </form>
                    </div>
                </div>
                <div className="border-t border-white/50 text-white/50 mt-10 pt-6 text-xs tracking-tighter">
                © 2025 MAZIA. Tous droits réservés.
                </div>
            </div>
        </footer>
    )
}