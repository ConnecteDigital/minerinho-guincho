import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, Phone, User } from 'lucide-react';

const Testimonials = () => {
  const whatsappNumber = "+5579998356788";
  const whatsappMessage = "Olá! Gostaria de um orçamento para serviço de guincho.";
  
  const testimonials = [
    {
      name: "Maria Silva",
      location: "Aracaju, SE",
      rating: 5,
      comment: "Excelente atendimento! Meu carro quebrou na BR-101 e eles chegaram em menos de 20 minutos. Muito profissionais e cuidadosos com meu veículo.",
      service: "Guincho de emergência"
    },
    {
      name: "João Santos",
      location: "Nossa Senhora do Socorro, SE",
      rating: 5,
      comment: "Serviço impecável! Fiquei sem bateria no shopping e eles vieram rapidamente. Resolveram na hora e ainda testaram todo o sistema elétrico.",
      service: "Carga de bateria"
    },
    {
      name: "Ana Oliveira",
      location: "São Cristóvão, SE",
      rating: 5,
      comment: "Profissionais muito qualificados. Minha moto teve problema no motor e eles fizeram um ótimo trabalho no local mesmo. Super recomendo!",
      service: "Socorro mecânico"
    },
    {
      name: "Carlos Ferreira",
      location: "Itabaiana, SE",
      rating: 5,
      comment: "Atendimento 24h real! Precisei às 3h da manhã e eles vieram sem problemas. Preço justo e serviço de qualidade.",
      service: "Guincho noturno"
    },
    {
      name: "Luciana Costa",
      location: "Barra dos Coqueiros, SE",
      rating: 5,
      comment: "Tranquei as chaves dentro do carro na praia. Vieram super rápido e abriram sem nenhum arranhão. Salvaram meu fim de semana!",
      service: "Abertura de veículo"
    },
    {
      name: "Roberto Almeida",
      location: "Lagarto, SE",
      rating: 5,
      comment: "Empresa séria e confiável. Já usei o serviço 3 vezes e sempre com excelência. Equipamentos modernos e equipe treinada.",
      service: "Múltiplos serviços"
    }
  ];

  const stats = [
    { number: "500+", label: "Clientes Atendidos", icon: "👥" },
    { number: "24/7", label: "Disponibilidade", icon: "🕐" },
    { number: "15min", label: "Tempo Médio", icon: "⚡" },
    { number: "100%", label: "Satisfação", icon: "⭐" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-brand-gray-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
            ⭐ Depoimentos
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-black mt-6 mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja os depoimentos de quem já confiou no Guincho 24H Aracaju.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-brand-orange mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="text-brand-orange mb-4">
                  <Quote size={32} />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-brand-orange text-brand-orange" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>

                {/* Service Tag */}
                <div className="bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  {testimonial.service}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="bg-brand-orange text-white p-2 rounded-full">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-brand-black">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Review CTA */}
        <div className="bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Seja Nosso Próximo Cliente Satisfeito!
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se aos centenas de clientes que já confiaram no Guincho 24H Aracaju. 
            Qualidade, rapidez e preço justo garantidos!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Vi os depoimentos e " + whatsappMessage)}`, '_blank')}
              className="bg-white text-brand-orange hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold flex items-center gap-3"
            >
              <Phone size={24} />
              Solicitar Orçamento
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Nossos diferenciais que garantem sua satisfação:</p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="bg-brand-orange/20 p-4 rounded-full mb-3">
                <span className="text-2xl">🚛</span>
              </div>
              <h4 className="font-bold text-brand-black">Equipamentos Modernos</h4>
              <p className="text-gray-600 text-sm">Frota nova e bem mantida</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-brand-orange/20 p-4 rounded-full mb-3">
                <span className="text-2xl">👨‍🔧</span>
              </div>
              <h4 className="font-bold text-brand-black">Profissionais Qualificados</h4>
              <p className="text-gray-600 text-sm">Equipe treinada e experiente</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-brand-orange/20 p-4 rounded-full mb-3">
                <span className="text-2xl">💳</span>
              </div>
              <h4 className="font-bold text-brand-black">Preço Justo</h4>
              <p className="text-gray-600 text-sm">Sem surpresas na cobrança</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-brand-orange/20 p-4 rounded-full mb-3">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="font-bold text-brand-black">Totalmente Segurado</h4>
              <p className="text-gray-600 text-sm">Seu veículo protegido</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

