import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-section">
            <img
              src="/images/logo-panda.png"
              alt="Panda English School"
              className="footer-logo" />

            <p className="footer-description">

            </p>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contato</h4>
            <ul className="footer-links">
              <li>
                <Phone size={18} />
                <a href="https://wa.me/5538999115015" target="_blank" rel="noopener noreferrer">
                  (38) 99911-5015
                </a>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:contato@pandaenglish.com.br">
                  contato@pandaenglish.com.br
                </a>
              </li>
              <li>
                <Instagram size={18} />
                <a href="https://www.instagram.com/pandaenglish.school/" target="_blank" rel="noopener noreferrer">@pandaenglish.school

                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="footer-section">
            <h4 className="footer-title">Localização</h4>
            <ul className="footer-links">
              <li>
                <MapPin size={18} />
                <span>R. Maj. Felicíssimo Viana, 376<br />Centro, Curvelo – MG</span>
              </li>
              <li>
                <Clock size={18} />
                <span>Aberto até 20h</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Links Rápidos</h4>
            <ul className="footer-links simple">
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#metodologia">Metodologia</a></li>
              <li><a href="#cursos">Cursos</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
              <li><a href="#nosso-espaco">Nosso Espaço</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Panda English School. Todos os direitos reservados.</p>
          <p className="footer-credit">Desenvolvido com 🐼 em Curvelo</p>
        </div>
      </div>
    </footer>);

};

export default Footer;