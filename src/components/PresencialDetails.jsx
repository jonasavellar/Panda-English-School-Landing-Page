import React from 'react';
import { Users, Clock, Thermometer, MessageSquare, BookOpen, Headphones, PenTool, MessageCircle } from 'lucide-react';
import './PresencialDetails.css';

const PresencialDetails = () => {
  const whatsappNumber = '5538999115015';
  const message = 'Olá! Gostaria de conhecer as aulas presenciais da Panda English School.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const features = [
    {
      icon: <Clock size={24} />,
      title: 'Aulas 2x por semana',
      description: 'Duração de 1 hora por aula'
    },
    {
      icon: <Thermometer size={24} />,
      title: 'Salas Temáticas',
      description: 'Climatizadas e confortáveis'
    },
    {
      icon: <Users size={24} />,
      title: 'Turmas Reduzidas',
      description: 'No máximo 6 alunos por turma'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Mesa Redonda',
      description: 'Estimula interação constante'
    }
  ];

  const skills = [
    { icon: <Headphones size={20} />, name: 'Listening', label: 'Escutar' },
    { icon: <MessageCircle size={20} />, name: 'Speaking', label: 'Falar' },
    { icon: <BookOpen size={20} />, name: 'Reading', label: 'Ler' },
    { icon: <PenTool size={20} />, name: 'Writing', label: 'Escrever' }
  ];

  return (
    <section id="presencial" className="presencial-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Presencial</span>
          <h2 className="heading-1">Escola Presencial</h2>
          <p className="section-subtitle body-large">
            Experiência completa em sala de aula com metodologia focada em resultados.
          </p>
        </div>

        <div className="presencial-content">
          {/* Resumo */}
          <div className="presencial-intro card">
            <h3 className="heading-3">Nossa Abordagem</h3>
            <p className="body-medium">
              Nossas aulas presenciais são focadas em <strong>conversação</strong>, sem deixar de lado o desenvolvimento completo do aluno. Trabalhamos de forma integrada as quatro habilidades essenciais para o domínio da língua inglesa:
            </p>
            
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-badge">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-label">{skill.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="features-presencial-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-presencial-card card">
                <div className="feature-presencial-icon">
                  {feature.icon}
                </div>
                <h4 className="heading-3">{feature.title}</h4>
                <p className="body-medium">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Diferenciais */}
          <div className="presencial-benefits">
            <div className="benefits-card card">
              <h3 className="heading-3">Diferenciais da Modalidade Presencial</h3>
              <ul className="benefits-list">
                <li>
                  <span className="bullet">✓</span>
                  <span>Metodologia pensada para otimizar a conversação e a participação ativa</span>
                </li>
                <li>
                  <span className="bullet">✓</span>
                  <span>Alunos organizados em mesa redonda, estimulando interação constante</span>
                </li>
                <li>
                  <span className="bullet">✓</span>
                  <span>Ambiente físico preparado para o aprendizado com salas temáticas</span>
                </li>
                <li>
                  <span className="bullet">✓</span>
                  <span>Contato direto e contínuo com professores dedicados</span>
                </li>
                <li>
                  <span className="bullet">✓</span>
                  <span>Imersão total durante as aulas com foco em comunicação real</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="presencial-cta">
            <h3 className="heading-2">Pronto para começar suas aulas presenciais?</h3>
            <p className="body-large">
              Venha conhecer nossa estrutura e experimentar a metodologia que transforma alunos em falantes fluentes de inglês!
            </p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary btn-large"
            >
              Quero conhecer as aulas presenciais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresencialDetails;