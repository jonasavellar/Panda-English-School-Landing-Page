import React from 'react';
import { Users, BookOpen, Heart, Award, School, Video } from 'lucide-react';
import './Home.css';

const Home = () => {
  const whatsappNumber = '5538999115015';
  const scheduleMessage = 'Olá! Gostaria de agendar uma aula experimental na Panda English School.';
  const scheduleUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(scheduleMessage)}`;

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content fade-in-up">
            <div className="hero-logo-wrapper">
              <img 
                src="/images/logo-panda.png" 
                alt="Panda English School" 
                className="hero-logo"
              />
            </div>
            
            <h1 className="heading-hero">
              Aprenda inglês de forma leve, eficiente e com professores que se importam com você
            </h1>
            
            <p className="hero-subtitle body-large">
              Metodologia dinâmica, ambiente acolhedor e resultados reais. Venha fazer parte da família Panda! 🐼
            </p>

            <div className="hero-actions">
              <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" data-testid="hero-schedule-btn">
                Agendar Aula Experimental
              </a>
              <a href="#cursos" className="btn-secondary" data-testid="hero-courses-btn">
                Ver Cursos
              </a>
              <a href="#depoimentos" className="btn-tertiary" data-testid="hero-testimonials-btn">
                O que dizem nossos alunos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades Section - NEW */}
      <section className="modalities-section">
        <div className="container">
          <div className="modalities-content">
            <h2 className="modalities-title">Escolha como você quer aprender</h2>
            <div className="modalities-grid">
              <div className="modality-item">
                <div className="modality-icon-wrapper presencial">
                  <School size={32} />
                </div>
                <div className="modality-info">
                  <h3 className="modality-name">Presencial</h3>
                  <p className="modality-description">Aulas na escola com interação direta</p>
                </div>
              </div>
              
              <div className="modality-divider">ou</div>
              
              <div className="modality-item">
                <div className="modality-icon-wrapper online">
                  <Video size={32} />
                </div>
                <div className="modality-info">
                  <h3 className="modality-name">VIP Online</h3>
                  <p className="modality-description">
                    <span className="live-badge-inline">AO VIVO</span> e personalizadas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card card">
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3 className="heading-3">Professores Capacitados</h3>
              <p className="body-medium">
                Equipe dedicada e atenciosa, sempre pronta para ajudar você a alcançar seus objetivos.
              </p>
            </div>

            <div className="feature-card card">
              <div className="feature-icon">
                <BookOpen size={32} />
              </div>
              <h3 className="heading-3">Metodologia Dinâmica</h3>
              <p className="body-medium">
                Aulas práticas e contextualizadas, conectadas ao seu dia a dia para um aprendizado real.
              </p>
            </div>

            <div className="feature-card card">
              <div className="feature-icon">
                <Heart size={32} />
              </div>
              <h3 className="heading-3">Ambiente Acolhedor</h3>
              <p className="body-medium">
                Espaço inclusivo e respeitoso, onde todos são bem-vindos e podem ser quem realmente são.
              </p>
            </div>

            <div className="feature-card card">
              <div className="feature-icon">
                <Award size={32} />
              </div>
              <h3 className="heading-3">Resultados Reais</h3>
              <p className="body-medium">
                Evolução contínua dos alunos com acompanhamento personalizado e feedback constante.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;