import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import './Header.css';
import { clicavel } from '../acessibilidade';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo-container" {...clicavel(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 'Voltar ao topo')}>
            <img 
              src="/images/logo-panda.png" 
              alt="Panda English School" 
              className="logo"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="nav-links desktop-menu">
            <li><a onClick={() => scrollToSection('sobre')}>Sobre</a></li>
            <li><a onClick={() => scrollToSection('metodologia')}>Metodologia</a></li>
            <li><a onClick={() => scrollToSection('cursos')}>Cursos</a></li>
            <li><a onClick={() => scrollToSection('depoimentos')}>Depoimentos</a></li>
            <li><a onClick={() => scrollToSection('nosso-espaco')}>Nosso Espaço</a></li>
            <li><a onClick={() => scrollToSection('contato')}>Contato</a></li>
          </ul>

          <div className="nav-actions">
            <a
              href="https://app.pandaenglish.com.br/login"
              className="portal-button desktop-only"
            >
              Portal Panda
            </a>
            <a 
              href="https://www.instagram.com/pandaenglish.school/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="instagram-link desktop-only"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <button 
              className="mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <ul className="mobile-nav-links">
              <li><a onClick={() => scrollToSection('sobre')}>Sobre</a></li>
              <li><a onClick={() => scrollToSection('metodologia')}>Metodologia</a></li>
              <li><a onClick={() => scrollToSection('cursos')}>Cursos</a></li>
              <li><a onClick={() => scrollToSection('depoimentos')}>Depoimentos</a></li>
              <li><a onClick={() => scrollToSection('nosso-espaco')}>Nosso Espaço</a></li>
              <li><a onClick={() => scrollToSection('contato')}>Contato</a></li>
              <li>
                <a href="https://app.pandaenglish.com.br/login" className="mobile-portal">
                  Portal Panda
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/pandaenglish.school/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mobile-instagram"
                >
                  <Instagram size={20} />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;