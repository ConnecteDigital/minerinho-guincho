import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = "+5579998356788";
  const phoneFormatted = "(79) 9 9835-6788";
  const whatsappMessage = "Olá! Gostaria de um orçamento para serviço de guincho.";

  const quickLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Contato", href: "#contact" }
  ];

  const services = [
    "Guincho 24h",
    "Socorro Mecânico",
    "Carga de Bateria",
    "Abastecimento",
    "Abertura de Veículos",
    "Transporte Seguro"
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-black text-white">
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
          className="bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-2xl animate-pulse-glow"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp" 
            className="w-8 h-8"
          />
        </Button>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/75d17f4c-8184-4564-af08-80a45062b225.png" 
                alt="Guincho 24H Aracaju" 
                className="h-16 w-auto rounded-full"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Guincho 24H oferece serviços de reboque e socorro automotivo 24 horas 
              em todo Aracaju e região. Rapidez, segurança e confiabilidade garantidas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-brand-orange mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-brand-orange transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-brand-orange mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-brand-orange mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-brand-orange mt-1" />
                <div>
                  <p className="font-semibold">Ligue Agora</p>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-brand-orange transition-colors"
                  >
                    {phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                  alt="WhatsApp" 
                  className="w-5 h-5 mt-1"
                />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <button 
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                    className="text-gray-300 hover:text-brand-orange transition-colors"
                  >
                    {phoneFormatted}
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-orange mt-1" />
                <div>
                  <p className="font-semibold">Área de Atendimento</p>
                  <p className="text-gray-300">Aracaju e Região Metropolitana</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={20} className="text-brand-orange mt-1" />
                <div>
                  <p className="font-semibold">Funcionamento</p>
                  <p className="text-gray-300">24 horas • 7 dias por semana</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 text-center">
            <h4 className="text-2xl font-bold mb-3">🚨 EMERGÊNCIA 24H</h4>
            <p className="mb-4 opacity-90">Precisa de guincho agora? Entre em contato!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("🚨 EMERGÊNCIA - Preciso de guincho URGENTE! " + whatsappMessage)}`, '_blank')}
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                  alt="WhatsApp" 
                  className="w-5 h-5 mr-2"
                />
                WhatsApp de Emergência
              </Button>
              <Button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                className="bg-white text-red-600 hover:bg-white hover:text-red-600 border-white px-8 py-3 rounded-full font-bold"
              >
                <Phone size={20} className="mr-2" />
                Ligar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Guincho 24H Aracaju. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <span>Serviços confiáveis desde 2020</span>
              <span>•</span>
              <span>Aracaju • Sergipe</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

