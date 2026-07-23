import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = '5538999115015';
  const message = 'Olá! Gostaria de saber mais sobre os cursos da Panda English School.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button ${isVisible ? 'visible' : ''}`}
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="whatsapp-tooltip">Fale conosco</span>
    </a>
  );
};

export default WhatsAppButton;