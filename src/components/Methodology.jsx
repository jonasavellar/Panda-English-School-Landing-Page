import React from 'react';
import { Lightbulb, MessageCircle, TrendingUp, UserCheck } from 'lucide-react';
import './Methodology.css';

const Methodology = () => {
  const methods = [
    {
      icon: <Lightbulb size={28} />,
      title: 'Aulas Práticas',
      description: 'Aprendizado conectado ao dia a dia, com situações reais e contextualizadas para você usar o inglês desde o primeiro dia.'
    },
    {
      icon: <MessageCircle size={28} />,
      title: 'Conversação Constante',
      description: 'Priorizamos a comunicação oral desde o início, com diálogos, debates e atividades interativas que desenvolvem sua fluidez.'
    },
    {
      icon: <UserCheck size={28} />,
      title: 'Acompanhamento Personalizado',
      description: 'Cada aluno é único. Por isso, acompanhamos de perto sua evolução e adaptamos as aulas às suas necessidades específicas.'
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Evolução Contínua',
      description: 'Feedback regular, avaliações periódicas e metas claras garantem que você sempre saiba onde está e para onde está indo.'
    }
  ];

  return (
    <section id="metodologia" className="methodology-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Metodologia</span>
          <h2 className="heading-1">Como você aprende com a gente</h2>
          <p className="section-subtitle body-large">
            Nossa metodologia é baseada em prática, interação e resultados reais.
          </p>
        </div>

        <div className="methodology-grid">
          {methods.map((method, index) => (
            <div key={index} className="method-card card">
              <div className="method-icon">
                {method.icon}
              </div>
              <h3 className="heading-3">{method.title}</h3>
              <p className="body-medium">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="methodology-cta">
          <div className="cta-box">
            <h3 className="heading-2">Pronto para começar sua jornada?</h3>
            <p className="body-large">
              Agende uma aula experimental grátis e descubra como é fácil e divertido aprender inglês com a Panda!
            </p>
            <a 
              href="https://wa.me/5538999115015?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20na%20Panda%20English%20School." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              Agendar Aula Experimental
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;