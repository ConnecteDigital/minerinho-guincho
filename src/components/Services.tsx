import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck, Wrench, Battery, Fuel, Key, Shield, Phone } from 'lucide-react';

const Services = () => {
  const whatsappNumber = "+5579998356788";
  const whatsappMessage = "Olá! Gostaria de um orçamento para serviço de guincho.";
  
  const services = [
    {
      icon: Truck,
      title: "Guincho para Veículos",
      description: "Remoção segura de carros, motos e veículos de grande porte com equipamentos modernos.",
      features: ["Carros de passeio", "Motocicletas", "Veículos comerciais", "SUVs e pickups"]
    },
    {
      icon: Wrench,
      title: "Socorro Mecânico",
      description: "Serviços de mecânica no local para resolver problemas simples rapidamente.",
      features: ["Troca de pneus", "Problemas de motor", "Sistema elétrico", "Pequenos reparos"]
    },
    {
      icon: Battery,
      title: "Carga de Bateria",
      description: "Serviço de carga e troca de bateria automotiva no local do chamado.",
      features: ["Teste de bateria", "Carga completa", "Troca de bateria", "Baterias novas"]
    },
    {
      icon: Fuel,
      title: "Abastecimento",
      description: "Levamos combustível até você quando ficar sem gasolina na estrada.",
      features: ["Gasolina comum", "Gasolina aditivada", "Etanol", "Diesel"]
    },
    {
      icon: Key,
      title: "Abertura de Veículos",
      description: "Abertura segura de veículos trancados sem danificar fechaduras ou vidros.",
      features: ["Chaves trancadas", "Abertura segura", "Todos os modelos", "Sem danos"]
    },
    {
      icon: Shield,
      title: "Seguro Total",
      description: "Seu veículo totalmente segurado durante todo o processo de transporte.",
      features: ["Cobertura completa", "Sem franquia", "Danos cobertos", "Tranquilidade total"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-brand-gray-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
            🔧 Nossos Serviços
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-black mt-6 mb-4">
            Soluções Completas para seu Veículo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços para resolver qualquer problema 
            com seu veículo, 24 horas por dia, em toda Sergipe.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="bg-brand-orange text-white p-4 rounded-xl inline-flex mb-6 group-hover:bg-brand-orange-dark transition-colors">
                    <IconComponent size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-brand-black mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`${whatsappMessage} - Serviço: ${service.title}`)}`, '_blank')}
                    className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white rounded-full py-3 flex items-center gap-2 justify-center"
                  >
                    <Phone size={18} />
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Emergency CTA */}
        <div className="bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Emergência? Chegamos em poucos minutos!
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Nosso tempo médio de chegada é de apenas 15-25 minutos em Aracaju e região metropolitana.
          </p>
          <Button 
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("🚨 EMERGÊNCIA - Preciso de guincho urgente! Gostaria de um orçamento.")}`, '_blank')}
            className="bg-white text-brand-orange hover:bg-gray-100 px-12 py-4 rounded-full text-lg font-bold flex items-center gap-3 mx-auto animate-pulse-glow"
          >
            <Phone size={24} />
            Chamada de Emergência
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

