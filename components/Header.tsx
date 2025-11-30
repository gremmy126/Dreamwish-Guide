
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, MonitorPlay } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if the current page has a light background by default
  // Home (/) and EntryGuide (/entry-guide) have dark hero sections.
  // Other pages like /vision, /problem, /solution, /product might need visible header by default.
  const isDarkHeroPage = location.pathname === '/' || location.pathname === '/entry-guide';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force "scrolled" style (visible background/text) if not on a page with a dark hero section
  const forceVisible = !isDarkHeroPage;
  const showVisibleStyle = isScrolled || forceVisible;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Vision', href: '/vision' },
    { name: 'Problem', href: '/problem' },
    { name: 'Solution', href: '/solution' },
    { name: 'Product', href: '/product' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        showVisibleStyle ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo(0, 0)}>
          <div className={`p-2 rounded-lg ${showVisibleStyle ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>
            <ShoppingBag size={24} strokeWidth={2.5} />
          </div>
          <span className={`text-2xl font-black tracking-tighter ${showVisibleStyle ? 'text-blue-900' : 'text-white'}`}>
            DREAMWISH
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-medium text-sm transition-colors ${
                showVisibleStyle ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className={`h-4 w-px mx-2 ${showVisibleStyle ? 'bg-slate-300' : 'bg-white/20'}`}></div>

          <Link
            to="/presentation"
            className={`flex items-center gap-2 font-medium text-sm transition-colors ${
               showVisibleStyle ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'
            }`}
            title="입점 안내서 PPT 모드"
          >
            <MonitorPlay size={18} />
            <span className="hidden lg:inline">제안서 보기</span>
          </Link>

          <a
            href="http://pf.kakao.com/_CLran"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl active:scale-95 ${
              showVisibleStyle
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-white text-blue-600 hover:bg-blue-50'
            }`}
          >
            입점 신청하기
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-current"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={showVisibleStyle ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu className={showVisibleStyle ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-slate-600 font-medium py-2 block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/presentation"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 text-slate-600 font-medium py-2"
          >
            <MonitorPlay size={18} />
            입점 제안서 (PPT)
          </Link>
          <a 
            href="http://pf.kakao.com/_CLran"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold text-center block"
          >
            입점 신청하기
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
