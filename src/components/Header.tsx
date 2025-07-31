
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const whatsappNumber = "+5579998356788";
  const whatsappMessage = "Olá! Gostaria de um orçamento para serviço de guincho.";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-800 shadow-lg"> {/* Changed to a fixed dark blue background */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo e Nome */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/75d17f4c-8184-4564-af08-80a45062b225.png" 
              alt="Guincho 24H" 
              className="h-12 w-auto rounded-full"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-white">
                Guincho 24H
              </h1>
              <span className="text-sm text-gray-200">
                Aracaju
              </span>
            </div>
          </div>

          {/* Desktop Navigation - Removed as per model image */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Navigation items can be added here if needed in the future */}
          </nav>

          {/* WhatsApp Button - Removed as per model image */}
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <nav className="flex flex-col p-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-brand-black hover:text-brand-orange transition-colors text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-brand-black hover:text-brand-orange transition-colors text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('coverage')}
                className="text-brand-black hover:text-brand-orange transition-colors text-left"
              >
                Área de Atendimento
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-brand-black hover:text-brand-orange transition-colors text-left"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-brand-black hover:text-brand-orange transition-colors text-left"
              >
                Contato
              </button>
              {/* WhatsApp button for mobile menu, if needed */}
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full flex items-center gap-2 justify-center"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


