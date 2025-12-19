import { TypeAnimation } from "react-type-animation";

const TranscriptionCardVisual = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
        <div className="loading-wave w-full flex items-center gap-1">
        {[6, 12, 20, 32, 20, 12, 6].map((h, i) => (
            <span
                key={i}
                className="loading-bar w-1.5 rounded-full bg-linear-to-t from-[#A068C1] to-[#BD3E69]"
                style={{ height: `${h}px` }}
            />
        ))}
        </div>

        <div className="w-full max-w-xs space-y-2 h-20">
            <TypeAnimation
            sequence={[
                "Bonjour, je souhaiterais obtenir des informations sur vos services.", 1000,
                "Bonjour et merci de votre appel ! Je suis l'assistant virtuel de l'entreprise. Comment puis-je vous aider aujourd'hui ?", 1000,
                "J'aimerais prendre rendez-vous avec un conseiller.", 1000,
                "Bien sûr ! Je peux vous proposer plusieurs créneaux disponibles. Préférez-vous en début ou fin de semaine ?", 1000,
            ]}
            speed={50}
            cursor={true}
            wrapper="p"
            repeat={Infinity}
            className="text-sm text-gray-600 font-mono text-center max-w-xs"
            />
        </div>

    </div>
  );
};

export default TranscriptionCardVisual;
