import React from 'react';
import { Video, Calendar, Clock, UserCheck, BookOpen, Headphones, PenTool, MessageCircle, Package } from 'lucide-react';
import './VIPOnlineDetails.css';

const VIPOnlineDetails = () => {
  const whatsappNumber = '5538999115015';
  const message = 'Olá! Gostaria de conhecer a Escola VIP Online da Panda English School.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const features = [
    {
      icon: <UserCheck size={24} />,
      title: 'Aulas Personalizadas',
      description: 'Adaptadas ao seu nível e objetivos'
    },
    {
      icon: <Video size={24} />,
      title: 'Ensino Individualizado',
      description: 'Foco no que você realmente precisa'
    },
    {
      icon: <Calendar size={24} />,
      title: 'Escolha de Datas',
      description: 'Flexibilidade total de horários'
    },
    {
      icon: <Clock size={24} />,
      title: 'Remarcar Aulas',
      description: 'Com antecedência mínima de 5 horas'
    }
  ];

  const skills = [
    { icon: <Headphones size={20} />, name: 'Listening', label: 'Escutar' },
    { icon: <MessageCircle size={20} />, name: 'Speaking', label: 'Falar' },
    { icon: <BookOpen size={20} />, name: 'Reading', label: 'Ler' },
    { icon: <PenTool size={20} />, name: 'Writing', label: 'Escrever' }
  ];

  const packages = [
    {
      lessons: 16,
      frequency: '1 aula por semana',
      duration: '4 meses',
      ideal: 'Ritmo moderado'
    },
    {
      lessons: 32,
      frequency: '2 aulas por semana',
      duration: '4 meses',
      ideal: 'Ritmo recomendado',
      featured: true
    },
    {
      lessons: 48,
      frequency: '3 aulas por semana',
      duration: '4 meses',
      ideal: 'Ritmo intensivo'
    }
  ];

  return (
    <section id="vip-online" className="vip-online-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-label\">VIP Online</span>
          <h2 className="heading-1">Escola VIP Online — Aulas <span className="highlight-live">AO VIVO</span> e Personalizadas</h2>
          <div className="live-badge\">
            <Video size={20} className="live-icon" />
            <span>Aulas ao vivo e personalizadas</span>
          </div>
          <p className="section-subtitle body-large">
            Interação em tempo real com o professor, flexibilidade total de horários e ensino individualizado.
          </p>
        </div>

        <div className="vip-online-content">
          {/* Resumo */}
          <div className="vip-online-intro card">
            <div className="intro-highlight">
              <Video size={24} className="intro-icon" />
              <h3 className="heading-3">Aulas AO VIVO — Nossa Abordagem VIP</h3>
            </div>
            <p className="body-medium intro-text">
              As aulas da Escola VIP Online são <strong className="text-live">AO VIVO</strong>, com <strong>interação em tempo real</strong> entre aluno e professor. Todo o conteúdo é personalizado de acordo com o nível e os objetivos do aluno, garantindo acompanhamento próximo e evolução contínua.
            </p>
            <p className="body-medium">
              Focadas em <strong>conversação</strong> e desenvolvimento completo, trabalhamos de forma integrada as quatro habilidades essenciais da língua inglesa:
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
          <div className="features-vip-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-vip-card card">
                <div className="feature-vip-icon">
                  {feature.icon}
                </div>
                <h4 className="heading-3">{feature.title}</h4>
                <p className="body-medium">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Pacotes */}
          <div className="packages-section">
            <h3 className="heading-2 packages-title">Pacotes de Aulas VIP Online</h3>
            <p className="body-large packages-subtitle">
              Escolha o pacote que melhor se adapta à sua rotina e objetivos.
            </p>
            
            <div className="packages-grid">
              {packages.map((pkg, index) => (
                <div key={index} className={`package-card card ${pkg.featured ? 'featured' : ''}`}>
                  {pkg.featured && <div className="package-badge">Mais Escolhido</div>}
                  <div className="package-icon">
                    <Package size={32} />
                  </div>
                  <div className="package-lessons">{pkg.lessons} aulas</div>
                  <div className="package-frequency">{pkg.frequency}</div>
                  <div className="package-divider"></div>
                  <div className="package-details">
                    <div className="package-detail">
                      <span className="detail-label">Duração:</span>
                      <span className="detail-value">{pkg.duration}</span>
                    </div>
                    <div className="package-detail">
                      <span className="detail-label">Ideal para:</span>
                      <span className="detail-value">{pkg.ideal}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Diferenciais */}
          <div className="vip-benefits">
            <div className="benefits-card card">
              <h3 className="heading-3">Diferenciais da Modalidade VIP Online</h3>
              <ul className="benefits-list">
                <li>
                  <span className="bullet">✓</span>
                  <span>Atenção exclusiva do professor durante toda a aula</span>
                </li>
                <li>
                  <span className="bullet">✓</span>
                  <span>Conteúdo personalizado de acordo com suas necessidades específicas</span>
                </li>
                <li>
                  <span className="bullet">✓</span>
                  <span>Possibilidade de remarcar aulas com antecedência de 5 horas</span>
                </li>
                <li>
                  <span className="bullet">✓</span>
                  <span>Aulas de qualquer lugar, sem perder o conteúdo</span>
                </li>
                <li>
                  <span className="bullet">✓</span>
                  <span>Ideal para quem busca praticidade, autonomia e acompanhamento exclusivo</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="vip-online-cta">
            <h3 className="heading-2">Pronto para ter sua experiência VIP?</h3>
            <p className="body-large">
              Fale com a gente e descubra como as aulas personalizadas podem acelerar seu aprendizado!
            </p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary btn-large"
            >
              Quero conhecer a Escola VIP Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VIPOnlineDetails;