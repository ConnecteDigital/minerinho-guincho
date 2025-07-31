import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';

const Hero = () => {
  const whatsappNumber = "+5579998356788";
  const whatsappMessage = "Olá! Gostaria de um orçamento para serviço de guincho.";

  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/lovable-uploads/b911e7f9-0dee-496a-b66b-d690c0800783.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/80"></div> {/* Increased opacity to 80% */}

      {/* Background Pattern - Removed as per model image */}

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center">
          {/* Content */}
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 leading-tight">
              <span className="text-white">Guincho 24 Horas</span><br />
              <span className="text-brand-orange">Aracaju</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-10 leading-relaxed">
              Atendimento emergencial rápido e confiável em todas as regiões de Aracaju.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-lg text-xl font-bold flex items-center gap-3 w-full sm:w-auto transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <MessageCircle size={28} />
                Chamar no WhatsApp
              </Button>
              
              <Button 
                onClick={() => window.open(`tel:${whatsappNumber}`, '_self')}
                className="bg-brand-orange hover:bg-brand-orange-dark text-white px-10 py-5 rounded-lg text-xl font-bold flex items-center gap-3 w-full sm:w-auto transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <Phone size={28} />
                Ligar Agora
              </Button>
            </div>

            {/* Phone Number - Removed as per model image */}
          </div>

          {/* Image - Removed as per model image */}
        </div>
      </div>

      {/* Scroll indicator - Removed as per model image */}
    </section>
  );
};

export default Hero;

