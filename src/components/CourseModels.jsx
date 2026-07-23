import React from 'react';
import { School, Laptop } from 'lucide-react';
import './CourseModels.css';

const CourseModels = () => {
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
    }
  };

  return (
    <section className="course-models-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Escolha seu Modelo</span>
          <h2 className="heading-1">Escolha seu modelo de aprendizado</h2>
          <p className="section-subtitle body-large">
            Oferecemos duas modalidades pensadas para atender suas necessidades.
          </p>
        </div>

        <div className="models-grid">
          {/* Escola Presencial */}
          <div 
            className="model-card card" 
            onClick={() => scrollToSection('presencial')}
          >
            <div className="model-image-wrapper">
              <img 
                src="/images/curso-presencial.jpg" 
                alt="Panda - Aulas Presenciais"
                className="model-image"
              />
            </div>
            <div className="model-content">
              <div className="model-icon">
                <School size={28} />
              </div>
              <h3 className="heading-3">Escola Presencial</h3>
              <p className="body-medium">
                Experiência completa em sala de aula com interação direta, turmas reduzidas e ambiente acolhedor.
              </p>
              <div className="model-cta">
                <span className="cta-text">Conhecer modalidade</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Escola VIP Online */}
          <div 
            className="model-card card" 
            onClick={() => scrollToSection('vip-online')}
          >
            <div className="model-image-wrapper">
              <img 
                src="/images/curso-online.jpg" 
                alt="Panda - Escola VIP Online"
                className="model-image"
              />
            </div>
            <div className="model-content">
              <div className="model-icon">
                <Laptop size={28} />
              </div>
              <h3 className="heading-3">Escola VIP Online</h3>
              <p className="body-medium">
                Aulas personalizadas ao vivo, flexibilidade total de horários e ensino individualizado.
              </p>
              <div className="model-cta">
                <span className="cta-text">Conhecer modalidade</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseModels;