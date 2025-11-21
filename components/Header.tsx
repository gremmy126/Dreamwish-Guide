import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { LINKS, SECTION_IDS } from '../constants';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of fixed header roughly
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        {/* Logo - Only Text */}
        <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <span className={`font-bold text-2xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-dream-blue' : 'text-white'}`}>
                Dreamwish
            </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
            <nav className={`font-medium text-sm ${scrolled ? 'text-gray-600' : 'text-blue-100'}`}>
                <button onClick={() => scrollToSection(SECTION_IDS.SERVICE_INTRO)} className="hover:text-blue-500 transition-colors">서비스 소개</button>
                <button onClick={() => scrollToSection(SECTION_IDS.USER_GUIDE)} className="ml-6 hover:text-blue-500 transition-colors">이용 가이드</button>
            </nav>
            <Button 
                href={LINKS.KAKAO_ENTRY} 
                variant={scrolled ? "primary" : "white"}
                className={scrolled ? "" : "text-dream-blue font-bold"}
            >
                입점 신청하기
            </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
            {mobileMenuOpen ? 
                <X className={scrolled ? 'text-gray-800' : 'text-white'} /> : 
                <Menu className={scrolled ? 'text-gray-800' : 'text-white'} />
            }
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b shadow-lg p-4 flex flex-col gap-4 md:hidden animate-fade-in-down">
              <button onClick={() => scrollToSection(SECTION_IDS.SERVICE_INTRO)} className="text-gray-700 font-medium py-2 text-left">서비스 소개</button>
              <button onClick={() => scrollToSection(SECTION_IDS.USER_GUIDE)} className="text-gray-700 font-medium py-2 text-left">이용 가이드</button>
              <Button href={LINKS.KAKAO_ENTRY} fullWidth>
                  입점 신청하기
              </Button>
          </div>
      )}
    </header>
  );
};