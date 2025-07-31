import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const whatsappNumber = "+5579998356788";
  const phoneFormatted = "(79) 9 9835-6788";
  const whatsappMessage = "Olá! Gostaria de um orçamento para serviço de guincho.";

  const contactMethods = [
    {
      icon: Phone,
      title: "Ligue Agora",
      subtitle: "Atendimento telefônico",
      contact: phoneFormatted,
      action: () => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank'),
      color: "bg-blue-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      subtitle: "Mais rápido e prático",
      contact: phoneFormatted,
      action: () => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank'),
      color: "bg-green-500"
    },
    {
      icon: MapPin,
      title: "Localização",
      subtitle: "Aracaju e Região",
      contact: "Sergipe - SE",
      action: () => window.open("https://maps.google.com/?q=Aracaju,SE", '_blank'),
      color: "bg-red-500"
    },
    {
      icon: Clock,
      title: "Horário",
      subtitle: "Sempre disponível",
      contact: "24 horas",
      action: () => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Preciso de atendimento agora! " + whatsappMessage)}`, '_blank'),
      color: "bg-brand-orange"
    }
  ];

  const emergencyReasons = [
    "🚗 Pane no motor",
    "🔋 Bateria descarregada", 
    "🛞 Pneu furado",
    "⛽ Sem combustível",
    "🔐 Chave trancada",
    "🚧 Acidente"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
            📞 Entre em Contato
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-black mt-6 mb-4">
            Precisa de Ajuda? Estamos Aqui!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco agora mesmo. Atendimento 24 horas, 7 dias por semana, 
            em qualquer lugar de Sergipe.
          </p>
        </div>

        {/* Emergency Banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 mb-16 text-white text-center">
          <h3 className="text-3xl font-bold mb-4 animate-pulse">🚨 EMERGÊNCIA?</h3>
          <p className="text-xl mb-6">Ligue agora e chegamos em poucos minutos!</p>
          <Button 
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("🚨 EMERGÊNCIA - Preciso de guincho URGENTE! " + whatsappMessage)}`, '_blank')}
            className="bg-white text-red-600 hover:bg-gray-100 px-12 py-4 rounded-full text-xl font-bold animate-pulse-glow"
          >
            <Phone size={24} className="mr-3" />
            {phoneFormatted}
          </Button>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0">
                <CardContent className="p-8 text-center" onClick={method.action}>
                  <div className={`${method.color} text-white p-4 rounded-xl inline-flex mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent size={32} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-black mb-2">
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {method.subtitle}
                  </p>
                  
                  <p className="text-brand-orange font-bold text-lg">
                    {method.contact}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Quick Contact */}
          <div>
            <h3 className="text-3xl font-bold text-brand-black mb-8">Contato Rápido</h3>
            
            <div className="space-y-6 mb-8">
              <Card className="border-brand-orange/20 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500 p-3 rounded-xl">
                      <MessageCircle size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-brand-black">WhatsApp Preferencial</h4>
                      <p className="text-gray-600">Resposta mais rápida</p>
                    </div>
                    <Button 
                      onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                      className="bg-green-500 hover:bg-green-600 text-white"
                    >
                      Conversar
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-brand-orange/20 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500 p-3 rounded-xl">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-brand-black">Ligação Direta</h4>
                      <p className="text-gray-600">Atendimento imediato</p>
                    </div>
                    <Button 
                      onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      Ligar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Emergency Situations */}
          <div>
            <h3 className="text-3xl font-bold text-brand-black mb-8">Situações de Emergência</h3>
            
            <Card className="bg-brand-gray-light border-0 mb-6">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-brand-black mb-4">Quando nos chamar?</h4>
                <div className="grid grid-cols-2 gap-3">
                  {emergencyReasons.map((reason, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-4">Atendimento Garantido</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock size={20} />
                    <span>Atendimento 24 horas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} />
                    <span>Todo território sergipano</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} />
                    <span>Resposta imediata</span>
                  </div>
                </div>
                <Button 
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                  className="w-full mt-6 bg-white text-brand-orange hover:bg-gray-100 font-bold py-3"
                >
                  Falar Conosco
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-brand-black mb-4">
            Não Perca Tempo em Emergências!
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A cada minuto conta quando você está em uma situação de emergência. 
            Entre em contato agora e resolva seu problema rapidamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("🚨 Preciso de guincho agora! " + whatsappMessage)}`, '_blank')}
              className="bg-brand-orange hover:bg-brand-orange-dark text-white px-12 py-4 rounded-full text-xl font-bold flex items-center gap-3 animate-pulse-glow"
            >
              <MessageCircle size={24} />
              WhatsApp Agora
            </Button>
            <Button 
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
              variant="outline"
              className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-12 py-4 rounded-full text-xl font-bold"
            >
              <Phone size={24} className="mr-3" />
              Ligar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

